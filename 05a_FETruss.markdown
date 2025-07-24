---
layout: page
permalink: /teaching/FEtruss

---

<head>
  <meta charset="UTF-8" />
  <title>Truss Builder with Loads and Matrix</title>
  <style>
    body {
      font-family: Arial, sans-serif;
    }
    #container {
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    #canvasRow {
      display: flex;
      flex-direction: row;
      align-items: flex-start;
    }
    #trussCanvas {
      border: 1px solid #ccc;
      cursor: crosshair;
      background: #fafafa;
    }
    #controls {
      display: flex;
      flex-direction: column;
      margin-left: 10px;
    }
    button {
      margin: 5px 0;
      padding: 6px 12px;
      cursor: pointer;
    }
    #matrixCanvas,
    #loadVectorCanvas {
      border: 1px solid #ccc;
      background: #fff;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <div id="container">
    <div id="canvasRow">
      <canvas id="trussCanvas" width="500" height="500"></canvas>
      <div id="controls">
        <button id="resetBtn">Reset</button>
        <button id="loadYBtn">Load-y (↓)</button>
        <button id="loadXBtn">Load-x (→)</button>
      </div>
    </div>
    <canvas id="matrixCanvas"></canvas>
    <canvas id="loadVectorCanvas"></canvas> <!-- New load vector -->
  </div>

<script>
  const trussCanvas = document.getElementById('trussCanvas');
  const trussCtx = trussCanvas.getContext('2d');
  const matrixCanvas = document.getElementById('matrixCanvas');
  const matrixCtx = matrixCanvas.getContext('2d');
  const loadVectorCanvas = document.getElementById('loadVectorCanvas');
  const loadVectorCtx = loadVectorCanvas.getContext('2d');

  const gridSize = 10;
  const spacing = trussCanvas.width / (gridSize - 1);
  const baseRadius = 5;
  const hoverRadius = 7;

  const E = 210e6; // kN/m²
  const A = 0.1;   // m²

  let nodes = [];
  let lines = [];
  let nodeIdCounter = 1;
  let loads = {};

  const elementColors = [
    "#e6194b", "#3cb44b", "#ffe119", "#4363d8", "#f58231",
    "#911eb4", "#46f0f0", "#f032e6", "#bcf60c", "#fabebe",
    "#008080", "#e6beff", "#9a6324", "#fffac8", "#800000"
  ];

  let selectedNode = null;
  let hoveredNode = null;
  let globalK = [];
  let loadMode = null;

  for (let j = 0; j < gridSize; j++) {
    for (let i = 0; i < gridSize; i++) {
      nodes.push({ x: i * spacing, y: j * spacing, id: null });
    }
  }

  function getNodeAt(x, y) {
    return nodes.find(n => Math.hypot(n.x - x, n.y - y) < spacing / 2);
  }

  function drawLoadVector(numberedNodes) {
  const dof = numberedNodes.length * 2;
  const cellWidth = 60;
  const cellHeight = 24;
  const labelMargin = 40;

  loadVectorCanvas.width = labelMargin + cellWidth;
  loadVectorCanvas.height = labelMargin + cellHeight * dof;
  loadVectorCtx.clearRect(0, 0, loadVectorCanvas.width, loadVectorCanvas.height);
  loadVectorCtx.font = "12px sans-serif";
  loadVectorCtx.textAlign = "center";
  loadVectorCtx.textBaseline = "middle";

  // Column header "F"
  loadVectorCtx.fillStyle = "black";
  loadVectorCtx.fillText("F", labelMargin / 2, labelMargin / 2);

  // Draw rows
  numberedNodes.forEach((node, idx) => {
    const fx = (loads[node.id]?.x || 0).toFixed(2);
    const fy = (loads[node.id]?.y || 0).toFixed(2);

    const labels = [`${node.id}x`, `${node.id}y`];
    const values = [fx, fy];

    for (let rowOffset = 0; rowOffset < 2; rowOffset++) {
      const rowY = labelMargin + (idx * 2 + rowOffset) * cellHeight;

      // Draw label (no border)
      loadVectorCtx.fillStyle = "black";
      loadVectorCtx.fillText(labels[rowOffset], labelMargin - 5, rowY + cellHeight / 2);

      // Draw value cell (with border)
      loadVectorCtx.fillStyle = "black";
      loadVectorCtx.fillText(values[rowOffset], labelMargin + cellWidth / 2, rowY + cellHeight / 2);
      loadVectorCtx.strokeStyle = "#ccc";
      loadVectorCtx.strokeRect(labelMargin, rowY, cellWidth, cellHeight);
    }
  });
}


  function drawTruss() {
  trussCtx.clearRect(0, 0, trussCanvas.width, trussCanvas.height);

  // Draw grid
  trussCtx.strokeStyle = "#eee";
  for (let i = 0; i < gridSize; i++) {
    trussCtx.beginPath();
    trussCtx.moveTo(i * spacing, 0);
    trussCtx.lineTo(i * spacing, trussCanvas.height);
    trussCtx.stroke();

    trussCtx.beginPath();
    trussCtx.moveTo(0, i * spacing);
    trussCtx.lineTo(trussCanvas.width, i * spacing);
    trussCtx.stroke();
  }

  // 🔹 Draw base nodes (light gray)
  for (const node of nodes) {
    trussCtx.beginPath();
    const radius = node === hoveredNode ? hoverRadius : baseRadius;
    trussCtx.arc(node.x, node.y, radius, 0, Math.PI * 2);
    trussCtx.fillStyle = "#ccc"; // lighter gray
    trussCtx.fill();

    if (node.id !== null) {
      trussCtx.fillStyle = "black";
      trussCtx.font = "12px sans-serif";
      trussCtx.fillText(node.id, node.x + 6, node.y - 6);
    }
  }

  // 🔸 Draw lines (elements)
  for (const element of lines) {
    trussCtx.beginPath();
    trussCtx.moveTo(element.from.x, element.from.y);
    trussCtx.lineTo(element.to.x, element.to.y);
    trussCtx.strokeStyle = element.color || "black";
    trussCtx.lineWidth = 3;
    trussCtx.stroke();

    // ⬤ Add black node at each endpoint
    [element.from, element.to].forEach((pt) => {
      trussCtx.beginPath();
      trussCtx.arc(pt.x, pt.y, baseRadius, 0, Math.PI * 2);
      trussCtx.fillStyle = "black";
      trussCtx.fill();
    });
  }

  // 🔺 Draw loads (on top)
  for (const node of nodes) {
    if (node.id !== null && loads[node.id]) {
      const load = loads[node.id];
      trussCtx.strokeStyle = "red";
      trussCtx.fillStyle = "red";
      trussCtx.font = "12px sans-serif";
      trussCtx.textBaseline = "middle";

      if (load.y !== 0) {
        let arrowLength = 20;
        let dir = load.y > 0 ? 1 : -1;
        let absLoad = Math.abs(load.y);
        trussCtx.beginPath();
        trussCtx.moveTo(node.x, node.y);
        trussCtx.lineTo(node.x, node.y + dir * arrowLength);
        trussCtx.stroke();
        trussCtx.beginPath();
        if (dir > 0) {
          trussCtx.moveTo(node.x - 5, node.y + 15);
          trussCtx.lineTo(node.x, node.y + 20);
          trussCtx.lineTo(node.x + 5, node.y + 15);
        } else {
          trussCtx.moveTo(node.x - 5, node.y - 15);
          trussCtx.lineTo(node.x, node.y - 20);
          trussCtx.lineTo(node.x + 5, node.y - 15);
        }
        trussCtx.fill();
        trussCtx.fillText(`${absLoad}kN`, node.x + 8, node.y + dir * 30);
      }

      if (load.x !== 0) {
        let arrowLength = 20;
        let dir = load.x > 0 ? 1 : -1;
        let absLoad = Math.abs(load.x);
        trussCtx.beginPath();
        trussCtx.moveTo(node.x, node.y);
        trussCtx.lineTo(node.x + dir * arrowLength, node.y);
        trussCtx.stroke();
        trussCtx.beginPath();
        if (dir > 0) {
          trussCtx.moveTo(node.x + 15, node.y - 5);
          trussCtx.lineTo(node.x + 20, node.y);
          trussCtx.lineTo(node.x + 15, node.y + 5);
        } else {
          trussCtx.moveTo(node.x - 15, node.y - 5);
          trussCtx.lineTo(node.x - 20, node.y);
          trussCtx.lineTo(node.x - 15, node.y + 5);
        }
        trussCtx.fill();
        trussCtx.fillText(`${absLoad}kN`, node.x + dir * 30, node.y - 8);
      }
    }
  }
}


  function computeGlobalStiffnessMatrix() {
    const numberedNodes = nodes.filter(n => n.id !== null).sort((a, b) => a.id - b.id);
    const nNodes = numberedNodes.length;
    const dof = nNodes * 2;
    globalK = Array.from({ length: dof }, () => Array(dof).fill(0));
    const colorMap = Array.from({ length: dof }, () => Array.from({ length: dof }, () => []));

    let idToIndex = {};
    numberedNodes.forEach((node, idx) => {
      idToIndex[node.id] = idx;
    });

    lines.forEach((element, index) => {
      if (element.from.id === null || element.to.id === null) return;
      const i = idToIndex[element.from.id];
      const j = idToIndex[element.to.id];

      const dx = (element.to.x - element.from.x) / spacing;
      const dy = (element.to.y - element.from.y) / spacing;
      const L = Math.hypot(dx, dy);
      const c = dx / L;
      const s = dy / L;

      const k = (E * A) / L;
      const localK = [
        [ c * c,  c * s, -c * c, -c * s],
        [ c * s,  s * s, -c * s, -s * s],
        [-c * c, -c * s,  c * c,  c * s],
        [-c * s, -s * s,  c * s,  s * s],
      ].map(row => row.map(val => val * k));

      const dofMap = [2 * i, 2 * i + 1, 2 * j, 2 * j + 1];

      for (let r = 0; r < 4; r++) {
        for (let c = 0; c < 4; c++) {
          globalK[dofMap[r]][dofMap[c]] += localK[r][c];
          colorMap[dofMap[r]][dofMap[c]].push(element.color);
        }
      }
    });

    drawMatrix(colorMap, dof, numberedNodes);
    drawLoadVector(numberedNodes); // << draw load vector here
  }

  function drawMatrix(colorMap, dof, numberedNodes) {
    const cellWidth = 60;
    const cellHeight = 24;
    const labelMargin = 40;

    matrixCanvas.width = labelMargin + cellWidth * dof;
    matrixCanvas.height = labelMargin + cellHeight * dof;
    matrixCtx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    matrixCtx.font = "12px sans-serif";
    matrixCtx.textAlign = "center";
    matrixCtx.textBaseline = "middle";

    for (let col = 0; col < dof; col++) {
      const nodeIndex = Math.floor(col / 2);
      const dofType = col % 2 === 0 ? "x" : "y";
      matrixCtx.fillStyle = "black";
      matrixCtx.fillText(`${numberedNodes[nodeIndex].id}${dofType}`, 40 + col * cellWidth + cellWidth/2, 20);
    }

    matrixCtx.textAlign = "right";
    for (let row = 0; row < dof; row++) {
      const nodeIndex = Math.floor(row / 2);
      const dofType = row % 2 === 0 ? "x" : "y";
      matrixCtx.fillStyle = "black";
      matrixCtx.fillText(`${numberedNodes[nodeIndex].id}${dofType}`, 35, 40 + row * cellHeight + cellHeight / 2);
    }

    matrixCtx.textAlign = "center";
    for (let i = 0; i < dof; i++) {
      for (let j = 0; j < dof; j++) {
        const colors = colorMap[i][j];
        if (colors.length > 0) {
          matrixCtx.fillStyle = averageColors(colors);
          matrixCtx.fillRect(40 + j * cellWidth, 40 + i * cellHeight, cellWidth, cellHeight);
        }

        matrixCtx.strokeStyle = "#ccc";
        matrixCtx.strokeRect(40 + j * cellWidth, 40 + i * cellHeight, cellWidth, cellHeight);
        const val = globalK[i][j];
        matrixCtx.fillStyle = "black";
        matrixCtx.fillText(val === 0 ? "0" : val.toExponential(2), 40 + j * cellWidth + cellWidth/2, 40 + i * cellHeight + cellHeight/2);
      }
    }
  }

  function averageColors(colors) {
    let r = 0, g = 0, b = 0;
    colors.forEach(color => {
      const rgb = hexToRgb(color);
      r += rgb.r;
      g += rgb.g;
      b += rgb.b;
    });
    r = Math.round(r / colors.length);
    g = Math.round(g / colors.length);
    b = Math.round(b / colors.length);
    return `rgba(${r},${g},${b}, 0.2)`;
  }

  function hexToRgb(hex) {
    hex = hex.replace(/^#/, '');
    if (hex.length === 3) hex = hex.split('').map(c => c + c).join('');
    const bigint = parseInt(hex, 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255
    };
  }

  trussCanvas.addEventListener("mousemove", e => {
    const rect = trussCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    hoveredNode = getNodeAt(x, y);
    drawTruss();
  });

  trussCanvas.addEventListener("click", e => {
    const rect = trussCanvas.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const node = getNodeAt(x, y);
    if (!node) return;

    if (loadMode) {
      if (node.id !== null) {
        if (!loads[node.id]) loads[node.id] = {x: 0, y: 0};
        if (loadMode === 'y') loads[node.id].y += 1;
        else if (loadMode === 'x') loads[node.id].x += 1;
        computeGlobalStiffnessMatrix();
      }
    } else {
      if (node.id === null) {
        node.id = nodeIdCounter++;
      }

      if (!selectedNode) {
        selectedNode = node;
      } else {
        if (node !== selectedNode) {
          const exists = lines.some(line =>
            (line.from === selectedNode && line.to === node) ||
            (line.to === selectedNode && line.from === node)
          );
          if (!exists) {
            const color = elementColors[lines.length % elementColors.length];
            lines.push({ from: selectedNode, to: node, color });
            computeGlobalStiffnessMatrix();
          }
        }
        selectedNode = null;
      }
    }

    drawTruss();
  });

  document.getElementById('resetBtn').addEventListener('click', () => {
    nodes.forEach(n => n.id = null);
    lines.length = 0;
    nodeIdCounter = 1;
    loads = {};
    selectedNode = null;
    loadMode = null;
    globalK = [];
    drawTruss();
    matrixCtx.clearRect(0, 0, matrixCanvas.width, matrixCanvas.height);
    loadVectorCtx.clearRect(0, 0, loadVectorCanvas.width, loadVectorCanvas.height);
  });

  function toggleLoadMode(mode) {
    if (loadMode === mode) {
      loadMode = null;
      document.getElementById('loadYBtn').style.backgroundColor = '';
      document.getElementById('loadXBtn').style.backgroundColor = '';
    } else {
      loadMode = mode;
      document.getElementById('loadYBtn').style.backgroundColor = mode === 'y' ? '#add8e6' : '';
      document.getElementById('loadXBtn').style.backgroundColor = mode === 'x' ? '#add8e6' : '';
    }
  }

  document.getElementById('loadYBtn').addEventListener('click', () => toggleLoadMode('y'));
  document.getElementById('loadXBtn').addEventListener('click', () => toggleLoadMode('x'));

  drawTruss();
</script>
</body>

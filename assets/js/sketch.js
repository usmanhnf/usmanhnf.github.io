let slider;
let rectX, rectY, rectWidth, rectHeight;

function setup() {
  createCanvas(800, 400);
  rectX = 100;
  rectY = 150;
  rectWidth = 600;
  rectHeight = 100;

  // Create the slider
  slider = createSlider(0, 1, 0.5, 0.01);
  slider.position(150, 50);
  slider.style('width', '500px');
}

function draw() {
  background(220);

  // Draw the rectangle
  fill(200);
  rect(rectX, rectY, rectWidth, rectHeight);

  // Get the slider value
  let sliderValue = slider.value();

  // Calculate the arrow position based on the slider value
  let arrowX = map(sliderValue, 0, 1, rectX, rectX + rectWidth);

  // Draw the arrow
  drawArrow(arrowX, rectY + rectHeight / 2);
}

function drawArrow(x, y) {
  push();
  stroke(50);
  strokeWeight(3);
  fill(150);
  translate(x, y);
  beginShape();
  vertex(-10, -10);
  vertex(10, 0);
  vertex(-10, 10);
  endShape(CLOSE);
  pop();
}

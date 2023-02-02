//move slider to see changes!
//sliders control the first 6 parameters of camera()
let sliderGroup = [];
let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;

function setup() {
  createCanvas(100, 100, WEBGL);
  //create sliders
  for (var i = 0; i < 6; i++) {
    if (i === 2) {
      sliderGroup[i] = createSlider(10, 400, 200);
    } else {
      sliderGroup[i] = createSlider(-400, 400, 0);
    }
    h = map(i, 0, 6, 5, 85);
    sliderGroup[i].position(10, height + h);
    sliderGroup[i].style('width', '80px');
  }
  describe(
    'White square repeatedly grows to fill canvas and then shrinks. An interactive example of a red cube with 3 sliders for moving it across x, y, z axis and 3 sliders for shifting its center.'
  );
}

function draw() {
  background(60);
  // assigning sliders' value to each parameters
  X = sliderGroup[0].value();
  Y = sliderGroup[1].value();
  Z = sliderGroup[2].value();
  centerX = sliderGroup[3].value();
  centerY = sliderGroup[4].value();
  centerZ = sliderGroup[5].value();
  camera(X, Y, Z, centerX, centerY, centerZ, 0, 1, 0);
  stroke(255);
  fill(255, 102, 94);
  box(85);
}
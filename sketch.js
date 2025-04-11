let circles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  background('#fefae0');

  // 產生 40 個圓
  for (let i = 0; i < 40; i++) {
    let circle = {
      x: random(width),
      y: random(height),
      size: random(50, 100),
      color: color(random(255), random(255), random(255))
    };
    circles.push(circle);
  }
}

function draw() {
  background('#fefae0');

  // 根據滑鼠位置調整圓的大小
  let sizeFactor = map(mouseX, 0, width, 40, 120);

  for (let circle of circles) {
    fill(circle.color);
    noStroke();
    ellipse(circle.x, circle.y, circle.size * sizeFactor / 100);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

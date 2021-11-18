let angle = 0;
let scaleValue = 100;
let speed= 0.098;
let t = 0;
let increment = 0.005
let flag = true;
let previousTime;
let interval = 250;


function setup() {
  myCanvas = createCanvas (1520,700);
  myCanvas.parent("p5js");
  frameRate(100);
  previousTime = millis();

}

function draw() {
  rectMode(CENTER);
  background(0,50);

//circels boven
push();
  for(let i = 3; i<4;i++){
  let y = sin(angle+i)*scaleValue;
  y = y + 180;

  let value = 100;
let m = map(y, 50, 200, 200, width);

stroke("#cbb2fe");
noFill();
ellipse(m, 100, 55,100);
pop();
  }   

//circel onder
stroke('#ffd60a');
strokeWeight(10);
noFill();
  for (let j = 2; j <3; j++) {
  let y = sin(angle+j)*scaleValue;
  y = y + 550;
  ellipse(1300,y,100-j,100-j);  
  }
  angle+=speed;

  //balken
  stroke('#3bceac');
  strokeWeight(6);
  noFill();
    for (let j = 2; j <4; j++) {
    let y = sin(angle+j)*scaleValue;
    y = y +350;
    rect(width/6,y,100-j,500-j);  
    }

//rode balk
  let x1 = width * noise(t + 0);
  let y1 = width * noise(t + 0.01);
  let w = width * noise(t + 3);
  let h = height * noise(t + 3);

  t += 0.002;
  fill('#ff0054')
  stroke("#0496ff");
  strokeWeight(8);
  rect(x1,y1,w,h);

  
  if (frameCount % 30===0) {
	t +=400; 
  }

// blauwe bal
  if (millis() > previousTime + interval) {
    flag = !flag;
    previousTime = millis();
  }

  if (flag) {
    fill("#1b9aaa");
    stroke("#c6def1");
    circle(1000,300, 150, 100);
  }
}
    

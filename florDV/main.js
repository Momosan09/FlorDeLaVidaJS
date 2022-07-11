canvas.width = 1000;
canvas.height = 1000;
let posX = 86.60254037844;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
function drawCircle(strokeColor, fillColor, radius, posX, posY) {
  const ctx = canvas.getContext("2d");

  ctx.strokeStyle = strokeColor;
  ctx.fillStyle = fillColor;
  ctx.lineWidth = 3;

  ctx.beginPath();
  ctx.arc(posX, posY, radius, 0, 2 * Math.PI);

  ctx.stroke();
  /*     ctx.fill(); */
}

function drawArcs(strokeColor, fillColor, radius, posX, posY, cut){
  const ctx = canvas.getContext("2d");

    ctx.strokeStyle = strokeColor;
    ctx.fillStyle = fillColor;
    ctx.lineWidth = 10;

    ctx.beginPath();
    ctx.arc(posX, posY, radius, cut, 2 * Math.PI);

    ctx.stroke();
/*     ctx.fill(); */
}

function draw(centerPositionX, centerPositionY) {
  const canvas = document.querySelector("#canvas");
  // canvas center X and Y
  const centerX = canvas.width / centerPositionX,
    centerY = canvas.height / centerPositionY;

  if (canvas.getContext) {
    /*Y*/
    drawCircle(getRandomColor(), getRandomColor(), 100, centerX, centerY);
    drawCircle(getRandomColor(), getRandomColor(), 100, centerX, centerY + 100);
    drawCircle(getRandomColor(), getRandomColor(), 100, centerX, centerY - 100);

    /*X*/
    drawCircle(
      getRandomColor(),
      getRandomColor(),
      100,
      centerX + posX,
      centerY + 50
    );
    drawCircle(
      getRandomColor(),
      getRandomColor(),
      100,
      centerX - posX,
      centerY - 50
    );
    drawCircle(
      getRandomColor(),
      getRandomColor(),
      100,
      centerX - posX,
      centerY + 50
    );
    drawCircle(
      getRandomColor(),
      getRandomColor(),
      100,
      centerX + posX,
      centerY - 50
    );

    /*     drawCircle(getRandomColor(), getRandomColor(), 202, centerX, centerY); */
  }
}
function drawExterior(centerPositionX, centerPositionY) {
  /*Derecha*/
  
  const centerX = canvas.width / centerPositionX,
    centerY = canvas.height / centerPositionY;
/*Eje X*/
  drawCircle(getRandomColor(), getRandomColor(), 100, centerX + posX*2, centerY);
  drawCircle(getRandomColor(), getRandomColor(), 100, centerX + posX*2, centerY + 100);
  drawCircle(getRandomColor(), getRandomColor(), 100, centerX + posX*2, centerY - 100);

  drawCircle(getRandomColor(), getRandomColor(), 100, centerX - posX*2, centerY);
  drawCircle(getRandomColor(), getRandomColor(), 100, centerX - posX*2, centerY + 100);
  drawCircle(getRandomColor(), getRandomColor(), 100, centerX - posX*2, centerY - 100);

/*Eje Y*/
drawCircle(getRandomColor(), getRandomColor(), 100, centerX, centerY -200);
drawCircle(getRandomColor(), getRandomColor(), 100, centerX, centerY +200);

/*Ambos*/
drawCircle(getRandomColor(), getRandomColor(), 100, centerX + posX, centerY -150);
drawCircle(getRandomColor(), getRandomColor(), 100, centerX - posX, centerY -150);
drawCircle(getRandomColor(), getRandomColor(), 100, centerX + posX, centerY +150);
drawCircle(getRandomColor(), getRandomColor(), 100, centerX - posX, centerY +150);


}

function drawArcos(centerPositionX, centerPositionY){

    const centerX = canvas.width / centerPositionX,
    centerY = canvas.height / centerPositionY;

  drawArcs(getRandomColor(), getRandomColor(), 100, centerX, centerY, 3);


}

draw(2,2);

drawExterior(2,2);

drawArcos(2,2);

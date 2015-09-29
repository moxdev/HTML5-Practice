
var canvas;
var ctx

function init() {
    canvas = document.getElementById('myCanvas');
    //grabs the #myCanvas element
    ctx = canvas.getContext('2d');
    // tells canvas to draw 2D
    draw();
}

function draw() {
    // Draws a red square
    ctx.fillStyle="#ff0000";
    // fills the rectangle with the desired color
    ctx.fillRect(30,30,50,50);
    // retangle size (x,y)
    ctx.strokeStyle="#000";
    // color of border or rectangle
    ctx.lineWidth="3";
    // size of border
    ctx.strokeRect(30,30,50,50);
    // border same size as rectangle

    // Draws a black square
    ctx.fillStyle="#000";
    ctx.fillRect(40, 40, 50, 50);

    // Draws Text
    ctx.font = '30pt Arial';
    // Sets font style

    var gradient = ctx.createLinearGradient(0,0,canvas.width, 0);
    gradient.addColorStop("0","red");
    gradient.addColorStop("1","black");
    // creates the gradient color

    ctx.fillStyle=gradient;
    ctx.fillText("My Logo",100,80);
    // color of text and text

    // Draw Line
    ctx.strokeStyle="#000";
    ctx.fillStyle="#ff0000";
    ctx.lineWidth=2;

    ctx.beginPath();
    ctx.moveTo(90,90);
    ctx.lineTo(350,90);
    ctx.stroke();
    ctx.closePath();

}

init();
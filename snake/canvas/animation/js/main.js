var c;
var ctx;

function init() {
    c = document.getElementById("myCanvas");
    ctx = c.getContext("2d");
    draw();
    // function to draw the animations
}

function draw() {
    var posX = 0;
    var posY = 0;
    // set X,Y axis position

    setInterval(function() {
    // setInterval takes two parameters (function, 30), the function runs in 30 second intervals
        posX += 1;
        posY += 1;

        // Draws a black rectangular background
        ctx.fillStyle="#000";
        ctx.fillRect(0,0,c.width,c.height);
        // starts at 0,0 (this is the background fill)

        // Draws a white circle (look up)
        ctx.fillStyle="#fff";
        ctx.beginPath();
        ctx.arc(posX,120,50,0,Math.PI * 2);
        ctx.fill();

        // Draws a red circle (look up)
        ctx.fillStyle="#ff0000";
        ctx.beginPath();
        ctx.arc(150,posY,78,0,Math.PI * 2);
        ctx.fill();

        // Draws a blue circle (look up)
        ctx.fillStyle="blue";
        ctx.beginPath();
        ctx.arc(350,posY,42,0,Math.PI * 2);
        ctx.fill();

        // Draws a green circle (look up)
        ctx.fillStyle="green";
        ctx.beginPath();
        ctx.arc(posX,300,72,0,Math.PI * 2);
        ctx.fill();
    }, 30);
    // 30  is the second parameter

}

init();
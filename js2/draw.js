function draw(yDraw, blockDraw, drawBackground) {
    dropCanvas.clearRect(0, 0, 300, yDraw + 30 * y4[block]);
    drawBox(30 * (xBlock + x1[blockDraw]), yDraw, drawBackground);
    drawBox(
        30 * (xBlock + x2[blockDraw]),
        yDraw + y2[blockDraw] * 30,
        drawBackground
    );
    drawBox(
        30 * (xBlock + x3[blockDraw]),
        yDraw + y3[blockDraw] * 30,
        drawBackground
    );
    drawBox(
        30 * (xBlock + x4[blockDraw]),
        yDraw + y4[blockDraw] * 30,
        drawBackground
    );
}

function drawBox(drawX, drawY, drawBackground) {
    dropCanvas.fillStyle = drawBackground;
    dropCanvas.strokeStyle = "white";
    dropCanvas.strokeRect(drawX, drawY, 29, 29);
    if (drawBackground != undefined) dropCanvas.fillRect(drawX, drawY, 29, 29);
}
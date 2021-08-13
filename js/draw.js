function draw(yDraw, value) {
    if (value) {
        myCanvas.fillStyle = color;
        myCanvas.fillRect(30 * (xBlock + x1) + 1, 1 + yDraw, 28, 28);
        myCanvas.fillRect(30 * (xBlock + x2) + 1, 1 + yDraw + 30 * y2, 28, 28);
        myCanvas.fillRect(30 * (xBlock + x3) + 1, 1 + yDraw + 30 * y3, 28, 28);
        myCanvas.fillRect(30 * (xBlock + x4) + 1, 1 + yDraw + 30 * y4, 28, 28);
    }
    myCanvas.strokeStyle = "white";
    myCanvas.strokeRect(30 * (xBlock + x1), yDraw, 29, 29);
    myCanvas.strokeRect(30 * (xBlock + x2), yDraw + 30 * y2, 29, 29);
    myCanvas.strokeRect(30 * (xBlock + x3), yDraw + 30 * y3, 29, 29);
    myCanvas.strokeRect(30 * (xBlock + x4), yDraw + 30 * y4, 29, 29);

}
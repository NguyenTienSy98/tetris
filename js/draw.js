function draw(yDrow, valueColor) {
    if (valueColor) {
        myCanvas.fillStyle = blockDefault[block][0].color;
        myCanvas.fillRect(30 * (xBlock + x1) + 1, 1 + yDrow - 120, 28, 28);
        myCanvas.fillRect(30 * (xBlock + x2) + 1, 1 + yDrow - 120 + 30 * y2, 28, 28);
        myCanvas.fillRect(30 * (xBlock + x3) + 1, 1 + yDrow - 120 + 30 * y3, 28, 28);
        myCanvas.fillRect(30 * (xBlock + x4) + 1, 1 + yDrow - 120 + 30 * y4, 28, 28);
    }
    myCanvas.strokeStyle = "white";
    myCanvas.strokeRect(30 * (xBlock + x1), yDrow - 120, 29, 29);
    myCanvas.strokeRect(30 * (xBlock + x2), yDrow - 120 + 30 * y2, 29, 29);
    myCanvas.strokeRect(30 * (xBlock + x3), yDrow - 120 + 30 * y3, 29, 29);
    myCanvas.strokeRect(30 * (xBlock + x4), yDrow - 120 + 30 * y4, 29, 29);

}
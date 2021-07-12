function drawImgDown() {
    while (yDown + Math.max(y2, y3, y4) * 30 <= 570 && checkBlock(xDown / 30, yDown / 30, x1, x2, y2, x3, y3, x4, y4) == true) {
        yDown += 30;
    }
    yDown -= 30;
    imgDown.src = firstNameBlock + "down_" + lastNameBlock;
    imgDown.onload = () => {
        myCanvas.drawImage(imgDown, xDown, yDown, xSize, ySize);
    }

    return 0;
}
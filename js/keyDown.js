function down() {
    xBlock = xDown / 30;
    yBlock = yDown;
    return 0;
}

function left() {
    if (xBlock >= 1 && checkBlock(xBlock - 1, Math.ceil(yBlock / 30), x1, x2, y2, x3, y3, x4, y4)) {
        if (checkBlock(xBlock - 1, Math.floor(yBlock / 30), x1, x2, y2, x3, y3, x4, y4) == false) {
            yBlock = Math.ceil(yBlock / 30) * 30;
        }
        myCanvas.clearRect(0, 0, 300, 600);
        xBlock--;
        yDown = 30;
        xDown = xBlock * 30;
        drawImgDown();
    }
    return 0;
}

function up() {
    let upNext = blockDefault[block][next],
        upX1 = upNext.x1,
        upX2 = upNext.x2,
        upX3 = upNext.x3,
        upX4 = upNext.x4,
        upY2 = upNext.y2,
        upY3 = upNext.y3,
        upY4 = upNext.y4,
        upX0 = upNext.x0,
        upY0 = upNext.y0;
    if (xBlock + upX0 >= 0 && xBlock + upX0 + Math.max(upX1, upX2, upX3, upX4) <= 9 && (checkBlock(xBlock + upX0, upY0 + Math.ceil(yBlock / 30), upX1, upX2, upY2, upX3, upY3, upX4, upY4) == true || checkBlock(xBlock + upX0, upY0 + Math.ceil(yBlock / 30), upX1, upX2, upY2, upX3, upY3, upX4, upY4) == true)) {
        x1 = upNext.x1;
        x2 = upNext.x2;
        x3 = upNext.x3;
        x4 = upNext.x4;

        y2 = upNext.y2;
        y3 = upNext.y3;
        y4 = upNext.y4;
        xSize = 30 * upNext.xSize;
        ySize = 30 * upNext.ySize;
        xBlock = (xBlock + upX0);
        yBlock = yBlock + 30 * upY0;
        while (yBlock + 30 * upY0 + Math.max(y2, y3, y4) * 30 > 570) {
            yBlock -= 30
        }
        firstNameBlock = upNext.firstName;
        lastNameBlock = upNext.lastName;
        next = upNext.next;
        color = upNext.color;
        img.src = firstNameBlock + lastNameBlock;
        xDown = xBlock * 30;
        yDown = 0;
        next = upNext.next;
        myCanvas.clearRect(0, 0, 300, 600);
        drawImgDown();
    }
}

function right() {
    if (xBlock + Math.max(x1, x2, x3, x4) <= 8 && checkBlock(xBlock + 1, Math.ceil(yBlock / 30), x1, x2, y2, x3, y3, x4, y4)) {
        if ((checkBlock(xBlock + 1, Math.floor(yBlock / 30), x1, x2, y2, x3, y3, x4, y4) == false)) {
            yBlock = Math.ceil(yBlock / 30) * 30;
        }
        myCanvas.clearRect(0, 0, 300, 600);
        xBlock++;
        yDown = 30;
        xDown = xBlock * 30;
        drawImgDown();
    }
    return 0;
}
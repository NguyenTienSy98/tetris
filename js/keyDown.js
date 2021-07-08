function down() {
    xBlock = xDown / 30;
    yBlock = yDown;
    return 0;
}

function left() {
    if (xBlock >= 1 && checkBlock(xBlock - 1, Math.ceil(yBlock / 30), x1, y1, x2, y2, x3, y3, x4, y4)) {
        ctx.clearRect(0, 0, 300, 600);
        xBlock--;
        yDown = 30;
        xDown = xBlock * 30;
        drawImgDown();
    }
    return 0;
}

function up() {
    let upX1 = blockDefault[nRandom][next].x1,
        upX2 = blockDefault[nRandom][next].x2,
        upX3 = blockDefault[nRandom][next].x3,
        upX4 = blockDefault[nRandom][next].x4,
        upY1 = blockDefault[nRandom][next].y1,
        upY2 = blockDefault[nRandom][next].y2,
        upY3 = blockDefault[nRandom][next].y3,
        upY4 = blockDefault[nRandom][next].y4,
        upX0 = blockDefault[nRandom][next].x0,
        upY0 = blockDefault[nRandom][next].y0;
    if (checkBlock(xBlock + upX0, upY0 + Math.ceil(yBlock / 30), upX1, upY1, upX2, upY2, upX3, upY3, upX4, upY4) == true) {
        x1 = blockDefault[nRandom][next].x1;
        x2 = blockDefault[nRandom][next].x2;
        x3 = blockDefault[nRandom][next].x3;
        x4 = blockDefault[nRandom][next].x4;
        y1 = blockDefault[nRandom][next].y1;
        y2 = blockDefault[nRandom][next].y2;
        y3 = blockDefault[nRandom][next].y3;
        y4 = blockDefault[nRandom][next].y4;
        xSize = 30 * blockDefault[nRandom][next].xSize;
        ySize = 30 * blockDefault[nRandom][next].ySize;
        xBlock = (xBlock + upX0);
        yBlock = yBlock + 30 * upY0;
        firstNameBlock = blockDefault[nRandom][next].firstName;
        lastNameBlock = blockDefault[nRandom][next].lastName;
        next = next;
        color = blockDefault[nRandom][next].color;
        img.src = firstNameBlock + lastNameBlock;
        xDown = xBlock * 30;
        yDown = 0;
        next = blockDefault[nRandom][next].next;
        ctx.clearRect(0, 0, 300, 600);
        drawImgDown();
    }
}

function right() {
    if (xBlock + Math.max(x1, x2, x3, x4) <= 8 && checkBlock(xBlock + 1, Math.ceil(yBlock / 30), x1, y1, x2, y2, x3, y3, x4, y4)) {
        ctx.clearRect(0, 0, 300, 600);
        xBlock++;
        yDown = 30;
        xDown = xBlock * 30;
        drawImgDown();
    }
    return 0;
}
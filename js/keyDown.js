function left() {
    if (xBlock >= 1 && checkBlock(xBlock - 1, Math.ceil(yBlock / 30), x1, x2, y2, x3, y3, x4, y4)) {
        xBlock -= 1;
        if (checkBlock(xBlock, Math.floor(yBlock / 30), x1, x2, y2, x3, y3, x4, y4) == false) {
            yBlock = Math.ceil(yBlock / 30);
        }
        myCanvas.clearRect(0, 0, 300, 600);
        let yDownFirst = yDown;
        drawDown();
        if (yDownFirst * 30 == yBlock) changeLoca = true;
    }
}

function right() {
    if (xBlock + Math.max(x1, x2, x3, x4) <= 8 && checkBlock(xBlock + 1, Math.ceil(yBlock / 30), x1, x2, y2, x3, y3, x4, y4)) {
        xBlock += 1;
        if (checkBlock(xBlock, Math.floor(yBlock / 30), x1, x2, y2, x3, y3, x4, y4) == false) {
            yBlock = Math.ceil(yBlock / 30);
        }
        myCanvas.clearRect(0, 0, 300, 600);
        let yDownFirst = yDown;
        drawDown();
        if (yDownFirst * 30 == yBlock) changeLoca = true;
    }
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
        upY0 = upNext.y0,
        upXSize = upNext.xSize;
    if (xBlock + upX0 >= 0 && xBlock + upX0 + upXSize - 1 <= 9) {
        let check = false;
        if (checkBlock(xBlock + upX0, upY0 + Math.ceil(yBlock / 30), upX1, upX2, upY2, upX3, upY3, upX4, upY4)) {
            check = true
        } else if (checkBlock(xBlock + upX0, upY0 - 1 + Math.ceil(yBlock / 30), upX1, upX2, upY2, upX3, upY3, upX4, upY4)) {
            check = true;
            upY0--;
        }
        if (check) {
            x1 = upNext.x1;
            x2 = upNext.x2;
            x3 = upNext.x3;
            x4 = upNext.x4;
            y2 = upNext.y2;
            y3 = upNext.y3;
            y4 = upNext.y4;
            xSize = upXSize;
            xBlock = xBlock + upX0;
            yBlock = yBlock + 30 * upY0;
            yDown = Math.ceil(yBlock / 30);
            next = upNext.next;
            myCanvas.clearRect(0, 0, 300, 600);
            let yDownFirst = yDown;
            drawDown();

            if (yDownFirst * 30 == yBlock) changeLoca = true;
        }
    }
}
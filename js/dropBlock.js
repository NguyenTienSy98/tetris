function dropBlock() {
    var sss = setInterval(() => {
        if (yBlock % 30 == 1 && (yBlock + Math.max(y1, y2, y3, y4) * 30 > 570 || checkBlock(xBlock, (yBlock + 29) / 30, x1, y1, x2, y2, x3, y3, x4, y4) == false)) {
            clearInterval(sss);
            yBlock--;
            ctx.clearRect(0, 0, 300, 600);
            saveBlock();
            return 0;
        }
        ctx.clearRect((x1 + xBlock) * 30, yBlock - 1 + y1 * 30, 30, 30);
        ctx.clearRect((x2 + xBlock) * 30, yBlock - 1 + y2 * 30, 30, 30);
        ctx.clearRect((x3 + xBlock) * 30, yBlock - 1 + y3 * 30, 30, 30);
        ctx.clearRect((x4 + xBlock) * 30, yBlock - 1 + y4 * 30, 30, 30);
        ctx.drawImage(img, xBlock * 30, yBlock, xSize, ySize);
        yBlock++;
    }, 1)
}
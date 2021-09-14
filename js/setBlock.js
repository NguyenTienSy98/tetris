function setBlock() {
    xBlock = Math.floor((10 - xSize[block]) / 2);
    yBlock = (3 - y4[block]) * 30;
    img.src = src[block];
    yDown = Math.ceil(yBlock / 30);
    drawDown();
    // window.requestAnimationFrame(dropBlock);

    dropBlock();
}
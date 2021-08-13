function randomBlock(value) {
    block = nextBlock;
    // value == 1 ? skipStatus = true : skipStatus = false;
    nextBlock = Math.floor(Math.random() * 7);
    imgNext.src = blockDefault[nextBlock][0].nameBlock;
    nextCanvas.clearRect(0, 0, 150, 150);
    imgNext.onload = () => {
        nextCanvas.drawImage(imgNext, (150 - blockDefault[nextBlock][0].xSize * 30) / 2, (150 - blockDefault[nextBlock][0].ySize * 30) / 2, blockDefault[nextBlock][0].xSize * 30, blockDefault[nextBlock][0].ySize * 30);
    }
    selectBlock();
}
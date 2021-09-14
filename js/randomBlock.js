function randomBlock() {
    block = nextBlock;
    nextBlock = 4 * Math.floor(Math.random() * 7);
    imgNext.src = src[block];
    nextCanvas.clearRect(0, 0, 150, 150);
    imgNext.onload = () => {
        nextCanvas.drawImage(
            imgNext,
            (150 - xSize[block] * boxSize) / 2,
            (150 - (y4[block] + 1) * boxSize) / 2,
            xSize[block] * boxSize,
            (y4[block] + 1) * boxSize
        );
    };
    setBlock();
}
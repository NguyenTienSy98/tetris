function randomBlock() {

    block = nextBlock;

    nextBlock = Math.floor(Math.random() * 7);
    imgNext.src = blockDefault[nextBlock][0].firstName + blockDefault[nextBlock][0].lastName;
    nextCanvas.clearRect(0, 0, 150, 150);
    imgNext.onload = () => {
        nextCanvas.drawImage(imgNext, (150 - blockDefault[nextBlock][0].xSize * 30) / 2, (150 - blockDefault[nextBlock][0].ySize * 30) / 2, blockDefault[nextBlock][0].xSize * 30, blockDefault[nextBlock][0].ySize * 30);
    }
    selectBlock();
}
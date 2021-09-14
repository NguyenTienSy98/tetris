function newTurn() {
    block = nextBlock;
    nextBlock = 4 * Math.floor(Math.random() * 7);
    next.push(
        new component(
            nextBlock,
            (5 - xSize[nextBlock]) / 2,
            15 * (5 - y4[nextBlock] - 1),
            "nextCanvas"
        )
    );
    next[next.length - 1].update();
}
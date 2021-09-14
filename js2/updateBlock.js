async function updateBlock(timeStamp) {
    if (start == undefined) start = timeStamp;
    const elapsed = timeStamp - start;
    if (key != "none") await window[key]();
    if (yBlock < yDown * 30) {
        yBlock = yFirst + 0.03 * lv * elapsed;
        draw(yBlock - 90, block, color[block]);
        myGameArea.setBlock();
    } else {
        yBlock = yDown * 30;
        start = undefined;
        requestAnimationFrame(waitBlock);
    }
}
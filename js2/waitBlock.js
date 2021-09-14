function waitBlock(timeStamp) {
    if (start == undefined) start = timeStamp;
    const elapsed = timeStamp - start;
    if (elapsed > 2000) {
        myGameArea.save();
    } else requestAnimationFrame(waitBlock);
}
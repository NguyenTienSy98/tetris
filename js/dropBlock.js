function dropBlock() {
    keyPress = 0;
    let yFirst = yBlock;
    start = undefined;
    previousTimeStamp = undefined;
    window.requestAnimationFrame(step);

    function step(timestamp) {
        if (start === undefined) {
            start = timestamp;
        }
        const elapsed = timestamp - start; // time run
        if (yBlock < yDown * 30 && (keyPress == 0 || (keyPress == 67 && skipStatus == true))) {
            yBlock = 0.03 * lv * elapsed + yFirst;
            myCanvas.clearRect(0, 0, 300, yBlock + y4 * 30 - 120);
            draw(yBlock, 1);
            previousTimeStamp = timestamp;
            window.requestAnimationFrame(step);
        } else {
            start = undefined;
            previousTimeStamp = undefined;
            window.requestAnimationFrame(stepWait);
        }
    }
}

function stepWait(timestamp) { // press or yBlock >= yDown*30
    if (changeLoca) {
        changeLoca = false;
        myCanvas.clearRect(0, 0, 300, 600);
        draw(yBlock, 1);
        dropBlock();
        return 0;
    }
    let newTurn = false;
    if (yBlock > yDown * 30) {
        yBlock = yDown * 30
    }
    if (start === undefined) start = timestamp;
    const elapsed = timestamp - start;
    if (keyPress == 40) {;
        yBlock = yDown * 30;
        myCanvas.clearRect(0, 0, 300, 600);
        draw(yBlock, 1);
        keyPress = 0;
    }
    if (keyPress == 32) {
        yBlock = yDown * 30;
        myCanvas.clearRect(0, 0, 300, 600);
        draw(yBlock, 1);
        newTurn = true;
        keyPress = 0;
    }
    if (keyPress == 67 && skipStatus == false) { // skip
        if (skip == -1) {
            skip = block;
            newTurn = true;
            imgSkip.src = img.src;
            skipCanvas.drawImage(imgSkip, 75 - xSize * 15, 60 - y4 * 15);
            keyPress = 0;
            skipStatus = true;
            myCanvas.clearRect(0, 0, 300, 600);
            randomBlock();
        } else {
            newTurn = true;
            let swap = block;
            block = skip;
            skip = swap;
            imgSkip.src = img.src;
            skipCanvas.clearRect(0, 0, 150, 150);
            skipCanvas.drawImage(imgSkip, 75 - xSize * 15, 60 - y4 * 15);
            keyPress = 0;
            myCanvas.clearRect(0, 0, 300, 600);
            skipStatus = true;
            selectBlock();
        }

    } else if (elapsed < 2000 && newTurn == false) { // keyPress the animation after 2 seconds
        previousTimeStamp = timestamp;
        window.requestAnimationFrame(stepWait);
    } else { // saveBlock
        myCanvas.clearRect(0, 0, 300, 600);
        saveBlock(xBlock + x1, yBlock / 30, block);
        myCanvas.clearRect(0, 0, 300, 600);
        saveBlock(xBlock + x2, yBlock / 30 + y2, block);
        saveBlock(xBlock + x3, yBlock / 30 + y3, block);
        saveBlock(xBlock + x4, yBlock / 30 + y4, block);
        // if (skip > 10) skip -= 10;
        checkRow();
    }
}
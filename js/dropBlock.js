function dropBlock(timestamp) {
    xBlock = 0;
    block = 20;
    draw(150, 1);
    xBlock = 3;
    block = 4;
    draw(150, 1);
    console.log(xBlock);

    // console.log(yBlock, timestamp);
    // yBlock = 150;
    // // if (start === undefined) start = timestamp;
    // if (timestamp < 5000) {
    //     if (press != "none") {
    //         window[press]();
    //         press = "none";
    //     }
    //     // yBlock = 0.03 * lv * timestamp + (3 - y4[block]) * 30;
    //     dropCanvas.clearRect(0, 0, 300, yBlock + y4[block] * 30 - 90);
    //     draw(yBlock, 1);
    //     window.requestAnimationFrame(dropBlock);
    // } else {
    //     yBlock = yDown * 30;
    // }
}

function stepWait(timestamp) {
    // press or yBlock >= yDown*30
    if (changeLoca) {
        changeLoca = false;
        myCanvas.clearRect(0, 0, 300, 600);
        draw(yBlock, 1);
        dropBlock();
        return 0;
    }
    let newTurn = false;
    if (yBlock > yDown * 30) {
        yBlock = yDown * 30;
    }
    if (start === undefined) start = timestamp;
    const elapsed = timestamp - start;
    if (press == 40) {
        yBlock = yDown * 30;
        myCanvas.clearRect(0, 0, 300, 600);
        draw(yBlock, 1);
        press = 0;
    }
    if (press == 32) {
        yBlock = yDown * 30;
        myCanvas.clearRect(0, 0, 300, 600);
        draw(yBlock, 1);
        newTurn = true;
        press = 0;
    }
    if (press == 67 && skipStatus == false) {
        // skip
        if (skip == -1) {
            skip = block;
            newTurn = true;
            imgSkip.src = img.src;
            skipCanvas.drawImage(imgSkip, 75 - xSize * 15, 60 - y4 * 15);
            press = 0;
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
            press = 0;
            myCanvas.clearRect(0, 0, 300, 600);
            skipStatus = true;
            setBlock();
        }
    } else if (elapsed < 2000 && newTurn == false) {
        // press the animation after 2 seconds
        previousTimeStamp = timestamp;
        window.requestAnimationFrame(stepWait);
    } else {
        // saveBlock
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
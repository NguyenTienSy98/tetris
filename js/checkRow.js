function checkRow() {
    row = yBlock / 30 + y4;
    clearRow = new Array;
    while (row >= yBlock / 30) {
        column = 0;
        while (column <= 9) {
            main[column][row] == 7 ? column = 11 : column++; // đã lấp
        }
        if (column == 10) {
            clearRow.push(row);
        }
        row--;
    }
    // tim duoc cac row da full
    start = undefined;
    previousTimeStamp = undefined;
    stop = false;
    if (clearRow.length > 0) window.requestAnimationFrame(clear);
    else randomBlock();
}

function clear(timestamp) {
    if (start === undefined) {
        start = timestamp;
    }
    const elapsed = timestamp - start; // time run
    if (elapsed < 2000 && stop == false) {
        if (elapsed < 1000) {
            myCanvas.fillStyle = "#000000";
            for (let i = 0; i <= clearRow.length - 1; i++) {
                myCanvas.fillRect(150, 30 * (clearRow[i] - 4), 0.15 * elapsed, 30);
                myCanvas.fillRect(150, 30 * (clearRow[i] - 4), -0.15 * elapsed, 30);
            }
        } else if (stop == false) { // clear xong
            myCanvas.fillStyle = "#000000";
            stop = true;
            for (let i = 0; i <= clearRow.length - 1; i++) {
                myCanvas.fillRect(150, 30 * (clearRow[i] - 4), 150, 30);
                myCanvas.fillRect(150, 30 * (clearRow[i] - 4), -150, 30);
            }
        }
        previousTimeStamp = timestamp;
        window.requestAnimationFrame(clear);
    } else { // elapsed > 3000 || stop=true
        if (elapsed < 1200) {
            previousTimeStamp = timestamp;
            window.requestAnimationFrame(clear);
        } else {
            myCanvas.clearRect(0, 0, 300, 600);
            let count = 1;
            for (let row = clearRow[0]; row >= 4; row--) {
                while (clearRow.indexOf(row - count) > -1) count++; // hang tren cung bi clear thi count tang 1
                for (let column = 0; column <= 9; column++) {
                    saveBlock(column, row, main[column][row - count])
                }
            }
            previousTimeStamp = timestamp;
            randomBlock();
        }
    }
}
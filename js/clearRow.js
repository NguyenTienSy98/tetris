function clearRow(yMin, yMax) {
    let row = new Array,
        clearCount = 0;
    for (let i = yMin; i <= yMax; i++) {
        for (let j = 0; j <= 9; j++) {
            if (main[j][i] == 0) break;
            if (j == 9 && i >= 0) {
                row[clearCount] = i;
                clearCount++; // xac dinh duoc hang i clear
            }
        }
    }
    if (clearCount > 0) {
        let k = 0;
        let sInterVal = setInterval(() => {
            if (k <= 4) {
                for (let l = 0; l < clearCount; l++) {
                    saveBlock(4 - k, row[l], "transparent", "none", 0);
                    saveBlock(5 + k, row[l], "transparent", "none", 0)
                }
                k++;
            } else {
                clearInterval(sInterVal),
                    myCanvas.clearRect(0, 0, 300, 600);
                dropRow(row);
            }
        }, 100)
    } else {
        if (yBlock < 0) {
            alert("over");
            location.reload();
        } else
            randomBlock();
    }

}

function dropRow(row) {
    let dropCount = 1;
    for (i = row[row.length - 1]; i >= 0 && i - dropCount >= 0; i--) {
        while (row.indexOf(i - dropCount) >= 0) {
            dropCount++;
        }
        for (let j = 0; j <= 9; j++) {
            if (i - dropCount >= 0) { // iMin=1
                saveBlock(j, i, document.getElementById(j + 1 + 10 * (i - dropCount)).style.backgroundColor, document.getElementById(j + 1 + 10 * (i - dropCount)).style.border, main[j][i - dropCount]);
            } else {
                if (1 - yBlock / 30 - y3 - dropCount == 0 && j == xBlock + x3 || (1 - yBlock / 30 - y2 - dropCount == 0 && j == xBlock + x2) || (1 - yBlock / 30 - dropCount == 0 && j == xBlock + x1)) {
                    saveBlock(j, i, color, "1px solid white", block + 1)
                }
            }
        }

    }
    if (yBlock / 30 + dropCount < 0) {
        alert("over");
        location.reload();
    }

    randomBlock();
}
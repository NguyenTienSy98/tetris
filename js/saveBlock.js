function saveBlock(saveX, saveY, saveColor, saveBorder, valueMain) {
    if (saveY >= 0) {
        main[saveX][saveY] = valueMain;
        document.getElementById(saveX + 1 + 10 * (saveY)).style.backgroundColor = saveColor;
        document.getElementById(saveX + 1 + 10 * (saveY)).style.border = saveBorder;
        skipStatus = false;
    }
}
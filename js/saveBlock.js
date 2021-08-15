function saveBlock(saveX, saveY, saveValue) {
    if (saveY >= 4) {
        main[saveX][saveY] = saveValue;
        document.getElementById(saveX + 1 + 10 * (saveY - 4)).style.backgroundColor = blockDefault[saveValue][0].color;
        saveValue == 7 ? document.getElementById(saveX + 1 + 10 * (saveY - 4)).style.border = "none" : document.getElementById(saveX + 1 + 10 * (saveY - 4)).style.border = "1px solid white";
        skipStatus = false;
    }
}
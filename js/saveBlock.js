function saveBlock() {
    main[(xBlock + x1)][y1 + yBlock / 30] = 1;
    main[(xBlock + x2)][y2 + yBlock / 30] = 1;
    main[(xBlock + x3)][y3 + yBlock / 30] = 1;
    main[(xBlock + x4)][y4 + yBlock / 30] = 1;
    styleBox(xBlock, yBlock / 30, x1, y1);
    styleBox(xBlock, yBlock / 30, x2, y2);
    styleBox(xBlock, yBlock / 30, x3, y3);
    styleBox(xBlock, yBlock / 30, x4, y4);
    nRandom = Math.floor(Math.random() * 7);
    selectBlock(nRandom);
    return 0;
}

function styleBox(styleX, styleY, styleXi, styleYi) {
    document.getElementById(styleX + styleXi + 1 + (styleY + styleYi) * 10).style.backgroundColor = color;
    document.getElementById(styleX + styleXi + 1 + (styleY + styleYi) * 10).style.border = "1px solid white";
    return 0;
}
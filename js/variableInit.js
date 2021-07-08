var blockDefault = new Array,
    nRandom, next,
    img = new Image,
    imgDown = new Image,
    main = new Array,
    c = document.getElementById("myCanvas"),
    ctx = c.getContext("2d"),
    x0, y0, x1, x2, x3, x4, y1, y2, y3, y4, xSize, ySize, next, xBlock, yBlock, firstNameBlock, lastNameBlock, stt = 0,
    xDown, yDown, nRandom = Math.floor(Math.random() * 7);
for (let i = 0; i < 7; i++) {
    blockDefault[i] = new Array;
}
for (let i = 0; i < 10; i++) {
    main[i] = new Array;
    for (let j = 0; j < 20; j++) {
        main[i][j] = 0;
    }
}
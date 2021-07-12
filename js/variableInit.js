var blockDefault = new Array,
    nextBlock = Math.floor(Math.random() * 7),
    block = Math.floor(Math.random() * 7),
    next, skip = 0,
    skipStatus = false,
    sss,
    img = new Image,
    imgNext = new Image,
    imgSkip = new Image,
    imgDown = new Image,
    main = new Array,
    myCanvas = document.getElementById("myCanvas").getContext("2d"),
    skipCanvas = document.getElementById("skipCanvas").getContext("2d"),
    nextCanvas = document.getElementById("nextCanvas").getContext("2d"),
    x0, y0, x1, x2, x3, x4, y2, y3, y4, xSize, ySize, next, xBlock, yBlock, firstNameBlock, lastNameBlock, stt = 0,
    xDown, yDown;
for (let i = 0; i < 7; i++) {
    blockDefault[i] = new Array;
}
for (let i = 0; i < 10; i++) {
    main[i] = new Array;
    for (let j = 0; j < 20; j++) {
        main[i][j] = 0;
    }
}
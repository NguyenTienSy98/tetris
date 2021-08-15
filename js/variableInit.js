var blockDefault = new Array,
    start = undefined,
    row, clearRow = new Array,
    previousTimeStamp = undefined,
    nextBlock = Math.floor(Math.random() * 7),
    block = Math.floor(Math.random() * 7),
    next, skip = -1, // skip = -10 la chua bao h skip
    keyPress, changeLoca = false,
    skipStatus = false,
    lv = 10,
    img = new Image,
    imgNext = new Image,
    imgSkip = new Image,
    main = new Array,
    skipCanvas = document.getElementById("skipCanvas").getContext("2d"),
    myCanvas = document.getElementById("myCanvas").getContext("2d"),
    skipCanvas = document.getElementById("skipCanvas").getContext("2d"),
    nextCanvas = document.getElementById("nextCanvas").getContext("2d"),
    x0, y0, x1, x2, x3, x4, y2, y3, y4, xSize, ySize, next, xBlock, yBlock,
    xDown, yDown;
for (let i = 0; i < 8; i++) {
    blockDefault[i] = new Array;
}
for (let i = 0; i < 10; i++) {
    main[i] = new Array;
    for (let j = 0; j < 24; j++) {
        main[i][j] = 7;
    }
}
blockDefault[0][0] = {
    x0: -1,
    y0: 2,
    x1: 0,
    x2: 1,
    x3: 2,
    x4: 3,
    y2: 0,
    y3: 0,
    y4: 0,
    xSize: 4,
    ySize: 1,
    nameBlock: "./img/i1.png ",
    color: "#00ffff ",
    next: 1
}
blockDefault[0][1] = {
    x0: 2,
    y0: -2,
    x1: 0,
    x2: 0,
    x3: 0,
    x4: 0,
    y2: 1,
    y3: 2,
    y4: 3,
    xSize: 1,
    ySize: 4,
    nameBlock: "./img/i2.png ",
    color: "#00ffff ",
    next: 2
}
blockDefault[0][2] = {
    x0: -2,
    y0: 1,
    x1: 0,
    x2: 1,
    x3: 2,
    x4: 3,
    y2: 0,
    y3: 0,
    y4: 0,
    xSize: 4,
    ySize: 1,
    nameBlock: "./img/i3.png ",
    color: "#00ffff ",
    next: 3
}
blockDefault[0][3] = {
        x0: 1,
        y0: -1,
        x1: 0,
        x2: 0,
        x3: 0,
        x4: 0,
        y1: 0,
        y2: 1,
        y3: 2,
        y4: 3,
        xSize: 1,
        ySize: 4,
        firstName: "./img/",
        lastName: "i4.png ",
        color: "#00ffff ",
        next: 0
    }
    // 1: l
blockDefault[1][0] = {
    x0: 0,
    y0: 0,
    x1: 2,
    x2: 0,
    x3: 1,
    x4: 2,
    y2: 1,
    y3: 1,
    y4: 1,
    xSize: 3,
    ySize: 2,
    nameBlock: "./img/l1.png ",
    color: "#ffcc33 ",
    next: 1
}
blockDefault[1][1] = {
    x0: 1,
    y0: 0,
    x1: 0,
    x2: 0,
    x3: 0,
    x4: 1,
    y2: 1,
    y3: 2,
    y4: 2,
    xSize: 2,
    ySize: 3,
    nameBlock: "./img/l2.png ",
    color: "#ffcc33 ",
    next: 2
}
blockDefault[1][2] = {
    x0: -1,
    y0: 0,
    x1: 0,
    x2: 1,
    x3: 2,
    x4: 0,
    y2: 0,
    y3: 0,
    y4: 1,
    xSize: 3,
    ySize: 2,
    nameBlock: "./img/l3.png ",
    color: "#ffcc33 ",
    next: 3
}
blockDefault[1][3] = {
        x0: 0,
        y0: 0,
        x1: 0,
        x2: 1,
        x3: 1,
        x4: 1,
        y1: 0,
        y2: 0,
        y3: 1,
        y4: 2,
        xSize: 2,
        ySize: 3,
        firstName: "./img/",
        lastName: "l4.png ",
        color: "#ffcc33 ",
        next: 0
    }
    // 2: ln
blockDefault[2][0] = {
    x0: 0,
    y0: 0,
    x1: 0,
    x2: 0,
    x3: 1,
    x4: 2,
    y2: 1,
    y3: 1,
    y4: 1,
    xSize: 3,
    ySize: 2,
    nameBlock: "./img/ln1.png ",
    color: "#0000ff ",
    next: 1
}
blockDefault[2][1] = {
    x0: 1,
    y0: 0,
    x1: 0,
    x2: 1,
    x3: 0,
    x4: 0,
    y2: 0,
    y3: 1,
    y4: 2,
    xSize: 2,
    ySize: 3,
    nameBlock: "./img/ln2.png ",
    color: "#0000ff ",
    next: 2
}
blockDefault[2][2] = {
    x0: -1,
    y0: 0,
    x1: 0,
    x2: 1,
    x3: 2,
    x4: 2,
    y2: 0,
    y3: 0,
    y4: 1,
    xSize: 3,
    ySize: 2,
    nameBlock: "./img/ln3.png ",
    color: "#0000ff ",
    next: 3
}
blockDefault[2][3] = {
        x0: 0,
        y0: 0,
        x1: 1,
        x2: 1,
        x3: 0,
        x4: 1,
        y1: 0,
        y2: 1,
        y3: 2,
        y4: 2,
        xSize: 2,
        ySize: 3,
        firstName: "./img/",
        lastName: "ln4.png ",
        color: "#0000ff ",
        next: 0
    }
    //3:s
blockDefault[3][0] = {
    x0: 0,
    y0: 0,
    x1: 1,
    x2: 2,
    x3: 0,
    x4: 1,
    y2: 0,
    y3: 1,
    y4: 1,
    xSize: 3,
    ySize: 2,
    nameBlock: "./img/s1.png ",
    color: "#00ff00 ",
    next: 1
}
blockDefault[3][1] = {
    x0: 1,
    y0: 0,
    x1: 0,
    x2: 0,
    x3: 1,
    x4: 1,
    y2: 1,
    y3: 1,
    y4: 2,
    xSize: 2,
    ySize: 3,
    nameBlock: "./img/s2.png ",
    color: "#00ff00 ",
    next: 2
}
blockDefault[3][2] = {
    x0: -1,
    y0: 0,
    x1: 1,
    x2: 2,
    x3: 0,
    x4: 1,
    y2: 0,
    y3: 1,
    y4: 1,
    xSize: 3,
    ySize: 2,
    nameBlock: "./img/s3.png ",
    color: "#00ff00 ",
    next: 3
}
blockDefault[3][3] = {
        x0: 0,
        y0: 0,
        x1: 0,
        x2: 0,
        x3: 1,
        x4: 1,
        y1: 0,
        y2: 1,
        y3: 1,
        y4: 2,
        xSize: 2,
        ySize: 3,
        firstName: "./img/",
        lastName: "s4.png ",
        color: "#00ff00 ",
        next: 0
    }
    // 4: sn
blockDefault[4][0] = {
    x0: 0,
    y0: 0,
    x1: 0,
    x2: 1,
    x3: 1,
    x4: 2,
    y2: 0,
    y3: 1,
    y4: 1,
    xSize: 3,
    ySize: 2,
    nameBlock: "./img/sn1.png ",
    color: "#ff0000 ",
    next: 1
}
blockDefault[4][1] = {
    x0: 1,
    y0: 0,
    x1: 1,
    x2: 0,
    x3: 1,
    x4: 0,
    y2: 1,
    y3: 1,
    y4: 2,
    xSize: 2,
    ySize: 3,
    nameBlock: "./img/sn2.png ",
    color: "#ff0000 ",
    next: 2
}
blockDefault[4][2] = {
    x0: -1,
    y0: 0,
    x1: 0,
    x2: 1,
    x3: 1,
    x4: 2,
    y2: 0,
    y3: 1,
    y4: 1,
    xSize: 3,
    ySize: 2,
    nameBlock: "./img/sn3.png ",
    color: "#ff0000 ",
    next: 3
}
blockDefault[4][3] = {
        x0: 0,
        y0: 0,
        x1: 1,
        x2: 0,
        x3: 1,
        x4: 0,
        y1: 0,
        y2: 1,
        y3: 1,
        y4: 2,
        xSize: 2,
        ySize: 3,
        firstName: "./img/",
        lastName: "sn4.png ",
        color: "#ff0000 ",
        next: 0
    }
    // 5: t
blockDefault[5][0] = {
    x0: 0,
    y0: 0,
    x1: 1,
    x2: 0,
    x3: 1,
    x4: 2,
    y2: 1,
    y3: 1,
    y4: 1,
    xSize: 3,
    ySize: 2,
    nameBlock: "./img/t1.png ",
    color: "#800080 ",
    next: 1
}
blockDefault[5][1] = {
    x0: 1,
    y0: 0,
    x1: 0,
    x2: 0,
    x3: 1,
    x4: 0,
    y2: 1,
    y3: 1,
    y4: 2,
    xSize: 2,
    ySize: 3,
    nameBlock: "./img/t2.png ",
    color: "#800080 ",
    next: 2
}
blockDefault[5][2] = {
    x0: -1,
    y0: 0,
    x1: 0,
    x2: 1,
    x3: 2,
    x4: 1,
    y2: 0,
    y3: 0,
    y4: 1,
    xSize: 3,
    ySize: 2,
    nameBlock: "./img/t3.png ",
    color: "#800080 ",
    next: 3
}
blockDefault[5][3] = {
        x0: 0,
        y0: 0,
        x1: 1,
        x2: 0,
        x3: 1,
        x4: 1,
        y1: 0,
        y2: 1,
        y3: 1,
        y4: 2,
        xSize: 2,
        ySize: 3,
        firstName: "./img/",
        lastName: "t4.png ",
        color: "#800080 ",
        next: 0
    }
    //6: v
blockDefault[6][0] = {
    x0: 0,
    y0: 0,
    x1: 0,
    x2: 1,
    x3: 0,
    x4: 1,
    y2: 0,
    y3: 1,
    y4: 1,
    xSize: 2,
    ySize: 2,
    nameBlock: "./img/v.png ",
    color: "#ffff00 ",
    next: 0
}
blockDefault[7][0] = {
    color: "transparent"
}
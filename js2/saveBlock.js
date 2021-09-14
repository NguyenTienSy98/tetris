function saveBlock() {
    saveBox(xBlock, yBlock / 30 - 3, color[block]);
}

// function saveBox(saveX, saveY, saveColor) {
//     main[saveX + saveY * 10 + 20]=color[saveColor];

// }
// skip,drop,save,next
function component(componentId, componentBlock, componentColor, x, y) {
    // if (componentId == "dropCanvas" || componentId == "saveCanvas") {
    //     this.x = x; //vi tri  ngang
    //     this.y = y; // vi tri doc
    // } else {
    //     this.x = 75 - xSize[componentBlock] / 2;
    //     this.y = 60 - y4[componentBlock] / 2;
    // }/
    if (x == undefined) {
        this.x = 75 - xSize[componentBlock] / 2;
        this.y = 60 - y4[componentBlock] / 2;
    } else {
        this.x = x;
        this.y = y;
    }
    this.update = function() {
        document
            .getElementById(componentId)
            .getContext("2d")
            .clearRect(
                0,
                0,
                componentId.width,
                30 * (this.y + y4[componentBlock]) - 90
            );
        document.getElementById(componentId).strokeStyle = "white";
        document
            .getElementById(componentId)
            .stroKeRect(30 * (this.x + x1[componentBlock]), 30 * this.y, 29, 29);
        document
            .getElementById(componentId)
            .stroKeRect(
                30 * (this.x + x2[componentBlock]),
                30 * y2[componentBlock] + this.y,
                29,
                29
            );
        document
            .getElementById(componentId)
            .stroKeRect(
                30 * (this.x + x3[componentBlock]),
                30 * y3[componentBlock] + this.y,
                29,
                29
            );
        document
            .getElementById(componentId)
            .stroKeRect(
                30 * (this.x + x4[componentBlock]),
                30 * y4[componentBlock] + this.y,
                29,
                29
            );
        if (componentColor != undefined) {
            document.getElementById(componentId).fillStyle = componentColor;
        }
        document
            .getElementById(componentId)
            .fillRect(30 * (this.x + x1[componentBlock]), 30 * this.y, 29, 29);
        document
            .getElementById(componentId)
            .fillRect(
                30 * (this.x + x2[componentBlock]),
                30 * y2[componentBlock] + this.y,
                29,
                29
            );
        document
            .getElementById(componentId)
            .fillRect(
                30 * (this.x + x3[componentBlock]),
                30 * y3[componentBlock] + this.y,
                29,
                29
            );
        document
            .getElementById(componentId)
            .fillRect(
                30 * (this.x + x4[componentBlock]),
                30 * y4[componentBlock] + this.y,
                29,
                29
            );
        //     //
        //     document
        //     .getElementById(componentId)
        //     .getContext("2d")
        //     .fillStyle=color[componentBlock];
    };
}
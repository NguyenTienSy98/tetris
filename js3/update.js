function updateBlock(
    id_updateBlock,
    block_updateBlock,
    x_updateBlock,
    y_updateBlock
) {
    clearCanvas(id_updateBlock);
    drawBox(
        x_updateBlock + x1[block_updateBlock],
        y_updateBlock,
        id_updateBlock,
        background[block_updateBlock]
    );
    drawBox(
        x_updateBlock + x2[block_updateBlock],
        y_updateBlock + y2[block_updateBlock] * 30,
        id_updateBlock,
        background[block_updateBlock]
    );
    drawBox(
        x_updateBlock + x3[block_updateBlock],
        y_updateBlock + y3[block_updateBlock] * 30,
        id_updateBlock,
        background[block_updateBlock]
    );
    drawBox(
        x_updateBlock + x4[block_updateBlock],
        y_updateBlock + y4[block_updateBlock] * 30,
        id_updateBlock,
        background[block_updateBlock]
    );
}

function updateRow() {}

// function component(width, height, color, x, y, type) {
//     this.type = type;
//     this.width = width;
//     this.height = height;
//     this.speedX = 0;
//     this.speedY = 0;
//     this.x = x;
//     this.y = y;
//     this.update = function() {
//         ctx = myGameArea.context;
//         if (this.type == "text") {
//             ctx.font = this.width + " " + this.height;
//             ctx.fillStyle = color;
//             ctx.fillText(this.text, this.x, this.y);
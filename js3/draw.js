function drawBox(x, y, iD, backGround) {
    if (iD == "nextCanvas" || iD == "skipCanvas") y += 90;
    let ctx = document.getElementById(iD).getContext("2d");
    ctx.strokeStyle = "#ffffff";
    ctx.strokeRect(x * 30, y - 90, boxSize - 1, boxSize - 1);
    if (backGround != undefined) {
        ctx.fillStyle = backGround;
        ctx.fillRect(x * 30, y - 90, boxSize - 1, boxSize - 1);
    }
}

function clearCanvas(id_clear) {
    let canvas = document.getElementById(id_clear);
    console.log(canvas.width);
    let ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}
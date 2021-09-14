// function checkBlock(checkX, checkY, checkX1, checkX2, checkY2, checkX3, checkY3, checkX4, checkY4) {
//     if ((checkY + checkY4 >= 0 && main[checkX + checkX4][checkY + checkY4] < 7) || (checkY + checkY3 >= 0 && main[checkX + checkX3][checkY + checkY3] < 7) || (checkY + checkY2 >= 0 && main[checkX + checkX2][checkY + checkY2] < 7) || (checkY >= 0 && main[checkX + checkX1][checkY] < 7)) return false;
//     return true
// }
function checkBlock(checkXBlock, checkYBlock, checkNumBlock) {
    if (
        checkBox(checkXBlock + x1[checkNumBlock], checkYBlock) &&
        checkBox(
            checkXBlock + x2[checkNumBlock],
            checkYBlock + y2[checkNumBlock]
        ) &&
        checkBox(
            checkXBlock + x3[checkNumBlock],
            checkYBlock + y3[checkNumBlock]
        ) &&
        checkBox(checkXBlock + x4[checkNumBlock], checkYBlock + y4[checkNumBlock])
    )
        return true;
    else return false;
}

function checkBox(checkX, checkY) {
    // true khi box null
    if (
        checkY > 0 &&
        (checkY > 22 ||
            checkX < 0 ||
            checkX > 9 ||
            main[10 * checkY + checkX] != "transparent")
    ) {
        return false;
    }

    return true;
}
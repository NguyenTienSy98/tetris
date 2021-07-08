function checkBlock(checkXBlock, checkYBlock, checkX1, checkY1, checkX2, checkY2, checkX3, checkY3, checkX4, checkY4) {
    if (main[checkXBlock + checkX1][checkYBlock + checkY1] == 1 || main[checkXBlock + checkX2][checkYBlock + checkY2] == 1 || main[checkXBlock + checkX3][checkYBlock + checkY3] == 1 || main[checkXBlock + checkX4][checkYBlock + checkY4] == 1) return false;
    return true
}
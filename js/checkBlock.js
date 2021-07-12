function checkBlock(checkXBlock, checkYBlock, checkX1, checkX2, checkY2, checkX3, checkY3, checkX4, checkY4) {
    if ((checkYBlock + checkY4 >= 0 && main[checkXBlock + checkX4][checkYBlock + checkY4] != 0) || (checkYBlock + checkY3 >= 0 && main[checkXBlock + checkX3][checkYBlock + checkY3] != 0) || (checkYBlock + checkY2 >= 0 && main[checkXBlock + checkX2][checkYBlock + checkY2] != 0) || (checkYBlock >= 0 && main[checkXBlock + checkX1][checkYBlock] != 0)) return false;
    return true
}
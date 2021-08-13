function checkBlock(checkX, checkY, checkX1, checkX2, checkY2, checkX3, checkY3, checkX4, checkY4) {
    if ((checkY + checkY4 >= 0 && main[checkX + checkX4][checkY + checkY4] != 0) || (checkY + checkY3 >= 0 && main[checkX + checkX3][checkY + checkY3] != 0) || (checkY + checkY2 >= 0 && main[checkX + checkX2][checkY + checkY2] != 0) || (checkY >= 0 && main[checkX + checkX1][checkY] != 0)) return false;
    return true
}
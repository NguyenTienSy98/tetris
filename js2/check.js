function checkBlock(xCheck, yCheck, blockCheck) {
    if (
        checkBox(xCheck + x1[blockCheck], yCheck) &&
        checkBox(xCheck + x2[blockCheck], yCheck + y2[blockCheck]) &&
        checkBox(xCheck + x3[blockCheck], yCheck + y3[blockCheck]) &&
        checkBox(xCheck + x4[blockCheck], yCheck + y4[blockCheck])
    )
        return true;
    else return false;
}

function checkBox(xCheckBox, yCheckBox) {
    // true khi box rong
    if (
        yCheckBox < 0 ||
        (xCheckBox >= 0 &&
            xCheckBox <= 9 &&
            yCheckBox <= 22 &&
            main[xCheckBox + yCheckBox * 10] == "transparent")
    )
        return true;
    return false;
}
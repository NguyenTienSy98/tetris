var boxSize = 30;
if (screen.height < 1080) {
    boxSize = 30;
} else if (screen.height < 1440) {
    boxSize = 40;
} else boxSize = 50;
set("skipCanvas", 5, 5);
set("saveCanvas", 10, 20);
set("dropCanvas", 10, 20);
set("nextCanvas", 5, 5);
set("scoreCanvas", 5, 5);

function set(setId, setWidth, setHeight) {
    document.getElementById(setId).setAttribute("width", boxSize * setWidth);
    document.getElementById(setId).setAttribute("height", boxSize * setHeight);
}
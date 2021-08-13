// function skipBlock() {
//     if (skip == 0) { // LAN DAU SKIP
//         clearInterval(sss);
//         skip = block + 1;
//         skipStatus = true;
//         imgSkip.src = blockDefault[block][0].firstName + blockDefault[block][0].lastName;
//         console.log(imgSkip.src);
//         skipCanvas.drawImage(imgSkip, (150 - blockDefault[block][0].xSize * 30) / 2, (150 - blockDefault[block][0].ySize * 30) / 2, blockDefault[block][0].xSize * 30, blockDefault[block][0].ySize * 30);
//         myCanvas.clearRect(0, 0, 300, 600);
//         randomBlock();
//     } else { // DA BAM SKIP
//         if (skipStatus == false) // chua bam skip tai  luot nay
//         {
//             skipStatus = true;
//             clearInterval(sss);
//             let swap = skip;
//             skip = block + 1;
//             block = swap - 1;
//             myCanvas.clearRect(0, 0, 300, 600);
//             skipCanvas.clearRect(0, 0, 150, 150);
//             imgSkip.src = blockDefault[skip - 1][0].firstName + blockDefault[skip - 1][0].lastName;
//             skipCanvas.drawImage(imgSkip, (150 - blockDefault[skip - 1][0].xSize * 30) / 2, (150 - blockDefault[skip - 1][0].ySize * 30) / 2, blockDefault[skip - 1][0].xSize * 30, blockDefault[skip - 1][0].ySize * 30);
//             selectBlock();
//         }
//     }
// }

// // function dropping() {
// //     if ((yBlock % 30 == 1 && yBlock > 0 || yBlock % 30 == -29) && (yBlock + y4 * 30 > 570 || checkBlock(xBlock, Math.ceil(yBlock / 30), x1, x2, y2, x3, y3, x4, y4) == false)) {
// //         clearInterval(sss);
// //         yBlock--;
// //         myCanvas.clearRect(0, 0, 300, 600);
// //         saveBlock(xBlock + x1, yBlock / 30, color, "1px solid white", block + 1);
// //         saveBlock(xBlock + x2, yBlock / 30 + y2, color, "1px solid white", block + 1);
// //         saveBlock(xBlock + x3, yBlock / 30 + y3, color, "1px solid white", block + 1);
// //         saveBlock(xBlock + x4, yBlock / 30 + y4, color, "1px solid white", block + 1);
// //         clearRow(yBlock / 30, yBlock / 30 + y4);
// //         return 0;
// //     }
// //     myCanvas.clearRect((x1 + xBlock) * 30, yBlock - 1, 30, 30);
// //     myCanvas.clearRect((x2 + xBlock) * 30, yBlock - 1 + y2 * 30, 30, 30);
// //     myCanvas.clearRect((x3 + xBlock) * 30, yBlock - 1 + y3 * 30, 30, 30);
// //     myCanvas.clearRect((x4 + xBlock) * 30, yBlock - 1 + y4 * 30, 30, 30);
// //     myCanvas.drawImage(img, xBlock * 30, yBlock, xSize, ySize);
// //     yBlock++;

// // }
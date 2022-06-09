//Placeholder
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let player = startplayer();

let purse = 0;
let bank = 0;

let moneyPurse = document.getElementById("moneyPurse");

requestAnimationFrame(draw);
function draw() {
    drawVillage();
    drawPlayer(player);
    if (player.x < -30) {
        drawNether();
        drawNetherItems();
    } else if (player.x > 830) {
        drawEnd()

    }
    requestAnimationFrame(draw);


}

cnv.addEventListener("click", getPosition);

function getPosition(event) {
    let x = event.x;
    let y = event.y;

    x -=cnv.offsetLeft;
    y -=cnv.offsetTop;

    console.log("x:" + x + " y:" + y);
}
if (getPosition(event) > 131) {
    console.log("cool");

}

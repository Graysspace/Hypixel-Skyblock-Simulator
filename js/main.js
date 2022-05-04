//Placeholder
let cnv = document.getElementById("my-canvas");
let ctx = cnv.getContext("2d");
cnv.width = 800;
cnv.height = 600;

let purse = 0;
let bank = 0;

requestAnimationFrame(draw);
function draw() {
    drawVillage();
    drawPlayer();

    requestAnimationFrame(draw);
}





function drawVillage() {
    // Background
    background("green");
    // Buildings
    drawBuilding(0,0, "yellow");
    drawBuilding(300, 0, "red");
    drawBuilding(600, 0, "orangered");
    // Signs
    drawSign(50, 300);
    drawSign(650, 300);
    // Bulding Labels
    fill("black");
    font("20px Arial");
    text("BANK", 70, 50, "fill");
    text("AUCTION HOUSE", 620, 50, "fill");
    text("BAZAAR", 360, 50, "fill");
    // Sign Labels
    font("15px Arial");
    text("The Nether", 62, 330, "fill");
    text("The End", 672, 330, "fill");
    font("20px Arial");
    text("<------", 70, 350, "fill");
    text("------>", 672, 350, "fill");
}


function drawNether() {
    background("orangered");
    drawSign(650, 300);
    fill("black");
    font("15px Arial");
    text("The Village", 664, 325, "fill");
    font("20px Arial");
    text("------>", 672, 350, "fill");


}

function drawEnd() {
    background("yellowgreen");
    drawSign(50, 300);
    fill("black");
    font("15px Arial");
    text("The Village", 62, 325, "fill");
    font("20px Arial");
    text("<------", 70, 350, "fill");
}

function drawBuilding(x, y, color1) {
    fill(color1);
    rect(x, y, 200, 150, "fill");
    fill("brown");
    rect(x+80, y+148, 40, 6, "fill");
}

function drawSign(x, y) {
    fill("brown");
    rect(x, y, 100, 60, "fill");
    rect(x+47, y+60, 6, 40, "fill");
}


        
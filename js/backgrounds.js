
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

function drawNetherItems() {
    for (i = 1; i< 5; i++) {
        fill("yellow");
        rect( i * 30 + i * 100,30,100,50,"fill");
    }
    fill("black");
    text("Kill Blaze", 140,60, "fill");
    
}
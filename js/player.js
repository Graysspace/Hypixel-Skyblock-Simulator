function startplayer() {
    return {
    x: 400,
    y: 300,
    color: "blue"
    };
}

function drawPlayer(aPlayer) {
    fill("blue");
    rect(aPlayer.x, aPlayer.y, 40, 40, "fill");

}

document.addEventListener ("keydown", keydownHandler);

function keydownHandler(event) {
        // Left Key
    if (event.keyCode === 37) {
        console.log("Left Arrow");
        // Up Key
    } else if (event.keyCode === 38) {
        console.log("Up Arrow");
        // Right Key
    } else if (event.keyCode === 39) {
        console.log("Right Arrow");
        // Down Key
    } else if (event.keyCode === 40) {
        console.log(" Down Arrow");
    }
}
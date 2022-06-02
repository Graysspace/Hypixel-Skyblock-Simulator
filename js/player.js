function startplayer() {
    return {
    x: 380,
    y: 300,
    color: "blue"
    };
}

function drawPlayer(player) {
    fill(player.color);
    rect(player.x, player.y, 40, 40, "fill");

}

function movePlayerx(player, num) {
    if (num === 1) {
        player.x -= 10;
    } else if (num === 2) {
        player.y -= 10;
    } else if (num === 3) {
        player.x += 10;
    } else if (num ===  4) {
        player.y += 10;
    }

}

document.addEventListener ("keydown", keydownHandler);
    
function keydownHandler(event) {
    // Left Key
if (event.keyCode === 37) {
    console.log("Left Arrow");
    movePlayerx(player, 1);
    // Up Key
} else if (event.keyCode === 38) {
    console.log("Up Arrow");
    movePlayerx(player, 2);
    // Right Key
} else if (event.keyCode === 39) {
    console.log("Right Arrow");
    movePlayerx(player, 3);
    // Down Key
} else if (event.keyCode === 40) {
    console.log(" Down Arrow");
    movePlayerx(player, 4);
}
}

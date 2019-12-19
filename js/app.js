let gamebored = document.getElementById("gameboard");
let turnsLeft = document.getElementById("turnsLeft")
let win = false ;
let tries = 8;
// Board

for (let i = 0; i < 40; i++) {
    var ele = document.createElement("div");
    ele.classList.add("col-sm-3","letter");
    // ele.style.background = "lightblue";
    ele.setAttribute("data-value", i);
    gamebored.appendChild(ele);
    ele.addEventListener("click",function () {
        player(this);
    });
};
// Computer move
let computer = Math.floor(Math.random()*Math.floor(20));
// Game play

function player(tile) {
    var value = tile.getAttribute('data-value');
    var gameover = document.getElementById("gameover");
    if (!win) {
        if (tries < 1) {
            win = true
            gameover.innerText = "Ship Escape"
            gameover.classList.add("gameover")
        }
        
        if (value == computer) {
            console.log("win");
            tile.style.background = "green"
            gameover.innerText = "Game Over"
            gameover.classList.add("gameover")
            win = true
        } else {
            turnsLeft.innerText = `You have ${tries--} turns left until your ship escape.`
            console.log("miss");
            tile.style.background = "#880000"
        };
        // debugger
    }
    return false;
};
// Reset
function restart() {
    window.location.reload();
};
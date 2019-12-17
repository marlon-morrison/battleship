let gamebored = document.getElementById("gameboard")
let win = false 
let tries = 5
// Board
const ships = [
    {
        position:0
    },
    {
        position:1
    },
    {
        position:2
    },
    {
        position:3
    },
    {
        position:4
    },
    {
        position:5
    },
    {
        position:6
    },
    {
        position:7
    },
    {
        position:8
    },
    {
        position:9
    },
    {
        position:10
    },
    {
        position:11
    },
    {
        position:12
    },
    {
        position:13
    },
    {
        position:14
    },
    {
        position:15
    },
];
for (let i = 0; i < ships.length; i++) {
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
let computer = ships[Math.floor(Math.random()*Math.floor(ships.length))];
console.log(computer);
// Game play

function player(tile) {
    var value = tile.getAttribute('data-value');
    var gameover = document.getElementById("gameover")
    if (!win) {
        if (tries < 1) {
            win = true
            gameover.innerText = "Ship Escape"
            gameover.classList.add("gameover")
        }
        
        if (value == computer.position) {
            console.log("win");
            tile.style.background = "green"
            gameover.innerText = "Game Over"
            gameover.classList.add("gameover")
            win = true
        } else {
            tries--
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
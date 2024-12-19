
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');
canvas.width = 800;
canvas.height = 600;

let isGameRunning = false;

function startGame() {
    isGameRunning = true;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText("Game Started! Catch the flags!", 10, 50);
}

canvas.addEventListener('click', startGame);

ctx.font = "20px Arial";
ctx.fillText("Click to start the game!", 10, 50);

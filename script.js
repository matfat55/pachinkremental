const canvas = document.getElementById('pachinkoCanvas');
const ctx = canvas.getContext('2d');

canvas.width = 800;
canvas.height = 600;

const ballRadius = 10;
let ballX = canvas.width / 2;
let ballY = ballRadius;
let ballSpeedY = 1;
const gravity = 0.1;

function drawBall() {
    ctx.beginPath();
    ctx.arc(ballX, ballY, ballRadius, 0, Math.PI * 2);
    ctx.fillStyle = '#ffffff';
    ctx.fill();
    ctx.closePath();
}

function updateBall() {
    ballSpeedY += gravity;
    ballY += ballSpeedY;

    // Basic floor collision
    if (ballY + ballRadius > canvas.height) {
        ballY = canvas.height - ballRadius;
        ballSpeedY = -ballSpeedY * 0.8; // Damping bounce
    }
}

function gameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    updateBall();
    requestAnimationFrame(gameLoop);
}

gameLoop();
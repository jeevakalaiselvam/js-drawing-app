const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");

let size = 10;
let x = 50;
let y = 50;
let color = "#000000";

let isPressed = false;
sizeEl.innerText = size;

colorEl.addEventListener("click", () => {});

clearEl.addEventListener("click", () => {
    clear();
});

increaseBtn.addEventListener("click", () => {
    size += 5;

    if (size > 50) {
        size = 50;
    }
    sizeEl.innerText = size;
});

decreaseBtn.addEventListener("click", () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }
    sizeEl.innerText = size;
});

canvas.addEventListener("mousedown", () => {
    isPressed = true;
});

canvas.addEventListener("mouseup", () => {
    isPressed = false;
});

canvas.addEventListener("mousemove", (e) => {
    const x = e.offsetX;
    const y = e.offsetY;

    if (isPressed) drawCircle(x, y);
});

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

// function draw() {
//     //To clear the canvas and remove pixalation
//     //ctx.clearRect(0, 0, canvas.width, canvas.height);
//     drawCircle(x++, 50);

//     //Request redraw frame
//     requestAnimationFrame(draw);
// }

// draw();

//Declare all needed references
const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");
const ctx = canvas.getContext("2d");

//Declare initial brush size
let size = 10;

//Declare variable for temporary intermediate storage whenever needed
let x = undefined;
let y = undefined;

//Declare intial color
let color = "#000000";

let isPressed = false;
sizeEl.innerText = size;

//Check for any change in mouse coordinate change
colorEl.addEventListener("change", (e) => {
    color = e.target.value;
});

//Clear the canvas when clear button is pressed
clearEl.addEventListener("click", () => {
    clear();
});

//Increase brush size when the respective buttons are clicked.
increaseBtn.addEventListener("click", () => {
    size += 5;

    if (size > 50) {
        size = 50;
    }
    sizeEl.innerText = size;
});

//Decrease brush size when the respective buttons are clicked
decreaseBtn.addEventListener("click", () => {
    size -= 5;

    if (size < 5) {
        size = 5;
    }
    sizeEl.innerText = size;
});

//Get mouse position when mouse button is pressed
canvas.addEventListener("mousedown", () => {
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

//Get mouse position when mouse is pressed and released
canvas.addEventListener("mouseup", () => {
    isPressed = false;
    x = undefined;
    y = undefined;
});

//Get mouse position whenever mouse pointer is moved across screen
canvas.addEventListener("mousemove", (e) => {
    if (isPressed) {
        const x2 = e.offsetX;
        const y2 = e.offsetY;
        drawCircle(x2, y2);
        drawLine(x, y, x2, y2);
        x = x2;
        y = y2;
    }
});

/**
 * This function gets two position on screen as input and draws a line across the two points
 * @author Jeeva Kalaiselvam
 * @param {Number} x1 - X1 position from where the line is to be drawn
 * @param {Number} y1 - Y1 position from where the line is to be drawn
 * @param {Number} x2 - X2 position to where the line is to be drawn
 * @param {Number} y2 - Y2 position to where the line is to be drawn
 */
function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size * 2;
    ctx.stroke();
}

/**
 * This function takes a point as argument and draws a circle with that point as center.
 * @param {Number} x - X coordinate of the center of the circle
 * @param {Number} y - Y coordinate of the center of the circle
 */
function drawCircle(x, y) {
    //Begin the context and draw an arc, In this case with 2PI as input, It will draw a full circle
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

/**
 * This function will clear the canvas
 */
function clear() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

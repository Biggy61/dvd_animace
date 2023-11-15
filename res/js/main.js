const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const logo = new Image();
logo.src = "./res/img/logo.png";

let x = 10;
let y = 10;
let xVelocity = 0.5;
let yVelocity = 0.5;
let height = 40;
let width = 60;


window.addEventListener("resize", () => {
      changeCanvasSize();
});

window.onload = () => {
    changeCanvasSize();
    
    setInterval(() => {
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    if(y + height >= canvas.height || y <= 0){
        yVelocity *= -1;
    }
    if(x + width >= canvas.width || x <=0){
        xVelocity *= -1;
    }

    x += xVelocity;
    y += yVelocity;


    ctx.filter = `hue-rotate(${getRandomNumber(0, 360)}deg)`;
    ctx.drawImage(logo, x, y, width, height);
    ctx.filter = "none";
   
}, 1);
}

const getRandomNumber = (minimum, maximum) => Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;

function changeCanvasSize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

const body = document.querySelector('body')
const buttonCanvas = document.querySelector('.canvas-btn')

buttonCanvas.addEventListener("click", newCanvas)

function newCanvas() {
    const width = 320;
    const height = 320;

    //// creating canvas
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    canvas.classList = 'canvas';
    canvas.style.top = random(0, window.innerHeight - height) + "px";
    canvas.style.left = random(0, window.innerWidth - width) + "px";

    const ctx = canvas.getContext("2d");

    //// rectangle
    for (let i = 0; i < 3; i++) {

        const size = random(20, 80);
        const x = random(50, width - 50) - size / 2
        const y = random(50, width - 50) - size / 2
        ctx.strokeStyle = randomColor()
        ctx.lineWidth = random(2, 7)

        ctx.save()
        ctx.translate(width / 2, height / 2)
        ctx.rotate(random(0, Math.PI * 0.5))
        ctx.translate(width / -2, height / -2)


        ctx.strokeRect(x, y, size, size)
        ctx.restore()

    }

    //// create text
    ctx.font = "40px system-ui";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle"
    ctx.fillStyle = "white"
    ctx.strokeStyle = "black"
    ctx.lineWidth = 4;
    ctx.strokeText("!canvas", width / 2, height / 2);
    ctx.fillText("!canvas", width / 2, height / 2);



    body.appendChild(canvas)

    setTimeout(() => {
        body.removeChild(canvas)
    }, 3000)

}



////////// Utilities


function random(min, max) {
    return min + Math.random() * (max - min);
}

function randomColor() {
    return `hsl(${random(0, 360)} 100% 75% / 0.75)`;
}

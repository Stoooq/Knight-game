import Game from "./modules/Game.js";

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 768

const fps = 20

const fpsDelay = 1000/fps

let time = 0

const game = new Game({
    width: 2 * canvas.width,
    height: canvas.height
})

let prevTimeStamp = 0;

const update = (timeStamp) => {
    requestAnimationFrame(update)
    
    const timeStampDiff = timeStamp - prevTimeStamp || 0;
    prevTimeStamp = timeStamp;
    // console.log(timeStampDiff);
    game.update(timeStampDiff)
}

update()
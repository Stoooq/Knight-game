import Game from "./modules/Game.js";

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
canvas.width = 1024
canvas.height = 576

const game = new Game({
    width: 2 * canvas.width,
    height: canvas.height
})

const update = () => {
    requestAnimationFrame(update)
    c.fillStyle = 'black'
    c.fillRect(0, 0, canvas.width, canvas.height)
    game.update()
}

update()
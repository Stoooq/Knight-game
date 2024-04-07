import Player from "./Player.js";
import Input from "./Input.js";
import Background from "./Background.js";

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

class Game {
    constructor ({ width, height}) {
        this.width = width
        this.height = height
        this.player = new Player({
            position: {
                x: 0,
                y: 100
            },
            velocity: {
                x: 0,
                y: 0
            },
            width: 86,
            height: 118,
            imageSrc: '../assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png',
            scale: 3,
            columns: 10,
            maxFrames: 10,
            offset: {
                x: 130,
                y: 122,
            }
        })
        this.input = new Input()
        this.background = new Background({
            position: {
                x: 0,
                y: 0
            }
        })
    }

    update = () => {
        this.background.update(this.player, this.width)
        this.player.update({
            keys: this.input.keys,
            gameWidth: this.width,
            gameHeight: this.height
        })
    }
}

export default Game
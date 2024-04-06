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
            width: 50,
            height: 100
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
        this.background.update(this.player)
        this.player.update({
            keys: this.input.keys,
            gameWidth: this.width,
            gameHeight: this.height
        })
    }
}

export default Game
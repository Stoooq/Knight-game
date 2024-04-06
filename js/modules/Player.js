import { STATES, Idle, Moving, Jump } from "./PlayerState.js"

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

class Player {
    constructor ({ position, velocity, width, height }) {
        this.position = position
        this.velocity = velocity
        this.width = width
        this.height = height
        this.gravity = 0.25
        this.state = null
        this.states = [new Idle(this), new Moving(this), new Jump(this)]
        this.setState(STATES.MOVING)
        this.previousState = null
        this.onGround = false
        this.fictionPosition = this.position.x
    }

    update = ({ keys, gameWidth, gameHeight }) => {
        console.log(gameWidth);
        this.changeState(keys)
        this.state.input(keys)
        this.draw(gameWidth, gameHeight)
    }

    draw = (gameWidth, gameHeight) => {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
        this.velocity.y += this.gravity
        this.position.y += this.velocity.y
        if (this.position.y + this.height >= canvas.height) {
            this.position.y = canvas.height - this.height
            this.onGround = true
        }
        this.position.x += this.velocity.x
        if (this.fictionPosition >= gameWidth) {
            this.fictionPosition = gameWidth
        }
        if (this.fictionPosition <= 0) {
            this.fictionPosition = 0
        }
        if (this.position.x + this.width >= 0.8 * canvas.width && this.fictionPosition !== gameWidth) {
            this.position.x = 0.8 * canvas.width - this.width
            this.fictionPosition += this.velocity.x
        }
        if (this.position.x + this.width >= canvas.width) {
            this.position.x = canvas.width - this.width
        }
        if (this.position.x <= 0.2 * canvas.width && this.fictionPosition !== 0) {
            this.position.x = 0.2 * canvas.width
            this.fictionPosition += this.velocity.x
        }
        if (this.position.x <= 0) {
            this.position.x = 0
        }
        console.log(this.fictionPosition);
    }

    setState = (state) => {
        this.previousState = this.state
        this.state = this.states[state]
    }

    changeState = (keys) => {
        if (keys.length === 0) {
            this.setState(STATES.IDLE)
        }
        if (keys.includes('ArrowLeft') || keys.includes('ArrowRight')) {
            this.setState(STATES.MOVING)
        }
        if (keys.includes('ArrowUp')) {
            this.setState(STATES.JUMP)
        }
    }
}

export default Player
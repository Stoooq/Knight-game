import { SPRITES, STATES, Idle, Running, Jump, Fall, Crouch, CrouchWalk } from "./PlayerState.js"
import Sprite from "./Sprite.js"

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

class Player extends Sprite {
    constructor ({ position, velocity, width, height, imageSrc, scale = 1, columns = 1, maxFrames = 1, offset = {x: 0, y: 0}, attackBox = { offset: {}, width: 100, height: 50 } }) {
        super({
            position,
            imageSrc,
            scale,
            columns,
            maxFrames,
            offset
        })

        //Player properties
        // this.position = position
        this.velocity = velocity
        this.width = width
        this.height = height
        this.gravity = 0.5
        this.fictionPosition = this.position.x

        //Player state and sprite properties
        this.state = null
        this.states = [new Idle(this), new Running(this), new Jump(this), new Fall(this), new Crouch(this), new CrouchWalk(this)]
        this.setState(STATES.IDLE)
        this.setSprite(SPRITES.IDLE)

        //Player parameters
        this.onGround = false
        this.direction = 1
        this.attacking = false
        this.health = 100
        this.stopped = false

        //Player attackBox
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.x,
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height
        }
    }

    update = ({ keys, gameWidth, gameHeight }) => {
        this.state.input(keys)
        this.draw()
        this.animateFrames()
        this.moving(gameWidth)

        c.fillStyle = 'red'
        // c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        this.attackBox.position.x = this.position.x
        this.attackBox.position.y = this.position.y
    }

    // draw = () => {
    //     c.fillStyle = 'red'
    //     c.fillRect(this.position.x, this.position.y, this.width, this.height)
    // }

    setState = (state) => {
        this.state = this.states[state]
    }

    setSprite = (sprite) => {
        // this.framesCurrent = 0
        this.image.src = sprite.imageSrc
        this.columns = sprite.columns
        this.maxFrames = sprite.maxFrames
    }

    moving = (gameWidth) => {
        if (this.onGround) {
        }
        if (!this.onGround) {
            // this.gravity = 0.5
        }
        console.log(this.stopped);
        if (!this.stopped) {
            this.position.x += this.velocity.x
        }
        this.position.y += this.velocity.y
        this.velocity.y += this.gravity
        
        // if (this.position.y + this.height + this.velocity.y >= canvas.height) {
        //     this.velocity.y = 0
        //     this.onGround = true
        // } else {
        // }

        //Setting positions
        if (this.fictionPosition >= gameWidth) {
            this.fictionPosition = gameWidth
        }
        if (this.fictionPosition <= 0) {
            this.fictionPosition = 0
        }
        if (this.position.x + this.width >= 0.8 * canvas.width && this.fictionPosition !== gameWidth) {
            this.position.x = 0.8 * canvas.width - this.width
            !this.stopped ? this.fictionPosition += this.velocity.x :''
        }
        if (this.position.x + this.width >= canvas.width) {
            this.position.x = canvas.width - this.width
        }
        if (this.position.x <= 0.2 * canvas.width && this.fictionPosition !== 0) {
            this.position.x = 0.2 * canvas.width
            !this.stopped ? this.fictionPosition += this.velocity.x : ''
        }
        if (this.position.x <= 0) {
            this.position.x = 0
        }
        this.stopped = false
    }
}

export default Player
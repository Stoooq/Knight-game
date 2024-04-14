import { SPRITES, STATES, Idle, Running, Jump, Fall, Crouch, CrouchWalk, Attack } from "./PlayerState.js"
import Sprite from "./Sprite.js"
import healthBarImg from '/assets/Pixel UI pack 3/06.png'

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
        this.states = [new Idle(this), new Running(this), new Jump(this), new Fall(this), new Crouch(this), new CrouchWalk(this), new Attack(this)]
        this.setState(STATES.IDLE)
        this.setSprite(SPRITES.IDLE)
        this.previousState

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
                y: this.position.y,
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height
        }

        //Player health bar
        this.healthBar = new Sprite({
            position: {
                x: this.position.x,
                y: this.position.y
            },
            imageSrc: healthBarImg,
            scale: 2,
            columns: 5,
            rows: 15,
            row: 3,
            maxFrames: 1,
            offset: {
                x: 10,
                y: 40
            }
        })
    }

    update = ({ keys, gameWidth, gameHeight }) => {
        this.state.input(keys)
        this.ddraw()
        this.draw()
        this.animateFrames()
        this.moving(gameWidth)

        this.healthBar.draw()
        this.healthBar.animateFrames()
        this.healthBar.position.x = this.position.x
        this.healthBar.position.y = this.position.y

        if (this.attacking) {
            c.fillStyle = 'red'
            // c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }
        this.attackBox.position.x = this.position.x
        this.attackBox.position.y = this.position.y
    }

    ddraw = () => {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    setState = (state) => {
        this.previousState = this.state
        this.state = this.states[state]
    }

    setSprite = (sprite) => {
        this.image.src = sprite.imageSrc
        this.columns = sprite.columns
        this.maxFrames = sprite.maxFrames
    }

    moving = (gameWidth) => {
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

    attack = () => {
        this.attacking = true
        setTimeout(() => {
            this.attacking = false
        }, 100)
    }
}

export default Player
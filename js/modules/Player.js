import { SPRITES, STATES, Idle, Running, Jump, Fall, Crouch, CrouchWalk, Slide, Attack, AttackWalk } from "./PlayerState.js"
import Sprite from "./Sprite.js"
import healthBarImg from '/assets/healthBar/greyHealthBar.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

class Player extends Sprite {
    constructor ({ position, velocity, width, height, imageSrc, scale = 1, columns = 1, maxFrames = 1, attackBox = { offset: {}, width: 150, height: 120 } }) {
        super({
            position,
            imageSrc,
            scale,
            columns,
            maxFrames
        })

        //Player properties
        this.velocity = velocity
        this.width = width
        this.height = height
        this.gravity = 0.5
        this.fictionPosition = this.position.x

        //Player state and sprite properties
        this.state = null
        this.states = [new Idle(this), new Running(this), new Jump(this), new Fall(this), new Crouch(this), new CrouchWalk(this), new Slide(this), new Attack(this), new AttackWalk(this)]
        this.setState(STATES.IDLE)
        this.setSprite(SPRITES.IDLE)
        this.previousState

        //Player parameters
        this.onGround = false
        this.direction = 1
        this.attacking = false
        this.health = 100
        this.stopped = false
        this.attackFrames = 0
        this.attackRate = 20
        this.attackClock = 0

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

        // Player health bar
        this.healthBar = new Sprite({
            position: {
                x: this.position.x,
                y: this.position.y
            },
            imageSrc: healthBarImg,
            scale: 2,
            columns: 5,
            maxFrames: 1,
            width: 64,
        })
    }

    update = ({ keys, gameWidth, gameHeight, checkCollision, frames }) => {
        if (this.attackClock / 5 >= 1) {
            this.attackClock = 0
            this.attackFrames++
        }
        this.attackClock++
        // console.log(this.attackClock, this.attackFrames);
        // this.attackFrames = frames
        this.state.input(keys)
        this.state.update()
        this.ddraw()
        this.animateFrames()
        this.draw()
        checkCollision()
        this.moving(gameWidth)
        this.checkHealth()

        this.healthBar.draw()
        this.healthBar.animateFrames()
        this.healthBar.position.x = this.position.x
        this.healthBar.position.y = this.position.y - 32

        if (this.attacking) {
            // c.fillStyle = 'red'
            // c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }
        this.direction === 1 ? this.attackBox.position.x = this.position.x + this.width / 2 : this.attackBox.position.x = this.position.x + this.width / 2 - this.attackBox.width
        this.attackBox.position.y = this.position.y
    }

    ddraw = () => {
        c.fillStyle = 'red'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    setState = (state) => {
        this.previousState = this.state
        this.state = this.states[state]
        if (this.previousState !== this.state) {
            this.framesCurrent = 0
        }
        // this.state.reset()
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

        // console.log(this.fictionPosition, this.position.x);
        

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
        // this.position.x = Math.round(this.position.x)
    }

    attack = () => {
        this.attacking = true
        this.attackFrames = 0
        // if (this.attackFrames - this.attackClock < this.attackRate) return
        // this.attackClock = this.attackFrames
        // console.log("koniec atak");
        // this.attacking = false
    }

    takeDamage = () => {
        this.health -= 25
    }

    checkHealth = () => {
        if (this.health < 100) {
            this.healthBar.framesCurrent = 1
        }
        if (this.health < 75) {
            this.healthBar.framesCurrent = 2
        }
        if (this.health < 50) {
            this.healthBar.framesCurrent = 3
        }
        if (this.health < 25) {
            this.healthBar.framesCurrent = 4
        }
    }
}

export default Player
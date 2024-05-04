import { SPRITES, STATES, Idle, Running, Attack, Death  } from "./EnemyState.js"
import Sprite from "./Sprite.js"
import healthBarImg from '/assets/healthBar/blueHealthBar.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

class Enemy extends Sprite {
    constructor ({ position, velocity, width, height, imageSrc, scale = 1, columns = 1, maxFrames = 1, 
    attackBox = { offset: {}, width: 35, height: 35 } }) {
        super({
            position,
            imageSrc,
            scale,
            columns,
            maxFrames
        })
        // this.position = position
        this.velocity = velocity
        this.width = width
        this.height = height
        this.gravity = 0.5
        this.onGround = false
        this.stopped = false
        this.direction = 1
        this.health = 100
        this.attacking = false
        this.dead = false
        this.frames = 0
        this.attackRate = 20
        this.attackClock = 0
        this.playerOnEnemyCollision = false

        this.state = null
        this.states = [new Idle(this), new Running(this), new Attack(this), new Death(this)]
        this.setState(STATES.IDLE)
        this.setSprite(SPRITES.IDLE)
        this.previousState = this.state

        //Enemy attackBox
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y,
            },
            offset: attackBox.offset,
            width: attackBox.width,
            height: attackBox.height
        }

        // Enemy health bar
        this.healthBar = new Sprite({
            position: {
                x: this.position.x,
                y: this.position.y
            },
            imageSrc: healthBarImg,
            scale: 2,
            columns: 5,
            maxFrames: 1,
            width: 64
        })
    }

    update = ({ keys, player, checkCollision, frames, enemies, playerOnEnemy }) => {
        this.playerOnEnemyCollision = playerOnEnemy(player, this)
        this.frames = frames
        this.state.input(this, enemies)
        // this.ddraw()
        this.draw()
        if (!this.dead) {
            this.animateFrames()
        }
        checkCollision(this)
        this.moving(player.position.x, player.state, player.width, player.velocity.x, player.stopped)
        this.checkHealth()

        // if (this.attacking) {
        //     c.fillStyle = 'blue'
        //     c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        // }
        this.direction === -1 ? this.attackBox.position.x = this.position.x + this.width / 2 : this.attackBox.position.x = this.position.x + this.width / 2 - this.attackBox.width
        this.attackBox.position.y = this.position.y

        this.healthBar.draw()
        this.healthBar.animateFrames()
        this.healthBar.position.x = this.position.x
        this.healthBar.position.y = this.position.y - 32
    }

    ddraw = () => {
        c.fillStyle = 'green'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    setState = (state) => {
        this.previousState = this.state
        // if (this.previousState !== this.state) {
        this.state = this.states[state]
        this.state.onSetState()
        // }
    }

    setSprite = (sprite) => {
        this.image.src = sprite.imageSrc
        this.columns = sprite.columns
        this.maxFrames = sprite.maxFrames
    }
    
    moving = (pPosX, pState, pWidth, pVelX, pStop) => {
        if (pPosX === 0.8 * canvas.width - pWidth && (pState.state !== 'IDLE' || pState.state !== 'CROUCH') && !pStop) {
            this.position.x = this.position.x - pVelX
        }
        if (pPosX === 0.2 * canvas.width && (pState.state !== 'IDLE' || pState.state !== 'CROUCH') && !pStop) {
            this.position.x = this.position.x - pVelX
        }
        if (!this.stopped) {
            this.position.x += this.velocity.x
        }
        this.position.y += this.velocity.y
        this.velocity.y += this.gravity

        this.stopped = false
    }

    isAbleToAttack = () => {
        return this.frames - this.attackClock > this.attackRate
    }

    attack = () => {
        this.attacking = true
        this.attackClock = this.frames
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

export default Enemy
import Sprite from "./Sprite.js"
import healthBarImg from '/assets/healthBar/blueHealthBar.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

class Enemy extends Sprite {
    constructor ({ position, velocity, width, height, imageSrc, scale = 1, columns = 1, maxFrames = 1 }) {
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

    update = ({ player, checkCollision }) => {
        this.ddraw()
        this.draw()
        this.animateFrames()
        checkCollision()
        this.moving(player.position.x, player.state, player.width, player.velocity.x, player.stopped)
        this.checkHealth()

        this.healthBar.draw()
        this.healthBar.animateFrames()
        this.healthBar.position.x = this.position.x
        this.healthBar.position.y = this.position.y - 32
    }

    ddraw = () => {
        c.fillStyle = 'green'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
    
    moving = (pPosX, pState, pWidth, pVelX, pStop) => {
        // console.log(pStop);
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
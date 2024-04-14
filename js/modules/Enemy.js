import Sprite from "./Sprite.js"
import healthBarImg from '/assets/Pixel UI pack 3/06.png'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

class Enemy extends Sprite {
    constructor ({ position, velocity, width, height, imageSrc, scale = 1, columns = 1, rows = 1, row = 0, maxFrames = 1, offset = {x: 0, y: 0} }) {
        super({
            position,
            imageSrc,
            scale,
            columns,
            rows,
            row,
            maxFrames,
            offset
        })
        // this.position = position
        this.velocity = velocity
        this.width = width
        this.height = height
        this.gravity = 0.5
        this.onGround = false

        //Enemy health bar
        this.healthBar = new Sprite({
            position: {
                x: this.position.x,
                y: this.position.y
            },
            imageSrc: healthBarImg,
            scale: 2,
            columns: 5,
            rows: 15,
            row: 1,
            maxFrames: 1,
            offset: {
                x: 10,
                y: 40
            }
        })
    }

    update = () => {
        this.draw()
        this.animateFrames()
        this.moving()

        this.healthBar.draw()
        this.healthBar.animateFrames()
        this.healthBar.position.x = this.position.x
        this.healthBar.position.y = this.position.y
    }

    // draw = () => {
    //     c.fillStyle = 'green'
    //     c.fillRect(this.position.x, this.position.y, this.width, this.height)
    // }
    
    moving = () => {
        this.position.x += this.velocity.x
        this.position.y += this.velocity.y
        this.velocity.y += this.gravity
    }
}

export default Enemy
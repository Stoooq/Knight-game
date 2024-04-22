const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

class Sprite {
    constructor ({ position, imageSrc, scale = 1, columns = 1, maxFrames = 1, framesCurrent = 0, width, height }) {
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.columns = columns
        this.maxFrames = maxFrames
        this.framesCurrent = framesCurrent
        this.framesElapsed = 0
        this.framesHold = 5
        this.width = width
        this.height = height
    }

    update = () => {
        this.draw()
        this.animateFrames()
    }

    draw = () => {
        let frameWidth = (this.image.width / this.columns)
        let direction = this.direction || 1

        c.save()
        c.scale(direction, 1)
        c.drawImage(this.image, 
            this.framesCurrent * frameWidth, 
            0, 
            this.image.width / this.columns, 
            this.image.height, 
            (direction * (this.position.x + this.width / 2) - frameWidth / 2 * this.scale), 
            this.position.y - this.image.height / 2 * this.scale, 
            frameWidth * this.scale, 
            this.image.height * this.scale)

        //Helping image offset
        // c.fillStyle = 'rgba(0, 0, 0, 0.5)'
        // c.fillRect((direction * (this.position.x + this.width / 2) - frameWidth / 2 * this.scale), this.position.y - this.image.height / 2 * this.scale, frameWidth * this.scale, this.image.height * this.scale)

        c.restore()
    }

    animateFrames = () => {
        this.framesElapsed++
        if (this.framesCurrent < this.maxFrames - 1) {
            if (this.framesElapsed % this.framesHold === 0) {
                this.framesCurrent++
            }
        } else {
            this.framesCurrent = 0
        }
    }
}

export default Sprite
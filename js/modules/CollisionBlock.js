const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

class CollisionBlock {
    constructor ({ position }) {
        this.position = position
        this.width = 64
        this.height = 64
        this.collisionBlocks = []
    }

    draw = () => {
        c.fillStyle = 'rgb(255, 0, 0, 0.3)'
        c.fillRect(this.position.x, this.position.y, this.width, this.height)
    }
}

export default CollisionBlock
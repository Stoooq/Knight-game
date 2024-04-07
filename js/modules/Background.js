const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

class Background {
    constructor ({ position }) {
        this.position = position
        this.image1 = new Image()
        this.image1.src = '../assets/oak_woods_v1.0/background/background_layer_1.png'
        this.image2 = new Image()
        this.image2.src = '../assets/oak_woods_v1.0/background/background_layer_2.png'
        this.image3 = new Image()
        this.image3.src = '../assets/oak_woods_v1.0/background/background_layer_3.png'
        this.positionX1 = 0
        this.positionX2 = 0
        this.positionX3 = 0
        c.msImageSmoothingEnabled = false;
        c.mozImageSmoothingEnabled = false;
        c.webkitImageSmoothingEnabled = false;
        c.imageSmoothingEnabled = false;
    }

    update = (player, gameWidth) => {
        this.draw(player.position.x, player.state, player.fictionPosition, player.width, gameWidth)
    }

    draw = (pPosX, pState, pFicPosX, pWidth, gameWidth) => {
        // const gameImages = Math.round(gameWidth / canvas.width)
        if (pPosX === 0.8 * canvas.width - pWidth && pState.state !== 'IDLE') {
            this.positionX1 = -pPosX + 0.8 * canvas.width - pWidth - 0.2 * pFicPosX
            this.positionX2 = -pPosX + 0.8 * canvas.width - pWidth - 0.5 * pFicPosX
            this.positionX3 = -pPosX + 0.8 * canvas.width - pWidth - 0.8 * pFicPosX
        }
        if (pPosX === 0.2 * canvas.width && pState.state !== 'IDLE') {
            this.positionX1 = -pPosX + 0.2 * canvas.width - 0.2 * pFicPosX
            this.positionX2 = -pPosX + 0.2 * canvas.width - 0.5 * pFicPosX
            this.positionX3 = -pPosX + 0.2 * canvas.width - 0.8 * pFicPosX
        }
        // let cos = this.positionX3
        // for (let i = 1; i < gameImages; i++) {
        //     if (pFicPosX > i * canvas.width) {
        //         cos += i * canvas.width
        //     }
        // }
        c.drawImage(this.image1, this.positionX1, 0, canvas.width, canvas.height)
        c.drawImage(this.image1, this.positionX1 + canvas.width, 0, canvas.width, canvas.height)
        c.drawImage(this.image2, this.positionX2, 0, canvas.width, canvas.height)
        c.drawImage(this.image2, this.positionX2 + canvas.width, 0, canvas.width, canvas.height)
        c.drawImage(this.image3, this.positionX3, 0, canvas.width, canvas.height)
        c.drawImage(this.image3, this.positionX3 + canvas.width, 0, canvas.width, canvas.height)
    }
}

export default Background
import Sprite from "./Sprite"
import arrowUpImg from "/assets/keys/arrowUp.png"
import arrowUpPressedImg from "/assets/keys/arrowUpPressed.png"
import arrowLeftImg from "/assets/keys/arrowLeft.png"
import arrowLeftPressedImg from "/assets/keys/arrowLeftPressed.png"
import arrowDownImg from "/assets/keys/arrowDown.png"
import arrowDownPressedImg from "/assets/keys/arrowDownPressed.png"
import arrowRightImg from "/assets/keys/arrowRight.png"
import arrowRightPressedImg from "/assets/keys/arrowRightPressed.png"
import spaceImg from "/assets/keys/space.png"
import spacePressedImg from "/assets/keys/spacePressed.png"
import skillBoxImg from "/assets/keys/skillBox.png"

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const margin = 64

class RenderKeys{
    constructor ({ position, width, height }) {
        this.position = position
        this.width = width
        this.height = height
        this.arrowLeft = new Sprite({
            position: {
                x: this.position.x + margin * 3,
                y: this.position.y + margin
            },
            width: 64,
            height: 64,
            imageSrc: arrowLeftImg,
            scale: 4,
            offset: {
                x: 0,
                y: 0
            }
        })
        this.arrowUp = new Sprite({
            position: {
                x: this.position.x + margin * 4,
                y: this.position.y + margin
            },
            width: 64,
            height: 64,
            imageSrc: arrowUpImg,
            scale: 4,
            offset: {
                x: 0,
                y: 0
            }
        })
        this.arrowDown = new Sprite({
            position: {
                x: this.position.x + margin * 5,
                y: this.position.y + margin
            },
            width: 64,
            height: 64,
            imageSrc: arrowDownImg,
            scale: 4,
            offset: {
                x: 0,
                y: 0
            }
        })
        this.arrowRight = new Sprite({
            position: {
                x: this.position.x + margin * 6,
                y: this.position.y + margin
            },
            width: 64,
            height: 64,
            imageSrc: arrowRightImg,
            scale: 4,
            offset: {
                x: 0,
                y: 0
            }
        })
        this.space = new Sprite({
            position: {
                x: this.position.x + margin * 7,
                y: this.position.y + margin
            },
            width: 128,
            height: 64,
            imageSrc: spaceImg,
            scale: 4,
            offset: {
                x: 0,
                y: 0
            }
        })
        this.skillBoxAttack1 = new Sprite({
            position: {
                x: this.position.x + margin * 10,
                y: this.position.y + margin
            },
            width: 64,
            height: 64,
            imageSrc: skillBoxImg,
            scale: 2,
            offset: {
                x: 0,
                y: 0
            }
        })
        this.skillBoxAttack2 = new Sprite({
            position: {
                x: this.position.x + margin * 12,
                y: this.position.y + margin
            },
            width: 64,
            height: 64,
            imageSrc: skillBoxImg,
            scale: 2,
            offset: {
                x: 0,
                y: 0
            }
        })
    }

    update = (keys) => {
        this.checkPressedKey(keys)
        // this.ddraw()
        this.arrowUp.draw()
        this.arrowUp.animateFrames()
        this.arrowLeft.draw()
        this.arrowLeft.animateFrames()
        this.arrowDown.draw()
        this.arrowDown.animateFrames()
        this.arrowRight.draw()
        this.arrowRight.animateFrames()
        this.space.draw()
        this.space.animateFrames()

        this.skillBoxAttack1.draw()
        this.skillBoxAttack1.animateFrames()
        this.skillBoxAttack2.draw()
        this.skillBoxAttack2.animateFrames()
    }

    // ddraw = () => {
    //     c.fillStyle = 'red'
    //     c.fillRect(this.position.x, this.position.y, this.width, this.height)
    // }

    checkPressedKey = (keys) => {
        if (keys.includes('ArrowUp')) {
            this.arrowUp.image.src = arrowUpPressedImg
        } else {
            this.arrowUp.image.src = arrowUpImg
        }
        if (keys.includes('ArrowLeft')) {
            this.arrowLeft.image.src = arrowLeftPressedImg
        } else {
            this.arrowLeft.image.src = arrowLeftImg
        }
        if (keys.includes('ArrowDown')) {
            this.arrowDown.image.src = arrowDownPressedImg
        } else {
            this.arrowDown.image.src = arrowDownImg
        }
        if (keys.includes('ArrowRight')) {
            this.arrowRight.image.src = arrowRightPressedImg
        } else {
            this.arrowRight.image.src = arrowRightImg
        }
        if (keys.includes('Space')) {
            this.space.image.src = spacePressedImg
        } else {
            this.space.image.src = spaceImg
        }
    }
}

export default RenderKeys
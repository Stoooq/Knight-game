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
import brozneCoinImg from "/assets/coins/bronzeCoin.png"
import ironCoinImg from "/assets/coins/ironCoin.png"
import silverCoinImg from "/assets/coins/silverCoin.png"
import goldCoinImg from "/assets/coins/goldCoin.png"

const coins = [
    { name: 'bronze', img: brozneCoinImg },
    { name: 'iron', img: ironCoinImg },
    { name: 'silver', img: silverCoinImg },
    { name: 'gold', img: goldCoinImg }
]

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')
const margin = 64

let score = 1

class RenderKeys{
    constructor ({ position, width, height }) {
        this.position = position
        this.width = width
        this.height = height
        this.addScore = false
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
        this.skillBoxAttack = new Sprite({
            position: {
                x: this.position.x + margin * 9,
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
        this.scoreArray = []
        this.score1 = new Sprite({
            position: {
                x: this.position.x + margin * 10,
                y: this.position.y + margin - 16
            },
            width: 32,
            height: 32,
            imageSrc: brozneCoinImg,
            scale: 2,
            columns: 6,
            maxFrames: 6,
            offset: {
                x: 0,
                y: 0
            }
        })
        this.score2 = new Sprite({
            position: {
                x: this.position.x + margin * 10,
                y: this.position.y + margin + 16
            },
            width: 32,
            height: 32,
            imageSrc: brozneCoinImg,
            scale: 2,
            columns: 6,
            maxFrames: 6,
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

        // this.skillBoxAttack.draw()
        // this.skillBoxAttack.animateFrames()

        this.scoreArray.forEach(score => {
            score.draw()
            score.animateFrames()
        })
        
        if (this.addScore) {
            const newCoin = this.createNewCoin(coins[0].name, coins[0].img)
            this.scoreArray.push(newCoin)
            this.updateCoinPosition()
        }

        for (let coin in coins) {
            if (this.scoreArray.filter(x => x.name === 'gold').length === 3) {
                return
            }
            if (this.scoreArray.filter(x => x.name === coins[coin].name).length === 3) {
                let firstCoin = this.scoreArray.find(el => el.name === coins[coin].name)
                this.scoreArray.splice(this.scoreArray.indexOf(firstCoin), 3)
                const newCoin = this.createNewCoin(coins[Number(coin) + 1].name, coins[Number(coin) + 1].img)
                this.scoreArray.push(newCoin)
                this.updateCoinPosition()
            }
        }
    }

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

    updateCoinPosition = () => {
        this.scoreArray.forEach(coin => {
            let newPosition = {
                x: 0,
                y: 0
            }
            switch (this.scoreArray.indexOf(coin)) {
                case 0: {
                    coin.position.x = this.position.x + margin * 10
                    coin.position.y = this.position.y + margin - 16
                    this.addScore = false
                    break
                }
                case 1: {
                    coin.position.x = this.position.x + margin * 10.5
                    coin.position.y = this.position.y + margin - 16
                    this.addScore = false
                    break
                }
                case 2: {
                    coin.position.x = this.position.x + margin * 11
                    coin.position.y = this.position.y + margin - 16
                    this.addScore = false
                    break
                }
                case 3: {
                    coin.position.x = this.position.x + margin * 11.5
                    coin.position.y = this.position.y + margin - 16
                    this.addScore = false
                    break
                }
                case 4: {
                    coin.position.x = this.position.x + margin * 12
                    coin.position.y = this.position.y + margin - 16
                    this.addScore = false
                    break
                }
                case 5: {
                    coin.position.x = this.position.x + margin * 10
                    coin.position.y = this.position.y + margin + 16
                    this.addScore = false
                    break
                }
                case 6: {
                    coin.position.x = this.position.x + margin * 10.5
                    coin.position.y = this.position.y + margin + 16
                    this.addScore = false
                    break
                }
                case 7: {
                    coin.position.x = this.position.x + margin * 11
                    coin.position.y = this.position.y + margin +16
                    break
                }
                case 8: {
                    coin.position.x = this.position.x + margin * 11.5
                    coin.position.y = this.position.y + margin + 16
                    break
                }
                case 9: {
                    coin.position.x = this.position.x + margin * 12
                    coin.position.y = this.position.y + margin + 16
                    this.addScore = false
                    break
                }
            }
        })
    }

    createNewCoin = (name, img) => {
        const newScore = new Sprite({
            position: {
                x: 0,
                y: 0
            },
            width: 32,
            height: 32,
            imageSrc: img,
            scale: 2,
            columns: 6,
            maxFrames: 6,
            offset: {
                x: 0,
                y: 0
            }
        })
        newScore.name = name
        return newScore
    }
}

export default RenderKeys
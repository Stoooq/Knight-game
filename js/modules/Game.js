import Player from "./Player.js";
import Input from "./Input.js";
import Background from "./Background.js";
import CollisionBlock from "./CollisionBlock.js";
import { arrayParse2D, checkPlayerCollision, checkPlayerEnemyPosition } from "../utils.js";
import { collisions } from "../data/collisions.js"
import Enemy from "./Enemy.js";

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

class Game {
    constructor ({ width, height}) {
        this.width = width
        this.height = height
        this.player = new Player({
            position: {
                x: 0,
                y: 100
            },
            velocity: {
                x: 0,
                y: 0
            },
            width: 66,
            height: 114,
            imageSrc: '../assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png',
            scale: 3,
            maxFrames: 10,
            offset: {
                x: 130,
                y: 125,
            }
        })
        this.input = new Input()
        this.background = new Background({
            position: {
                x: 0,
                y: 0
            }
        })
        this.collisionBlocks = []
        this.parsedCollisions = arrayParse2D(collisions)
        this.parsedCollisions.forEach((row, posY) => {
            row.forEach((number, posX) => {
                if (number === 579) {
                    this.collisionBlocks.push(new CollisionBlock({
                    position: {
                        x: posX * 64,
                        y: posY * 64
                    }
                    }))
                }
            })
        })
        this.enemy = new Enemy({
            position: {
                x: 300,
                y: 200
            },
            velocity: {
                x: 0,
                y: 0
            },
            width: 75,
            height: 45,
            imageSrc: '../assets/Slime/slime-Sheet.png',
            scale: 3,
            columns: 8,
            rows: 3,
            maxFrames: 8,
            offset: {
                x: 10,
                y: 26
            }
        })
    }

    update = () => {
        checkPlayerCollision(this.player, this.collisionBlocks)
        checkPlayerCollision(this.enemy, this.collisionBlocks)
        checkPlayerEnemyPosition(this.player, this.enemy)
        this.background.update(this.player, this.width, this.collisionBlocks)
        this.player.update({
            keys: this.input.keys,
            gameWidth: this.width,
            gameHeight: this.height
        })
        this.enemy.update()
        this.collisionBlocks.forEach(block => {
            block.draw()
        })
    }
}

export default Game
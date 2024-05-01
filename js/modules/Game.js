import Player from "./Player.js";
import Input from "./Input.js";
import Background from "./Background.js";
import CollisionBlock from "./CollisionBlock.js";
import { arrayParse2D, checkPlayerCollision, checkPlayerEnemyPosition, rectangularCollision } from "../utils.js";
import { collisions } from "../data/collisions.js"
import Enemy from "./Enemy.js";
import playerImg from '/assets/knight/_Idle.png'
import enemyImg from '/assets/slime/slimeIdle.png'
import RenderKeys from "./RenderKeys.js";

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
            width: 70,
            height: 119,
            imageSrc: playerImg,
            scale: 3,
            maxFrames: 10
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
        this.newEnemyDelay = 20
        this.newEnemyClock = 0
        this.enemies = []
        this.enemy = new Enemy({
            position: {
                x: 300,
                y: 200
            },
            velocity: {
                x: 0,
                y: 0
            },
            width: 70,
            height: 35,
            imageSrc: enemyImg,
            scale: 3,
            columns: 8,
            maxFrames: 8
        })
        this.renderKeys = new RenderKeys({
            position: {
                x: 0,
                y: 576
            },
            width: 1024,
            height: 144
        })
    }

    checkPlayerCollision = () => {
        checkPlayerCollision(this.player, this.collisionBlocks)
        if (rectangularCollision(this.player, this.enemy) && this.player.attacking && this.player.framesCurrent === 3) {
            this.player.attacking = false
            this.enemy.takeDamage()
            this.renderKeys.addScore = true
        }
    }

    checkEnemyCollision = () => {
        checkPlayerCollision(this.enemy, this.collisionBlocks)
        checkPlayerEnemyPosition(this.player, this.enemy)
        if (rectangularCollision(this.enemy, this.player) && this.enemy.attacking && this.enemy.framesCurrent === 3) {
            this.enemy.attacking = false
            this.player.takeDamage()
        }
    }

    renderEnemies = (frames) => {
        if (frames - this.newEnemyClock > Math.round(this.newEnemyDelay)) {
            const newEnemy = new Enemy({
                position: {
                    x: 300,
                    y: 200
                },
                velocity: {
                    x: 0,
                    y: 0
                },
                width: 70,
                height: 35,
                imageSrc: enemyImg,
                scale: 3,
                columns: 8,
                maxFrames: 8
            })
            this.enemies.push(newEnemy)
            this.newEnemyClock = frames
            this.newEnemyDelay = 2/Math.log(frames) * 200, frames
        }
    }

    update = (frames) => {
        this.background.update(this.player, this.width, this.collisionBlocks)
        this.player.update({
            keys: this.input.keys,
            gameWidth: this.width,
            gameHeight: this.height,
            checkCollision: this.checkPlayerCollision,
            frames: frames
        })
        this.enemies.forEach(enemy => {
            enemy.update({
                keys: this.input.keys,
                player: this.player,
                checkCollision: this.checkEnemyCollision,
                frames: frames
            })
        })
        // this.renderEnemies(frames)
        this.enemy.update({
            keys: this.input.keys,
            player: this.player,
            checkCollision: this.checkEnemyCollision,
            frames: frames
        })
        this.collisionBlocks.forEach(block => {
            block.draw()
        })
        this.renderKeys.update(this.input.keys)
    }
}

export default Game
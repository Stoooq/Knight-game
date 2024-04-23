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
        if (rectangularCollision(this.player, this.enemy) && this.player.attacking && this.player.framesCurrent === 6) {
            // console.log("cos");
            this.player.attacking = false
            this.enemy.takeDamage()
        }
        // let collision = checkPlayerCollision(this.player, this.collisionBlocks)
        // switch (collision) {
        //     case 1:
        //         console.log('bottom');
        //         break
        // }
    }
    checkEnemyCollision = () => {
        checkPlayerCollision(this.enemy, this.collisionBlocks)
        checkPlayerEnemyPosition(this.player, this.enemy)
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
        this.enemy.update({ 
            player: this.player,
            checkCollision: this.checkEnemyCollision
        })
        this.collisionBlocks.forEach(block => {
            block.draw()
        })
        this.renderKeys.update(this.input.keys)
    }
}

export default Game
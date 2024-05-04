import idle from '/assets/slime/slimeIdle.png'
import attack from '/assets/slime/slimeAttack.png'
import death from '/assets/slime/slimeDeath.png'

const SPRITES = {
    IDLE: {
        imageSrc: idle,
        columns: 8,
        maxFrames: 8
    },
    ATTACK: {
        imageSrc: attack,
        columns: 8,
        maxFrames: 8
    },
    DEATH: {
        imageSrc: death,
        columns: 8,
        maxFrames: 8
    }
}

const STATES = {
    IDLE: 0,
    RUNNING: 1,
    ATTACK: 2,
    DEATH: 3
}

class State {
    constructor ({ enemy, state }) {
        this.enemy = enemy
        this.state = state
    }

    checkDeath = () => {
        if (this.enemy.health <= 0) {
            this.enemy.setState(STATES.DEATH)
        }
    }

    onSetState = () => {}
}

class Idle extends State {
    constructor (enemy) {
        super ({
            enemy,
            state: 'IDLE'
        })
    }

    input = () => {
        this.enemy.setState(STATES.IDLE)
        this.enemy.setSprite(SPRITES.IDLE)
        if (this.enemy.onGround) {
            this.enemy.setState(STATES.RUNNING)
        }
        this.checkDeath()
    }
}

class Running extends State {
    constructor (enemy) {
        super ({
            enemy,
            state: 'RUNNING'
        })
    }

    input = () => {
        this.enemy.setState(STATES.RUNNING)
        this.enemy.setSprite(SPRITES.IDLE)
        console.log(this.enemy.isAbleToAttack());
        if (this.enemy.playerOnEnemyCollision && this.enemy.isAbleToAttack()) {
            this.enemy.setState(STATES.ATTACK)
        }
        this.checkDeath()
    }
}

class Attack extends State {
    constructor (enemy) {
        super ({
            enemy,
            state: 'ATTACK'
        })
    }

    onSetState = () => {
        this.enemy.attack()
    }

    input = () => {
        this.enemy.velocity.x = 0
        this.enemy.setState(STATES.ATTACK)
        this.enemy.setSprite(SPRITES.ATTACK)
        if (this.enemy.framesCurrent >= this.enemy.maxFrames - 1) {
            this.enemy.setState(STATES.IDLE)
            this.enemy.attacking = false
        }
    }
}

class Death extends State {
    constructor (enemy) {
        super ({
            enemy,
            state: 'DEATH'
        })
    }

    onSetState = () => {
        this.enemy.attack()
    }

    input = (enemy, enemies) => {
        this.enemy.setState(STATES.DEATH)
        this.enemy.setSprite(SPRITES.DEATH)
        if (this.enemy.framesCurrent >= this.enemy.maxFrames - 1) {
            this.enemy.dead = true
            enemies.splice(enemies.indexOf(enemy), 1)
        }
    }
}

export { SPRITES ,STATES, Idle, Running, Attack, Death }
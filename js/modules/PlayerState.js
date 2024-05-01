import idle from '/assets/knight/_Idle.png'
import run from '/assets/knight/_Run.png'
import jump from '/assets/knight/_Jump.png'
import fall from '/assets/knight/_Fall.png'
import crouch from '/assets/knight/_Crouch.png'
import crouchWalk from '/assets/knight/_CrouchWalk.png'
import slide from '/assets/knight/_Slide.png'
import attack from '/assets/knight/_AttackNoMovement.png'
import attackWalk from '/assets/knight/_Attack2NoMovement.png'

const SPRITES = {
    IDLE: {
        imageSrc: idle,
        columns: 10,
        maxFrames: 10
    },
    RUNNING: {
        imageSrc: run,
        columns: 10,
        maxFrames: 10
    },
    JUMP: {
        imageSrc: jump,
        columns: 3,
        maxFrames: 3
    },
    FALL: {
        imageSrc: fall,
        columns: 3,
        maxFrames: 3
    },
    CROUCH: {
        imageSrc: crouch,
        columns: 1,
        maxFrames: 1
    },
    CROUCHWALK: {
        imageSrc: crouchWalk,
        columns: 8,
        maxFrames: 8
    },
    SLIDE: {
        imageSrc: slide,
        columns: 2,
        maxFrames: 2
    },
    ATTACK: {
        imageSrc: attack,
        columns: 4,
        maxFrames: 4
    },
    ATTACKWALK: {
        imageSrc: attackWalk,
        columns: 6,
        maxFrames: 6
    }
}

const STATES = {
    IDLE: 0,
    RUNNING: 1,
    JUMP: 2,
    FALL: 3,
    CROUCH: 4,
    CROUCHWALK: 5,
    SLIDE: 6,
    ATTACK: 7,
    ATTACKWALK: 8
}

class State {
    constructor ({ player, state }) {
        this.player = player
        this.state = state
    }

    onSetState = () => {

    }
}

class Fly extends State {
    constructor (...args) {
        super (...args)
    }

    flyInput = (keys) => {
        if (keys.includes('ArrowRight')) { 
            this.player.velocity.x = 5
            this.player.direction = 1
        }
        if (keys.includes('ArrowLeft')) { 
            this.player.velocity.x = -5
            this.player.direction = -1
        }
        if (!keys.includes('ArrowRight') && !keys.includes('ArrowLeft')) {
            this.player.velocity.x = 0
        }
    }
}

class Idle extends State {
    constructor (player) {
        super ({
            player,
            state: 'IDLE'
        })
    }

    input = (keys) => {
        if (keys.length === 0) {
            this.player.setState(STATES.IDLE)
            this.player.setSprite(SPRITES.IDLE)
            this.player.velocity.x = 0
            this.player.crouching = false
            this.player.onGround
        }
        if (keys.includes('ArrowRight')) {
                this.player.setState(STATES.RUNNING)
        }
        if (keys.includes('ArrowLeft')) { 
            this.player.setState(STATES.RUNNING)
        }
        if (keys.includes('ArrowUp') && this.player.onGround) {
            this.player.setState(STATES.JUMP)
        }
        if (keys.includes('ArrowDown')) {
            this.player.setState(STATES.CROUCH)
        }
        if (keys.includes('Space') && this.player.isAbleToAttack()) {
            this.player.setState(STATES.ATTACKWALK)
        }
        if (this.player.velocity.y > 1) {
            this.player.setState(STATES.FALL)
        }
    }
}

class Running extends State {
    constructor (player) {
        super ({
            player,
            state: 'RUNNING'
        })
    }

    input = (keys) => {
        if (keys.includes('ArrowRight')) {
            this.player.setState(STATES.RUNNING)
            this.player.setSprite(SPRITES.RUNNING)
            this.player.velocity.x = 5 * this.player.direction
            this.player.direction = 1
        }
        if (keys.includes('ArrowLeft')) { 
            this.player.setState(STATES.RUNNING)
            this.player.setSprite(SPRITES.RUNNING)
            this.player.velocity.x = 5 * this.player.direction
            this.player.direction = -1
        }
        if (keys.includes('ArrowUp') && this.player.onGround) {
            this.player.setState(STATES.JUMP)
        }
        if (keys.includes('ArrowDown') && this.player.onGround) {
            this.player.setState(STATES.SLIDE)
        }
        if (keys.includes('Space') && this.player.isAbleToAttack()) {
            this.player.setState(STATES.ATTACKWALK)
        }
        if (keys.length === 0) { 
            this.player.setState(STATES.IDLE)
        }
    }
}

class Jump extends Fly {
    constructor (player) {
        super ({
            player,
            state: 'JUMP'
        })
    }

    input = (keys) => {
        if (keys.includes('ArrowUp') && this.player.onGround) {
            this.player.setState(STATES.JUMP)
            this.player.setSprite(SPRITES.JUMP)
            this.player.velocity.y = -15
            this.player.onGround = false
        }
        if(this.player.velocity.y > 0) {
            this.player.setState(STATES.FALL)
        }
        if (keys.includes('Space') && this.player.isAbleToAttack()) {
            this.player.setState(STATES.ATTACK)
        }
        if (this.player.onGround) {
            this.player.setState(STATES.IDLE)
        }
        this.flyInput(keys)
    }
}

class Fall extends Fly {
    constructor (player) {
        super ({
            player,
            state: 'FALL'
        })
    }

    input = (keys) => {
        if(this.player.velocity.y > 1) {
            this.player.setState(STATES.FALL)
            this.player.setSprite(SPRITES.FALL)
            this.player.onGround = false
        }
        if (keys.includes('Space') && this.player.isAbleToAttack()) {
            this.player.setState(STATES.ATTACK)
        }
        if (this.player.onGround) {
            this.player.setState(STATES.IDLE)
        }
        this.flyInput(keys)
    }
}

class Crouch extends State {
    constructor (player) {
        super ({
            player,
            state: 'CROUCH'
        })
    }

    input = (keys) => {
        if (keys.includes('ArrowDown')) {
            this.player.setState(STATES.CROUCH)
            this.player.setSprite(SPRITES.CROUCH)
            this.player.velocity.x = 0
        }
        if (keys.includes('ArrowRight')) { 
            this.player.setState(STATES.CROUCHWALK)
        }
        if (keys.includes('ArrowLeft')) { 
            this.player.setState(STATES.CROUCHWALK)
        }
        if (keys.length === 0) { 
            this.player.setState(STATES.IDLE)
        }
    }
}

class CrouchWalk extends State {
    constructor (player) {
        super ({
            player,
            state: 'CROUCHWALK'
        })
    }

    input = (keys) => {
        if (keys.includes('ArrowRight')) { 
            this.player.setState(STATES.CROUCHWALK)
            this.player.setSprite(SPRITES.CROUCHWALK)
            this.player.direction = 1
            this.player.velocity.x = 2.5
        }
        if (keys.includes('ArrowLeft')) { 
            this.player.setState(STATES.CROUCHWALK)
            this.player.setSprite(SPRITES.CROUCHWALK)
            this.player.direction = -1
            this.player.velocity.x = 2.5 * this.player.direction
        }
        if (keys.includes('ArrowDown') && !keys.includes('ArrowRight') && !keys.includes('ArrowLeft')) {
            this.player.setState(STATES.CROUCH)
        }
        if (!keys.includes('ArrowDown')) { 
            this.player.setState(STATES.IDLE)
        }
    }
}

class Slide extends State {
    constructor (player) {
        super ({
            player,
            state: 'SLIDE'
        })
    }

    input = (keys) => {
        if (keys.includes('ArrowDown')) {
            this.player.setState(STATES.SLIDE)
            this.player.setSprite(SPRITES.SLIDE)
            this.player.velocity.x = 10 * this.player.direction
        }
        if (keys.includes('ArrowRight') && keys.includes('ArrowDown')) { 
            this.player.setState(STATES.SLIDE)
        }
        if (keys.includes('ArrowLeft') && keys.includes('ArrowDown')) { 
            this.player.setState(STATES.SLIDE)
        }
        if (!keys.includes('ArrowDown')) { 
            this.player.setState(STATES.IDLE)
        }
    }
}

class Attack extends Fly {
    constructor (player) {
        super ({
            player,
            state: 'ATTACK'
        })
    }

    input = (keys) => {
        this.player.setSprite(SPRITES.ATTACK)
        if (!this.player.onGround) {
            this.player.maxFrames = 1
        }
        if (this.player.onGround && !this.player.attacking) {
            this.player.attack()
        }
        if (this.player.onGround && this.player.framesCurrent >= this.player.maxFrames - 1) {
            this.player.setState(STATES.IDLE)
            this.player.attacking = false
        }
        this.flyInput(keys)
    }
}

class AttackWalk extends State {
    constructor (player) {
        super ({
            player,
            state: 'ATTACKWALK'
        })
    }

    onSetState = () => {
        this.player.attack()
    }

    input = () => {
        this.player.velocity.x = 0
        this.player.setSprite(SPRITES.ATTACKWALK)
        if (this.player.framesCurrent >= this.player.maxFrames - 1) {
            this.player.setState(STATES.IDLE)
            this.player.attacking = false
        }
    }
}

export { SPRITES ,STATES, Idle, Running, Jump, Fall, Crouch, CrouchWalk, Slide, Attack, AttackWalk }
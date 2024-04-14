import idle from '/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Idle.png'
import run from '/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Run.png'
import jump from '/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Jump.png'
import fall from '/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Fall.png'
import crouch from '/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Crouch.png'
import crouchWalk from '/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_CrouchWalk.png'
import attack from '/assets/FreeKnight_v1/Colour1/Outline/120x80_PNGSheets/_Attack.png'

const SPRITES = {
    IDLE: {
        imageSrc: idle,
        columns: 10,
        maxFrames: 10
    },
    RUNNING: {
        left: {
            imageSrc: run,
            columns: 10,
            maxFrames: 10
        },
        right: {
            imageSrc: run,
            columns: 10,
            maxFrames: 10
        }
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
    ATTACK: {
        imageSrc: attack,
        columns: 4,
        maxFrames: 4
    }
}

const STATES = {
    IDLE: 0,
    RUNNING: 1,
    JUMP: 2,
    FALL: 3,
    CROUCH: 4,
    CROUCHWALK: 5,
    ATTACK: 6
}

class State {
    constructor ({ player, state }) {
        this.player = player
        this.state = state
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
        if (keys.includes('Space')) {
            this.player.setState(STATES.ATTACK)
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
            this.player.setSprite(SPRITES.RUNNING.right)
            this.player.direction = 1
            this.player.velocity.x = 5 * this.player.direction
        }
        if (keys.includes('ArrowLeft')) { 
            this.player.setState(STATES.RUNNING)
            this.player.setSprite(SPRITES.RUNNING.left)
            this.player.direction = -1
            this.player.velocity.x = 5 * this.player.direction
        }
        if (keys.length === 0) { 
            this.player.setState(STATES.IDLE)
        }
        if (keys.includes('ArrowUp') && this.player.onGround) {
            this.player.setState(STATES.JUMP)
        }
    }
}

class Jump extends State {
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
        if (keys.includes('ArrowRight')) { 
            this.player.velocity.x = 5
        }
        if (keys.includes('ArrowLeft')) { 
            this.player.velocity.x = -5
        }
        if (this.player.onGround) {
            this.player.setState(STATES.IDLE)
        }
    }
}

class Fall extends State {
    constructor (player) {
        super ({
            player,
            state: 'FALL'
        })
    }

    input = (keys) => {
        if(this.player.velocity.y > 0) {
            this.player.setState(STATES.FALL)
            this.player.setSprite(SPRITES.FALL)
        }
        if(this.player.onGround) {
            this.player.setState(STATES.IDLE)
        }
        if (keys.includes('ArrowRight')) { 
            this.player.velocity.x = 5
        }
        if (keys.includes('ArrowLeft')) { 
            this.player.velocity.x = -5
        }
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

class Attack extends State {
    constructor (player) {
        super ({
            player,
            state: 'ATTACK'
        })
    }

    input = (keys) => {
        if (keys.includes('Space')) {
            this.player.setState(STATES.ATTACK)
            this.player.setSprite(SPRITES.ATTACK)
            this.player.attack()
        }
        if (keys.length === 0 && this.player.framesCurrent >= this.player.maxFrames - 1) {
            this.player.setState(STATES.IDLE)
        }
    }
}

export { SPRITES ,STATES, Idle, Running, Jump, Fall, Crouch, CrouchWalk, Attack }
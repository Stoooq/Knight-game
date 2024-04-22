import idle from '/assets/knight/_Idle.png'
import run from '/assets/knight/_Run.png'
import jump from '/assets/knight/_Jump.png'
import fall from '/assets/knight/_Fall.png'
import crouch from '/assets/knight/_Crouch.png'
import crouchWalk from '/assets/knight/_CrouchWalk.png'
import slide from '/assets/knight/_Slide.png'
import attack from '/assets/knight/_AttackNoMovement.png'
import attackWalk from '/assets/knight/_Attack2NoMovement.png'
import changeDirection from '/assets/knight/_TurnAround.png'

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
    },
    CHANGEDIRECTION: {
        imageSrc: changeDirection,
        columns: 3,
        maxFrames: 3
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
        this.fps = 15
        this.frame = 0
        this.timer = 0
        this.interval = 1000 / this.fps
    }

    update = (time) => {
        if(this.frame >= this.fps) {
            this.frame = 0;
        }
        this.timer += time
        if (Math.round(this.timer / this.interval) > 1) {
            this.timer = 0;
            this.frame++;
        }
        // console.log(this.frame, time);
    }

    // reset = () => {
    //     this.interval = 1000 / this.fps
    //     this.timer = 0
    // }
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
        if (keys.includes('Space')) {
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
        if (keys.includes('ArrowUp') && this.player.onGround) {
            this.player.setState(STATES.JUMP)
        }
        if (keys.includes('ArrowDown') && this.player.onGround) {
            this.player.setState(STATES.SLIDE)
        }
        if (keys.includes('Space')) {
            this.player.setState(STATES.ATTACKWALK)
        }
        if (keys.length === 0) { 
            this.player.setState(STATES.IDLE)
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
            this.player.direction = 1
        }
        if (keys.includes('ArrowLeft')) { 
            this.player.velocity.x = -5
            this.player.direction = -1
        }
        if (keys.includes('Space')) {
            this.player.setState(STATES.ATTACK)
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
        if(this.player.velocity.y > 1) {
            this.player.setState(STATES.FALL)
            this.player.setSprite(SPRITES.FALL)
            this.player.onGround = false
        }
        if (keys.includes('ArrowRight')) { 
            this.player.velocity.x = 5
            this.player.direction = 1
        }
        if (keys.includes('ArrowLeft')) { 
            this.player.velocity.x = -5
            this.player.direction = -1
        }
        if (keys.includes('Space')) {
            this.player.setState(STATES.ATTACK)
        }
        if (this.player.onGround) {
            this.player.setState(STATES.IDLE)
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

class Attack extends State {
    constructor (player) {
        super ({
            player,
            state: 'ATTACK'
        })
    }

    input = (keys) => {
        this.player.setSprite(SPRITES.ATTACK)
        this.player.attack()
        this.player.maxFrames = 1
        // if (this.player.framesCurrent >= this.player.maxFrames - 1) {
        // }
        if (this.player.onGround) {
            this.player.setState(STATES.IDLE)
        }
    }
}

class AttackWalk extends State {
    constructor (player) {
        super ({
            player,
            state: 'ATTACKWALK'
        })
    }

    input = (keys) => {
        this.player.velocity.x = 0
        this.player.setSprite(SPRITES.ATTACKWALK)
        this.player.attack()
        if (this.player.framesCurrent >= this.player.maxFrames - 1) {
            this.player.setState(STATES.IDLE)
        }
    }
}

export { SPRITES ,STATES, Idle, Running, Jump, Fall, Crouch, CrouchWalk, Slide, Attack, AttackWalk }
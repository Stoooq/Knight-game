const STATES = {
    IDLE: 0,
    MOVING: 1,
    JUMP: 2
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
        if(keys.length === 0) { 
            this.player.velocity.x = 0
        }
    }
}

class Moving extends State {
    constructor (player) {
        super ({
            player,
            state: 'MOVING'
        })
    }

    input = (keys) => {
        if(keys.length === 0) { 
            this.player.velocity.x = 0
        }
        if(keys.includes('ArrowLeft')) {
            this.player.velocity.x = -5
        }
        if(keys.includes('ArrowRight')) {
            this.player.velocity.x = 5
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

    input = () => {
        if(this.player.onGround) {
            this.player.velocity.y = -10
            this.player.onGround = false
        }
    }
}

export { STATES, Idle, Moving, Jump }
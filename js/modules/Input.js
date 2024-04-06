class Input {
    constructor () {
        this.keys = []
        this.list = ["ArrowDown", "ArrowUp", "ArrowLeft", "ArrowRight", "Space", "ShiftLeft", "KeyQ"]

        window.addEventListener('keydown', (e) => {
            this.registerKey(e.code)
        })
        window.addEventListener('keyup', (e) => {
            this.unregisterKey(e.code)
        })
    }

    registerKey(key) {
        if (this.list.includes(key)) {
            if (!this.keys.includes(key)) {
                this.keys.push(key)
            }
        }
    }

    unregisterKey(key) {
        const keyIndex = this.keys.indexOf(key);
        if (this.list.indexOf(key) > -1) {
            if (keyIndex > -1) {
                this.keys.splice(keyIndex, 1);
            }
        }
    }
}

export default Input
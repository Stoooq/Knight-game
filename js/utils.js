const arrayParse2D = (array) => {
    const rows = []
    for (let i = 0; i < array.length; i += 48) {
        rows.push(array.slice(i, i + 48))
    }
    
    return rows
}

const checkPlayerCollision = (player, collisionBlocks) => {
    collisionBlocks.forEach(block => {
        // if (player.position.x < block.position.x + block.width &&
        //     player.position.x + player.width > block.position.x &&
        //     player.position.y < block.position.y + block.height &&
        //     player.height + player.position.y > block.position.y) {
        //         player.velocity.y = 0
        //         player.onGround = true
        // }
        //bottom
        if ((player.position.y + player.height + player.velocity.y >= block.position.y &&
            player.position.y < block.position.y &&
            player.position.x < block.position.x + block.width &&
            player.position.x + player.width > block.position.x)
            ) {
            player.velocity.y = 0
            player.onGround = true
        }
        //left && right
        // if (((player.position.x < block.position.x &&
        //     player.position.x + player.width > block.position.x) ||
        //     player.position.x > block.position.x &&
        //     player.position.x < block.position.x + block.width) && 
        //     ((player.position.y < block.position.y &&
        //     player.position.y + player.height > block.position.y))
        //     ) {
        //         console.log("cos");
        //     player.velocity.x = 0
        // }
        if (player.position.x + player.velocity.x < block.position.x + block.width &&
            player.position.x + player.width + player.velocity.x > block.position.x &&
            player.position.y < block.position.y + block.height &&
            player.height + player.position.y > block.position.y) {
                player.velocity.x = 0
                player.stopped = true // nie zatrzymuje sie do konca
            }
        //up
        if ((player.position.y + player.velocity.y < block.position.y + block.height &&
            player.position.y + player.height > block.position.y + block.height &&
            player.position.x < block.position.x + block.width &&
            player.position.x + player.width > block.position.x)
            ) {
                if (-player.velocity.y * 0.2 > 1) {
                    player.velocity.y = -player.velocity.y * 0.2
                } else {
                    player.velocity.y = 1
                }
                player.onGround = false
        }
    })
}

export { arrayParse2D, checkPlayerCollision }
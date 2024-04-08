const arrayParse2D = (array) => {
    const rows = []
    for (let i = 0; i < array.length; i += 48) {
        rows.push(array.slice(i, i + 48))
    }
    
    return rows
}

const checkPlayerCollision = (player, collisionBlocks) => {
    collisionBlocks.forEach(block => {
        if (player.position.y + player.height >= block.position.y && player.position.x < block.position.x && player.position.x + player.width > block.position.x) {
            player.velocity.y = 0
            player.onGround = true
        }
    })
}

export { arrayParse2D, checkPlayerCollision }
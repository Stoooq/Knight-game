const arrayParse2D = (array) => {
    const rows = []
    for (let i = 0; i < array.length; i += 48) {
        rows.push(array.slice(i, i + 48))
    }
    return rows
}

const checkPlayerCollision = (player, collisionBlocks) => {
    collisionBlocks.forEach(block => {
        //bottom
        if (player.position.y + player.height + player.velocity.y >= block.position.y &&
            player.position.y < block.position.y &&
            player.position.x < block.position.x + block.width &&
            player.position.x + player.width > block.position.x) {
                player.velocity.y = Math.max(-1 * (player.position.y + player.height - block.position.y), 0)
                player.onGround = player.velocity.y === 0
        }
        //left && right
        if (player.position.x + player.velocity.x <= block.position.x + block.width &&
            player.position.x + player.width + player.velocity.x >= block.position.x &&
            player.position.y < block.position.y + block.height &&
            player.height + player.position.y > block.position.y) {
                player.velocity.x = 0
                player.stopped = true
        }
        //top
        if (player.position.y + player.velocity.y < block.position.y + block.height &&
            player.position.y + player.height > block.position.y + block.height &&
            player.position.x < block.position.x + block.width &&
            player.position.x + player.width > block.position.x) {
                if (-player.velocity.y * 0.2 > 1) {
                    player.velocity.y = -player.velocity.y * 0.2
                } else {
                    player.velocity.y = 1
                }
                player.onGround = false
        }
    })
}

const playerOnEnemy = (player, enemy) => {
    return (player.position.x <= enemy.position.x + enemy.width &&
        player.position.x + player.width >= enemy.position.x &&
        player.position.y <= enemy.position.y + enemy.height &&
        player.position.y + player.height >= enemy.position.y + enemy.height)
}

const checkPlayerEnemyPosition = (player, enemy) => {
    if (player.position.x + player.width * 0.6 < enemy.position.x && enemy.state.state === 'RUNNING') {
        if (enemy.velocity.x === 0 && enemy.state.state === 'RUNNING') {
            enemy.velocity.y = -8
        }
        enemy.velocity.x = -1.5
        enemy.direction = 1
    }
    if (player.position.x > enemy.position.x + enemy.width * 0.6 && enemy.state.state === 'RUNNING') {
        if (enemy.velocity.x === 0 && enemy.state.state === 'RUNNING') {
            enemy.velocity.y = -8
        }
        enemy.velocity.x = 1.5
        enemy.direction = -1
    }
    if (player.position.y + player.height < enemy.position.y &&
        player.position.x < enemy.position.x + enemy.width * 0.6 &&
        player.position.x + player.width * 0.6 > enemy.position.x &&
        enemy.onGround) {
        enemy.onGround = false
        enemy.velocity.y = -10
    }
    if (playerOnEnemy(player, enemy)) {
        if (player.state.state === 'ATTACK' || player.state.state === 'SLIDE') {
            enemy.velocity.y = -12
            enemy.onGround = false
            enemy.setState(0)
            if (enemy.position.x > player.position.x) {
                enemy.velocity.x = 4
            }
            if (enemy.position.x + enemy.width < player.position.x + player.width) {
                enemy.velocity.x = -4
            }
        }
        if (player.state.state === 'ATTACKWALK') {
            enemy.velocity.x = 0
        }
    }
}

const rectangularCollision = (rectangle1, rectangle2) => {
    return (
        (rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
            rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x &&
            rectangle1.attackBox.position.y < rectangle2.position.y + rectangle2.height &&
            rectangle1.attackBox.height + rectangle1.position.y > rectangle2.position.y)
    )
}

export { arrayParse2D, checkPlayerCollision, checkPlayerEnemyPosition, rectangularCollision, playerOnEnemy }
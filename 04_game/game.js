(function () {
    
    const gameBoardMod = (() => {
        const board = []
    return {
        board
    }
    })

    const PlayerFac = (playerNum, playerSymbol) => {
        this.playerNum = playerNum
        this.playerSymbol = playerSymbol
        return {
            playerNum,
            playerSymbol
        }
    }
    const playerOne = PlayerFac(1, 'X')
    const playerTwo = PlayerFac(2, 'O')
})()
//inicio de game/variaveis 

let board = ['', '', '', '', '', '', '', '', '']
let playerTime = 0
let symbols = ['o', 'x']
let gameover = false
let vitoria = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
]

//controla a alternancia entre jogadores
function handleMove(position) {
    if (gameover) {
        return
    }
    if (board[position] == '') {

        board[position] = symbols[playerTime]

        gameover = isWin()
        if (gameover == false) {

            playerTime = (playerTime == 0) ? 1 : 0
        }
    }
    return gameover
}

//verifica se há um vencendo na rodada alterando a boolean para true  que sera usada para delacarar vencedor e fim de jogo na func handle move
function isWin() {

    for (let i = 0; i < vitoria.length; i++) {
        let seq = vitoria[i]

        let p1 = seq[0]
        let p2 = seq[1]
        let p3 = seq[2]

        if (board[p1] == board[p2] &&
            board[p1] == board[p3] &&
            board[p1] != '') {
            return true
        }
    }
    return false
}
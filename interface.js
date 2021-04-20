//adiciona um escutador para todas as div quadrado do tabuleiro para click e joga a informação na func handleclick 
document.addEventListener('DOMContentLoaded', () => {

    let squares = document.querySelectorAll(".square")
    squares.forEach((square) => {
        square.addEventListener('click', handleClick)

    })


})

//a função recebe o evento (click) do escutador e pega do target o id , com a posição verifica se houve fim de jogo , 
//caso contreario ele move para o proximo jogador e coloca a peça no tabuleiro 

function handleClick(event) {
    console.log(event.target)
    let squares = event.target
    let position = squares.id

    if (handleMove(position)) {
        setTimeout(() => {
            alert(" O Jogo acabaou - O vencedor foi: " + playerTime)
        }, 10)


    }
    updateSquares(position)
}

//determina qual peça sera colocada no tabuleiro
function updateSquares(position){
    let square = document.getElementById(position.toString())
    let symbols = board[position]
    square.innerHTML = `<div class='${symbols}'></div>`
}

/*function updateSquares() {
    let squares = document.querySelectorAll(".square")

    squares.forEach((square) => {
        let position = square.id
        let symbols = board[position]

        if (symbols != '') {
            square.innerHTML = `<div class='${symbols}'></div>`
        }
    })
}*/
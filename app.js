let firstCard = 10
let secondCard = 3
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message 

let messageEl = document.getElementById("message-el")
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector(".cards-el")

function startGame(){
    renderGame()
}

function renderGame() {
    cardsEl.textContent = "Cards: " + firstCard +" " + secondCard
    sumEl.textContent = "Sum: " + sum
    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackjack = true
    } else {
        message ="You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}

function newCard() {
    console.log("Drawing a new card")
    let card = 20
    sum += card 
    renderGame()
}

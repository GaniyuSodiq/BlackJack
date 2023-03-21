let firstCard = 10
let secondCard = 100
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message 

let messageEl = document.getElementById("message-el")

function startGame() {
    if (sum <= 20) {
        messageEl.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        messageEl.textContent = "You've got BlackJack!"
        hasBlackjack = true
    } else {
        message ="You're out of the game!"
        isAlive = false
    }
    messageEl.textContent = message
}


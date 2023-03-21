let firstCard = 10
let secondCard = 100
let sum = firstCard + secondCard
let hasBlackjack = false
let isAlive = true
let message 

console.log(sum)

function startgame() {

    if (sum <= 20) {
        message = "Do you want to draw a new card?"
    } else if (sum === 21) {
        message = "You've got BlackJack!"
        hasBlackjack = true
    } else {
        message ="You're out of the game!"
        isAlive = false
    }
    
    console.log(message)

}


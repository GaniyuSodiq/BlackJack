let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackjack = false
console.log(sum)

if (sum <= 20) {
    console.log("Do you want to draw a new card?")
} 

else if (sum === 21) {
    console.log("You've got BlackJack!")
    hasBlackjack = true
} 

else {
    console.log("You're out of the game!")
}

console.log(hasBlackjack)
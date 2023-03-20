let firstCard = 10
let secondCard = 22

let sum = firstCard + secondCard

console.log(sum)

if (sum < 21) {
    console.log("Do you want to draw a new card?")
} else if (sum === 21) {
    console.log("You've got BlackJack!")
} else if (sum > 21) {
    console.log("You're out of the game!")
}
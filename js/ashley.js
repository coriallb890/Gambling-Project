// COLORS //
const crimson = "#700517"
const red = "#b30016"
const brown = "#ac6d2c"
const orange = "#ef7627"
const yelloworange = "#ffad08"
const yellow = "#edd75a"
const springgreen = "#abe591"
const green = "#73b06f"
const teal = "#0c8f8f"
const skyblue = "#8fc9d9"
const oceanblue = "#004aad"
const ultramarine = "#670bf5"
const palepurple = "#c4a7e6"
const violet = "#683f85"
const blush = "#f7cacd"
const pink = "#d461a6"
const fushia = "#b00b69"
const slategray = "#405059"

const colors = [crimson, red, brown, orange, yelloworange, yellow, springgreen, green, teal, skyblue, oceanblue, ultramarine, palepurple, violet, blush, pink, fushia, slategray]

// CARDS //
const cardCount = colors.length * 2
let cards = []
let clickCounter = 0
let flippedCards = []

// ELEMENTS //
const mat = document.getElementById("mat")
const playbtn = document.getElementById("play-btn")
const cardElements = document.getElementsByClassName("card")

// COINS // 
let coins = 0
const currCoins = document.getElementById("coins")

let fromLocal = JSON.parse(localStorage.getItem("coins"))

if(fromLocal){
    coins = fromLocal
    render(coins)
}

function render(count){
    currCoins.innerHTML = count
}

// INITIAL SHUFFLE //
function shuffleCards() {
    let tempHTML = ""
    cards = []

    for (let color of colors) {
        cards.push(color)
        cards.push(color)
    }

    for (let i = cardCount - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [cards[i], cards[j]] = [cards[j], cards[i]];
    }

    let row = 0
    let col = 0

    for (let i=0; i<cardCount; i++) {
        col++
        if (col % 6 == 0) {
            row++
        }
        tempHTML += `<div class="card" id=${cards[i]} style="background-color:gray; grid-row: ${row}" onClick="flipCard(this, '${cards[i]}');"></div>`
    }

    mat.innerHTML = tempHTML 
}

function flipCard(cardElement, color) {
    if (clickCounter == 2) {
        if (flippedCards[0].getAttribute("id") == flippedCards[1].getAttribute("id")) {
            coins += 2
            localStorage.setItem("coins", JSON.stringify(coins))
            render(coins)
            flippedCards[0].removeAttribute("onclick")
            flippedCards[1].removeAttribute("onclick")
        }
        else {
            // minor bug - if you click an already-flipped card, it will turn gray because it somehow still gets added to the flippedCards array
            flippedCards[0].style.backgroundColor = "gray"
            flippedCards[1].style.backgroundColor = "gray"
        }
        flippedCards = []
        clickCounter = 0 
    }
    clickCounter++
    cardElement.style.backgroundColor = color
    flippedCards.push(cardElement)
}

// START PLAYING //
playbtn.addEventListener("click", function(){
    if(coins <= 20) {
        alert("Not enough coins! Go back to home for more")
    }
    else {
        coins -= 20
        localStorage.setItem("coins", JSON.stringify(coins))
        render(coins)
        shuffleCards()
    }
})
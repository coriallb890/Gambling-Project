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
const cardCount = colors.length * 2

// ELEMENTS //
const mat = document.getElementById("mat")
const playbtn = document.getElementById("play-btn")

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
    shuffledColors = []

    for (let color of colors) {
        shuffledColors.push(color)
        shuffledColors.push(color)
    }

    for (let i = cardCount - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledColors[i], shuffledColors[j]] = [shuffledColors[j], shuffledColors[i]];
    }

    let row = 0
    let counter = 0

    for (let i=0; i<cardCount; i++) {
        counter++
        if (counter % 6 == 0) {
            row++
        }
        tempHTML += `<div class="card" id=${shuffledColors[i]} style="background-color:${shuffledColors[i]}; grid-row: ${row}"></div>`
    }

    mat.innerHTML = tempHTML 
}

// START PLAYING //
playbtn.addEventListener("click", function(){
    /*if(coins <= 10){
        alert("Not enough coins! Go back to home for more")
    }
    else{
        coins -= 10
        localStorage.setItem("coins", JSON.stringify(coins))
        render(coins)*/
        shuffleCards()
    //}
})
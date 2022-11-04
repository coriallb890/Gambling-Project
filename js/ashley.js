// CARD MATCHING FUNCTIONALITY //

const yelloworange = "#ffad08"
const yellow = "#edd75a"
const green = "#73b06f"
const teal = "#0c8f8f"
const slategray = "#405059"

const colors = [yelloworange, yellow, green, teal, slategray]

let coins = 0;

const addBtn = document.getElementById("add-coins")
const currCoins = document.getElementById("coins")

let fromLocal = JSON.parse(localStorage.getItem("coins"))

if(fromLocal){
    coins = fromLocal
    render(coins)
}

function render(count){
    currCoins.innerHTML = count
}

addBtn.addEventListener("click", function(){
    coins += 1
    localStorage.setItem("coins", JSON.stringify(coins))
    render(coins)
})
let coins = 0
let d1 = 0
let d2 = 0
let d3 = 0
let sum = 0
let lastSum = 0
let play = false

const currCoins = document.getElementById("coins-count")
const playbtn = document.getElementById("play-btn")
const lowbtn = document.getElementById("lower-btn")
const highbtn = document.getElementById("higher-btn")
const sd1 = document.getElementById("d1")
const sd2 = document.getElementById("d2")
const sd3 = document.getElementById("d3")
const total = document.getElementById("sum")

let fromLocal = JSON.parse(localStorage.getItem("coins"))

if(fromLocal){
    coins = fromLocal
    render(coins)
}

function render(count){
    currCoins.innerHTML = count
}

function diceRoll(){
    return Math.floor(Math.random() * 6) + 1
}

function roll(){
    d1 = diceRoll()
    d2 = diceRoll()
    d3 = diceRoll()
    sd1.innerHTML = d1
    sd2.innerHTML = d2
    sd3.innerHTML = d3
    sum = d1 + d2 + d3
    total.innerHTML = sum
}

playbtn.addEventListener("click", function(){
    if(coins >= 10){
        play = true
        coins -= 10
        localStorage.setItem("coins", JSON.stringify(coins))
        render(coins)
        roll()
    }
    else{
        alert("Not enough coins! Go back to home for more")
    }
})

lowbtn.addEventListener("click", function(){
    if(play){
        lastSum = sum
        roll()
        if(sum > lastSum){
            alert("Wrong! " + sum + " is higher than " + lastSum)
            play = false
        }
        else{
            coins += 3
            localStorage.setItem("coins", JSON.stringify(coins))
            render(coins)
        }
    }
    else{
        alert("Press play first!")
    }
})

highbtn.addEventListener("click", function(){
    if(play){
        lastSum = sum
        roll()
        if(sum < lastSum){
            render(coins)
            alert("Wrong! " + sum + " is lower than " + lastSum)
            play = false
        }
        else{
            coins += 3
            localStorage.setItem("coins", JSON.stringify(coins))
            render(coins)
        }
    }
    else{
        alert("Press play first!")
    }
})






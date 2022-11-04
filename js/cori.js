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
const cup = document.getElementById("cup")
const dice = document.getElementById("dice")

let fromLocal = JSON.parse(localStorage.getItem("coins"))

if(fromLocal){
    coins = fromLocal
    render(coins)
}

function loadDice(diceNum){
    switch(diceNum){
        case 1:
            return '<img src="../images/1.png"></img>'
        case 2:
            return '<img src="../images/2.png"></img>'
        case 3:
            return '<img src="../images/3.png"></img>'
        case 4:
            return '<img src="../images/4.png"></img>'
        case 5:
            return '<img src="../images/5.png"></img>'
        case 6:
			return '<img src="../images/6.png"></img>'
    }

}

function resetAnimation(){
    cup.style.animation = "none"
    cup.style.display = "inline"
    sd1.innerHTML = ""
    sd2.innerHTML = ""
    sd3.innerHTML = ""
}

function resetGame(){
    playbtn.style.backgroundColor = "limegreen"
    resetAnimation()
    total.innerHTML = 0
}

function render(count){
    currCoins.innerHTML = count
}

function diceRoll(){
    return Math.floor(Math.random() * 6) + 1
}

function roll(){
    cup.style.display = "none"
    d1 = diceRoll()
    d2 = diceRoll()
    d3 = diceRoll()
    //dice.style.display = "grid"
    sd1.innerHTML = loadDice(d1)
    sd2.innerHTML = loadDice(d2)
    sd3.innerHTML = loadDice(d3)
    sum = d1 + d2 + d3
    console.log("in roll")
    console.log(sum)
    total.innerHTML = sum
}

playbtn.addEventListener("click", function(){
    if(coins < 10){
        alert("Not enough coins! Go back to home for more")
    }
    else if (play == true) {
        alert("Your already playing, go ahead and take your guess!")
    } 
    else{
        playbtn.style.backgroundColor = "gray"
        play = true
        coins -= 10
        localStorage.setItem("coins", JSON.stringify(coins))
        render(coins)
        cup.style.animation = "test 1s linear normal"
        setTimeout(roll, 1000)
    }
})


lowbtn.addEventListener("click", function(){
    if(play){
        resetAnimation()
        lastSum = sum
        cup.style.animation = "test 1s linear normal"
        setTimeout(checkLow, 1000)
    }
    else{
        alert("Press play first!")
    }
})

highbtn.addEventListener("click", function(){
    if(play){
        resetAnimation()
        lastSum = sum
        cup.style.animation = "test 1s linear normal"
        setTimeout(checkHigh, 1000)
        
    }
    else{
        alert("Press play first!")
    }
})

function addCoins(){
    coins += 2
    localStorage.setItem("coins", JSON.stringify(coins))
    render(coins)
}

function checkHigh(){
    roll()
    if(sum < lastSum){
        alert("Wrong! " + sum + " is lower than " + lastSum)
        play = false
        resetGame()
    }
    else{
        addCoins()
    }
}
function checkLow(){
    roll()
    if(sum > lastSum){
        alert("Wrong! " + sum + " is higher than " + lastSum)
        play = false
        resetGame()
    }
    else{
        addCoins()
    }
}



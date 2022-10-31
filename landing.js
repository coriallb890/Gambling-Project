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
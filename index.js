const hex = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]

const colorValue = document.getElementById("colorValue")
const randomValueBtn = document.getElementById("randomValue")


function randomColor(){
    let hexColor = "#"
    for(let i = 0; i <6; i++){
        const randomValue = Math.floor(Math.random()* hex.length)
        hexColor += hex[randomValue]
    }
    colorValue.textContent = hexColor
    document.body.style.backgroundColor = hexColor
}
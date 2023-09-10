const AC = document.getElementById("AC")
const mainText = document.querySelector("h1")
const numericalButton = document.querySelectorAll(".num")
const numericalButtonLength = numericalButton.length

const addButton = document.querySelector("#add")
const subButton = document.querySelector("#sub")
const multButton = document.querySelector("#mul")
const divideButton = document.querySelector("#div")
const equalButton = document.querySelector("#equal")

let result = 0
let expression = ""

AC.addEventListener("click", function(){
    mainText.innerText = "0"
    result = 0
    expression = ""
})

function lastChar(){

    if (expression[expression.length - 1] === '+' || expression[expression.length - 1] === '-' || expression[expression.length - 1] === '*' || expression[expression.length - 1] === '/')
    {
        return true
    }
    else{
        return false
    }

}

function displayNum(numValue){

    if (mainText.innerText.length <= 11)
    {
        if (mainText.innerText === "0" || lastChar()){
    
            mainText.innerText = numValue
        }
    
        else{
        
            mainText.innerText += numValue
        }
        expression += numValue
        console.log(expression)
    }

    result = parseFloat(mainText.innerText)
}

function buildExpression(operator){
    
    if (!lastChar())
    {
        expression += operator
        console.log(expression)
    }

}

function evaluateExpression(){
    
    expression = eval(expression)
    console.log(expression)
    result = parseFloat(expression)

    mainText.innerText = result
}

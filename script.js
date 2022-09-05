"use strict";

var input = document.getElementById("input"),
    number = document.querySelectorAll(".numbers div"),
    operator = document.querySelectorAll(".operators div"),
    result = document.getElementById("result"),
    clear = document.getElementById("clear"),
    
    resultDisplayed=false;
    
    


for (var i = 0; i < number.length; i++) {
    number[i].addEventListener("click", function (e) {
        var currentString = input.innerHTML;
        console.log(currentString);
        var lastChar = currentString
        var lastChar = currentString.charAt(currentString.length-1);
        console.log(lastChar,"lastChar");
        if (resultDisplayed === false) {
            input.innerHTML += e.target.innerHTML;
            console.log(e.target.innerHTML,"e.target.innerhtml");
        } else if (resultDisplayed === true &&( lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷")) {
            resultDisplayed = false;
            input.innerHTML += e.target.innerHTML;
            console.log(e.target.innerHTML,"e.target.inner");
        } else {
            resultDisplayed = false;
            input.innerHTML = "";
            input.innerHTML = e.target.innerHTML;
            console.log(e.target.innerHTML,"e.target.");
        }
        
       
    });
    
}
for (var i = 0; i < operator.length; i++) {
    operator[i].addEventListener("click", function (e) {
        var currentString = input.innerHTML;
        var lastChar = currentString.charAt(currentString.length - 1);
        if ( lastChar === "+" || lastChar === "-" || lastChar === "×" || lastChar === "÷") {
            var newString = currentString.substring(0, currentString.length - 1) + e.target.innerHTML;
            input.innerHTML = newString
        } else if (currentString.length == 0) {
            console.log("enter a number firstly");

        } else {
            input.innerHTML += e.target.innerHTML;
        }
    });
}



result.addEventListener("click", function () {

    var inputString = input.innerHTML;
    var numbers = inputString.split(/[+|-|×|÷]/s);
    var operators = inputString.replace(/[0-9]|/g, "").split("");//regex
    
    
    
    console.log(inputString,"inputstring");
    console.log(operators,"operators");
    console.log(numbers,"numbers");
    
     console.log("_______________________");
    
    
    var divide = operators.indexOf("÷");
    while (divide != -1) {
        numbers.splice(divide, 2, numbers[divide] / numbers[divide + 1]);
        console.log(divide,"divi")
        operators.splice(divide, 1);
        divide = operators.indexOf("÷");
        console.log(divide,"dividing");
    }
   
    var multiply=operators.indexOf("×");
    while (multiply != -1) {
        numbers.splice(multiply, 2, numbers[multiply] * numbers[multiply + 1]);
        console.log(multiply,"mult")
        operators.splice(multiply, 1);
        multiply = operators.indexOf("×");
        console.log(multiply,"multiply")
    }
   
    var substract=operators.indexOf("-");
    while (substract != -1) {
        numbers.splice(substract, 2, numbers[substract] - numbers[substract + 1]);
        operators.splice(substract, 1);
        substract = operators.indexOf("-");
        console.log(substract,"substract")
    }
    
    var add=operators.indexOf("+");
    while (add != -1) {
        numbers.splice(add, 2, parseFloat(numbers[add]) + parseFloat(numbers[add + 1]));
        console.log(numbers,"numberssss")
        operators.splice(add, 1);
        add = operators.indexOf("+");
        console.log(add,"add")
    }
   
    input.innerHTML=numbers[0];
    resultDisplayed=true;
    console.log(resultDisplayed);
    
});
clear.addEventListener("click", function(){
    input.innerHTML="";
});







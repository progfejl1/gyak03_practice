
function callbackPlus() {
    var num1: number;
    var num2: number;
    num1 = +(<HTMLInputElement>document.getElementById("num1")).value;
    num2 = +(<HTMLInputElement>document.getElementById("num2")).value;
    document.getElementById("solution").innerHTML = String(num1 + num2);
}

function callbackMinus() {
    var num1: number;
    var num2: number;
    num1 = +(<HTMLInputElement>document.getElementById("num1")).value;
    num2 = +(<HTMLInputElement>document.getElementById("num2")).value;
    document.getElementById("solution").innerHTML = String(num1 - num2);
}
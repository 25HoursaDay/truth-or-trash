var lower = 1;
var upper = 5;
var answer = Math.floor(Math.random() * (upper - lower)) + lower;
console.log(document.getElementsByClassName("optionclass")[answer - 1].innerHTML);


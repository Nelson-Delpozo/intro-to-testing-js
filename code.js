// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
   return `Hello, ${input}!`;
}

function isFive(input){
    return parseInt(input) === 5;
}

function isEven(input){
    if(isNaN(parseInt(input))){
        return false
    }
    return (input % 2 === 0)
}














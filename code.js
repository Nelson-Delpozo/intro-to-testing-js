// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input){
    if(typeof(input) === "undefined"){
        return "Hello, World!"
    }else if(!input){
        return "Hello, World!"
    }else if (typeof (input) === "boolean"){
        return "Hello, World!"
    } else return `Hello, ${input}!`;
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

/////////////////////////////////














// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}
/////////////////////////////
//sayHello function//
function sayHello(input){
    if(typeof(input) === "undefined"){
        return "Hello, World!"
    }else if(!input){
        return "Hello, World!"
    }else if (typeof (input) === "boolean"){
        return "Hello, World!"
    } else return `Hello, ${input}!`;
}

////////////////////////////
//isFive function//

function isFive(input){
    return parseInt(input) === 5;
}

////////////////////////////
//isEven function//

function isEven(input){
    if(isNaN(parseInt(input))){
        return false
    }
    return (input % 2 === 0)
}

/////////////////////////////////

function isVowel(s) {
    return s === "a" || s === "A" || s === "e" || s === "E" || s === "i" || s === "I" ||
        s === "o" || s === "O" || s === "u" || s === "U";
}




////////////////////////////////////////


















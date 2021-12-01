"use strict";

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
if(typeof s === "string"){
   return s.toLowerCase() === ("a" || "e" || "i" || "o" || "u");
}else return false
}



//Cody's//
// function isVowel(input){
// if (typeof input === 'string') {
//     return input.toLowerCase() === 'a'
//         || input.toLowerCase() === 'e'
//         || input.toLowerCase() === 'i'
//         || input.toLowerCase() === 'o'
//         || input.toLowerCase() === 'u'
// } else {
//     return false;
// }
// }




////////////////////////////////////////
//add function//

function add(a, b){
    if(isNaN(a) || isNaN(b)){
        return NaN
    }else return parseInt(a + b);

}

//////////////////////////////////////


























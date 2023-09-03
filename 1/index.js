'use strict'

const average = function(text) {
    let words = text.split(' ');
    let sum = 0;
    for (let i = 0; i < words.length; i++) {
        let word = words[i].length;
        sum += word;
    }
    return sum / words.length;
}

let text = prompt('Enter the sentence');
console.log(average(text));
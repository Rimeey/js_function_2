'use strict'

const finder = function(text, symbol) {
    let index = [];
    let count = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] === symbol) {
            index.push(i);
            count++
        }
    }

    return `Indexes on which your character is located: ${index} and their count: ${count}`
}

let text = prompt('Enter the text');
let symbol = prompt('Enter the symbol of text');
console.log(`${finder(text, symbol)}`)
'use strict'

const data = function (text) {
    let end = text.toLowerCase();
    const symbol = `/\\`;
    let arr = [];
    for (const znak of symbol) {
        end = end.split(znak).join(' ');
        arr = end;
    }

    return arr;
}
let text = prompt('Enter the date');
console.log(data(text));
'use strict'

const numbers = function (num) {
    if (num > 9 && num < 100) {
        const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
        const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
        const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];

        if (num >= 10 && num < 20) {
            return teens[num - 10];
        } else {
            const digit1 = Math.floor(num / 10);
            const digit2 = num % 10;
            return tens[digit1] + " " + ones[digit2];
        }

    } else {
        return `Error, ${num} is not a double digit number`
    }
}

let num = +prompt('Enter the double digit number');
console.log(numbers(num));
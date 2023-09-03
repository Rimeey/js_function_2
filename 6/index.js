'use strict'

const check = [
    {
        product: 'Energy Drink Monster Energy 355ml',
        amount: 1,
        price: 47.40
    },
    {
        product: 'Milk Halychyna 2.5%, 900g',
        amount: 2,
        price: 36.60
    },
    {
        product: 'Minced pork, 1kg',
        amount: 1,
        price: 153.90
    },
    {
        product: 'Mineral water Mirgorodska highly gassed, 1.5L',
        amount: 5,
        price: 14.90
    }
]

// 1
const check_on_screen = function () {
    for (let i = 0; i < check.length; i++) {
        document.write(`<ul>
    <li>Name: ${check[i].product} </li>
    <li>Amount: ${check[i].amount}</li>
    <li>Price: ${check[i].price}</li>
    </ul>`)
    }
}
check_on_screen();

// 2
const total = function () {
    let total = 0;
    for (let i = 0; i < check.length; i++) {
        let sum = check[i].price * check[i].amount;
        total = total + sum;
    }
    return total;
}
document.write(`Total purchase amount: ${total()} <br> <br>`)

// 3
const biggest_in_check = function () {
    let big = check[0];

    for (let i = 1; i < check.length; i++) {
        if (check[i].price > big.price) {
            big = check[i];
        }
    }
    return `<ul>
    <li>Name: ${big.product} </li>
    <li>Amount: ${big.amount}</li>
    <li>Price: ${big.price}</li>
           </ul>`
}
document.write(`Biggest purchase in check: ${biggest_in_check()} <br>`)

// 4
document.write(`Average price in check: ${total() / check.length} <br>`)
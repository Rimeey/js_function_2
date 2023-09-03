'use strict'

function find_url(url) {
    const parts = url.split('//');

    if (parts.length === 2) {
        const [protocol, end] = parts;
        const end_2 = end.split('/');
        if (end_2.length >= 2) {
            const domen = end_2[0]
            const put = '/' + end_2.slice(1).join('/');

            return `Protocol: ${protocol}, Domain: ${domen}, Path: ${put}`;
        }
    }
}

let url = prompt('Enter the URL');
console.log(find_url(url));

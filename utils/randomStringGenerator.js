function generateRandomNumber(cap) {
    return Math.floor(Math.random() * cap)
}

function mapNumberToAlpha(num) {
    let alpha;
    if(num < 0 || num > 25)
        num = 0;
    const alphabetCharCode = 65 + num;
    alpha = String.fromCharCode(alphabetCharCode)
    let smallCap = generateRandomNumber(2);
    if(smallCap === 0)
        alpha = alpha.toLowerCase()
    return alpha
}

function generateRandomString(len = 6) {
    let str = '';
    for(let i = 0; i < len; i++) {
        let num = generateRandomNumber(35);
        let alpha = mapNumberToAlpha(num);
        str = str + alpha + ' ';
    }
    return str;
}

module.exports = { generateRandomString }
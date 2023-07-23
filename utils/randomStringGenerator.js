function generateRandomNumber(cap) {
    return Math.floor(Math.random() * cap)
}

function mapNumberToAlpha(num) {
    let alpha;
    if(num >= 0 && num < 26 ) {
        const alphabetCharCode = 65 + num;
        alpha = String.fromCharCode(alphabetCharCode)
        let smallCap = generateRandomNumber(2);
        if(smallCap === 0)
            alpha = alpha.toLowerCase()
    }
    else {
        alpha = num - 25
    }
    return alpha
}

function generateRandomString(len = 6) {
    let str = '';
    for(let i = 0; i < len; i++) {
        let num = generateRandomNumber(35);
        let alpha = mapNumberToAlpha(num);
        str = str + alpha;
    }
    return str;
}

generateRandomString();

module.exports = { generateRandomString }
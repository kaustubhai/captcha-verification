const { sha256Hash, verifySHA256Hash } = require('./utils/cryptoEncDec');
const { createTextImage } = require('./utils/generateImageFromText');
const { generateRandomString } = require('./utils/randomStringGenerator')

function generate(config) {
    const { len, difficulty, color} = config
    const str = generateRandomString(len);
    let font = '20px ';
    let colour;
    switch(difficulty.toLowerCase()) {
        case 'easy':
            font += 'HenryPenny'
            break;
        case 'medium':
            font += 'Ingrid'
            break;
        default:
            font += 'HenryPenny'
            break;
    }
    switch(color.toUpperCase()) {
        case 'R':
            colour = '#FF0000'
            break;
        case 'G':
            colour = '#00FF00'
            break;
        case 'B':
            colour = '#0000FF'
            break;
        default:
            colour = '#000'
            break;
    }
    const captcha = createTextImage(str, font, colour)
    const hash = sha256Hash(str);
    return {
        captcha,
        hash
    }
}

function verify(captcha, hash) {
    let str = '';
    for(let i = 0; i < captcha.length; i ++) {
        str += captcha[i] + ' ';
    }
    return verifySHA256Hash(str, hash)
}


module.exports = {
    generate,
    verify
}
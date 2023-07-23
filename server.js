const { sha256Hash, verifySHA256Hash } = require('./utils/cryptoEncDec');
const { createTextImage } = require('./utils/generateImageFromText');
const { generateRandomString } = require('./utils/randomStringGenerator')

function generate(config) {
    const { len, difficulty, color} = config
    const str = generateRandomString(len);
    let font = '20px ';
    let colour;
    switch(difficulty) {
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
    switch(color) {
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
    const captcha = createTextImage(str, font, color)
    const hash = sha256Hash(str);
    console.log({ captcha, hash })
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
    console.log(verifySHA256Hash(str, hash))
    return verifySHA256Hash(captcha, hash)
}


module.exports = {
    generate,
    verify
}
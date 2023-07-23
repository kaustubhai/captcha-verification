const { createTextImage } = require('./utils/generateImageFromText');
const { generateRandomString } = require('./utils/randomStringGenerator')

function generate(config) {
    const { len, difficulty, color} = config
    const str = generateRandomString(len);
    let font = '20px ';
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
    const img64 = createTextImage(str, font, color)
    console.log(img64)
}

generate({
    len: 4, difficulty: 'medium', color: '#ff0000'
})

module.exports = {
    generate
}
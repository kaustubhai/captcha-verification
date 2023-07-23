const { createCanvas, registerFont } = require('canvas');

registerFont('./fonts/HennyPenny.otf', { family: 'HenryPenny' });
registerFont('./fonts/Ingrid.ttf', { family: 'Ingrid' });

function createTextImage(text, font = '20px Ingrid', textColor = '#000000') {
    const canvas = createCanvas(400, 200); // Set the canvas size as per your requirements
    const ctx = canvas.getContext('2d');
  
    // Set the font and color for the text
    ctx.font = font;
    ctx.fillStyle = textColor;
  
    // Calculate the text width and height
    const textMetrics = ctx.measureText(text);
    const textWidth = textMetrics.width;
    const textHeight = parseInt(font, 10); // Convert the font size to an integer for accurate height
  
    // Center the text on the canvas
    const x = (canvas.width - textWidth) / 2;
    const y = (canvas.height - textHeight) / 2;
  
    // Draw the text on the canvas
    ctx.fillText(text, x, y);
  
    // Convert the canvas to a Buffer representing the PNG image
    const buffer = canvas.toBuffer('image/png');

    const base64String = buffer.toString('base64');

    return base64String;
  }

module.exports = {
  createTextImage
}
  
const { createCanvas, registerFont } = require('canvas');

registerFont('./node_modules/captcha-verification/fonts/HennyPenny.otf', { family: 'HenryPenny' });
registerFont('./node_modules/captcha-verification/fonts/Ingrid.ttf', { family: 'Ingrid' });

async function createTextImage(text, font, textColor) {
    const canvas = createCanvas(1200, 400); // Set the canvas size as per your requirements
    const ctx = canvas.getContext('2d');
    const googleFontsUrl = `https://fonts.googleapis.com/css2?family=${font.replace(/\s+/g, '+')}`;

    const response = await axios.get(googleFontsUrl);
    const cssText = response.data;
    
    // Generate image using CSS text
    const image = sharp({
      create: {
        width: 800, // Set the image width
        height: 400, // Set the image height
        channels: 4, // Set the number of channels (4 for RGBA)
        background: { r: 255, g: 255, b: 255, alpha: 1 } // Set the background color
      }
    });

    // Overlay the text using CSS
    image.overlayWith(Buffer.from(`<style>${cssText}</style><div style="font-family: '${fontFamily}'; font-size: 120px; color: ${textColor}">${text}</div>`), {
      left: 50, // Set the horizontal position
      top: 50, // Set the vertical position
      tile: false // Don't repeat the text
    });
  
    // Convert the canvas to a Buffer representing the PNG image
    const buffer = image.png().toBuffer('');

    const base64String = buffer.toString('base64');

    return base64String;

    // // Set the font and color for the text
    // ctx.font = font;
    // ctx.fillStyle = textColor;
  
    // // Calculate the text width and height
    // const textMetrics = ctx.measureText(text);
    // const textWidth = textMetrics.width;
    // const textHeight = parseInt(font, 10); // Convert the font size to an integer for accurate height
  
    // // Center the text on the canvas
    // const x = (canvas.width - textWidth) / 2;
    // const y = (canvas.height - textHeight);
  
    // // Draw the text on the canvas
    // ctx.fillText(text, x, y);
  
    // // Convert the canvas to a Buffer representing the PNG image
    // const buffer = canvas.toBuffer('image/png');

    // const base64String = buffer.toString('base64');

    // return base64String;
  }

module.exports = {
  createTextImage
}
  
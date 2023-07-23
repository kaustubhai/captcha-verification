# Captcha Verification

captcha-verification is a lightweight npm package that allows you to create random Captcha images to prevent robots from accessing your website. Captchas are widely used to verify that a user is human and not a malicious script or bot.

## Installation

To install the Captcha Verification package, use npm:

```bash
npm install captcha-verification
```

## Usage

```js
const captcha = require('random-verification');

// Generate a random Captcha image

const { captcha, hash } = captcha.generate();

// captcha contains the Captcha image in PNG format as a base4 string.
// hash contains the image content in encrypted format to verify the user input
// You can send the captchaImage to the user in the response or save it to a file.

// To verify the user's input against the generated Captcha:

const userInput = 'user-input-from-form';

const isValid = captcha.verify(hash, userInput);

if (isValid) {
  
  // Captcha input is valid, proceed with the user's request.

} else {
  
  // Captcha input is invalid, show an error message or take appropriate action.

}
```

## Configs
| Key | Default | Description | Possible Keys |
| -------- | -------- | -------- | -------- |
| Difficulty   | easy   | Captch noise order | easy, medium
| Color   | Black   | Color of the text   | r, g, b
| Len   | 6   | Number of characters in captcha   | 1 - n


## License

This package is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Contributing

Contributions are welcome! If you find any issues or have suggestions for improvements, feel free to open an issue or submit a pull request on the GitHub repository, [here](https://github.com/kaustubhai/captcha-verification).

## About

Random Captcha Generator is maintained and developed by [Kaustubh](https://github.com/kaustubhai).

---

By using Captcha Verification, you can easily implement Captcha functionality in your web application to enhance security and protect it from unwanted automated access. If you have any questions or need assistance, feel free to contact us or open an issue on the GitHub repository. Happy coding!
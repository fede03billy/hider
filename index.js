// The function textToChars() takes a string as an argument and returns an array of the Unicode character codes of each character in the string.
const textToChars = (text) => text.split("").map((c) => c.charCodeAt(0));
// The function applySaltToChar() takes a character code as an argument and returns the result of applying the bitwise XOR operator to the character code and the salt.
const applySaltToChar = (code, salt) => textToChars(salt).reduce((a, b) => a ^ b, code);

const hide = (salt, text) => {
    // The byteHex() function takes a number as an argument and returns the hexadecimal representation of that number as a string.
    const byteHex = (n) => ("0" + Number(n).toString(16)).slice(-2);

    let encoded = "";

    text.split("").forEach((c) => {
        let code = c.charCodeAt(0);
        code = applySaltToChar(code, salt);
        encoded += byteHex(code);
    });

    return encoded;
};

const unhide = (salt, encoded) => {
    let decoded = "";

    encoded.match(/.{1,2}/g).forEach((hex) => {
        let code = parseInt(hex, 16);
        code = applySaltToChar(code, salt);
        decoded += String.fromCharCode(code);
    });

    return decoded;
};

export default { hide, unhide };

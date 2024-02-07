// Assuming your file is an ES module or you're using a .mjs extension
const upperCase = require('upper-case').upperCase;

function greet(name) {
    console.log(upperCase(`Hello, ${name}! You are very nice`));
}

greet('Amrit');
module.exports = greet;

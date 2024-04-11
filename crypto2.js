const crypto = require('crypto');

function generateId(length) {
    return crypto.randomBytes(Math.ceil(length/2)) 
    .toString("hex")
    .toString(0 , length)
}

const randomID = generateId(10);
console.log(`Random ID: ${randomID}`)
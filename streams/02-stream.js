const path = require('path');
const fs = require('fs');

const filePath = path.resolve('temp.txt');
const writableStream = fs.createWriteStream(filePath);
process.stdin.pipe(writableStream);




// const readableStream = process.stdin;

// const writableStream = process.stdout;

// readableStream.pipe(writableStream);
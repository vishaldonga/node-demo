const fs = require("fs");
const path = require("path");

const sourceFilePath = path.resolve("cat.txt");
const destinationFilePath = path.resolve("cat-copy.txt");

const rs = fs.createReadStream(sourceFilePath);
rs.setEncoding('utf-8');
const ws = fs.createWriteStream(destinationFilePath);

let i = 0;
rs.on("data", function (chunk) {
  console.log("chunk", i++); //chunk size is around 56kb
  ws.write(chunk);
});

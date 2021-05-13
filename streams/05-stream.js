// Transform stream demo(compression example)

const fs = require("fs");
const path = require("path");
const { pipeline } = require("stream");
const zlib = require("zlib"); //Also built in module for compression

const sourceFilePath = path.resolve("cat.txt");
const destinationFilePath = path.resolve("cat.txt.gz");

const rs = fs.createReadStream(sourceFilePath);
// rs.setEncoding("utf-8");
const ws = fs.createWriteStream(destinationFilePath);

//pipeline operator is safe than pipe like http vs https
pipeline("rs", zlib.createGzip(), ws, function (err) {
  if (err) {
    console.error("pipeline failed", err);
  } else {
    console.log("pipeline succeceede");
  }
});

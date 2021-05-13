const http = require("http");
const path = require("path");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const filePath = path.resolve("cat.txt");
//   fs.readFile(filePath, function (err, data) {
//     if (err) {
//       console.error(err);
//     } else {
//       res.end(data);
//     }
//   });

    //stream
    const readableStream = fs.createReadStream(filePath);
    readableStream.pipe(res);

    /**
     * 4 types of streams in node
     * readable -> works as source
     * writable -> works as destination where can write
     * duplex -> both read and write ex. tcp pocket
     * transform -> reading and writing data but in between transforming or change data before write
     */
});

server.listen(8000, () => console.log("Server is listening at port 8000"));

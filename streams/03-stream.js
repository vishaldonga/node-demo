// builtin node module
const Stream = require("stream");

const rs = new Stream.Readable();

// rs.push("hello");
// rs.push("readble stream");
// rs.push("\n");
// rs.push(null); //signifies End of stream

//alternative(recommanded)
rs._read = function () {
  const value = parseInt(Math.random() * 1000);

  if (value > 950) {
    console.warn("oops..failed", value);
  }
  if (value < 950) {
    rs.push(value.toString());
    rs.push("\n");
  } else {
    rs.push(null);
  }
};

rs.pipe(process.stdout);

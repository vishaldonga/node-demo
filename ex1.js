#!/usr/bin/env node
//-> this line finds out where node program is installed
// #! -> shebang line

//To see permission => ls -al
//To chnage permision=> chmod u+x ex1.js  =>(u+x) user can execute as well

"use strict"; //Always execute in strict mode

//STDIO
//STDIN: 0   STDOUT: 1   STDERR:2  //These are streams and have unique ids(first class citizen in nodejs)

// console.log("Hello World");
// console.error("oops!i got error");

//In Node JS process object available like window object
// process.stdout.write("hello World"); //Same as console log(Higher level API)
// process.stderr.write("hello World");
// process.stdin.read()

//CLI Tools
//Goal is to get access of command line parameters

//const args = process.argv;
//console.log(args); //Returns first two params as Path of node and Path of file respectively

// const args = process.argv.slice(2); //return only useful ones skip first two(path)
// console.log(args); //[ '--help', '--file=hello.txt', '--logs=true' ]

//by Minimist package
const minimist = require("minimist");
const args = minimist(process.argv.slice(2));
// console.log(args); //{ _: [], help: true, file: 'hello.txt', logs: 'true' }
//minimist returns with formatted output as object
// can set datatype of arguments as well like
// const args = minimist(process.argv.slice(2), {
//   boolean: ["help"],
// });

/**
 * To Process the file
 */
const fs = require("fs"); //built in module
const path = require("path"); //built in module
const getStdin = require("get-stdin");

if (args.help) {
  showHelp();
} else if (args.in) {
  console.log("Read file from stdin");
  getStdin().then(function (content) {
    console.log(content);
  });
} else if (args.file) {
  //process file
  const filePath = path.resolve(args.file);
  // console.log(__dirname); //gives current directory
  // console.log(filePath);
  processFile(filePath);
} else {
  error();
}

function processFile(filePath) {
  const content = fs.readFileSync(filePath);
  // console.log(content); //prints buffer instead of content like <Buffer 48 65 6c 6c 6f 20 57 6f 72 6c 64 0a> as console.log converts in string
  process.stdout.write(content); //prints original file content

  //asyncronous readfile
  fs.readFile(filePath, function (err, content) {
    if (err) {
      error(err.toString());
    } else {
      const upperCaseContent = content.toString().toUpperCase();
      console.log(upperCaseContent);
    }
  });
  console.log("I will be execute before readfile"); //Non-blcking io for async operation
}

function showHelp() {
  console.log("------ex1 usgae------");
  console.log("./ex1.js --in");
  console.log("./ex1.js --file=<filename> process file");
  console.log("./ex1.js --help show help");
}

function error(message) {
  console.error(message);
}

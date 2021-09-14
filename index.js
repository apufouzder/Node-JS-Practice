const path = require("path");
const os = require("os");
const fs = require("fs");
// const EventEmitter = require("events");

// require class from school.js file
const School = require("./school");

// Path
const myPath = "D:/NodeJSPractice/people.js";
console.log(path.basename(myPath));

// Operating System
console.log(os.networkInterfaces());

// File System
fs.writeFileSync("myFile.txt", "Hello Programmers!");
fs.appendFileSync("myFile.txt", " How are you?");
const data = fs.readFile("myFile.txt", (err, data) => {
  console.log(data.toString());
});
console.log("object");

const school = new School();
// register a listener for bellRing event
school.on("bellRing", ({ period, text }) => {
  console.log(`We need to run ${period} ${text}!!`);
});

school.startPeriod();

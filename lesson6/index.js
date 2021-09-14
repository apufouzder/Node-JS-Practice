const fs = require("fs");
const http = require("http");

const server = http
  .createServer((req, res) => {
    const myReadStream = fs.createReadStream(
      `${__dirname}/bigData.txt`,
      "utf8"
    );
    myReadStream.pipe(res);
  })
  .listen(3000);
console.log("listening on port 3000");

/*
// const ourReadStream = fs.createReadStream(`${__dirname}/bigData.txt`);
// const ourWriteStream = fs.createWriteStream(`${__dirname}/output.txt`);

// ourReadStream.on("data", (chunk) => {
//   console.log(chunk);
// });

// ourReadStream.on("data", (chunk) => {
//   ourWriteStream.write(chunk);
// });

// ourReadStream.pipe(ourWriteStream);
*/

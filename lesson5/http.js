const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("Hello Programmers!");
    res.write("Hello Programmers222!");
    res.end();
  } else if (req.url === "/about") {
    res.write("This about page.");
    res.end();
  } else {
    res.write("Not Found!");
    res.end();
  }
});

server.listen(3000);

console.log("listing server 3000 port!");

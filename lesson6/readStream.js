const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html><head><title>Form</title></head></html>");
    res.write(
      '<body><form method="post" action="/process"><input name="message" /></form></body>'
    );
    res.end();
  } else if (req.url === "/process" && req.method === "POST") {
    let body = [];
    req.on("data", (chunk) => {
      body.push(chunk);
    });
    req.on("end", () => {
      console.log("finished !!");
      const parseBody = Buffer.concat(body).toString();
      console.log(parseBody);
    });
    res.write("Thanks for submit.");
    res.end();
  } else {
    res.write("Not Found!");
    res.end();
  }
});

server.listen(3000);

console.log("listing server 3000 port!");

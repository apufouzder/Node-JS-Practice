/*
 * Title: handleReqRes
 * Description: Monitoring Application
 * Author: Apu Fouzder
 *
 */
// Dependencies
const url = require("url");
const { StringDecoder } = require("string_decoder");
const routes = require("../routes");
const {
  notFoundHandler,
} = require("../handlers/routeHandlers/notFoundHandler");

// app object - module scaffolding
const handler = {};

handler.handleReqRes = (req, res) => {
  // request handle
  // get the url and parse it
  const parseUrl = url.parse(req.url, true);
  const path = parseUrl.pathname;
  const trimPath = path.replace(/^\/+|\/+$/g, "");
  const method = req.method.toLowerCase();
  const queryString = parseUrl.query;
  const headersObject = req.headers;

  const requestProperties = {
    parseUrl,
    path,
    trimPath,
    method,
    queryString,
    headersObject,
  };

  const decoder = new StringDecoder("utf8");
  let realData = "";

  const chosenHandler = routes[trimPath] ? routes[trimPath] : notFoundHandler;

  chosenHandler(requestProperties, (statusCode, payload) => {
    statusCode = typeof statusCode === "number" ? statusCode : 500;
    payload = typeof payload === "object" ? payload : {};

    const payloadString = JSON.stringify(payload);

    // return the final response
    res.writeHead(statusCode);
    res.end(payloadString);
  });

  req.on("data", (buffer) => {
    realData += decoder.write(buffer);
  });

  req.on("end", () => {
    realData += decoder.end();
    console.log(realData);

    // response handle
    res.end("Hello Programmers!!!");
  });
};

module.exports = handler;

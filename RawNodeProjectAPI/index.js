/*
 * Title: Uptime Monitoring Application
 * Description: Monitoring Application
 * Author: Apu Fouzder
 *
 */
// >>>>-- Dependencies
const http = require("http");
const handleReqRes = require("./helpers/handleReqRes");
const environment = require("./helpers/environments");
const data = require("./Lib/data");

// >>>>-- app object - module scaffolding
const app = {};

// >>>>-- testing file system
// data.create( "test", "newFile", { name: "Bangladesh", language: "English" }, (err) => {
//     console.log(`err was: ${err}`);
//   }
// );

// >>>>-- data read file
// data.read("test", "newFile", (err, data) => {
//   console.log(`err was: ${err} and ${data}`);
// });

// >>>>-- update file
// data.update("test", "newFile", { name: "Apu", lang: "Bang" }, (err) => {
//   console.log(`err was: ${err}`);
// });

// >>>>-- delete file
data.delete("test", "newFile", (err) => {
  console.log(`err was: ${err}`);
});

// >>>>-- create server
app.createServer = () => {
  const server = http.createServer(app.handleReqRes);
  server.listen(environment.port, () => {
    console.log(`listing to port ${environment.port}`);
  });
};

// >>>>-- handle Request Response
app.handleReqRes = handleReqRes;

// >>>>-- start server
app.createServer();

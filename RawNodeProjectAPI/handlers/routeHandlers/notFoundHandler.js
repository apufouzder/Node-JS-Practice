/*
 * Title: NotFoundHandler
 * Description: 404 NotFoundHandler
 * Author: Apu Fouzder
 *
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  callback(404, {
    message: "Not Found URL",
  });
};

module.exports = handler;

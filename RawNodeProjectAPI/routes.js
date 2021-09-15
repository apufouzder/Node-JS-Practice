/*
 * Title: Routes
 * Description: Monitoring Application
 * Author: Apu Fouzder
 *
 */

// dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandler");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;

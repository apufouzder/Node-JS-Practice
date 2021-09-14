const EventEmitter = require("events");

const emitter = new EventEmitter();

class School extends EventEmitter {
  startPeriod() {
    console.log("Class started");

    // raise event when bell ring

    // raise an event
    setTimeout(() => {
      this.emit("bellRing", {
        period: "first period",
        text: "End",
      });
    }, 2000);
  }
}

module.exports = School;

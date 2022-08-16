module.exports = function (RED) {
  "use strict";

  function DFAirNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    // node-specific code goes here
    this.status({ fill: "red", shape: "ring", text: "disconnected" });
    //start the HW driver (or perhaps wait until configuration requirements has been met)
  

  //   this.on("input", function (msg, send, done) {
  //     // do something with 'msg'

  //     // If an error is hit, report it to the runtime
  //     if (err) {
  //       if (done) {
  //         // Node-RED 1.0 compatible
  //         done(err);
  //       } else {
  //         // Node-RED 0.x compatible
  //         node.error(err, msg);
  //       }
  //     }
  //   });

  this.on("input", function (msg) {
    this.send(msg);
  });

  this.on("close", function (removed, done) {
    if (removed) {
      // This node has been disabled/deleted
    } else {
      // This node is being restarted
    }
    done();
  });
}
  RED.nodes.registerType("dfair", DFAirNode);
};

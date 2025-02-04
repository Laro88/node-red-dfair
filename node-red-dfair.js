import init_dfair from './dfair_io.js';

export default function (RED) {
  function DFAirNode(config) {
    RED.nodes.createNode(this, config);
    var node = this;

    let dfair = null

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
      if(msg > 0 ){ //enable
        
        dfair = init_dfair("10.10.10.167",5,"A")
        node.console.warn("Connecting");
      }
      else{ //disable
        node.console.warn("Disconnecting");
        dfair = null;
      }
      
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

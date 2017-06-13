  "use strict"

var sphero = require("sphero");
var orb = sphero("COM6");

orb.connect(function() {
  // roll Sphero forward
  orb.roll(150, 180);
  // turn Sphero green
  setTimeout(function(){
    orb.roll(0,180)
  },10000);
  orb.color("green");
  // have Sphero tell you when it detect collisions
  
});
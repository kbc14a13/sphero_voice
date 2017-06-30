const keypress = require('keypress');
//sphero.jsの呼び出し
const test = require("../spheroController.js");
//sphero等の機種を指定
const sphero = require("sphero");
//Bluetoothの特定のspheroに対して指定されてる送信portを入力
const spheroChoice = require("../spheroChoice.js");
spheroChoice.choice(function(port){
  console.log(port);
  const orb = sphero(port);
  orb.connect(listen);
  function handle(ch, key) {
    const stop = orb.roll.bind(orb, 0, 0)

    if (key.ctrl && key.name === "c") {
      process.stdin.pause();
      process.exit();
    }

    if (key.name === "up") {
      test.move.advance(orb);
    }

    if (key.name === "down") {
      test.move.back(orb);
    }

    if (key.name === "left") {
      test.move.left(orb);
    }

    if (key.name === "right") {
      test.move.right(orb);
    }

    if (key.name === "space") {
      stop();
    }
  }

  function listen() {
    keypress(process.stdin);
    process.stdin.on("keypress", handle);

    console.log("starting to listen for arrow key presses");

    process.stdin.setRawMode(true);
    process.stdin.resume();
  }

});

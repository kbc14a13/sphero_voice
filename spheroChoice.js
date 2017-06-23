const choiceJson = require("./config.json");

const keypress = require('keypress');
const choice = function(callback){
    // make `process.stdin` begin emitting "keypress" events 
    keypress(process.stdin);
    console.log("F1:RPO");
    console.log("F2:PBW");
    
    // listen for the "keypress" event 
    process.stdin.on('keypress', function (ch, key) {
        if (key.ctrl && key.name == 'c') {
            process.stdin.pause();
        }else if (key.name == 'f1') {
            process.stdin.pause();
            callback(choiceJson.RPO);
        }else if (key.name == 'f2') {
            process.stdin.pause();
            callback(choiceJson.PBW);
        }else{

        }
    });
 
    process.stdin.setRawMode(true);
    process.stdin.resume();
};

module.exports = {
    choice: choice
};
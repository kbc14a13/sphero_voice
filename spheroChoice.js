const choiceJson = require("./config.json");

const keypress = require('keypress');
console.log("2")
const choice = function(callback){
    // make `process.stdin` begin emitting "keypress" events 
    keypress(process.stdin);
    console.log("3")
    
    // listen for the "keypress" event 
    process.stdin.on('keypress', function (ch, key) {
        console.log(choiceJson.PRO);
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
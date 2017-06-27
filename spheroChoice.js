const choiceJson = require("./config.json");

const keypress = require('keypress');
const choice = function(callback){
    // make `process.stdin` begin emitting "keypress" events 
    keypress(process.stdin);
    console.log("F1:RPO");
    console.log("F2:PBW");
    var choiceDecison = false;
    // listen for the "keypress" event 
    process.stdin.on('keypress', function (ch, key) {
        if (key.ctrl && key.name == 'c') {
            process.stdin.pause();
        }else if (key.name == 'f1'&&choiceDecison == false) {
            process.stdin.pause();
            choiceDecison = true;
            callback(choiceJson.RPO);
        }else if (key.name == 'f2'&&choiceDecison == false) {
            process.stdin.pause();
            choiceDecison = true;
            callback(choiceJson.PBW);
        }else if (choiceDecison == false){
            console.log("指定されたキー以外のキーが押されました");
            console.log("F1:RPO");
            console.log("F2:PBW");
        }
    });
 
    process.stdin.setRawMode(true);
    process.stdin.resume();
};

module.exports = {
    choice: choice
};
var express = require('express');
var app = express();
var keypress = require('keypress');
//sphero.jsの呼び出し
var controller = require("./spheroController.js");
//sphero等の機種を指定
var sphero = require("sphero");
//Bluetoothの特定のspheroに対して指定されてる送信portを入力
var spheroChoice = require("./spheroChoice.js");
spheroChoice.choice( function(port) {
    console.log(port);
    var orb = sphero(port);
    app.post('/',function(req,res){
        if (req.body.command === "forward") {
            controller.move.advance(orb);
        } else if (req.body.command === "back") {
            controller.move.back(orb);
        } else if (req.body.command === "left") {
            controller.move.left(orb);
        } else if (req.body.command === "right") {
            controller.move.right(orb);
        } else if (req.body.command === "stop") {
            controller.stop(orb);
        }
    })
})

app.post('/',function(req,res){
    
})


var server = app.listen(8282, function(){
    console.log('Server is running!');
})
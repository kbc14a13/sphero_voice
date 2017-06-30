var express = require('express');
var app = express();
//spheroのポートを選択するときに使用
var keypress = require('keypress');
//sphero.jsの呼び出し
var controller = require("./spheroController.js");
//sphero等の機種を指定
var sphero = require("sphero");
//spheroで使用するポートの選択
var spheroChoice = require("./spheroChoice.js");
var bodyParser = require('body-parser');
app.use(bodyParser());

//Bluetoothの特定のspheroに対して指定されてる送信portを入力
spheroChoice.choice( function(port) {
    console.log(port);
    var orb = sphero(port);
    orb.connect();
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
        res.end();
    })
})



var server = app.listen(8282, function(){
    console.log('Server is running!');
})
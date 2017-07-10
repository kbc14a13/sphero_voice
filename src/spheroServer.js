const express = require('express');
const app = express();
//spheroのポートを選択するときに使用
const keypress = require('keypress');
//sphero.jsの呼び出し
const controller = require("./spheroController.js");
//sphero等の機種を指定
const sphero = require("sphero");
//spheroで使用するポートの選択
const spheroChoice = require("./spheroChoice.js");
const bodyParser = require('body-parser');
app.use(bodyParser());

//Bluetoothの特定のspheroに対して指定されてる送信portを入力
spheroChoice.choice( function(port) {
    console.log(port);
    const orb = sphero(port);
    orb.connect();
    app.post('/',function(req,res){
        switch (req.body.command) {
            case "forward" :
                controller.move.advance(orb);
                break;
            case "back" :
                controller.move.back(orb);
                break;
            case "right":
                controller.move.right(orb);
                break;
            case "left" :
                controller.move.left(orb);
                break;                    
            case "stop" :
                controller.stop(orb);
                break;
        }
        res.end();
    })
})



const server = app.listen(8282, function(){
    console.log('Server is running!');
})
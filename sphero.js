//これを使用する際は以下のコメントを解除してコントローラー側に記入してください
/*
//sphero.jsの呼び出し
var connecr =require("./sphero.js")
//sphero等の種類を指定
var sphero = require("sphero");
//Bluetoothの特定のspheroに対して指定されてる送信portを入力
var orb = sphero("COM6");
*/
//引数は角度

var sphero = require("sphero");

var control = function(orb,rote){
    orb.roll(150,rote);
        setTimeout(function(){
            orb.roll(0,360-rote);
        },10000);
};

var move_left = function(orb){
    control(orb,270);
};

var move_right = function(orb){
    control(orb,90);
};

var move_advance = function(orb){
    control(orb,0);
};

var move_back = function(orb){
    control(orb,180);
};

var move_stop = function(orb){
    orb.roll.bind(orb,0,0);
};

module.exports = {

    move: {
        left: move_left,
        right: move_right,
        advance: move_advance,
        back: move_back

    }

};
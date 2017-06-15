//これを使用する際は以下のコメントを解除してコントローラー側に記入してください
/*
//sphero等の種類を指定
var sphero = require("sphero");
//Bluetoothの特定のspheroに対して指定されてる送信portを入力
var orb = sphero("COM6");
*/
//引数は角度
var contol = function(rote){
    orb.roll(150,rote);
            setTimeout(function(){
                orb.roll(0,360-rote);
            },10000);
};

var move_left = function(){
    contol(90)
};

var move_right = function(){
    contol(270)
};

var move_advance = function(){
    contol(0)
};

var move_back = function(){
    contol(180)
};
//これを使用する際は以下のコメントを解除してコントローラー側に記入してください
/*
//sphero.jsの呼び出し
const connecr =require("./sphero.js")
//sphero等の種類を指定
const sphero = require("sphero");
//Bluetoothの特定のspheroに対して指定されてる送信portを入力
const orb = sphero("COM6");
*/
//引数は角度

const sphero = require("sphero");

const control = function(orb,rote){
    orb.roll(150,rote);
        setTimeout(function(){
            orb.roll(0,360-rote);
        },10000);
};

const move_left = function(orb){
    control(orb,270);
};

const move_right = function(orb){
    control(orb,90);
};

const move_advance = function(orb){
    control(orb,0);
};

const move_back = function(orb){
    control(orb,180);
};

const move_stop = function(orb){
    orb.roll.bind(orb,0,0);
};

module.exports = {

    move: {
        left: move_left,
        right: move_right,
        advance: move_advance,
        back: move_back,
        stop: move_stop

    }

};
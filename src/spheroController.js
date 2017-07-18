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


const control = function(orb,angle){
    orb.roll(150,angle);
        setTimeout(function(){
            orb.roll(0,360-angle);
        },10000);
};

const move_left = function(orb){
    control(orb,270);
};

const move_right = function(orb){
    control(orb,90);
};

const move_forward = function(orb){
    control(orb,0);
};

const move_back = function(orb){
    control(orb,180);
};

const stop = function(orb){
    orb.roll.bind(orb,0,0);
};

const rotate = function(orb,angle){
    orb.roll.bind(orb,0,angle);
};

const rotate_right= function(orb){
    rotate(orb,90);
};

const rotate_back= function(orb){
    rotate(orb,180);
};

const rotate_left= function(orb){
    rotate(orb,270);
};

module.exports = {

    move: {
        left: move_left,
        right: move_right,
        advance: move_forward,
        back: move_back,

    },
    stop: stop,
    rotate: {
        left: rotate_left,
        right: rotate_right,
        back: rotate_back
    }

};
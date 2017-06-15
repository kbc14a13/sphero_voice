var sphero = require("sphero");
var orb = sphero("COM6");

//ここの部分はgoohleSpeachAPI導入部分

//json部分
//jsontextは仮置き
var jsontext = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}';
var contact = JSON.parse(jsontext);

//sphero部分
orb.connect(function(){
    switch(contact){
        case '前':
            orb.roll(150,0);
            setTimeout(function(){
                orb.roll(0,0);
            },10000);
        break
        case '後ろ':
            orb.roll(150,180);
            setTimeout(function(){
                orb.roll(0,180);
            },10000);
        break
        case '左':
            orb.roll(150,90);
            setTimeout(function(){
                orb.roll(0,270);
            },10000);
        break
        case '右':
            orb.roll(150,270);
            setTimeout(function(){
                orb.roll(0,90);
            },10000);
        break
    }
});

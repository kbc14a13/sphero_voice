const sphero = require("sphero");
const orb = sphero("COM6");

//ここの部分はgoohleSpeachAPI導入部分

//json部分
//jsontextは仮置き
const jsontext = '{"firstname":"Jesper","surname":"Aaberg","phone":["555-0100","555-0120"]}';
const contact = JSON.parse(jsontext);
const contol = function(rote){
    orb.roll(150,rote);
            setTimeout(function(){
                orb.roll(0,360-rote);
            },10000);
};

//sphero部分
orb.connect(function(){
    switch(contact){
        case '前':
            contol(0);  
        break
        case '後ろ':
            contol(180);
        break
        case '左':
            contol(90);
        break
        case '右':
            contol(270)
        break
    }
});

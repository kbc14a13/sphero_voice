//ボタンについての記述
var btn = document.getElementById('btn');
var content = document.getElementById('content');

//音声認識APIの使用
var speech = new webkitSpeechRecognition();

//言語を日本語に設定
speech.lang = "ja";

//ボタンクリックで認識開始
btn.addEventListener('click', function () {
  speech.start();
});

/**
 * 特定の言葉をコマンドとして解釈して、返却します。
 * 
 * @param {string} message 抽出する対象の文字列
 * @return {string | null} 抽出されたコマンド　"forword" | "back" | "right" | "left" | "stop" 
 */
function extructCommand(message) {


  //正規表現とそれに対応するコマンドを配列に登録する。
  var matchers = [
    {reg: /前/, command: "forword"},
    {reg: /後/, command: "back"},
    {reg: /右/, command: "right"},
    {reg: /左/, command: "left"},
    {reg: /停止/, command: "stop"}
  ];

  //配列matchersの長さだけfor文で回している。
  for(var i = 0; i < matchers.length; i++){

  //受け取った言葉によって正規表現に一致したコマンドを返却する。
    if (message.match(matchers[i].reg)){
      return matchers[i].command;
    }

  }
  
  return null;
  
}

//認識されたテキストを使って処理を分岐
speech.addEventListener('result', function (e) {

  var str = e.results[0][0].transcript;
  //matchersに登録していない言葉が出たらその言葉を表示する関数。
  getTextContents(str);

  var command = extructCommand(str);

  //commandに値が入っていれば、送信する。 
  //登録されていない言葉が言われると送信されない。
  if(command != null){
     $.post('http://localhost:8282/', {command: command});
  }
 
});

//テキスト表示
function getTextContents(str) {
  content.innerHTML = '<p>認識された言葉</p>' +
    '<input type="text" value="' + str + '">';
}

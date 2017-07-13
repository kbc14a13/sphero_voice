//readyを使ってhtmlが読み込まれてからScriptを動作させている。
$(function () {

  //音声認識APIの使用する。
  var recognition = new webkitSpeechRecognition();

  //言語を日本語に設定する。
  recognition.lang = "ja";

  //認識されたテキストを使って処理を分岐する。
  recognition.addEventListener('result', function (e) {

    var str = e.results[0][0].transcript;

    //matchersに登録していない言葉が出たらその言葉を表示する関数
    getTextContents(str);

    var command = extructCommand(str);

    //commandに値が入っていれば、送信する。 
    //登録されていない言葉が言われると送信されない。
    if (command != null) {
      $.post('http://localhost:8282/', { command: command });
    }

  });

  /*これで連続で音声認識が行える。
   *マイクの許可の通知もタブを閉じるまで一回許可するとしばらくはポップが出なくなる。
  */
  recognition.addEventListener('end', function () {
    recognition.start();
  });

  //ボタンクリックで認識開始する。
  $('#btn').on('click', function () {
    recognition.start();
  });

});


/**
 * 特定の言葉をコマンドとして解釈して、返却します。
 * HTMLの読み込みが終わった時点で処理を実行する。
 * 
 * @param {string} message 抽出する対象の文字列
 * @return {string | null} 抽出されたコマンド　"forward" | "back" | "right" | "left" | "stop" 
 */
function extructCommand(message) {

  //正規表現とそれに対応するコマンドを配列に登録する。
  var matchers = [
    { reg: /前/, command: "forward" },
    { reg: /後/, command: "back" },
    { reg: /右/, command: "right" },
    { reg: /左/, command: "left" },
    { reg: /停止/, command: "stop" }
  ];

  //配列matchersの長さだけfor文で回している。
  for (var i = 0; i < matchers.length; i++) {

    //受け取った言葉によって正規表現に一致したコマンドを返却する。
    if (message.match(matchers[i].reg)) {
      return matchers[i].command;
    }

  }

  return null;

}

//テキストを表示する。
function getTextContents(result) {
  $('#content').text(result);
}

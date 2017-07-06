//ボタンについての記述
var btn = document.getElementById('btn');
var content = document.getElementById('content');

//音声認識APIの使用
var speech = new webkitSpeechRecognition();

//言語を日本語に設定
speech.lang = "ja";

//ボタンクリックで認識開始
btn.addEventListener('click', function() {
  speech.start();
});

//認識されたテキストを使って処理を分岐
speech.addEventListener('result', function(e) {
  console.log(e);
  var text = e.results[0][0].transcript;

  if(text.match(/前/)){
    //textに前が含まれるときの処理
    alert("喋った言葉は前です。");
  }else if(text.match(/後/)){
    //textに後ろが含まれるときの処理
    alert("喋った言葉は後ろです。");
  }else if(text.match(/右/)){
    //textに右が含まれるときの処理
    alert("喋った言葉は右です。");
  }else if(text.match(/左/)){
    //textに左が含まれるときの処理
    alert("喋った言葉は左です。");
  }else if(text.match(/停止/)){
    //textに停止が含まれるときの処理
    alert("喋った言葉は停止です。");
  }
  else{
    //上記のどれにも当てはまらないとき
    getTextContents(text);
  }
});

  /**switch(text) {
    case "前":
      alert("喋った言葉は前です");
      break;
    case "後ろ":
      alert("喋った言葉は後ろです");
      break;
    case "右":
      alert("喋った言葉は右です");
      break;
    case "左":
      alert("喋った言葉左です");
      break;
    case "停止":
     alert("喋った言葉は停止です");
      break;
    default:
      getTextContents(text);
  }  
});*/


//テキスト表示
function getTextContents(text) {
  content.innerHTML = '<p>認識された言葉</p>' +
                   '<input type="text" value="' + text + '">';
}

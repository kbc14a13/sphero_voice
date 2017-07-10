const choiceJson = require("../config.json");
const keypress = require('keypress');


/**
 * config.jsonに記述されている設定情報と照らしあわせて、
 * キーボード入力によって接続先のSpheroを選ぶために利用する関数です。
 * 
 * @param {(portName: string) => void} callback 
 */
const choice = function(callback) {

    // 標準入力がkeypressイベントを発火できるようにする。
    keypress(process.stdin);

    // F1かF2を押すように促す表示をする。
    console.log("F1:RPO");
    console.log("F2:PBW");

    // 選択が完了したかどうかを表すフラグ
    // 完了していたらtrue。
    let chosen = false;

    // keypressイベントを監視
    process.stdin.on('keypress', function (ch, key) {

        if (key.ctrl && key.name == 'c') {
            // Ctrl+Cが押された時はキャンセル
            process.stdin.pause();

        } else if (!chosen) {
            // ポートが未選択の間だけ動作する
            switch(key.name) {

                // f1かf2が押された時は、コールバック関数経由で
                // 選択されたポートを表す文字列を外部に通知します。
                case 'f1':
                    process.stdin.pause();
                    chosen = true;
                    callback(choiceJson.RPO);
                    break;

                case 'f2':
                    process.stdin.pause();
                    chosen = true;
                    callback(choiceJson.PBW);
                    break;

                default:
                    // 未定義のキーが押された時は、再度入力を促す。
                    console.log("指定されたキー以外のキーが押されました");
                    console.log("F1:RPO");
                    console.log("F2:PBW");
            }

        }
    });
 
    // 標準入力のストリームを入力受付状態にする。
    // process.stdin.pause()が呼び出されるまでそのままになる。
    process.stdin.setRawMode(true);
    process.stdin.resume();
};


// 必要となるモジュールのエクスポート
module.exports = {
    choice: choice
};

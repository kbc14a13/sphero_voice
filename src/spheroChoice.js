const choiceJson = require("../config.json");
const keypress = require('keypress');


/**
 * 選択中であるかどうかを表すフラグ。
 * 選択が終了したらtrue
 */
let chosen = false;


/**
 * ポート選択のためのキー入力を要求するメッセージ
 */
const printKeySelectMessages = () => {
    console.log('Please select port!');
    console.log('F1: RPO');
    console.log('F2: PBW');
    console.log('F3: YRY');
    console.log('F4: WRP');
    console.log('>?');
};


/**
 * config.jsonに記述されている設定情報と照らしあわせて、
 * キーボード入力によって接続先のSpheroを選ぶために利用する関数です。
 * 
 * @param {(portName: string) => void} callback ポートが選択された後に呼び出されるコールバック関数
 */
const choice = (callback) => {

    // これから選ぶので、選択済みフラグを折っておく。
    chosen = false;

    // 標準入力がkeypressイベントを発火できるようにする。
    keypress(process.stdin);

    // 接続先のポートを選択するためにキー入力を求める。
    printKeySelectMessages();

    // keypressイベントを監視
    process.stdin.on('keypress', function (ch, key) {

        // キーが選択された際に呼び出す。
        const connect = (target) => {
            // 標準入力を止める
            process.stdin.pause();
            // 選択済みフラグを解除
            chosen = true;
            callback(choiceJson[target]);
        };

        if (key.ctrl && key.name == 'c') {
            // Ctrl+Cが押された時はキャンセル
            process.stdin.pause();

        } else if (!chosen) {

            // ポートが未選択の間だけ動作する
            switch(key.name) {
                
                case 'f1':
                    connect('RPO');
                    break;

                case 'f2':
                    connect('PBW');
                    break;

                case 'f3':
                    connect('YRY');
                    break;

                case 'f4':
                    connect('WRP');
                    break;

                default:
                    // 未定義のキーが押された時は、再度入力を促す。
                    console.log("指定されたキー以外のキーが押されました");
                    printKeySelectMessages();
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

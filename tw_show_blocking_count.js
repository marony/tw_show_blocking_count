// jQuery読み込み
if (!window.jQuery) {
  document.body.appendChild((function(){
    var s = document.createElement("script");
    s.src = '//ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min.js';
    return s;
  })());
}

// 一番下までスクロールする
var maxHistory = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
var interval = function(){
    var heights = [document.body.clientHeight, document.body.scrollHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight];
    var height = Math.max.apply(null, heights);
    maxHistory.push(height);
    maxHistory.shift();
    if (maxHistory.some(function(v, i, a){
        return (v != height);
    })) {
        // まだスクロール途中
        window.scroll(0, height);
    } else {
        // スクロールが終わったのでブロック数を表示
        clearInterval(timer);
        alert($(".blocked").length);
    }
};

// タイマーを設定(500ms)
// 回線が遅い場合など、一番下までスクロールせず止まってしまう場合は大きく
var timer = setInterval(interval, 500);

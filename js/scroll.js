// スムーススクロールの実装

$(function(){
   // ドロップダウンの処理
   $(".dropdown-trigger").dropdown(
    // constrain_width: false,
    // hover: true,
    // belowOrigin: false
   );


   // #で始まるアンカーをクリックした場合に処理

   $('a[href^=#]').click(function() {
      // スクロールの速度
      var speed = 400; // ミリ秒
      // アンカーの値取得
      var href= $(this).attr("href");
      // 移動先を取得
      var target = $(href == "#" || href == "" ? 'html' : href);
      // 移動先を数値で取得
      var position = target.offset().top;

      // スムーススクロール(navの分引く)
      $('body,html').animate({scrollTop:position-64}, speed, 'swing');

      return false;
   });

});
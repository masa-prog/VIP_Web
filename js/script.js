//jQuery init

$(document).ready(function(){
	// sidenavの設定
	$('.sidenav').sidenav({
		edge:'right',
	});

  	// sidenav-li がクリックされたときにsidenavを閉じる
  	$('.sidenav-li').click(function(){
  		$('.sidenav').sidenav('close');
  	});

     //トップまでのスクロール
     $('.scroll-btn').click(function(){
     	$("html,body").animate({scrollTop:0});
     });

	// モーダルの設定
	$('.modal').modal();

	// スライダーの設定
  $('.slider').slider({
    height: 750,
    indicators: false
  });

   // ドロップダウンの処理
   $(".dropdown-trigger").dropdown();

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
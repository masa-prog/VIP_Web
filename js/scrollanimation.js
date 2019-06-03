
document.addEventListener('DOMContentLoaded', function(){
  $(window).on({
    "scroll":function(e){
      var startY= document.querySelector(".css-fade3").getBoundingClientRect().top, //表示させたい対象
          windowHeight = window.innerHeight, // ブラウザの高さ
          offset = windowHeight; //オフセット 
      // 表示
      if(startY<offset){
        document.querySelector(".css-fade3").classList.add('css-fade3--in');
      // ブラウザの外になったら消す
      }
    }
  })
});

document.addEventListener('DOMContentLoaded', function(){
  $(window).on({
    "scroll":function(e){
      var startY= document.querySelector(".css-fade4").getBoundingClientRect().top, //表示させたい対象
          windowHeight = window.innerHeight, // ブラウザの高さ
          offset = windowHeight; //オフセット 画面の2/3
      // 表示
      if(startY<offset){
        document.querySelector(".css-fade4").classList.add('css-fade4--in');
      // ブラウザの外になったら消す
      }
    }
  })
});

document.addEventListener('DOMContentLoaded', function(){
  $(window).on({
    "scroll":function(e){
      var startY= document.querySelector(".css-fade5").getBoundingClientRect().top, //表示させたい対象
          windowHeight = window.innerHeight, // ブラウザの高さ
          offset = windowHeight; //オフセット 画面の2/3
      // 表示
      if(startY<offset){
        document.querySelector(".css-fade5").classList.add('css-fade5--in');
      // ブラウザの外になったら消す
      }
    }
  })
});
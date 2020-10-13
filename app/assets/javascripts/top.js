$(window).on("load", function() {
  $("li").on("click", function() {
    $("li.selected").removeClass("selected");
    $(this).addClass("selected");
    $(".contents div").hide();
    $("." + this.id).show();
  });
});



//window.addEventListenerの第二引数部分を書き換え
//window.addEventListener("load", function() {
  //var btn = document.querySelector("input");

  //function printHello() {
    //console.log("Hello world");
  //}

  //btn.addEventListener("click", printHello);
//});


//省略なし
//function printHelloWithBottom() {
  //var btn = document.querySelector("input");
  // ボタンをDOMオブとして取得、変数btnに代入

  //function printHello() {
    //console.log("Hello world");
  //}
  //printHello関数を定義

  //btn.addEventListener("click", printHello);
  //ボタンのDOMオブのbtnに対して、
  //clickイベントとprintHello関数を紐付ける仕組みであるイベントリスナを追加
//}
//一連の処理をまとめた関数(printHelloWithBottom)を作る

//window.addEventListener("load", printHelloWithBottom);
  
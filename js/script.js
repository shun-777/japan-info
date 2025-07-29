$(document).ready(function () {
  $("#hamburger").on("click", function () {
    $("#sp-nav, #overlay").toggleClass("open");
    $(this).toggleClass("open");
  });

  $("#overlay").on("click", function () {
    $("#sp-nav, #overlay, #hamburger").removeClass("open");
  });


	$('.slider').slick({
		autoplay: true, // 自動再生
		autoplaySpeed: 5000, // 3秒ごとにスライド
		dots: false, // インジケータを表示
		arrows: false, // 矢印を表示
		infinite: true, // ループ
		speed: 5000, // スライドの速さ
		slidesToShow: 1, // 1枚ずつ表示
		fade: true, // フェードイン切り替え
		slidesToScroll: 1 // 1枚ずつスクロール
	});
});
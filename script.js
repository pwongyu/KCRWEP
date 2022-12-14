// document.getElementById
// document.getElementsByClassName
// document.querySelector
// document.querySelectorAll
// addEventListener


// 이미지 슬라이드 페이드인 페이드아웃
$('#slide > div:gt(0)').hide();

setInterval(function(){
    $('#slide > div:first')
        .fadeOut(1500)
        .next()
        .fadeIn(1500)
        .end()
        .appendTo('#slide');
},7000);
// ↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑↑



window.onload=function () {

    /**窗口上滑距离**/
    $(window).scroll(headScroll);

    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        autoplay : 5000,
        autoplayDisableOnInteraction: false,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        loop: true,
        pagination : '.swiper-pagination',
        freeMode:false
    })

}


function headScroll() {
    var alpha=$(window).scrollTop()/100<1?$(window).scrollTop()/100:1;

    $(".jd_search_box").css({
        background: "rgba(216,80,92,"+alpha+")"
    });
    if(alpha>0.5)
        $(".icon_logo").css({
            color:"#fff"
        })
    else
        $(".icon_logo").css({
            color:"#d8505c"
        })

}


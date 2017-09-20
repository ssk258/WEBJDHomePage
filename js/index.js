

window.onload=function () {

    /**窗口上滑距离**/
    window.addEventListener('scroll',function () {
        headScroll();
    });

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
    var opacity=window.scrollY/100<1?window.scrollY/100:1;
    var search_box= document.getElementsByClassName("jd_search_box");
    search_box[0].style.backgroundColor ="rgba(216,80,92,"+opacity+")";
    var icon_logo=document.getElementsByClassName("icon_logo");
    if(opacity>0.5)
        icon_logo[0].style.color="#fff";
    else
        icon_logo[0].style.color="#d8505c";
}


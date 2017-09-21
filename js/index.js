

window.onload=function () {

    /**窗口上滑距离**/
    window.addEventListener('scroll',function () {
        headScroll();
    });
    //设置倒计时时间
    setSkTime(10,0,01);
    ///开始倒计时
    setInterval(startSkTime,1000);
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

//搜索栏变色
function headScroll() {
    var opacity=window.scrollY/100<1?window.scrollY/100:1;
    var search_box= document.getElementsByClassName("jd_search_box");
    //var search_box=document.querySelector('.jd_search_box');//H5新增查询
    search_box[0].style.backgroundColor ="rgba(216,80,92,"+opacity+")";
    var icon_logo=document.getElementsByClassName("icon_logo");
    if(opacity>0.5)
        icon_logo[0].style.color="#fff";
    else
        icon_logo[0].style.color="#d8505c";
}
//设置倒计时时间
function setSkTime(hour,minute,second) {
    var sk_time=document.getElementsByClassName("sk_time")[0];
    var sk_times=sk_time.getElementsByTagName("span");
    sk_times[0].innerHTML=parseInt(hour/10);
    sk_times[1].innerHTML=parseInt(hour%10);
    sk_times[3].innerHTML=parseInt(minute/10);
    sk_times[4].innerHTML=parseInt(minute%10);
    sk_times[6].innerHTML=parseInt(second/10);
    sk_times[7].innerHTML=parseInt(second%10);
}

function startSkTime() {
    var hour1,hour2,minute1,minute2,second1,second2;
    var sk_time=document.getElementsByClassName("sk_time")[0];
    var sk_times=sk_time.getElementsByTagName("span");
    hour1=sk_times[0].innerHTML;
    hour2=sk_times[1].innerHTML
    minute1=sk_times[3].innerHTML;
    minute2=sk_times[4].innerHTML;
    second1=sk_times[6].innerHTML
    second2=sk_times[7].innerHTML
    second2--;
    if(second2<0){
        second1--;
        if(second1<0){
            minute2--;
            if(minute2<0){
                minute1--;
                if(minute1<0){
                    hour2--;
                    if(hour2<0){
                        hour1--;
                        if(hour1<0){
                            return;
                        }else {
                            hour2=9;
                            minute1=5
                            minute2=9;
                            second1=5;
                            second2=9;
                        }
                    }else {
                        minute1=5
                        minute2=9;
                        second1=5;
                        second2=9;
                    }
                }else {
                    minute2=9;
                    second1=5;
                    second2=9;
                }
            }else {
                second1=5;
                second2=9;
            }
        }else {
            second2=9;
        }
    }

    sk_times[0].innerHTML=hour1;
    sk_times[1].innerHTML=hour2;
    sk_times[3].innerHTML=minute1;
    sk_times[4].innerHTML=minute2;
    sk_times[6].innerHTML=second1;
    sk_times[7].innerHTML=second2;
}

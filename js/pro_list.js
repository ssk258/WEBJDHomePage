if ('addEventListener' in document) {
    document.addEventListener('DOMContentLoaded', function() {
        FastClick.attach(document.body);
    }, false);
}


window.onload=function () {

    new IScroll(document.querySelector(".left_menu"));
    new IScroll(document.querySelector(".right_menu"));
    var left_as=document.querySelectorAll('.left_menu_container li a');
    addTouchEvent(left_as);
}


/**轻触事件**/
function tapTap(ele) {
    var startTime,delayTime=200,isMoved=false;

    ele.addEventListener('touchstart',function (e) {
        e.preventDefault();
        startTime=Date.now();
    });
    ele.addEventListener('touchmove',function (e) {
        isMoved=true;
    });
    ele.addEventListener('touchend',function (e) {
        console.log(Date.now() - startTime);
    });


}
//添加轻触事件
function addTouchEvent(left_as) {
    var i=0;
    for (;i<left_as.length;i++){
        left_as[i].addEventListener('click',leftTapEvent);
        tapTap(left_as[i]);
    }
}

function leftTapEvent(e) {
    var left_lis=document.querySelectorAll('.left_menu_container li a');
    var i;
    for(i=0;i<left_lis.length;i++){
        if(left_lis[i]===e.target){
            left_lis[i].className='left_menu_choose';
        }else {
            left_lis[i].className=null;
        }
    }
    console.log(e.target);

}
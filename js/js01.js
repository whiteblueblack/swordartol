/**
 * Created by ZhangHang on 2016/11/8.
 */
window.onload = function(){
    var arrBanner = document.getElementsByClassName('banner');
    var arrControl = document.getElementsByClassName('right-wrap');
    var arrEnter = document.getElementsByClassName("body-enter");
    var arrLbottomimg = document.getElementsByClassName("body-zuoxiaimg");
    var arrLtopimg = document.getElementsByClassName("zuoshangsmall");
    var arrLtopBigimg = document.getElementsByClassName("zuoshangbig");
    for(var i = 0; i<arrControl.length; i++){
        arrControl[i].index= i;
        arrControl[i].onmouseover= function(){
            for(var j = 0; j<arrBanner.length; j++){
                arrBanner[j].style.width ='57px';
                arrBanner[j].style.zIndex='';
                arrEnter[j].style.display='none';
                arrLbottomimg[j].style.display='none';
                arrLtopimg[j].style.display='block';
                arrLtopBigimg[j].style.display='none';
            }
            arrEnter[this.index].style.display='block';
            arrBanner[this.index].style.width='700px';
            arrLbottomimg[this.index].style.display='block';
            arrBanner[this.index].style.zIndex='22';
            arrLtopimg[this.index].style.display = 'none';
            arrLtopBigimg[this.index].style.display='block';
            s1=this.index
        };

    }

    var times=0;
    var timer = setInterval(function(){
        times++;
        if(times==8){
            times=0
        }
        alert(times);
        arrControl[times].onmouseover();
    },4000);
    (function(){
        var oMask_2 = document.getElementsByClassName("rightbody-box")[0];
        oMask_2.onmouseover = function(){
            clearInterval(timer);
            timer = 0;
        };
        oMask_2.onmouseout = function(){
             timer = setInterval(function(){
                s1++;
                if(s1==8){
                    s1=0
                }
                alert(s1);
                 arrControl[s1].onmouseover();
            },4000);
        }
    })();
    for(var j =0;j<arrBanner.length;j++){
        arrBanner[j].index= j;
    }
    // for(var s =0; s<oBanner.length;s++){
    //     oBanner[s].style.width='57px';
    // }
    // oBanner[this.index].style.width='700px';
    var arrVideo = document.getElementsByClassName("video-box")[0];
    var oVideopControl = document.getElementsByClassName("video-control")[0];
    var arrMask_1 = document.getElementsByClassName("leftbody-box");
    var arrMask_2 = document.getElementsByClassName("rightbody-box");
    var oThevideo = document.getElementById("video");
    if(arrVideo.style.display=="block"){
        arrMask_2.className='blur';
        arrMask_1.className='blur';
    }
    oVideopControl.onclick = function(){
        if(arrVideo.style.display='block'){
            arrVideo.style.display='none';
            oThevideo.muted=true;
        }
    };


};
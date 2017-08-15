var otbn = document.getElementById("button3");
var x;
otbn.onclick = function () {
    if (x) {                         //点击一次开始走时，再点一次停止走时
        window.clearInterval(x);
        x = null;
        return;
    }
    x = window.setInterval(function () {
        var now = new Date();  //获取 Date对象
        var weeker = now.getDay();//获取星期
        var hour = now.getHours()+2;//获取小时
        var minu = now.getMinutes();//获取分钟
        var secon = now.getSeconds(); //获取秒
        //获取中文星期几
        var arr_week = new Array("星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六");
        var week = arr_week[weeker];
        var time =   week + " " + hour + ":" + minu + ":" + secon;
        form3.show3.value = time;
    }, 1000);
}
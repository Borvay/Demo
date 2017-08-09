/**
 * Created by 李博为 on 2017/8/8 0000.
 */
var wrap1=document.getElementById("wrap");1
var square=wrap1.getElementsByTagName("div");
var ram1;
var ram2;
var ram3;
var x=[0,1,2];

function go() {
    //定义三个颜色的随机rgb
    function ramColor() {
        return '#'+Math.floor(Math.random() * 0xffffff).toString(16);
    }
    /*var r1=Math.ceil(Math.random()*255);
    var r2=Math.ceil(Math.random()*255);
    var r3=Math.ceil(Math.random()*255);
    var g1=Math.ceil(Math.random()*255);
    var g2=Math.ceil(Math.random()*255);
    var g3=Math.ceil(Math.random()*255);
    var b1=Math.ceil(Math.random()*255);
    var b2=Math.ceil(Math.random()*255);
    var b3=Math.ceil(Math.random()*255);
    var color1="rgb("+r1+","+g1+","+b1+")";
    var color2="rgb("+r2+","+g2+","+b2+")";
    var color3="rgb("+r3+","+g3+","+b3+")";*/
    var color1=ramColor();
    var color2=ramColor();
    var color3=ramColor();
    //console.log为打印函数，用来调试显示
    console.log(color1);
    console.log(color2);
    console.log(color3);
    //定义三个随机数用来选定变色的三个格子
    function ran() {
        ram1=Math.floor(Math.random()*9);
        ram2=Math.floor(Math.random()*9);
        ram3=Math.floor(Math.random()*9);
        //随机数去重
        while (ram1 == ram2 || ram2 == ram3 || ram1 == ram3) {
            ran();
        }
    }
    ran();
    function ramSquare() {
        //随机选三个块改变为随机颜色
        square[ram1].style.backgroundColor = color1;
        square[ram2].style.backgroundColor = color2;
        square[ram3].style.backgroundColor = color3;
    }
    ramSquare();
}

function timeram() {
    //还原颜色
    square[x[0]].style.backgroundColor = "#e78326";
    square[x[1]].style.backgroundColor = "#e78326";
    square[x[2]].style.backgroundColor = "#e78326";
    go();
    x=[ram1,ram2,ram3]
}

function start() {
    change = setInterval("timeram()",1000);
    var btn1 = document.getElementById("btn1");
    btn1.disabled=true;
}

function reset() {
    change = clearInterval(change);
    for(var i=0;i<square.length;i++){
        square[i].style.backgroundColor="#e78326";
    }
    var btn1 = document.getElementById("btn1");
    btn1.disabled=false;
}

function prepare() {
    var btn1 = document.getElementById("btn1");
    btn1.onclick = start;
    var btn2 = document.getElementById("btn2");
    btn2.onclick = reset;
}
window.onload = prepare;

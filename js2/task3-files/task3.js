/**
 * Created by 李博为 on 2017/8/2 0000.
 */
//获取localStorage的数据
var storage = window.localStorage;
var str = storage.getItem("1");
//使用JSON.parse()方法,将JSON字符串转换成为JSON对象
var save = JSON.parse(str);
var word1 = save.word1;
var word2 = save.word2;
var num = save.number;
var arrX = save.arr1;
var arrY = save.arr2;
var i = 1;
var z = 1;//统计按钮点击次数
var num1 = document.getElementById("number1");
var cover = document.getElementById("cover");
var show = document.getElementById("show");
var character = document.getElementById("character");
var word = document.getElementById("word");
console.log("word1:"+word1);
console.log("word2:"+word2);
console.log("num:"+num);
console.log("arrX:"+arrX);
console.log("arrY:"+arrY);

var btn1 = document.getElementById("btn1");

function onclick1() {
    if(arrX.indexOf(i) != -1) {
        character.firstChild.nodeValue = "杀手";
        word.firstChild.nodeValue = word2;
    }
    else {
        character.firstChild.nodeValue = "水民";
        word.firstChild.nodeValue = word1;
    }

    if(i < num) {
        i++;
        btn1.firstChild.nodeValue = "隐藏并传递给"+ i +"号";
    }
    else {
        btn1.firstChild.nodeValue = "角色分配完毕";
        btn1.onclick = function() {
            location.href = "mytask4-1.html";
        }
    }
    cover.style.visibility = "hidden";
    show.style.visibility = "visible";
}

function onclick2() {
    num1.firstChild.nodeValue = i;
    btn1.firstChild.nodeValue = "查看"+ i +"号身份";
    cover.style.visibility = "visible";
    show.style.visibility = "hidden";
}

function click() {
    if(z % 2 == 0) {
        onclick2();
    }
    else {
        onclick1();
    }
    z++;
    console.log("z值"+z);
}

btn1.onclick = click;

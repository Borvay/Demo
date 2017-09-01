/**
 * Created by 李博为 on 2017/8/4 0000.
 */

//获取localStorage的数据
str = window.localStorage.getItem("1");
var save = JSON.parse(str);
var num = save.number;
var arrX = save.arr1;
var btn = document.getElementById("btn");

function next() {
    location.href = "mytask4-2.html";
}

function diary() {
    for( var i = 1;i <= num;i++ ) {
        var element = document.getElementById("player");
        var li = document.createElement("li");
        element.appendChild(li);
        var content = document.createElement("span");
        content.className = "hover";
        if(arrX.indexOf(i) != -1) {
            content.innerHTML = "杀手";
        }
        else {
            content.innerHTML = "水民";
        }
        li.appendChild(content);
        var node = document.createTextNode(i+"号");
        li.appendChild(node);
    }
}

diary();

function prepare() {
    btn.onclick = next;
}

prepare();
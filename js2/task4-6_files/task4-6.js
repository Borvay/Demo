/**
 * Created by 李博为 on 2017/8/8 0017.
 */
//获取localStorage的数据
var str = localStorage.getItem("1");
var save = JSON.parse(str);
var num = save.number;
var arrX = save.arr1;
var arrY = save.arr2;
var arrDead = save.arrD;
var winner = save.win;
var identity = document.getElementById("identity");
var day = Number(save.date);

if (save.date == undefined) {
    day = 1;
}
if (winner == "x") {
    identity.innerHTML = "杀手";
}
else {
    identity.innerHTML = "水民";
}
var x = document.getElementById("x");
var y = document.getElementById("y");
x.innerHTML = arrX.length;
y.innerHTML = arrY.length;
var deadPlayer = [];
for (var i=0;i<arrDead.length; i++) {
    if (arrX.indexOf(arrDead[i]) != -1) {
        deadPlayer.push("杀手");
    }
    else {
        deadPlayer.push("水民");
    }
}

var deadNote = document.getElementById("dead-note");
if(arrDead.length%2==0){
    for(var i=1; i<=day; i++){
        var content = document.createElement("div");
        content.className="day1" ;
        content.innerHTML= '<p> <span class="p3">第'+i+'天</span> </p> <p class="p5"> <span>晚上：'
            + arrDead[2*i-2]
            +'号被杀手杀死，'
            +arrDead[2*i-2]+
            '号是'
            +deadPlayer[2*i-2]+
            '</span> <br> <span>白天：'
            +arrDead[2*i-1]+'' +
            '号被全民投票投死，'
            +arrDead[2*i-1]+'' +
            '号是'
            + deadPlayer[2*i-1]+
            '</span> </p>';

        deadNote.appendChild(content);
    }
}
else{
    for(i=1; i<day; i++){
        content = document.createElement("div");
        content.className="day1" ;
        content.innerHTML= '<p> <span class="p3">第'+i+'天</span> </p> <p class="p5"> <span>晚上：'
            + arrDead[2*i-2]  +
            '号被杀手杀死，'
            +arrDead[2*i-2]+
            '号是'
            +deadPlayer[2*i-2]+
            '</span> <br> <span>白天：'
            +arrDead[2*i-1]+
            '号被全民投票投死，'
            +arrDead[2*i-1]+
            '号是'
            +deadPlayer[2*i-1]+
            '</span> </p>';

        deadNote.appendChild(content);
    }

    content = document.createElement("div");
    content.className="day1" ;
    content.innerHTML= '<p> <span class="p3">第'+day+'天</span> </p> <p class="p5"> <span>晚上：'
        + arrDead[2*day-2]  +
        '号被杀手杀死，'
        +arrDead[2*day-2]+
        '号是'
        +deadPlayer[2*day-2]+
        '</span> <br> ';

    deadNote.appendChild(content);

}


var btn = document.getElementById("btn");
btn.onclick=function () {
    localStorage.clear();
    location.href= "mytask2-1.html";
}








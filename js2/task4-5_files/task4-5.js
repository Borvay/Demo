/**
 * Created by 李博为 on 2017/8/7 0016.
 */
//获取localStorage的数据
var str = localStorage.getItem("1");
var save = JSON.parse(str);
var arrX = save.arr1;
var arrDead = save.arrD;
var page = save.pageChange;
var day = save.date;
if (day == undefined) {
    day = 2;
}
else {
    day = Number(day)+1;
}
var latestDead = arrDead[arrDead.length-1];
var deadIdentity;
var deathNote = document.getElementById("death-note");
var btn = document.getElementById("btn1");

if (arrX.indexOf(latestDead) != -1) {
    deadIdentity = "杀手";
}
else {
    deadIdentity = "水民";
}
//判断展现页面
var change = document.getElementById("change");
if (page == 1) {
    var cry = document.getElementById("cry");
    cry.src = "task4-5_files/crying-girl.png";
    change.style.visibility = "hidden";
    deathNote.innerHTML = latestDead+"号被投票投死了，真实身份是"+deadIdentity;
    btn.innerHTML = "第"+day+"天";
    //储存天数
    save.date = day;
    str = JSON.stringify(save);
    localStorage.setItem(1,str);
    btn.onclick = function () {
        location.href = "mytask4-2.html";
    }
}
else {
    deathNote.innerHTML = latestDead+"号被杀手杀死了，真实身份是"+deadIdentity;
    btn.onclick = function () {
        location.href = "mytask4-4.html"
    }
}
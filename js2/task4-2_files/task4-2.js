/**
 * Created by 李博为 on 2017/8/5 0000.
 */
// 获取localStroage的数据
var str = localStorage.getItem("1");

var save = JSON.parse(str);
var day = save.date;
if (day != undefined){
    document.getElementById("day").innerText=day;
}

document.getElementById("deal").onclick = function () {
    if ( player.length < 6 ) alert("\"点击设置\"配置玩家身份")
    else  parent.location.href = './mytask4-3.html'
}
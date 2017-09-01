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
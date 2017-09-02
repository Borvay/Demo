var playerArray = JSON.parse(localStorage.player);
var playerObj = JSON.parse(localStorage.playerObj);//放Player对象的数组
var theDead = JSON.parse(localStorage.theDead);//放死亡玩家序号
var day = JSON.parse(localStorage.day); //存天数，eg：1,2分别为第一天的晚上和白天
var win = JSON.parse(localStorage.win); //0胜负未分 ，1平民赢 ，2狼人赢
var num; //
console.log(day);
function Player() {
}
Player.prototype.number = 14;
Player.prototype.role = "平民";
Player.prototype.life = "alive";
//在页面中显示信息

//playerObj[2].showOn = function () {
//    var self = this;
//    var playerWrap = $("<div class='player-wrap'></div>");
//    if (this.life == "death") {
//        playerWrap.attr("style", "background-color:#bbb");
//    }
//    var role = $("<div class='role'></div>")
//    role.html(self.role);
//    var number = $("<div class='number'></div>")
//    number.html(self.number + "号");
//    playerWrap.append(role);
//    playerWrap.append(number);
//    $("main").append(playerWrap);
//}
//
//playerObj[2].showOn();


//身份显示在页面
for (var i = 0; i < playerArray.length; ++i) {
    //showOn方法没传过来,很奇怪
    playerObj[i].showOn = function () {
        var self = this;
        var playerWrap = $("<div class='player-wrap'></div>");
        if (this.life == "death") {
            playerWrap.attr("style", "background-color:#bbb");
        }
        var role = $("<div class='role'></div>")
        role.html(self.role);
        var number = $("<div class='number'></div>")
        number.html(self.number + "号");
        playerWrap.append(role);
        playerWrap.append(number);
        $("main").append(playerWrap);
    }
    playerObj[i].showOn();
}


//点击玩家触发事件
$(".player-wrap").on("click", (function () {
    /*给单个div初始化border-color，div全部初始化点击
     其他玩家时背景颜色没了，可能是渲染机制的问题*/
    $(".player-wrap").eq(num).prop("style", "border-color:#fff;")
    //this是dom节点，不是jq对象
    num = parseInt($(this).index() - 1);
    console.log(playerArray[num]);
    if (playerObj[num].life == "alive") {
        this.setAttribute("style", "border-color:red;");
        theDead[day - 1] = num;
        console.log(theDead);
    }
    else if (playerObj[num].life == "death") {
        alert("他已经死了!")
    }
}))


//点击投死按钮
$("#ok").on("click", (function () {
    if (theDead.length < day)
        return alert("请选择玩家")
    //加半天
    ++day;
    //改变生死状态
    (playerObj[theDead[theDead.length - 1]]).life = "death";
    var aliveWolf = 0;
    var aliveVillager = 0;
    //统计狼人和平民活人的数量
    for (var i = 0; i < playerObj.length; ++i) {
        if (playerObj[i].life == "alive") {
            switch (playerObj[i].role) {
                case "狼人" :
                    ++aliveWolf;
                    break;
                case "平民" :
                    ++aliveVillager;
                    break;
            }
        }
    }
    //胜利判断
    if (aliveWolf == 0) {
        //平民赢
        win = 1;
    }
    else if (aliveWolf >= aliveVillager) {
        //狼人win
        win = 2;
    }
    else {
        //继续杀
        win = 0;
    }
    console.log(theDead);
    //信息存入localStorage
    localStorage.playerObj = JSON.stringify(playerObj);
    localStorage.theDead = JSON.stringify(theDead);
    localStorage.day = JSON.stringify(day);
    localStorage.win = JSON.stringify(win);
    //跳转到黑夜揭秘
    parent.location.href = 'expose.html'
}))

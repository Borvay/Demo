//这是第一个晚上，本想给其他晚上复用的，但是写起来有点麻烦，作罢
var playerArray = JSON.parse(localStorage.player);
var playerObj = [];//放Player对象的数组
var theDead = new Array(0);//放死亡玩家序号
var day = 1;//存天数，eg：1,2分别为第一天的晚上和白天
var win = 0; //0胜负未分 ，1平民赢 ，2狼人赢
function Player() {
}
Player.prototype.number = 14;
Player.prototype.role = "平民";
Player.prototype.life = "alive";
//在页面中显示信息
Player.prototype.showOn = function () {
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
    //return playerWrap;
}

//第一天创建玩家对象，加入数组playerObj
if (day == 1) {
    for (var i = 0; i < playerArray.length; ++i) {
        if (playerArray[i] == "平民") {
            playerObj[i] = new Player();
            playerObj[i].number = i + 1;
            playerObj[i].role = "平民";
            playerObj[i].life = "alive";
        }
        else if (playerArray[i] == "狼人") {
            playerObj[i] = new Player();
            playerObj[i].number = i + 1;
            playerObj[i].role = "狼人";
            playerObj[i].life = "alive";
        }
    }
}

//身份显示在页面
for (var i = 0; i < playerArray.length; ++i) {
    playerObj[i].showOn();
}

//点击玩家触发事件
$(".player-wrap").on("click", (function () {
    //this是dom节点，不是jq对象
    var num = parseInt($(this).index() - 1);
    console.log(num);
    console.log(playerArray[num]);

    if (playerObj[num].role != "狼人" && playerObj[num].life == "alive") {
        $(".player-wrap").attr("style", "border-color:#fff;")
        this.setAttribute("style", "border-color:red;");
        theDead[day - 1] = num;
        console.log(theDead);
    }
    else if (playerObj[num].life == "death") {
        alert("他已经死了!")
    }
    else if (playerObj[num].role == "狼人") {
        alert("自己人，别动手!")
    }
}))


//点击投死按钮
$("#ok").on("click", (function () {
    console.log("前"+day);
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
    console.log("后"+day);
    //跳转到黑夜揭秘
    parent.location.href = 'expose.html'
}))


//请无视他
//Player.prototype.vote = function () {
//    var self = this; //menu对象
//    $("#ok").on("click", (function () {
//        var args = arguments;
//        return function () {
//            self.transition(args);
//        }
//    })());
//}
//Player.prototype.transition = function (event) {
//    //console.log(this.id);
//    switch (this.life) {
//        case "alive":
//            this.life = "death";
//            console.log(this.life);
//            //(function () {
//            //    $(".xxx").index(player.number).style.border.hide();
//            //    alert("ddd")
//            //})()
//            break;
//        case "death":
//            this.life = "alive";
//            console.log(this.life);
//            //(function () {
//            //    $(".xxx").index(player.number).style.border.hide();
//            //})()
//            break;
//    }
//}


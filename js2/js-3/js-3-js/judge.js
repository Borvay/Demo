//获取身份

var player = getCookie("player");
player = player.split(",");
for (var x in player) {
    if (player[x] == 0) {
        player[x] = "平民";
    }
    if (player[x] == 1) {
        player[x] = "狼人";
    }
}

//localStorage.setItem("player", JSON.stringify(player));
//var player = JSON.parse(localStorage.getItem("player"));

localStorage.player=JSON.stringify(player);
var player = JSON.parse(localStorage.player)

for (var x in player) {
    var playerWrap = $("<div class='player-wrap'></div>");
    var role = $("<div class='role'></div>")
    role.html(player[x]);
    var number = $("<div class='number'></div>")
    number.html(parseInt(x) + 1 + "号");
    playerWrap.append(role);
    playerWrap.append(number);
    $("main").append(playerWrap);
}

$("#ok").click(function() {
    parent.location.href = '../js-4/step.html'
})

//cookie 相关的函数
//该函数接收3个参数：cookie名称，cookie值，以及在多少小时后过期。
// 这里约定expiresHours为0时不设定过期时间，即当浏览器关闭时cookie自动消失。
function addCookie(name, value, expiresHours) {
    var cookieString = name + "=" + escape(value);
//判断是否设置过期时间
    if (expiresHours > 0) {
        var date = new Date();
        date.setTime(date.getTime + expiresHours * 3600 * 1000);
        cookieString = cookieString + ";path=/" + "; expires=" + date.toUTCString();
    }
    document.cookie = cookieString;
}

//该函数返回名称为name的cookie值，如果不存在则返回空
function getCookie(name) {
    var strCookie = document.cookie;
    var arrCookie = strCookie.split("; ");
    for (var i = 0; i < arrCookie.length; i++) {
        var arr = arrCookie[i].split("=");
        if (arr[0] == name)return unescape(arr[1]);
    }
    return "";
}

//删除指定名称的cookie
function deleteCookie(name) {
    var date = new Date();
    date.setTime(date.getTime() - 10000);
    document.cookie = name + "=v; expires=" + date.toUTCString();
}


//
//function Player() {
//}
//Player.prototype.number = undefined;
//Player.prototype.role = undefined;
//Player.prototype.life = "alive";
//Player.prototype.vote = function () {
//    var self = this; //menu对象
//    $("#ok").on("click", (function () {
//        var args = arguments;
//        return function () {
//            self.transition(args);
//        }
//    })());
//}
//
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
//
//var p1 = new Player();
//p1.vote();


//var Switch = function ($elem) {
//    var log = function (fsm, previousState) {
//        console.log('currentState is : ' + fsm.currentState + ((previousState || '') && (' , and previous state is : ' + previousState)));
//    };
//    return {
//        currentState: 'off',
//        states: {
//            'on': {
//                to: 'off',
//                action: 'turnOff'
//            },
//            'off': {
//                to: 'on',
//                action: 'turnOn'
//            }
//        },
//        init: function () {
//            var self = this;
//            //关键!!!!!!!!!!!!!!!!!!!!!!!!!!!
//            $elem.on('click', (function () {
//                var args = arguments;
//                return function () {
//                    self.transition(args);
//                }
//            })());
//            log(this);
//        },
//        transition: function (e) {
//            var old = this.currentState;
//            this.currentState = this.states[old].to;
//            var action = this.states[old].action;
//            (action in this) && this[action](old);
//        },
//        turnOn: function (fromState) {
//            $elem.addClass('on');
//            log(this, fromState);
//        },
//        turnOff: function (fromState) {
//            $elem.removeClass('on');
//            log(this, fromState);
//        }
//    }
//};
//
//var f = new Switch($("#ok"));
//f.init();
/**
 * Created by 豪 on 2017/3/25.
 */
var player = getCookie("player");
player = player.split(",");  //以逗号分割，返回数组
var counter = [0, false]; //counter[0]:用来记录当前查看身份的玩家编号,counter[1]:身份显示的正反面（0反面，1正面）

$("#check-role").click(function () {
    //判断是否翻完
    if (counter[0] < player.length) {
        //当前为反面，点击需要显示为正面
        if (!counter[1]) {
            reverse();
            counter[1] = !counter[1];
        }
        //当前为正面且不是最后一个玩家查看，点击需要显示为反面
        else if (counter[1] && counter[0] < (player.length - 1)) {
            front();
            counter[1] = !counter[1];
            ++counter[0];
        }
    }
    //最后一个玩家查看
    if (counter[0] == (player.length - 1) && counter[1]) {
        $("#check-role").html("法官查看");
        ++counter[0]
    } else if (counter[0] == player.length) {
        parent.location.href = '../js-3/judge.html'
    }
    //console.log(counter);
})


function reverse() {
    $(".reverse-img").hide();
    switch (parseInt(player[counter[0]])) {
        case 0:
            $(".p-role").html("角色:平民");
            $(".p-keyword").html("词组:西伯利亚");
            break;
        case 1:
            $(".p-role").html("角色:杀手");
            $(".p-keyword").html("词组:大兴安岭");
            break;
    }
    $(".front-wrap").showOn();
    $("#check-role").html("隐藏并传递给" + (counter[0] + 2) + "号");
}

function front() {
    $(".front-wrap").hide();
    $(".reverse-img").showOn();
    $(".number").html(counter[0] + 2);
    $("#check-role").html("隐藏并传递给" + (counter[0] + 2) + "号")
    $("#check-role").html("查看" + (counter[0] + 2) + "号身份")
}

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



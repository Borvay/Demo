var player = [];
var playerNumber = 6;
var inputText = document.getElementById("input-number");
var inputRange = document.getElementById("range");
var tip = document.getElementsByClassName("tip")
//初始化input的value
document.getElementById("input-number").value = playerNumber;
document.getElementById("range").value = playerNumber;
//随机分配身份
function AssignIdentity() {
    player.splice(0, player.length)
    //狼人的序号
    var wolf = noRepeatRandomNum(parseInt((playerNumber - 6) / 3 + 1), 0, playerNumber - 1);
    wolf = wolf.sort(function (a, b) {
        return a - b
    });

    for (var i = 0; i < playerNumber; ++i) {
        player.push(0);
    }
    for (var i = 0, j = 0; i < playerNumber && j < wolf.length; ++i) {
        if (i == wolf[j]) {
            player[i] = 1;
            ++j;
        }
    }
    //player存入cookie
    addCookie("player", player, 0.1);
}


//不重复随机数
function noRepeatRandomNum(count, min, max) {
    var num = Array(count);
    for (var i = 0; i < count; ++i) {
        num[i] = Math.floor(Math.random() * (max - min + 1) + min);
        if (repeat(num, i)) --i;
    }
    return num;
}
//随机数重复判断
function repeat(a, m) {
    for (var i = 0; i <= m; ++i) {
        for (var j = 0; j < i; ++j)
            if (a[i] == a[j]) return 1;
    }
    return 0;
}

//显示玩家身份
function show() {
    var setItem = document.getElementById("set-item")
    removeChildren(setItem);
    for (var i = 0; i < player.length; ++i) {
        var roleWrap = document.createElement("div")
        roleWrap.className = "role-wrap";
        if (player[i] == 0) {
            var square = document.createElement("div")
            square.className = "square-villager";
            var role = document.createElement("div");
            role.className = "role";
            role.innerHTML = "平&nbsp;&nbsp;民&nbsp;1&nbsp;&nbsp;人";
            roleWrap.appendChild(square);
            roleWrap.appendChild(role);
            setItem.appendChild(roleWrap);
        }
        if (player[i] == 1) {
            var square = document.createElement("div")
            square.className = "square-wolf";
            var role = document.createElement("div");
            role.className = "role"
            role.innerHTML = "杀&nbsp;&nbsp;手&nbsp;1&nbsp;&nbsp;人";
            roleWrap.appendChild(square);
            roleWrap.appendChild(role);
            setItem.appendChild(roleWrap);
        }
    }
}
//清空子元素
function removeChildren(pnode) {
    var childs = pnode.childNodes;
    for (var i = childs.length - 1; i >= 0; i--) {
        pnode.removeChild(childs.item(i));
    }
}
//输入事件

function writeNumber() {
    playerNumber = parseInt(inputText.value);
    if (inputText.value > 20 || inputText.value < 6 || isNaN(inputText.value)) {
        tip[0].style.display = "inline-block"
    }
    else tip[0].style.display = "none";
    document.getElementById("range").value = playerNumber;
}
//只能输入数字，失焦事件
function inputFilter() {

    //只能输入数字
    inputText.value = inputText.value.replace(/\D/g, '');
    if (inputText.value > 20) {
        inputText.value = 20;
    }
    if (inputText.value < 6) {
        inputText.value = 6;
    }
    tip[0].style.display = "none";
    playerNumber = parseInt(inputText.value);
}

//滑动条

function slider() {

        //消除input[type="text"]旁边的提示
        var num = inputRange.value;
        playerNumber = parseInt(num);
        //console.log(playerNumber);
        document.getElementById("input-number").value = playerNumber;
}
//“减”按钮
function numberMinus() {
    //消除input[type="text"]旁边的提示

    if (playerNumber <= 6) playerNumber = 6;
    else if (playerNumber > 20) playerNumber = 20;
    else --playerNumber;
    document.getElementById("input-number").value = playerNumber;
    document.getElementById("range").value = playerNumber;
}
//“+”按钮
function numberAdd() {
    //消除input[type="text"]旁边的提示

    if (playerNumber < 6) playerNumber = 6;
    else if (playerNumber >= 20) playerNumber = 20;
    else ++playerNumber;
    document.getElementById("input-number").value = playerNumber;
    document.getElementById("range").value = playerNumber;
}


document.getElementById("deal").onclick = function () {
    if ( player.length < 6 ) alert("\"点击设置\"配置玩家身份")
    else  parent.location.href = '../js-3/js-3-1.html'
}

//控制cookie的函数

//该函数接收3个参数：cookie名称，cookie值，以及在多少小时后过期。
// 这里约定expiresHours为0时不设定过期时间，即当浏览器关闭时cookie自动消失。
function addCookie(name, value, expiresHours) {
    var cookieString = name + "=" + escape(value);
//判断是否设置过期时间
    if (expiresHours > 0) {
        var date = new Date();
        date.setTime(date.getTime + expiresHours * 3600 * 1000);
        cookieString = cookieString +";path=/"+ "; expires=" + date.toUTCString();
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

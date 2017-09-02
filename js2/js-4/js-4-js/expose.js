var theDead = JSON.parse(localStorage.theDead);
var win = JSON.parse(localStorage.win);
var playerObj = JSON.parse(localStorage.playerObj);
console.log(playerObj);

for (var x = 0; x < theDead.length; ++x) {
    var nmsl;
    $("#info").html(function () {
        if (x % 2 == 0) {
            //for in 的参数是string
            nmsl = theDead[x]+1 + "号选手被杀死了,真实身份是" + playerObj[theDead[x]].role + "<br/>";
        }
        else if (x % 2 == 1) {
            nmsl = theDead[x]+1 + "号选手被投死了,真实身份是" + playerObj[theDead[x]].role + "<br/>";
        }
        return $("#info").html() + nmsl;
    });
}

//按钮文本内容，跳转
if (win == 0) {
    //黑夜结束跳白天
    if (theDead.length % 2) {
        $("#ok").html("全民投票")
        $("#ok").click(function () {
            parent.location.href = 'vote.html'
        })
    }
    //白天结束跳黑夜
    else if (!(theDead.length % 2)) {
        $("#ok").html("夜幕降临")
        $("#ok").click(function () {
            parent.location.href = 'killpp.html'
        })
    }
}
else if (win == 1) {
    $("#ok").html("村民赢")
    $("#ok").click(function () {
        parent.location.href = 'win.html'
    })
}
else if (win == 2) {
    $("#ok").html("狼人赢")
    $("#ok").click(function () {
        parent.location.href = 'win.html'
    })

}
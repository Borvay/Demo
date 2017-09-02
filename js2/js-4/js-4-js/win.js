var theDead = JSON.parse(localStorage.theDead);
var playerObj = JSON.parse(localStorage.playerObj);
var win = JSON.parse(localStorage.win);
var wolfNum = parseInt((playerObj.length - 6) / 3 + 1);
$(".the-winer").html(function () {
    if(win==1) return "平民胜利！"
    else if (win==2) return "狼人胜利！"
})
$(".player").append((
    '<li>杀<span class="font-hidden">匿</span>手&nbsp;' + wolfNum + '人</li> ' +
    '<li class="text-center">平' +
    '<span class="font-hidden">匿</span>' +
    '民&nbsp;' + (playerObj.length - wolfNum) + '人</li>')
)

for (var i = 0; i < theDead.length; ++i) {
    var deadNight = theDead[i] + 1;
    var deadDay = theDead[++i] + 1;
    var $li = $(' <p class="date">第' +
        parseInt(i / 2 + 1) +
        '天</p><p class="event">晚上：' +
        deadNight +
        '号被杀手杀死，' +
        deadNight +
        '号是' +
        playerObj[deadNight-1].role +
        '</p><p class="event">白天：' +
        deadDay +
        '号被全民投票投死，' +
        deadDay +
        '号是' +
        playerObj[deadDay-1].role +
        '</p>')
    $(".date-group").append($li)
}

$(".again").on("click",function() {
    parent.location.href = '../js-2/start.html'
})
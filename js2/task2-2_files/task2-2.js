/**
 * Created by 李博为 on 2017/8/1 0000.
 */
//全局变量部分
var num = document.getElementById("num");//玩家人数 数字 元素节点
var btn1=document.getElementById("btn1");//点击设置按钮 元素节点
var ss = document.getElementById("sub");//减号按钮元素节点
var ran = document.getElementById("range");//滑动条元素节点
var number = ran.value;//滑动条的值
var aa = document.getElementById("add");//加号按钮元素节点
var btn2=document.getElementById("btn2");//发牌按钮 元素节点
var x;
var y;
var save = Object();

//减法函数
function subtract() {
    number = document.getElementById("range").value;
    if(number > 6 && number <= 18) {
        number--;
    }
    else {
        number = 6;
        alert("最少6人！");
    }
    document.getElementById("num").value = number;
    document.getElementById("range").value = number;
}

//加法函数
function add() {
    number = document.getElementById("range").value;
    if(number >= 6 && number < 18) {
        number++;
    }
    else {
        number = 18;
        alert("最多18人！");
    }
    document.getElementById("num").value = number;
    document.getElementById("range").value = number;
}

//定义两个input输入事件，两个value值联动改变
function change1() {
    number = document.getElementById("num").value;
    if (number < 6 || number >18) {
        alert("人数超过范围，请输入6~18范围内的数字！");
        number = 6;
    }
    else {
        document.getElementById("range").value = number;
    }
}

function change2() {
    number = document.getElementById("range").value;
    document.getElementById("num").value = number;
}

//玩家分配开始
function assign() {
    var TotalN = Number(number);//Number()函数，将参数转化为数字
    var arr=[];//总人数数组
    var arrX=[];//杀手数组
    var arrY=[];//水民数组
    //分配杀手
    var ran = document.getElementById("range");
    switch (ran.value) {
        case "6":
        case "7":
        case "8":
            x = 1;
            break;

        case "9":
        case "10":
        case "11":
            x = 2;
            break;

        case "12":
        case "13":
        case "14":
        case "15":
            x = 3;
            break;

        case "16":
        case "17":
        case "18":
            x = 4;
            break;

        default:
            alert("人数超过范围，请输入6~18范围内的数字！");
            break;
    }

    //x杀手人数，y水民人数
    y = number - x;
    var rol1 = document.getElementById("role1-num");
    rol1.innerHTML = x;
    var rol2 = document.getElementById("role2-num");
    rol2.innerHTML = y;
    console.log("杀手为"+x, y);

    //根据总人数，填充数组
    for (var i= 1;i <= TotalN;i++) {
        arr.push(i);
    }
    console.log("总人数"+arr);

    //洗牌算法，打乱总人数数组顺序
    Array.prototype.shuffle = function() {
        var input = this;
        for (var i = input.length - 1; i >= 0; i--) {
            var randomIndex = Math.floor(Math.random() * (i + 1));//获取小于this.length的随机整数
            var itemAtIdex = input[randomIndex];
            input[randomIndex] = input[i];
            input[i] = itemAtIdex;//input[randomIndex]和input[i]交换值
        }
        return input;
    }

    arr.shuffle();
    console.log("洗牌后总人数"+arr);

    //输出杀手数组，水民数组
    for (i=0;i < x; i++) {
        arrX.push(arr[i]);
    }
    console.log("杀手的数组"+arrX);

    for (i=x;i < TotalN;i++) {
        arrY.push(arr[i]);
    }
    console.log("水民的数组"+arrY);

    //把杀手数组、水民数组按从小到大降序排列
    arrX.sort(function(a,b){return a-b;});
    arrY.sort(function(a,b){return a-b;});
    console.log(arrX);
    console.log(arrY);

    //每次点击按钮后重置div里的内容，避免数据堆积
    document.getElementById("x1").innerHTML = " ";
    document.getElementById("y1").innerHTML = " ";

    for (i=0;i < x;i++) {
        var para = document.createElement("span");//创建元素节点span
        var node = document.createTextNode(arrX[i]+"号");//创建文本节点。。。号
        para.appendChild(node);//将文本节点置入span元素节点
        document.getElementById("x1").appendChild(para);//将span元素节点置入id为x1的div元素节点
    }

    for (i=0;i < y;i++) {
        para = document.createElement("span");//创建元素节点span
        node = document.createTextNode(arrY[i]+"号");//创建文本节点。。。号
        para.appendChild(node);//将文本节点置入span元素节点
        document.getElementById("y1").appendChild(para);//将span元素节点置入id为y1的div元素节点
    }

    //保存数组1、数组2和总人数
    save.keyname = 1;
    save.number = number;
    save.arr1 = arrX;
    save.arr2 = arrY;

}

//localStorage数据存储函数
function inspect() {
    if (number < 6 || number > 18) {
        alert("人数超过范围，请输入6~18范围内的数字");
    }
    else {
        //保存词组1和词组2，并转换为字符串保存
        save.keyname = 1;
        var civ = document.getElementById("civilian-word");
        save.word1 = civ.value;
        var kill = document.getElementById("killer-word");
        save.word2 = kill.value;

        var str = JSON.stringify(save);//将对象转换为字符串
        window.localStorage.setItem(save.keyname,str);
        console.log(str);

        location.href = "mytask3.html";
    }
}

function first(sth) {
    if (sth.value == '') {
        sth.value = '通过逻辑分析抓出隐藏的杀手';
    }
}

function second(sth) {
    if (sth.value == '通过逻辑分析抓出隐藏的杀手') sth.value = '';
}

function third(sth) {
    if (sth.value == '') {
        sth.value = '积极发言分析，尽可能的伪装成水民，刀法也很重要哦';
    }
}

function fourth(sth) {
    if (sth.value == '积极发言分析，尽可能的伪装成水民，刀法也很重要哦') sth.value = '';
}

function input1() {
    var civ = document.getElementById("civilian-word");
    civ.onblur = function() {
        first(this);
    }
    civ.onclick = function() {
        second(this);
    }
    var kill = document.getElementById("killer-word");
    kill.onblur = function() {
        third(this);
    }
    kill.onclick = function() {
        fourth(this);
    }
}

window.onload = input1;

function click() {
    // 定义加减的点击事件
    aa.onclick=add;
    ss.onclick=subtract;
    // 定义两个input的输入事件，两个value值联动改变
    ran.oninput=change2;
    num.oninput=change1;
    // 检测事件
    btn1.onclick=assign;
    btn2.onclick=inspect;
}
click();


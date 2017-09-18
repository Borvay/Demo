/**
 * Created by 李博为 on 2017/8/10 0001.
 */
/*
function getHTTPObject() {
  if (typeof XMLHttpRequest == "undefined") {
    XMLHttpRequest = function() {
      try {return new ActiveXObject("Msxml2.XMLHTTP.6.0");}
        catch (e) {}
      try {return new ActiveXObject("Msxml2.XMLHTTP.3.0");}
        catch (e) {}
      try {return new ActiveXObject("Msxml2.XMLHTTP");}
        catch (e) {}
      return false;
    }
  }
  return new XMLHttpRequest();
}
var request = getHTTPObject();

function callServer() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
*/

/* if(username.length != 11) {
   var alert = document.getElementsByClassName("alert")[0];
   alert.style.color = "red";
   alert.innerHTML = "请输入正确的手机号";
   return;
 }*/

/* request.open("POST","/a/login",true);
 request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
 request.send("name=" + username + "&pwd=" + password);
 request.onreadystatechange = updatePage;
}*/

/*
function updatePage() {
  if(request.readyState == 4) {
    var response = request.responseText;
    var str = JSON.parse(response);
    alert(str.message);
    console.log(response);
    console.log(str);
  }
}
var btn = document.getElementById("btn-login");
btn.onclick=callServer;
*/

//jQuery实现
$("#btn-login").click(function() {
    var username = $("#username").val();
    var password = $("#password").val();
    /* $.post("/carrots-admin-ajax/a/login", {
     name: username, pwd: password
     }, function (res) {
     var mes = JSON.parse(res);
     alert(mes.message);
     /!*    location.href = "/carrots-admin-ajax/pageTab"*!/
     })
     });*/

    $.ajax({
            type: 'Post',
            url: '/carrots-admin-ajax/a/login',
            dataType: "json",
            data: {
                name: username,
                pwd: password
            },
            //data:'mobile='+username+'&pwd='+password,
            success: function (result) {
                if (result.code == -5004) {
                    $(".alert").html("用户名或密码错误").css('color', 'red');
                }
                else if (result.code == -5003) {
                    $(".alert").html("无此用户").css('color', 'red');
                }
                else {
                    alert(result.message);1
                }
            }
        }
    );
});
// 回车登录
$("body").keydown(function() {if (event.keyCode==13) { //回车键的键值为13
    $("#btn-login").click();// 调用登录按钮的登录事件
}});

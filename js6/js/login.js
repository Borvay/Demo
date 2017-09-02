

//使用angular
var myApp = angular.module("myApp");
myApp.controller('loginCtrl',function ($scope,$http,$state) {
    // sessionStorage.userpwd="0";//判断登陆
    $scope.login = function () {
        $http({
            method:"POST",
            url:"/carrots-admin-ajax/a/login",
            // params: { name: $scope.username, pwd: $scope.userpwd }//
            data:$.param({
                name: $scope.username,
                pwd: $scope.userpwd
            }),
            headers: {'Content-Type': 'application/x-www-form-urlencoded'}
        }).then(function successCallback(response) {
            if (response.data.message==="success") {
                alert("success");
                sessionStorage.userpwd="1";
                $state.go("backstage");
            }
            else if(response.data.message==="用户不存在"){
                $(".tips1").text(response.data.message);//输出
            }
            else if(response.data.message==="密码错误"){
                $(".tips2").text(response.data.message);//输出
            }
        },function errorCallback(response) {
            console.log(response);
            alert("false");
        });
    }
});








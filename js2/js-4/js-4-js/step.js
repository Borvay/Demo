$("#night").click(function() {
    parent.location.href = 'kill.html'
})
















//var book = {
//    _year: 1000,
//    shit: 2010,
//    edition: 1
//};

//Object.defineProperty(book, "_year", {
//    Configurable : false,
//    get: function () {
//
//    },
//    set: function (vs) {
//        //if (vs > 2004) {
//        //    //this._year = vs;
//        //    this.edition += vs - 2004;
//        //}
//        return 0;
//    }
//});


//Object.defineProperties(book, {
//    ff: {value: 1},
//    ddd: {value: "d"},
//})
//
//book.didi = 666;
//alert(book.didi);
//alert(book.ddd);

//function human(name,age,job) {
//    var o = new Object();
//    o.name = name;
//}
/////////////////////////////////////////////
//function shit(a) {
//    a = [1,2,3];
//}
//
//var fuck = [0, 0, 0, 0];
//shit(fuck);
//console.log(fuck);

//
//function shit(o) {
//    o = 100;
//    return o;
//}
//
//var i = 0;
//shit(i);
//console.log(i);
////////////////////////////////////////////////////
//
//
//var scope = "global scope";
//function checkscope() {
//    var scope = "local scope";
//
//    function f() {
//        return scope;
//    }
//    return f;
//}
//
//console.log(checkscope()());

//var test = function() {
//    var counter = 0;
//    return function() {
//        return ++counter;
//    };
//}();
//
//var s1 = test;
//console.log(test());
//console.log(s1());
//console.log(test());
//console.log(test());
//console.log(s1());

//function counter() {
//    var n = 0;
//    return {
//        count: function () {return n++;},
//        reset: function () {n = 0;}
//    };
//}

//var c = counter(), d = counter();

//var c = function() {
//    var n = 0;
//    return function() {
//        return ++n;
//    }
//}();

//function counter(n) {
//    return {
//        get count() {return n++;},
//        set count(m){}
//    }
//}

//var shit = 0;
//function test() {
//    var shit = 4;
//
//    function fuck() {
//        return shit + 15;
//    }
//
//    return (fuck());
//};
//
//console.log(test());

//function range(from, to) {
//    var r = inherit(range.methods);
//    r.from = from;
//    r.to = to;
//}
//

//function person(name, age, job) {
//    var o = new Object();
//    o.name = name;
//    o.age = age;
//    o.job = job;
//    o.sayname = function () {
//        alert(this.name);
//    }
//    return o;
//}
//
//var jim = person("nm", 9999, "wolf");
//
//var tom = person("nm", 6666);

//
//function Shit(name, age, job) {
//    this.name = name;
//    this.age = age;
//    this.job = job;
//    this.sayName = function () {
//        alert(this.name);
//    };
//}
//
//Shit("deef",2,"ef");
//window.sayName();
//

//var shit1 = new shit("s1",52,"doc");
//var shit2 = new shit("s2",22,"nnn");
//console.log(shit1);
//console.log(shit2);
//
//function Person() {
//}
//
//Person.prototype.name = "zhao";
//
//var person1 = new Person();
//console.log("name" in person1);
//
//function Person() {}
//Person.prototype = {
//    name : "shit",
//    age : 99,
//    sayName : function () {
//        alert(this.name);
//    }
//}

//
//function Person() {
//}
//
//Person.prototype.name = "shit";
//Person.prototype.age =99;
//Person.prototype.sayName = function () {
//    alert(this.name);
//}

//var person2 = new Person();
//var person1 = new Person();
//person1.ppp = "555";
//console.log(person1.ppp);
//console.log(person2.ppp);
//var fr = new Person();
//fr.sayName();

//原型链
//function SuperType() {
//    this.property = true;
//}
//
//SuperType.prototype.getSuperValue = function () {
//    return this.property;
//}
//
//function SubType() {
//    this.subproperty = false;
//}
//
//SubType.prototype = new SuperType();
//
////SubType.prototype.getSubValue = function() {
////    return this.subproperty;
////}
//
//var instance = new SubType();
//
//console.log(instance.getSuperValue());
//
//var i = 0;
//var a = function fuck() {
//    return ++i;
//}();
//var i = 0;
//
//var shit = function sb() {
//    return ++i;
//};
//
//var shit2 = shit

//var a = function() {
//    return 0;
//}();


//var menu = {
//    // 当前状态
//    currentState: "hide",
//
//    // 绑定事件
//    initialize: function() {
//        var self = this;
//        $("#btn-switch").on("click", self.transition);
//        //console.log(self) ;
//    },
//
//    // 状态转换
//    transition: function(event){
//        switch(this.currentState) {
//            case "hide":
//                this.currentState = 'showOn';
//                alert("ddd");
//                break;
//            case "showOn":
//                this.currentState = 'hide';
//                $("#btn-switch").showOn();
//                break;
//            default:
//                console.log('Invalid State!');
//                break;
//        }
//        //var self = this;
//        //console.log(Object.prototype.toString.call(self));
//    }
//};

//$("#btn-switch")
//menu.initialize();
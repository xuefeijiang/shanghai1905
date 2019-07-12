var ouser = document.getElementById("txt")
var opass = document.getElementById("pass")
var obtn = document.getElementById("tijiao")
var otel = document.getElementById("qqrmm")
var user=pass=tel=0;
ouser.onblur = function(){
    // var reg = /^[\u2E80-\u9FFF\w-]{4,20}$/;
    var reg = /^1[3-9]\d{9}$/;
    // var eml= /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/;
    if(ouser.value=="")return;
    if(reg.test(this.value)){
    
        this.nextElementSibling.innerHTML = "成功";
        user = 1;
    }else{
        this.nextElementSibling.innerHTML ="请输入手机/邮箱";
        user = 0;
    }
}
opass.onblur = function(){
    var lengthReg = /^.{6,18}$/;
    if(!lengthReg.test(this.value)){
        this.nextElementSibling.innerHTML = "长度不符";
        pass = 0;
        return;
    }
    var num=az=ts=0;
    var numReg = /\d/;
    if(numReg.test(this.value)){
        num = 1;
    }
    var azReg = /[a-zA-Z]/;
    if(azReg.test(this.value)){
        az = 1;
    }
    var tsReg = /[^\da-zA-Z]/;
    if(tsReg.test(this.value)){
        ts = 1;
    }
    switch(num+az+ts){
        case 1:
            this.nextElementSibling.innerHTML = "简单";break;
        case 2:
            this.nextElementSibling.innerHTML = "一般";break;
        case 3:
            this.nextElementSibling.innerHTML = "困难";break;
    }
    pass = 1;
}
otel.onblur = function(){
    // var reg = /^1[3-9]\d{9}$/;
    if(otel.value===opass.value){
        this.nextElementSibling.innerHTML = "成功";
        tel = 1;
    }else{
        this.nextElementSibling.innerHTML = "密码不符";
        tel = 0;
    }
}
obtn.onclick = function(){
    var check = localStorage.getItem("check");
    if(ouser.value==""){
        alert("用户名不能为空");
        return;}
    if(check){
        var onoff = true;
        check = JSON.parse(check);
        for(var i = 0;i<check.length;i++){
            if(check[i].phone == ouser.value){
                onoff = false;
                alert("用户已注册");
                 ouser.value = "";
                 opass.value = "";
                return;
            }
        }
        if(onoff){
            check.push({
                phone:ouser.value,
                password:opass.value
            })
        }
    }else{
        check = [{
            phone:ouser.value,
            password:opass.value
        }]
        alert("注册成功");
    }
    localStorage.setItem("check",JSON.stringify(check));
    location="D:/jiangxuefei/html/denglu.html"   
}

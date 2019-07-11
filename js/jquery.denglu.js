var otxt=document.getElementById("txt");
var opass=document.getElementById("pass");
var obtn=document.getElementById("btn");
var ospan=document.querySelector("span");
var status = 0;
btn.onclick = function(){ 
    var reg1 = /^1[3456789]\d{9}$/;
    var reg2 = /^.{6,18}$/;
    if(otxt.value == "" || opass.value == ""){
        alert("不能为空");
        status = 0;
        return;
    }else if(!reg1.test(otxt.value)){
        alert("请输入正确的手机格式");       
        status = 0;
        return;
    }else if(!reg2.test(opass.value)){
        alert("请输入6-18位以字母开头的密码!");
        status = 0;
        return;
    }
    check = localStorage.getItem("check") ? JSON.parse(localStorage.getItem("check")) : [];
  
    for(var i=0;i<check.length;i++){  
        if(check[i].phone == otxt.value && check[i].password ==opass.value){
            location = "D:/jiangxuefei/html/jishihui.html";
            console.log("成功");
            return;
        }
      
    }
}

















































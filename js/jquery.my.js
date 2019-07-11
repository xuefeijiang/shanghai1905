// 三级菜单
$(function(){ 
    $('.shop-1 li div').hide();
    $('.shop-1 li').mouseover(function(){ 
      $(this).children("div").show(); 
      // console.log(this)
    }).mouseout(function(){
      $(this).children("div").hide();
    })
})

//轮播图
$(".lunbo").banner({
  aimg:$(".lbo-1").find("img"),    
  left:$(".lbo-b").find("#left"),  
  right:$(".lbo-b").find("#right"),
  isList:true,                      
  autoPlay:true,                
  delayTime:3000,                 
  moveTime:500,                
  index:0                      
})
//选项卡
$().ready(function(){
  
  $(".toplt-u li").mouseover(function(){
  
    var _index = $(this).index();
 
    $(".topl-b>div").eq(_index).show().siblings().hide();
  
  $(this).addClass("change").siblings().removeClass("change");
  });
});
//回到顶部
onload = function(){
  var otop = document.querySelector("#tobu");
  var t = 600;
  onscroll = function(){
      var scrollT = document.documentElement.scrollTop;
      otop.style.top = (t+scrollT)+"px";
  }
  var timer;
  otop.onclick = function(){
      clearInterval(timer);
      timer = setInterval(function(){
          if(document.documentElement.scrollTop <= 0){
              clearInterval(timer)
          }else{
              document.documentElement.scrollTop -= 20;
          }
      },20)
  }
}

//中间广告 

$(".zhjgao").find("li").mouseover(function(){
    $(this).stop().animate({ width:390})
      .siblings().stop().animate({
      width:200  
     })
  
})

//一楼轮播
$(".yilou-lb").banner({
  aimg:$(".yilou-lb").find("img"),                     
  autoPlay:true,                
  delayTime:1000,                 
  moveTime:500,                
  index:0                      
})

$().ready(function(){
  $(".xxk-u li").mouseover(function(){
  
    var _index = $(this).index();
 
    $(".xxk-b>div").eq(_index).show().siblings().hide();
  
  $(this).addClass("change").siblings().removeClass("change");
  });
});
// 二楼

$(".erlou-lb").banner({
  aimg:$(".erlou-lb").find("img"),                     
  autoPlay:true,                
  delayTime:1000,                 
  moveTime:500,                
  index:0                      
});

$().ready(function(){
    $(".xxk-eu li").mouseover(function(){
    
      var _index = $(this).index();
  
      $(".xxk-eb>div").eq(_index).show().siblings().hide();
    
    $(this).addClass("change").siblings().removeClass("change");
    });
});


// 三楼

$(".sanlou-lb").banner({
  aimg:$(".sanlou-lb").find("img"),                     
  autoPlay:true,                
  delayTime:1000,                 
  moveTime:500,                
  index:0                      
});

$().ready(function(){
    $(".xxk-su li").mouseover(function(){
    
      var _index = $(this).index();
  
      $(".xxk-sb>div").eq(_index).show().siblings().hide();
    
    $(this).addClass("change").siblings().removeClass("change");
    });
});

// 楼层

$(".btns").children("li").click(function(){
        var index = $(this).index();
        var iNowFloor = $(".floor").eq(index);
        var t = iNowFloor.offset().top;
        $("html").stop().animate({
          scrollTop:t
        });
        
      })






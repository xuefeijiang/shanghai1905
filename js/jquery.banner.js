;(function($){
 "use strict"
   $.fn.banner=function(options){
       var _this=this;//存一个全局的this指向（.banner）
       class Banner{
           constructor(options){
                this.img=options.aimg;
                this.left=options.left;
                this.right=options.right;
                this.isList=options.isList===false?false:true;//判断是不是传了
                this.autoPlay=options.autoPlay===false?false:true;
                this.delayTime=options.delayTime?options.delayTime:2000;
                this.moveTime=options.moveTime?options.moveTime:200;//移动的时间
                this.index=options.index||0;
                this.iPrev=this.img.length-1;
                this.init();//根据img的个数生成布局
                this.btnEvent();//左右按钮事件
                this.play();//自动轮播事件
                this.w = this.img.eq(0).width();
                this.img.css({
					left:this.w
				}).eq(this.index).css({
					left:0
				})
           }
           init(){
               if(!this.isList)return;//判断是否有list传入
               this.list=$("<div class='list'></div>");//创建list的容器
               for(var i=0;i<this.img.length;i++){ //遍历拿到所有
                this.list.append($(`<span>${i+1}</span>`))//插入到list中
               }
               _this.append(this.list);
               this.list.css({//给liat 设置样式
                   width:100,
                   height:30,
                  display:"flex",
                   position:"absolute",
                   bottom:100,
                   left:600,
                //    background:"rgba(200,200,200,0.6)"
               }).children("span").css({//span设置样式
                   flex:"1",
                   textAlign:"center",
                   lineHeight:"30px",
                   borderRadius:"50%",
                   borderLeft:"1px solid #ccc",
                   borderRight:"1px solid #ccc"
               }).eq(this.index).css({//当前照片对应的span设置背景
                   background:"red"
               })
               this.listEvent();//开始做list的事件
           }
           listEvent(){
               var that=this;//保存实例的this
                // console.log(this.list)
                this.list.children("span").click(function(){
                    // console.log($(this).index())点击时获得的index
                    //根据点击是的索引和当前索引判断图片移动方向
                    if($(this).index()<that.index){//右移动
                        that.listMove($(this).index(),-1)
                    }
                    if($(this).index()>that.index){//左移动
                        that.listMove($(this).index(),1)
                    }
                    //修span的样式
                    that.list.children("span").css({
                        background:""
                    }).eq($(this).index()).css({
                        background:"red"
                    })
                    //点击之后，将当前点击的索引设置为当前索引
                    that.index=$(this).index();
                })
           }
           listMove(iNow,type){
                this.img.eq(this.index).css({//要走的
                        left:0
                }).stop().animate({
                        left:-this.w*type
                },this.moveTime).end().eq(iNow).css({//进来的
                    //end()表示返回上一步
                    left:this.w*type
                }).stop().animate({
                    left:0
                },this.moveTime) 
                // console.log(this.index) 
           }
           btnEvent(){//判断按钮有没有
               if(this.left==undefined ||this.left.length<1)return;
               var that=this;
               this.left.on("click",function(){
                   that.changeIndex(1);//点击是开始改变索引
               })
               this.right.on("click",function(){

                   that.changeIndex(-1);
                //   console.log(1)
               })
               
           }
           changeIndex(type){
                if(type==1){//判断左右按钮
                    if(this.index==0){
                       this.index=this.img.length-1;
                       this.iPrev=0;
                    }else{
                        this.index--;
                        this.iPrev=this.index+1;
                    }  
                }else{
                   if(this.index==this.img.length-1){
                      this.index=0;
                      this.iPrev=this.img.length-1;
                   }else{
                       this.index++;
                       this.iPrev=this.index-1;
                   }  
                }
                this.btnMove(type);
                // console.log(this.index)
                // console.log(this.iPrev,this.index)
           }
           btnMove(type){//图片运动
                this.img.eq(this.iPrev).css({
                    left:0
                }).stop().animate({
                    left:this.w*type
                },this.moveTime).end().eq(this.index).css({
                    left:-this.w*type
                }).stop().animate({
                    left:0
                },this.moveTime)
                //改变list的span样式 
                if(!this.isList)return;//判断有没有list
                this.list.children("span").css({
                    background:""
                }).eq(this.index).css({
                    background:"red"
                })   
           }
           play(){
               if(!this.autoPlay)return;//判断有没有选择自动播放
               this.t = setInterval(()=>{
                this.changeIndex(-1);
            },this.delayTime)
            
//				P4.给大框加鼠标进入和离开事件,进入就停止,离开就继续
            _this.hover(()=>{
                clearInterval(this.t)
            },()=>{
                this.t = setInterval(()=>{
                    this.changeIndex(-1);
                },this.delayTime)
               })
           }

       }
       new Banner(options);
   }
   


})(jQuery);
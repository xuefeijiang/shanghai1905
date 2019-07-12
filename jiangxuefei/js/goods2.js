class GoodList{
    constructor(){
        this.cont=document.getElementById("cont");
        this.url="http://localhost/jiangxuefei/json/goods.json";
        this.init();
        this.addEvent();//1绑定事件
    }
    addEvent(){
        var that=this;
        this.cont.onclick=function(eve){          
             var e=eve||window.event;//1.1事件委托给父元素
             var t=e.target||e.srcElement;//事件源，解决兼容问题
             if(t.className =="addbtn"){
                 //利用getAttribute属性获取当前的商品的ID
                that.id=t.parentNode.parentNode.getAttribute("index"); 
              //存入到localstrorage
                that.setData();               
             }
             if(t.className=="img-box"){
                that.id=t.parentNode.parentNode.getAttribute("index");
                console.log(that.id);
                that.setZhi();
             }       
        }
    }
    setZhi(){
        this.zhi=localStorage.getItem("zhi");
        // this.zhi=[{ id:this.id }];
        localStorage.setItem("zhi",that.id);
    }
    setData(){//3开始点击商品时判断
        // 3.1保存多个商品，数量，一条本地存储
        this.goods=localStorage.getItem("goods");
         console.log(this.goods)
        if(this.goods){//3.2判断是不是第一次存的
            this.goods = JSON.parse(this.goods);//先转换类型
            //3.3遍历所有点击过得商品判断是不是已经存过
            var onoff=true;//3.5增加一个状态，判定遍历过后的第一次
            
            for(var i=0;i<this.goods.length;i++){
               
                if(this.goods[i].id==this.id){//如果是存过，就直接++；
                   
                    this.goods[i].num++;
                    onoff=false;
                }
            }
            if(onoff){//如果是遍历过得第一次，就存着
                this.goods.push({
                    id:this.id,
                    num:1
                }) 
            }
        }else{
            this.goods=[{ //3.4是第一次存的，直接存
                id:this.id,
                num:1
            }]
        }
        localStorage.setItem("goods",JSON.stringify(this.goods));
      
    }
    init(){//1.2请求后台数据
        var that=this;
        ajaxPost(this.url,function(res){
           that.res= JSON.parse(res);
           that.display()
        })
    }
    display(){//1.3数据请求成功后开始渲染页面
        var str="";
        for(var i=0;i<this.res.length;i++){
            str += `<li index="${this.res[i].id}">
            <div>
            <a href="../html/shangpingxingqi.html" class="img-box"><img src="${this.res[i].img}" alt=""></a>
            <h5 class="price">${this.res[i].price}</h5>
            <p class="goodsp">${this.res[i].goodsp }</p>
            <p class="interduce">${this.res[i].interduce}</p>
            <em class="addbtn">加入购物车</em>   
            </div>   
                    </li>`;
        }
        this.cont.innerHTML=str;
    }
}
new GoodList;
class Car{
    constructor(){
        this.tbody=document.querySelector("tbody");
        this.url="http://localhost/jiangxuefei/json/goods.json";
        this.init();//1请求数据
        this.addEvent();//2开始绑定删除事件
    }
    addEvent(){
        var that=this;
         //2.1使用事件委托给父元素tbody
        this.tbody.onclick=function(){
            if(event.target.className=="del"){
                 //2.2获取点击商品的ID
                that.id=event.target.parentNode.getAttribute("index");//修改的商品的id
                event.target.parentNode.remove();//2.3删除页面上的元素
                that.removeDate();//2.4删除lococalStorage里面存储的数据
            }
        }
        this.tbody.oninput=function(){//2.4商品数量改变事件
            if(event.target.className=="changeNum"){
             //    console.log(event.target.value)
             that.id=event.target.parentNode.parentNode.getAttribute("index");//修改的商品的id
             that.num=event.target.value;//当数量改变时，改变的值就赋值给页面上
             that.changeData();
            } 
        }
    }
    removeDate(){
        for(var i=0;i<this.goods.length;i++){//遍历数据查看相同ID
            if(this.goods[i].id==this.id){
                this.goods.splice(i,1);//删除指定位置的数据
            }
        }//在存回去
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }
    changeData(){
        for(var i=0;i<this.goods.length;i++){//遍历数据查看相同ID
            if(this.goods[i].id==this.id){
                this.goods[i].num=this.num;
            }
        }//在存回去
        localStorage.setItem("goods",JSON.stringify(this.goods));
    }
    init(){//1.1解析数据准备执行
        var that= this;
        ajaxPost(this.url,function(res){
            that.res=JSON.parse(res);
            that.getDate();
        });        
    }
    getDate(){
        this.goods=localStorage.getItem("goods")?JSON.parse(localStorage.getItem("goods")):[];
        this.display();
    }
    display(){//1.3开始渲染页面
        var str="";
        for(var i=0;i<this.res.length;i++){
           for(var j=0;j<this.goods.length;j++){
              if(this.res[i].id==this.goods[j].id){
                str +=`<tr index="${this.res[i].goodsId}">
                <td><img src="${this.res[i].src}" alt=""></td>
                <td>${this.res[i].name}</td>
                <td>${this.res[i].price}</td>
                <td><input type="number" value="${this.goods[j].num}" min=1 class="changeNum"></td>
                <td class="del">删除</td>
            </tr>`                        
               }  
            }
        } 
        this.tbody.innerHTML = str;
    } 
}
new Car;
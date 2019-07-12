class Page{
    constructor(options){
        this.url = options.url;
        this.list = options.list;
        this.pageList = options.pageList;
        this.num = options.num || 4;
        this.index = options.index || 0;
        this.load();
    }
    load(){
        var that = this;
        $.ajax({
            url:this.url,
            success:function(res){
                that.res = res;
                that.createPage();
            }
        })
    }
    createPage(){
        var that = this;
        this.pageList.pagination(this.res.length,{
            items_per_page:this.num,
            current_page:this.index,
            callback:function(index){
                that.index = index;
                that.display();
            }
        })
    }
    display(){
        var str = "";
        for(var i=this.index*this.num; i<(this.index+1)*this.num;i++){
            if(i<this.res.length){
                str += `<li goods="${this.res[i].id}">
                <div>
                <a href="../html/shangpingxingqi.html" class="img-box"><img src="${this.res[i].img}" alt=""></a>
                <h5 class="price">${this.res[i].price}</h5>
                <p class="goodsp">${this.res[i].goodsp }</p>
                <p class="interduce">${this.res[i].interduce}</p>
                <em class="addbtn">${this.res[i].addbtn}</em>   
                </div>   
                        </li>`;
            }
        }
        this.list.html(str);
        //   console.log(str)
        // this.click();//点击事件
    }
    // click(){
    //     var that=this
    //     $("#list").on("click","li",function(){
    //         that.id=$(this).attr("zhi")
    //         localStorage.setItem("zhi",that.id)
    //     })
    // }  
    // addEvent(){
    //     var that=this;
    //     this.cont.onclick=function(eve){
    //          var e=eve||window.event;//1.1事件委托给父元素
    //          var t=e.target||e.srcElement;//事件源，解决兼容问题
    //          if(t.className =="addbtn"){
    //              //利用getAttribute属性获取当前的商品的ID
    //              that.id=t.parentNode.getAttribute("index");
    //              //console.log(that.id);
    //              //存入到localstrorage
    //             that.setData();
    //          }
    //     }
    // }
    // setData(){//3开始点击商品时判断
    //     // 3.1保存多个商品，数量，一条本地存储
    //     this.goods=localStorage.getItem("goods");
    //     //  console.log(this.goods)
    //     if(this.goods){//3.2判断是不是第一次存的
    //         this.goods = JSON.parse(this.goods);//先转换类型
    //         //3.3遍历所有点击过得商品判断是不是已经存过
    //         var onoff=true;//3.5增加一个状态，判定遍历过后的第一次
            
    //         for(var i=0;i<this.goods.length;i++){
               
    //             if(this.goods[i].id==this.id){//如果是存过，就直接++；
                   
    //                 this.goods[i].num++;
    //                 onoff=false;
    //             }
    //         }
    //         if(onoff){//如果是遍历过得第一次，就存着
    //             this.goods.push({
    //                 id:this.id,
    //                 num:1
    //             }) 
    //         }
    //     }else{
    //         this.goods=[{ //3.4是第一次存的，直接存
    //             id:this.id,
    //             num:1
    //         }]
    //     }
    //     localStorage.setItem("goods",JSON.stringify(this.goods));
    // } 
}
new Page({
    list:$("#list").find("ul"),
    pageList:$(".pagination"),
    url:"http://localhost/jiangxuefei/json/goods.json",
    num:20,
    index:0
});
$("#setPage").change(function(){
    new Page({
        list:$("#list").children("ul"),
        pageList:$(".pagination"),
        url:"http://localhost/jiangxuefei/json/goods.json",
        num:parseInt($(this).val()),
        index:0
    });
})
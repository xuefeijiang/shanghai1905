
class Shop{
    constructor(){
       this.goods=document.getElementById("goods");
       this.url="http://localhost/jiangxuefei/json/shangping.json"
       this.init();    
    }
    init(){
      var that=this;
       ajaxPost(this.url,function(res){
         that.res=JSON.parse(res);
        //  console.log(res)
        that.display();
       })
    }
    display(){
       var str="";
       var zhi=localStorage.getItem("zhi")
        //  console.log(zhi)
        for(var i=0;i<this.res.length;i++){
             if(this.res[i].id==zhi){
                str=`<div id="marp"
                ><a href="#">首页</a>&gt
                <a href="#" class="marpa">${this.res[i].marpa}</a>
                </div>
                <div id="goods">
                    <div class="goodslt">
                        <div class="golt1">
                            <div class="golt11">
                                <img src="${this.res[i].golt12}" class="golt12">
                            </div>
                            <div class="golt11">
                                <img src="${this.res[i].golt13}" class="golt13">
                            </div>
                            <div class="golt11">
                                <img src="${this.res[i].golt14}" class="golt14">
                            </div>
                            <div class="golt11">
                                <img src="${this.res[i].golt15}" class="golt15">
                            </div>
                            <div class="golt11">
                                <img src="${this.res[i].golt16}" class="golt16">
                            </div>
                        </div>
                        <div class="golt2">
                            <div class="godl fo12">&lt</div>
                            <ul class="golt2ul">
                                <li>
                                    <a href="#"><img src="${this.res[i].golt121}"></a>
                                </li>
                                <li>
                                    <a href="#"><img src="${this.res[i].golt131}"></a>
                                </li>
                                <li>
                                    <a href="#"><img src="${this.res[i].golt141}"></a>
                                </li>
                                <li>
                                   <a href="#"><img src="${this.res[i].golt151}"></a>
                                </li>
                                <li>
                                   <a href="#"><img src="${this.res[i].golt161}"></a>
                                </li>
                            </ul>
                            <div class="godr fo12">&gt</div>
                        </div>
                    </div>
                    <div class="goodsri">
                        <h4 class="godh4">${this.res[i].godh4}</h4>
                        <div class="goodrc">
                            <p class="godp">价格<span class="gods">${this.res[i].gods}</span>
                            <i class="godi">销售价</i></p>
                            <p class="godp x1">元宝最高抵扣: ¥1</p>
                            <div class="godiv">
                                <span class="godspan">立即</span>
                                <a href="#">注册</a>/<a href="#">登录</a>
                                <span class="godspan1">采集账号</span>
                            </div>
                        </div>
                            <div class="god2 h32">
                                <em class="god2p">销&nbsp&nbsp量</em>
                                <span class="god2span">
                                已售出<i class="god2i">0</i>件</span>
                            </div>
                            <div class="god3 h32">配 送 至
                                <span class="god3sp">上海 上海市 宝山区</span>
                                <span class="god3sp1">有货</span>
                            </div>
                            <div class="god4 h32">
                                <span class="god4sp">运&nbsp&nbsp费</span>
                                <span class="god4sp1">￥8:00</span>
                            </div>       
                        <div class="shopcar">
                            <div class="shuliang">
                               <span class="shul1">数&nbsp&nbsp量</span>
                               <input type="button" value="+" id="add"/> 
                               <input type="text" placeholder="1" id="txt"/> 
                               <input type="button" value="-" id="jian"/>     
                            </div>
                            <div class="mai">
                                <a class="goumai p10">立即购买</a>
                                <a class="jiaru p10">加入购物车</a>
                            </div>
                        </div>     
                    </div>     
                </div>`
             }
        } 
        this.goods.innerHTML=str;
        this.show();
    }
    show(){
        $().ready(function(){
          $(".golt2ul li").mouseover(function(){  
            var _index = $(this).index();
            $(".golt1>div").eq(_index).show().siblings().hide();
          $(this).addClass("change").siblings().removeClass("change");
          });
      });
    }
}
new Shop();
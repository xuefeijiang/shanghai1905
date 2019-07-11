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
                str += `<li zhi="${this.res[i].id}">
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
        this.click();
    }
    click(){
        var that=this
        $("#list").on("click","li",function(){
            that.id=$(this).attr("zhi")
            localStorage.setItem("zhi",that.id)
        })
    }
    
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
        url:"http://localhost/1905/jq-page/data/list.json",
        num:parseInt($(this).val()),
        index:0
    });
})
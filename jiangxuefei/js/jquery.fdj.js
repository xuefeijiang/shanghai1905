function Fangdajing(){
    this.sbox=document.querySelector(".golt11");
    this.xbox= document.querySelector(".golt121");
    this.span=document.querySelector(".golt11 span")
    this.oimg= document.querySelector(".golt121 img")
    this.addEvent()
}
Fangdajing.prototype.init=function(){
    var w=this.oimg.offsetWidth/this.xbox.offsetWidth;  
    var h=this.oimg.offsetHeight/this.xbox.offsetHeight;  
    this.span.style.width=this.sbox.offsetWidth/w+"px"; 
    this.span.style.height=this.sbox.offsetHeight/h+"px";
}
Fangdajing.prototype.addEvent=function(){
    var that=this;
    that.sbox.addEventListener("mouseover",function(){
        that.over();
        that.init();
    })
    that.sbox.addEventListener("mouseout",function(){
        that.out();
    })
    that.sbox.addEventListener("mousemove",function(eve){
        var e =eve||window.enent;
        that.move(e);
    })
}
Fangdajing.prototype.over=function(){
    this.span.style.display="block";
    this.xbox.style.display="block";
}
Fangdajing.prototype.out=function(){
    this.span.style.display="none";
    this.xbox.style.display="none";
}
Fangdajing.prototype.move=function(e){  
    var l=e.offsetX-this.span.offsetWidth/2; 
    var t=e.offsetY-this.span.offsetHeight/2;
    var r=this.sbox.offsetWidth-this.span.offsetWidth;
    var b=this.sbox.offsetHeight-this.span.offsetHeight;
    if(l<0)l=0;
    if(t<0)t=0;
    if(l>r)l=r;
    if(t>b)t=b;
    var x=l/r;
    var y=t/b;
    this.span.style.left=l+"px";
    this.span.style.top=t+"px";
    this.oimg.style.left=-x*(this.oimg.offsetWidth-this.xbox.offsetWidth)+"px";
    this.oimg.style.top=-y*(this.oimg.offsetHeight-this.xbox.offsetHeight)+"px";
}
onload=function(){
    new Fangdajing();
}
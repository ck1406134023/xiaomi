// 通过类名的方法获取元素

  function getClass(classname,obj){
            var obj=obj||document;
             if(document.getElementsByClassName!=undefined){
	           return obj.getElementsByClassName(classname);
            }else{
	            var arr=document.getElementsByTagName("*");
              var arr=[];
	           for(var i=0;i<arr.length;i++){
              //compare(arr[i].className,classname)
		          if(check(arr[i].className,classname)){
			       arr.push(arr[i]);
		           }
	            }
	         return arr;
             }
  }
  function check(oldclass,newclass){    //防止多个类名识别不了
      var arr=oldclass.split(" ");
      for(i=0;i<arr.length;i++){
          if(arr[i]==newclass){
            return true;
          }
      }
      return false;
  }
//getStyle 获取属性，解决兼容
 function getStyle(obj,attr){
   if(obj.currentStyle){
    //IE
    return obj.currentStyle[attr];
   }else{
    //谷歌 FF
    return getComputedStyle(obj,null)[attr];
   }
 }      
//
function text(obj,val){
	if(val==undefined){
		if(obj.innerText){
            return obj.innerText;
        }else{
    	    return obj.textContent;
        }
    }
    else{
    	if(obj.innerText){
            return obj.innerText=val;
        }else{
    	    return obj.textContent=val;
             }
        }
	}
  /*轮播函数*/
function wheel(imags,btn,classname,time){
  var num=0;
  imags[0].style.zIndex=imags.length;
  setInterval(function(){
    num++;
    if (num>imags.length-1) {
      num=0;
    }
    for(var i=0;i<imags.length;i++){
      imags[i].style.zIndex="";
      btn[i].className='';
    }
    imags[num].style.zIndex=imags.length;
    btn[num].className=classname;
  },time)
}

function chance(links,lists,classname){
  for(var i=0;i<links.length;i++){
    links[i].index=i;
    
       links[i].onmouseover=function(){

        for(var j=0;j<lists.length;j++){
      lists[j].style.display='none';
      links[j].className='';
         
         console.dir(links[j].className)
      }
    
        lists[this.index].style.display=
        'block';
        
        links[this.index].className=
        classname;
        

    }
   }
}
function chancelunbo(links,lists,classname){
  for(var i=0;i<links.length;i++){
    links[i].index=i;
    
       links[i].onclick=function(){
       animate(lists,{marginLeft:-296*i},200);
        for(var j=0;j<lists.length;j++){
      
      links[j].className='';
         
         console.dir(links[j].className)
      }
    
        //lists[this.index].style.display=
        //'block';
        
        links[this.index].className=
        classname;
        

    }
   }
}
//轮播动画,以下参数中是类名的当实参传参数时类名要加引号
//box轮播图外面最大的盒子
//imabox轮播图中图片的盒子，比box大
//img轮播图中的图片，有可能是一个图片外的链接
//bnclassname圆点外大盒子的类名
//yuandianclassname小圆点的类名，用来点击时加样式
//zuojiantou轮播图上左箭头的类名
//youjiantou轮播图上右箭头的类名
//width轮播图片的宽度，没有单位px
function lunbodonghua(box,imgbox,img,bnclassname,yuandianclassname,zuojiantou,youjiantou,width){
    var Box=getClass(box)[0]
    var imgBox=getClass(imgbox)[0];
    var as=imgBox.getElementsByTagName(img);
   console.dir(as)
    var bts=getClass(bnclassname)[0].getElementsByTagName('div')
    var nbL=getClass(zuojiantou)[0];
    console.dir(nbL)
    var nbR=getClass(youjiantou)[0];
    console.dir(nbR)
    var index=0;
    var w=width;//parseInt(getStyle(as[0],'width'))
    //console.log(parseInt(getStyle(as[0],'width')))
    imgBox.style.width=(w+10)*imgbox.length
    console.log(w)
    var t=setInterval(move,2000)
     function move(){
      index++;
     if(index>as.length-1){index=0}
      animate(imgBox,{marginLeft:-index*w},200)
      //把圆点的名称去掉
      for(var j=0;j<bts.length;j++){
                
                bts[j].className='';
                console.log(bts[j].className)
            }
      //把圆点的名称附上去一，样式改变
      bts[index].className=yuandianclassname;
    }

    
    Box.onmouseover=function(){
        //清除自动轮播进程号
        clearInterval(t)
    }
    Box.onmouseout=function(){
        //继续开始自动轮播
        t=setInterval(move,2000)
    }
    //选项卡
    
    for(var i=0;i<bts.length;i++){
        //给每个元素的index属性赋值 bts[0]=0 bts[1]=1
        bts[i].index=i;
        bts[i].onclick=function(){
            animate(imgBox,{marginLeft:-this.index*w},200)

            for(var j=0;j<bts.length;j++){
                
                bts[j].className='';
                console.log(bts[j].className)
            }
            bts[this.index].className=yuandianclassname;
            
            
            console.log(bts[this.index].className)
            //index=this.index;
        }

    }
    //箭头
    //与自动轮播思路相同
    nbR.onclick=function(){
        move();
        console.log('5')
    }
    //左箭头，与轮播时思路相反
    nbL.onclick=function(){
        index--;
        if(index==-1){index=bts.length-1}
        animate(imgBox,{marginLeft:-index*w},200)
        for (var i = 0;i<bts.length; i++) {
             bts[i].className='';
            }   
            bts[index].className=yuandianclassname;
    }
 } 
 function lunbodonghua1(box,imgbox,img,bnclassname,yuandianclassname,zuojiantou,youjiantou,width){
    var Box=getClass(box)[0]
    var imgBox=getClass(imgbox)[0];
    console.dir(imgBox);
    var as=getClass(img,imgBox);
    console.dir(as)
    var bts=getClass(bnclassname)[0].getElementsByTagName('div')
    var nbL=getClass(zuojiantou)[0];
    console.dir(nbL)
    var nbR=getClass(youjiantou)[0];
    console.dir(nbR)
    var index=0;
    var w=width;//parseInt(getStyle(as[0],'width'))
    //console.log(parseInt(getStyle(as[0],'width')))
    imgBox.style.width=(w+10)*imgbox.length
    console.log(w)
    var t=setInterval(move,2000)
     function move(){
      index++;
     if(index>as.length-1){index=0}
      animate(imgBox,{marginLeft:-index*w},200)
      //把圆点的名称去掉
      for(var j=0;j<bts.length;j++){
                
                bts[j].className='';
                console.log(bts[j].className)
            }
      //把圆点的名称附上去一，样式改变
      bts[index].className=yuandianclassname;
    }

    
    Box.onmouseover=function(){
        //清除自动轮播进程号
        clearInterval(t)
    }
    Box.onmouseout=function(){
        //继续开始自动轮播
        t=setInterval(move,2000)
    }
    //选项卡
    
    for(var i=0;i<bts.length;i++){
        //给每个元素的index属性赋值 bts[0]=0 bts[1]=1
        bts[i].index=i;
        bts[i].onclick=function(){
            animate(imgBox,{marginLeft:-this.index*w},200)

            for(var j=0;j<bts.length;j++){
                
                bts[j].className='';
                console.log(bts[j].className)
            }
            bts[this.index].className=yuandianclassname;
            
            
            console.log(bts[this.index].className)
            //index=this.index;
        }

    }
    //箭头
    //与自动轮播思路相同
    nbR.onclick=function(){
        move();
        console.log('5')
    }
    //左箭头，与轮播时思路相反
    nbL.onclick=function(){
        index--;
        if(index==-1){index=bts.length-1}
        animate(imgBox,{marginLeft:-index*w},200)
        for (var i = 0;i<bts.length; i++) {
             bts[i].className='';
            }   
            bts[index].className=yuandianclassname;
    }
 }
 function cengjilunbo(box,img,bnclassname,yuandianclassname,zuojiantou,youjiantou){
    var box=$(box)[0];
    //console.log(box)
    var as=[];
    var imgs=$(img,box);
    //console.log(imgs)
    for(var i=0;i<imgs.length;i++){
        as[i]=imgs[i].parentNode;
        //console.log(i);
    }
    //console.log(as)
    var imgbox=as[0].parentNode;
    //console.log(imgbox)
    var bt=$(bnclassname)[0];
    //console.log(bt);
    var bts=$('a',bt);
    console.log(bts)
    var nbl=$(zuojiantou)[0];
    var nbr=$(youjiantou)[0];
    
    var flag=true;
    var next=0;
    var now=0;
    var iw=parseInt(getStyle(imgs[0],'width'));
    console.log(iw)
    for(var i=0;i<as.length;i++){
        as[i].style.left=iw+'px';
    }
    as[0].style.left=0;
    
    var t=setInterval(move,1000);
    function move(){
    if(!flag){return;};
    flag=false;
    next++;
    console.log(next)
    if(next==as.length){
        next=0;
    }
    
    as[next].style.left='100%';
    animate(as[now],{left:-iw},200);
    animate(as[next],{left:0},200,function(){
        flag=true;
    });
    bts[now].className='';
    bts[next].className=yuandianclassname;
    now=next;
    console.log(bts[next].className)
    //next=this.index
    }
    box.onmouseover=function(){
       clearInterval(t);
    }
    box.onmouseout=function(){
        t=setInterval(move,1000)
    }
    
    for(var i=0;i<bts.length;i++){

        bts[i].index=i;
        bts[i].onclick=function(){
        //判断当前显示图片与点击的按钮对应的图片是否为同一张，当是同一张
        //时不需要切换图片
        if(this.index==now||!flag){return;}
        //判断当前显示图片与点击图片的大小顺序来确定图片的进入方向
        if(now<this.index){
        flag=false;
        as[this.index].style.left='100%';   
        animate(as[now],{left:-iw},200);
        animate(as[this.index],{left:0},200,function(){
            flag=true;
        });
        }
        if(now>this.index){
        flag=false;
        as[this.index].style.left=-iw+'px'; 
        animate(as[now],{left:iw},200);
        animate(as[this.index],{left:0},200,function(){
            flag=true;
        }); 
        }
        bts[next].className='';
        bts[this.index].className=yuandianclassname;
        now=next=this.index;
        }
    }
   console.dir(bts);
    
    nbl.onclick=function(){
        if(!flag){return;};
        flag=false;
        next--;
        if(next==-1){next=as.length-1}
        as[next].style.left='-100%';
        animate(as[now],{left:iw},200);
        animate(as[next],{left:0},200,function(){
            flag=true;
        });
        bts[now].className='';
        bts[next].className=yuandianclassname;
        now=next;
    }
    nbr.onclick=function(){
        move();
    }
}
 function $(selector,obj){
  var obj=obj||document;
   if(typeof selector==="string"){
       if(selector.charAt(0)=="."){
        return getClass(selector.substring(1),obj);

       }else 
    if(selector.charAt(0)=="#"){
        return obj.getElementById(selector.substring(1));
        
       }else if(/^[a-z][a-z1-6]{0,9}$/g.test(selector)){
          return obj.getElementsByTagName(selector);
       }else if(/^<[a-z][a-z1-6]{0,9}>$/.test(selector)){
          return document.createElement(selector.slice(1,-1))
       }
      
        }else if(typeof selector=="function"){
         window.onload=function(){
          selector();
         } 
   }



}
function jump(div){
    div.onmouseover=function(){
      animate(div,{marginLeft:-20})
      }
    div.onmouseout=function(){
      animate(div,{marginLeft:0})
        
      }
    }
function trim(str,type){
  type=type||'lr';
  if(type=='a'){return str.replace(/\s*/g,'')};
  if(type=='l'){return str.replace(/^\s*/g,'')};
  if(type=='r'){return str.replace(/\s*$/g,'')};
  if(type=='lr'){return str.replace(/^\s*|\s*$/g,'')};
}
//获取子节点
//a不获取文本 默认 b获取文本，
function getChild(parent,type){
  //获取到父节点的所有子节点
  var childs=parent.childNodes;
  //创建一个数组用来存放符合条件的子节点，最后返回
  var arr=[];
  //得到函数调用时需要的获取类型
  a =type||'a';
  //不需要文本类型时的操作
  if(a=='a'){
    //遍历得到的所有子节点，然后判断子节点类型
    for (var i = 0; i < childs.length; i++) {
      //判断子节点的nodeType
      if(childs[i].nodeType==1){
        arr.push(childs[i]);
      }
    };
    //需要文本时的操作
  }else if(a='b'){
    for (var i = 0; i < childs.length; i++) {
      if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s+|\s+$/g,'')!='')){
        arr.push(childs[i]);
      }
    };
  }
  return arr;
}
//获取第一个子节点
function getFirst(obj,type){
     return getChild(obj,type)[0];

}
//获取最后一个子节点
function getLast(obj,type){
  var allChild=getChild(obj,type);
  return allChild[allChild.length-1]
}
//获取下一个兄弟节点
function getNext(obj){

  var next=obj.nextSibling;
  if(next==null)
    return false;
  while(next.nodeType==8||(next.nodeType==3&&trim(next.nodeValue)==''))
    {next=next.nextSibling;
     if(next==null)
    return false;

    }
    return next;
}
function getNum(obj,type,index){
  var allChild=getChild(obj,type);
  return allChild[num];
}

//获取上一个兄弟节点
function getUp(obj){
  var up=obj.previousSibling;
  if(up==null)
    {
      return false;
    }
  while(up.nodeType==8||(up.nodeType==3&&trim(up.nodeValue)==''))
    {
     up=up.previousSibling;
     if(up==null)
     {
      return false;
     }
    }
    return up;
}
//插入到一个对象之后
function insertAfter(obj,weiobj){
  var next=getNext(weiobj);
  console.dir(next)
  if(next==false){
  weiobj.parentNode.appendChild(obj)
    
  }else{
    
  weiobj.parentNode.insertBefore(obj,next)
  }
}
 
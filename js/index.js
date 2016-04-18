window.onload=function(){
  //window.onscoll();
var mingxingdanpin=$('.mingxingdanpin')[0];
var mingxing=$('.mingxing')[0];
//console.
setInterval(function(){
  if(parseInt(mingxing.style.marginLeft)==-1226)
  {
    animate(mingxing,{marginLeft:0},500)
    console.log(mingxing.style.marginLeft)
  }else{
  animate(mingxing,{marginLeft:-1226},500)}
},5000);
var jiantou=$('.jiantou')[0];
console.log(jiantou);
var jianlr=$('img',jiantou)
console.log(jianlr)
jianlr[0].onclick=function(){
  animate(mingxing,{marginLeft:-1226},500)
}
jianlr[1].onclick=function(){
  animate(mingxing,{marginLeft:0},500)
}
 var banner11s=getClass('banner11');
/* console.dir(banner11s)*/
 var btns=getClass('anniu')[0].
	getElementsByTagName('span')
 console.dir(btns)
 
	var anniul=getClass('anniu-l')[0];
	var anniur=getClass('anniu-r')[0];
	var num=0;
	
    banner11s[0].style.zIndex=10;
    var t=setInterval(move,1000)
    //t 0 1

    function move(){
    num++;	
    if (num>banner11s.length-1) {
      num=0;
    }
    
    for(var i=0;i<banner11s.length;i++){
      banner11s[i].style.zIndex="";
      btns[i].className='';
    }
    
    banner11s[num].style.zIndex=10;
    btns[num].className='annius';
    
    }
    btns.onmouseover=function(){
    	clearInterval(t)
    }
   
    btns.onmouseout=function(){
    t=setInterval(move,1000)
    }
	for(var i=0;i<banner11s.length;i++){
    btns[i].index=i;
    
       btns[i].onclick=function(){

       for(var j=0;j<btns.length;j++){
     banner11s[j].style.display='none';
      btns[j].className='';
         
         console.dir(btns[j].className)
      }
    
        banner11s[this.index].style.display=
        'block';
        
        btns[this.index].className=
        'annius';
        num=this.index;

    }
   }
    anniur.onclick=function(){
   	move();
   }
    anniul.onclick=function(){
    var a=num--;	
    if (num==-1) {
      num=banner11s.length-1;
    }
     
    for(var i=0;i<banner11s.length;i++){
    	
    	banner11s[i].style.zIndex="";
        btns[i].className='';
    }
      banner11s[a].style.zIndex=banner11s.length;
      btns[a].className='annius'; 
     
    }
 
 var title=getClass('title')[0].
 getElementsByTagName('div')
/* console.dir(title)*/
 var dapeir=getClass('dapei-r')
 /*console.dir(dapeir)*/
 chance(title,dapeir,'title0') 
//配件
var title101=getClass('title101')[0].
 getElementsByTagName('div')
 console.dir(title101)

 var peijianr=getClass('peijian-r')
  console.dir(peijianr)
  console.dir(peijianr[4])
 chance(title101,peijianr,'title0')
 //周边 
var title102=getClass('title102')[0].
 getElementsByTagName('div')
 console.dir(title102)
 var zhoubianr=getClass('zhoubian-r')
 console.dir(zhoubianr)
 chance(title102,zhoubianr,'title0') 
//var images=$('img');
//for(var i=0;i<images.length;i++){
  //images[i].setAttribute('asrc',images[i].getAttribute('src'));
  //images[i].src='';
//}
//alert(1);
window.onscroll=function(){
  //alert(1);
  var fl=[];
  var floors=$('.over');
  console.log(floors)
  for(var i=0;i<floors.length;i++){
       
       fl.push(floors[i].offsetTop);
     }
  var doc=document.body.scrollTop?document.body:document.documentElement;
   for(var i=0;i<floors.length;i++){

        //if(!floors[i].flag){return;}
        if(fl[i]-document.documentElement.clientHeight<=doc.scrollTop){
          //setImg(i);
         var imgs=$('img',floors[i]); 

         for(var j=0;j<imgs.length;j++){
          //if(imgs[imgs.length].src){return;}
         imgs[j].src=imgs[j].getAttribute('asrc');

         console.log(imgs[j].src)
        }
        }
        //floors[i].flag=false;
      }
  }
 
window.onscroll();
//内容轮播
var lunbo1=$('.lunbo1')[0];
var an2=$('.an2')[0];
var div=$('div',an2);
chancelunbo(div,lunbo1,'neirongbox172');


 }
       
       

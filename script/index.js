window.onload=function(){



var tonzhi=document.createElement('div');
	tonzhi.setAttribute('id','tonzhi');
var again=document.createElement('div');
	again.setAttribute('id','again');
	// again=document.getElementById('again');
 //    tonzhi=document.getElementById('tonzhi');
	

var ROW=15,SIZE=510;
var qipan=document.getElementById('qipan');
	qipan.style.width=SIZE+'px';
	qipan.style.height=SIZE+'px';
for(var i5=0;i5<ROW;i5++){
var line=document.createElement('div');
	line.setAttribute('class','line');
	line.style.width=2+'px';
	line.style.height=SIZE+'px';
	line.style.left=(SIZE/ROW)/2+(SIZE/ROW)*i5;
	line.style.top=0+'px';	
	qipan.appendChild(line);

}

for(var i5=0;i5<ROW;i5++){
var line=document.createElement('div');
	line.setAttribute('class','line');
	line.style.width=SIZE+'px';
	line.style.height=2+'px';
	line.style.top=(SIZE/ROW)/2+(SIZE/ROW)*i5;
	line.style.left=0+'px';	
	qipan.appendChild(line);
}


for(var j=0;j<ROW;j++){
	for( var k=0;k<ROW;k++){
		var qizi=document.createElement('div');
		qizi.setAttribute('class','qizi');
		qizi.style.width=SIZE/ROW+'px';
		qizi.style.height=SIZE/ROW+'px';
		// qizi.style.background='white';
		qipan.appendChild(qizi);
		qizi.setAttribute('id',j+'_'+k);

	}
}
var panduan=function(id,dic){
	var x=Number(id.split('_')[0]);
	var y=Number(id.split('_')[1]);
	var hang=1,lie=1,zuoxie=1,youxie=1;
	var tx,ty;
	tx=x;ty=y;
	// if(dic[tx+'_'+(ty+1)]||dic[tx+'_'(ty-1)]){hang++;{if(hang>5){return true;}}}
	while(dic[tx+'_'+(ty-1)]){hang++;ty--};
	tx=x;ty=y;
	while(dic[tx+'_'+(ty+1)]){hang++;ty++};
	if(hang==5){return true;}
	tx=x;ty=y;
	while(dic[(tx+1)+'_'+ty]){lie++;tx++};
	tx=x;ty=y;
	while(dic[(tx-1)+'_'+ty]){lie++;tx--};
	if(lie==5){return true;}
	tx=x ;ty=y;
	while(dic[(tx+1)+'_'+(ty+1)]){youxie++;tx++;ty++}
	tx=x;ty=y;
	while(dic[(tx-1)+'_'+(ty-1)]){youxie++;tx--;ty--}
	if(youxie==5){return true;}
	tx=x;ty=y;
	while(dic[(tx-1)+'_'+(ty+1)]){zuoxie++;tx--;ty++}
	tx=x;ty=y;
	while(dic[(tx+1)+'_'+(ty-1)]){zuoxie++;tx++;ty--}
	if(zuoxie==5){return true;}


}	

var qizi=document.getElementsByClassName('qizi');
var dic1={};
	dic2={};
var kaiguan5=true;
for( var i5=0;i5<qizi.length;i5++){
	qizi[i5].onclick=function(){
		if(this.hasAttribute('hascolor')){return;}
		this.style.boxShadow='2px 0 5px inset';
		if(kaiguan5){
			this.style.boxShadow='0px -1px 2px #ccc inset';
			this.style.background='url(./images/black.png) no-repeat';	
			kaiguan5=false;
			dic1[this.getAttribute('id')]=true;
	    	var id=this.getAttribute('id');
	    	if(panduan(id,dic1)){
	    		qipan.appendChild(tonzhi);
	    		tonzhi.innerHTML='黑棋赢了!';
	    		tonzhi.appendChild(again);
	    		again.innerHTML='再来一局！';
	    	}

		}else{
			this.style.boxShadow='0px -2px 5px inset';
			this.style.background='url(./images/white.png) no-repeat';	
			kaiguan5=true;
			dic2[this.getAttribute('id')]=true;
	    	var id=this.getAttribute('id');
	    	if(panduan(id,dic2)){qipan.appendChild(tonzhi);tonzhi.innerHTML='白棋赢了!';
	    	tonzhi.appendChild(again);
	    	again.innerHTML='再来一局!';}
		}
		this.setAttribute('hascolor','true');

	}
}

again.onclick=function(){
	location.reload();
}
}
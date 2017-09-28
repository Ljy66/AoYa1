$(function(){
/*产品中心ajax-s*/
	$.ajax({
	type:"get",
	url:"product.txt",
	async:true,
	success:function(response,status,xhr){
		var data=JSON.parse(response);
		var html=" ";
		for(var i=0;i<data.drug.length;i++){
html+="<li class='col-sm-4 col-xs-10 img-thumbnail'><a href=''><div class='prosImg'><img src='"+data.drug[i].src+"' /></div><div class='prosP'><p>"+data.drug[i].h4+"</p></div><div class='prosShape'><div class='prosShapeP'><h4>"+data.drug[i].h4+"</h4><p>"+data.drug[i].p+"</p><div class='prosMore'>点击查看</div></div></div></a></li>"
		}
		$('.pList>ul').html(html);
	}
});	
	var timer=null;
	function refresh(){
	timer=setInterval(function(){
	$.ajax({
	type:"get",
	url:"product.txt",
	async:true,
	success:function(response,status,xhr){
		var data=JSON.parse(response);
		var html=" ";
		for(var i=0;i<data.drug.length;i++){
html+="<li class='col-sm-4 col-xs-10 img-thumbnail'><a href=''><div class='prosImg'><img src='"+data.drug[i].src+"' /></div><div class='prosP'><p>"+data.drug[i].h4+"</p></div><div class='prosShape'><div class='prosShapeP'><h4>"+data.drug[i].h4+"</h4><p>"+data.drug[i].p+"</p><div class='prosMore'>点击查看</div></div></div></a></li>"
		}
		$('.pList>ul').html(html);
	}
});	
	
},1000)	
	}

	refresh();
$('.pList>ul').delegate('li','mouseenter',function(){
	clearInterval(timer);
})
$('.pList>ul').delegate('li','mouseleave',function(){
	refresh();
})
/*产品中心ajax-e*/
	
	
})

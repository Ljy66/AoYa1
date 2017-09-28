$(function(){
	/*新闻中心ajax-s*/	
$.ajax({
	type:"get",
	url:"data.txt",
	async:true,
	success:function(response,status,xhr){
		var data=JSON.parse(response);
		var myDate=new Date;
		var year=myDate.getFullYear();
		var mon=myDate.getMonth()+1;
		var day=myDate.getDate();
		var html=" ";
		for(var i=0;i<data.length;i++){
html+="<li class='col-sm-4 col-xs-10'><a href=''><div class='nDate'><h4>"+day+"</h4><p>"+mon+"-"+year+"</p></div><div class='nImg  hvr-grow'><img src='"+data[i].src+"' class='img-responsive' /></div><div class='nP'><h4>"+data[i].h4+"</h4><p>"+data[i].p+"</p></div></a></li>"
		}
		$('.pList>ul').html(html);
	}
});	
	/*setInterval(function(){
	$.ajax({
	type:"get",
	url:"data.txt",
	async:true,
	success:function(response,status,xhr){
		var data=JSON.parse(response);
		var html=" ";
		var myDate=new Date;
		var year=myDate.getFullYear();
		var mon=myDate.getMonth()+1;
		var day=myDate.getDate();
		for(var i=0;i<data.length;i++){
html+="<li class='col-sm-4 col-xs-10'><a href=''><div class='nDate'><h4>"+day+"</h4><p>"+mon+"-"+year+"</p></div><div class='nImg  hvr-grow'><img src='"+data[i].src+"' class='img-responsive' /></div><div class='nP'><h4>"+data[i].h4+"</h4><p>"+data[i].p+"</p></div></a></li>"
		}
		$('.pList>ul').html(html);
	}
});			
	},500)*/
	
/*新闻中心ajax-e*/
	
	
	
	
	
	
})

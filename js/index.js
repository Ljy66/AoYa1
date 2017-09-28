$(function(){
	/*吸顶s*/
	$(window).scroll(function(){
	var top=$(document).scrollTop();
	if(top>142){
		$('.navwrap').css({"position":"fixed","top":0});
	}
	else{
		$('.navwrap').css({'position':'absolute','top':'142px'});
	}	
	})
	/*吸顶e*/
	/*轮播s*/
	var num=0;
	var timer=null;
	var timer1=null;
	var aLi=$('.ibanner>ul>li');
	var aSpan=$('#dot span');
	var aUl=$('.ibanner ul')
	for(var i = 0; i <aLi.length; i++) {
			aSpan.eq(i).click(function(){
				num = $(this).index();
				for(var i = 0; i < aLi.length; i++) {
					aSpan.eq(i).removeClass("active");
				}
				aSpan.eq(num).addClass("active");
				aUl.css({"top":(-500 * num)+ "px"});
			})
			
		}
		function move(a, b) {
			for(var i = 0; i < aLi.length; i++) {
				aSpan.eq(i).removeClass("active");
			}
			num++;
			if(num > a) {
				num = b;
				aSpan.eq(num).addClass("active");
				aUl.css({"top":(-500 * num)+ "px"});
			} else {
				aSpan.eq(num).addClass("active");
				aUl.css({"top":(-500 * num)+ "px"});
			}
		}
		clearInterval(timer);
		timer= setInterval(function() {
			move(2, 0);
		}, 1500);
		$('.ibanner').mouseover(function(){
			clearInterval(timer);
		})
		$('.ibanner').mouseout(function(){
			clearInterval(timer);
			timer= setInterval(function() {
				move(2, 0);
			}, 1500);
		})
	/*轮播e*/
	
/*侧边栏s*/
$('.side>div').hover(function(){
	$(this).children('.sLeft').fadeIn();
	$(this).siblings('div').children('.sLeft').fadeOut();
})
$('.box4 .sRight').click(function(){
	$('html,body').stop().animate({'scrollTop':0},500);
})
/*侧边栏e*/

/*产品套餐s*/
$('.itemList>div>.pImg').mouseover(function(){
	$(this).children('.shape').fadeIn();
})
$('.itemList>div>.pImg').mouseout(function(){
	$(this).children('.shape').fadeOut();
})
$('.pBox1 button').click(function(){
	var a=$(".pBox1 h4").text().substr(0,5);
	window.open('http://www.bjp321.com/zhaoshang/search.php?kw='+a+'');
})
$('.pBox2 button').click(function(){
	var a=$(".pBox2 h4").text().substr(0,3);
	window.open('http://www.bjp321.com/zhaoshang/search.php?kw='+a+'');
})
$('.pBox3 button').click(function(){
	var a=$(".pBox3 h4").text().substr(4,5);
	window.open('http://www.bjp321.com/zhaoshang/search.php?kw='+a+'');
})
$('.pBox4 button').click(function(){
	var a=$(".pBox4 h4").text().substr(4,5);
	window.open('http://www.bjp321.com/zhaoshang/search.php?kw='+a+'');
})
/*产品套餐e*/
/*产品中心s*/
$('.pCenter>.cwrap>.cleft').mouseenter(function(){
	$(this).children('a').fadeIn();
	$(this).children().children().children('.ltop').addClass('animated slideInLeft');
	$(this).children().children().children('.lbottom').addClass('animated slideInRight');
});
$('.pCenter>.cwrap>.cleft').mouseleave(function(){
    $(this).children('a').fadeOut();
	$(this).children().children().children('.ltop').removeClass('animated slideInLeft');
	$(this).children().children().children('.lbottom').removeClass('animated slideInRight');
});
//左
//右
$('.pCenter>.cwrap>.cright>div').mouseenter(function(){
	$(this).children('a').fadeIn();
	$(this).children().children().children('.rtop').addClass('animated slideInLeft');
	$(this).children().children().children('.rbottom').addClass('animated slideInRight');
});
$('.pCenter>.cwrap>.cright>div').mouseleave(function(){
    $(this).children('a').fadeOut();
	$(this).children().children().children('.rtop').removeClass('animated slideInLeft');
	$(this).children().children().children('.rbottom').removeClass('animated slideInRight');
});
/*产品中心e*/
/*关于我们s*/
$('.iAbout>.awrap>img').mouseenter(function(){
	$(this).addClass('animated shake');
})
$('.iAbout>.awrap>img').mouseleave(function(){
	$(this).removeClass('animated shake');
})
/*关于我们e*/
/*服务范围s*/
$('.scContent>ul>li').hover(function(){
	$(this).addClass('scBg').siblings('li').removeClass('scBg');
})
/*服务范围e*/

/*服务支持s*/
$('.iSupport>.ssWrap>.ssContent>ul>li').hover(function(){
	$(this).addClass('ssBg').siblings('li').removeClass('ssBg');
})
/*服务支持e*/
/*新闻中心s*/
/*$('.iNews>.nWrap>.nContent>ul>li').mouseover(function(){
	$(this).children().children('.nImg').children('img').css({'transform':'scale(1.5)'});
})
$('.iNews>.nWrap>.nContent>ul>li').mouseout(function(){
	$(this).children().children('.nImg').children('img').css({'transform':'scale(1)'});
})
*/
/*新闻中心e*/
/*合作伙伴s*/
$('.iPartners>.ipWrap>.ipContent>ul>li').mouseover(function(){
	$(this).children().children('img').addClass('animated flip');
})
$('.iPartners>.ipWrap>.ipContent>ul>li').mouseout(function(){
	$(this).children().children('img').removeClass('animated flip');
})
/*合作伙伴e*/
/*底部广告s*/
$('.adClose').click(function(){
	$('.iAd').fadeOut();
})

/*底部广告e*/
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
html+="<li><a href=''><div class='nDate'><h4>"+day+"</h4><p>"+mon+"-"+year+"</p></div><div class='nImg'><img src='"+data[i].src+"' /></div><div class='nP'><h4>"+data[i].h4+"</h4><p>"+data[i].p+"</p></div></a></li>"
		}
		$('.nContent>ul').html(html);
	}
});	
    function refrseshData(){
    	timer1=setInterval(function(){
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
html+="<li><a href=''><div class='nDate'><h4>"+day+"</h4><p>"+mon+"-"+year+"</p></div><div class='nImg'><img src='"+data[i].src+"' /></div><div class='nP'><h4>"+data[i].h4+"</h4><p>"+data[i].p+"</p></div></a></li>"
		}
		$('.nContent>ul').html(html);
	}
});			
	},500)	
    }
	refrseshData();
	$('.nContent ul ').delegate('li','mouseenter',function(){
		clearInterval(timer1);
		$('.nImg').eq($(this).index()).addClass('hvr-grow');
	})
	$('.nContent ul ').delegate('li','mouseleave',function(){
		refrseshData();
	})
/*新闻中心ajax-e*/

/*分享到微信s*/
$('.fwrap ol>li').eq(0).click(function(){
	$('.bsBox').fadeIn();
})
$('#bsWXBox .bsClose').click(function(){
	$('.bsBox').fadeOut();
})
/*分享到微信e*/
/*分享到新浪微博s*/
$('.fwrap ol li').eq(1).click(function(){
	window.open('http://service.weibo.com/share/share.php?url=http://www.aaxihe.com/&title=深圳市澳亚协合生物科技有限公司','_blank','width=600,height=400,top=100px,left=0px')
})

/*分享到新浪微博e*/
/*分享到qq-s*/
$('.fwrap ol li').eq(2).click(function(){
	window.open('http://connect.qq.com/widget/shareqq/index.html?url=http://www.aaxihe.com/&desc=深圳市澳亚协合生物科技有限公司&pics=http://www.aaxihe.com/Uploads/config/20170606/59365a3e282fc.jpg&site=深圳市澳亚协合生物科技有限公司','_blank','width=600,height=400,top=100px,left=0px')
})
/*分享到qq-e*/
/*分享到QQ空间-s*/
$('.fwrap ol li').eq(3).click(function(){
	window.open('http://connect.qq.com/widget/shareqq/index.html?url=http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=http://www.aaxihe.com/&desc=深圳市澳亚协合生物科技有限公司&title=深圳市澳亚协合生物科技有限公司&pics=http://www.aaxihe.com/Uploads/config/20170606/59365a3e282fc.jpg','_blank','width=600,height=400,top=100px,left=0px')
})
/*分享到QQ空间-e*/

/*分享到豆瓣s*/
$('.fwrap ol li').eq(4).click(function(){
	window.open('http://shuo.douban.com/!service/share?&href=http://www.aaxihe.com&name=深圳澳亚协合生物科技有限公司','_blank','width=600,height=400,top=100px,left=0px')
})
/*分享到豆瓣-e*/
})

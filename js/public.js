$(function() {
	/*吸顶s*/
	$(window).scroll(function() {
		var top = $(document).scrollTop();
		if(top > 142) {
			$('nav').css({
				"position": "fixed",
				"top": 0
			});
		} else {
			$('nav').css({
				'position': 'absolute',
				'top': '88px'
			});
		}
	})
	/*吸顶e*/
	/*侧边栏s*/
	$('.side>div').hover(function() {
		$(this).children('.sLeft').fadeIn();
		$(this).siblings('div').children('.sLeft').fadeOut();
	})
	$('.box4 .sRight').click(function() {
		$('html,body').stop().animate({
			'scrollTop': 0
		}, 500);
	})
	/*侧边栏e*/
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
	window.open('http://service.weibo.com/share/share.php?url=https://ljy66.github.io/AoYa1/&title=深圳市澳亚协合生物科技有限公司','_blank','width=600,height=400,top=100px,left=0px')
})

/*分享到新浪微博e*/
/*分享到qq-s*/
$('.fwrap ol li').eq(2).click(function(){
	window.open('http://connect.qq.com/widget/shareqq/index.html?url=https://ljy66.github.io/AoYa1/&desc=深圳市澳亚协合生物科技有限公司&pics=http://www.aaxihe.com/Uploads/config/20170606/59365a3e282fc.jpg&site=深圳市澳亚协合生物科技有限公司','_blank','width=600,height=400,top=100px,left=0px')
})
/*分享到qq-e*/
/*分享到QQ空间-s*/
$('.fwrap ol li').eq(3).click(function(){
	window.open('http://connect.qq.com/widget/shareqq/index.html?url=http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=https://ljy66.github.io/AoYa1/&desc=深圳市澳亚协合生物科技有限公司&title=深圳市澳亚协合生物科技有限公司&pics=http://www.aaxihe.com/Uploads/config/20170606/59365a3e282fc.jpg','_blank','width=600,height=400,top=100px,left=0px')
})
/*分享到QQ空间-e*/

/*分享到豆瓣s*/
$('.fwrap ol li').eq(4).click(function(){
	window.open('http://shuo.douban.com/!service/share?&href=https://ljy66.github.io/AoYa1/&name=深圳澳亚协合生物科技有限公司','_blank','width=600,height=400,top=100px,left=0px')
})
/*分享到豆瓣-e*/




	

})
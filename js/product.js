$(function(){
$(".pList>ul").delegate('li','mouseenter', function(){ 
$('.prosP').eq($(this).index()).slideUp();
$('.prosShape').eq($(this).index()).fadeIn();
})
$(".pList>ul").delegate('li','mouseleave', function(){ 
$('.prosP').eq($(this).index()).slideDown();
$('.prosShape').eq($(this).index()).fadeOut();
})	
})

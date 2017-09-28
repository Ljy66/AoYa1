$(function() {

	var num = "";
	var arr = [];
	function ran() {
		for(var i = 1; i <= 9; i++) {
			arr.push(i)
		}
		for(var i = 0; i < 4; i++) {
			var index = Math.floor(Math.random() * arr.length);
			$('.fCodes span').eq(i).text(arr[index]);
			arr.splice(index, 1); //删除的索引位置,长度
		}
		arr.length = 0;
		for(var i = 1; i <= 9; i++) {
			arr.push(i)
		}
	}
	ran();

	$('.fCodes').click(function() {
       ran();
	})
	$('#login').click(function() {
		 if($('#fPhone').val()==''){
		 	alert("手机号码不能为空！")
		 }
		 else if($('#fPass').val()==''){
		 	alert("密码不能为空！")
		 }
		  else if($('#fCode').val()==''){
		 	alert("验证码不能为空！")
		 }
		 else{
		 	window.location.href="index.html";
		 }
	})
	$('#fCode').keyup(function(){
		var arr='';
		for(var i=0;i<$('.fCodes span').length;i++){
			arr+=$('.fCodes span').eq(i).text();
		}
		var code=$('#fCode').val();
		if(code!==arr){
			$('.fCode>span').text('验证码输入有误！');
		}
		else{
			$('.fCode>span').hide();
		}
	})
	
	
	
	/*密码-s*/
	/*var num=$('#fPhone').val()
	$('#fPass').keyup(function(){
		console.log(num)
		if($('#fPass').val()!=num){
		$('.fPass span').text('密码输入有误，默认为手机号后4位！');
		$('#fPass').val='';
		}
		else{
		$('.fPass span').hide();
		}
	})*/
	
	/*密码-e*/
	/*手机号验证s*/
	var re = /^1[34578]\d{9}$/;
	$('#fPhone').keyup(function(){
		if(re.test($(this).val())!=true){
			$('.fPhone span').text('手机号输入格式有误！');
			/*$('#fPhone').val='';*/
		}
		else{
			$('.fPhone span').hide();
		}
	})
	/*手机号验证-e*/
	
	
	
	

})
window.onload = function() {
	function $(id) {
		return document.getElementById(id);
	}

	function cla(cla) {
		return document.getElementsByClassName(cla);
	}

	function tag(tag) {
		return document.getElementsByTagName(tag);
	}
	
	var hint = cla("hint");
	
	
	var hint_userName = cla("hint_userName")[0];
	var hint_password = cla("hint_password")[0];
	var hint_passwordConfirm = cla("hint_passwordConfirm")[0];
	var hint_email = cla("hint_email")[0];
	var hint_phone = cla("hint_phone")[0];
	var hint_identifyCode = cla("hint_identifyCode")[0];
	
	
	var input_userName = tag("input")[0];
	var input_password = tag("input")[1];
	var input_passwordConfirm = tag("input")[2];
	var input_email = tag("input")[3];
	var input_phone = tag("input")[4];
	var input_identifyCode = tag("input")[5];
	
	var imgDefault = cla("default");
	var colorGray = cla("colorGray");
	
	var right_userName = /[a-z0-9_\u2E80-\u9FFF]{6,20}/;
	var right_email = /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
	var right_phone = /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/;
	
	
	//用户名
	input_userName.onfocus = function() {
		hint_userName.style.display = "block";
	}
	input_userName.onblur = function() {
//		hint_userName.style.display = "none";
		if(right_userName.test(this.value)){
			this.style.border = "1px solid #999";
			imgDefault[0].src="images/right.png";
			colorGray[0].innerHTML = "congratulations!";
			colorGray[0].style.color = "green";
		}else{
			this.style.border = "1px solid red";
			imgDefault[0].src="images/error.png";
			colorGray[0].style.color = "red";
		}
	}

	//密码
	input_password.onfocus = function() {
		document.onkeyup = function(){
			if(input_password.value.length >= 6 && input_password.value.length <= 20){
				hint_password.style.display = "block";
				var right_number = /\d+/;  //数字
				var right_letter = /[a-zA-Z]/; //字母
				var right_other = /[^a-zA-Z\d]+/  //其他字符
				var level = 0;
					if(right_number.test(input_password.value)){
						level++;	
					}
					if(right_letter.test(input_password.value)){
						level++;
					}
					if(right_other.test(input_password.value)){
						level++;
					}
					switch(level){
						case 1:
						input_password.style.border = "1px solid #999";
						imgDefault[1].src="images/ruo.png";
						colorGray[1].innerHTML = "有较大的被盗风险,建议使用字母、数字和符号两种及以上组合";
						colorGray[1].style.color = "red";
						break;
						case 2:
						input_password.style.border = "1px solid #999";
						imgDefault[1].src="images/zhong.png";
						colorGray[1].innerHTML = "安全强度适中，可以使用三种的组合来提高安全强度";
						colorGray[1].style.color = "orange";
						break;
						case 3:
						input_password.style.border = "1px solid #999";
						imgDefault[1].src="images/qiang.png";
						colorGray[1].innerHTML = "你的密码强度很高";
						colorGray[1].style.color = "green";
						break;
						};
				}else{
					input_password.style.border = "1px solid red";
					hint_password.style.display = "block";
					imgDefault[1].src="images/error.png";
					colorGray[1].innerHTML = "长度在6-20个字符之间";
					colorGray[1].style.color = "red";		
				}
			}	
	}
	input_password.onblur = function() {
	}	
	//密码确认
	input_passwordConfirm.onfocus = function() {
		hint_passwordConfirm.style.display = "block";
	}
	input_passwordConfirm.onblur = function() {
		//hint_passwordConfirm.style.display = "none";
		if(this.value = input_password.value ){
			imgDefault[2].src="images/right.png";
			colorGray[2].innerHTML = "congratulations!";
			colorGray[2].style.color = "green";
		}else{
			this.style.border = "1px solid red";
			imgDefault[2].src="images/error.png";
			colorGray[2].style.color = "red";
		}
	}
	//邮箱
	input_email.onfocus = function() {
		hint_email.style.display = "block";
	}
	input_email.onblur = function() {
		//hint_email.style.display = "none";
		if(right_email.test(this.value)){
			imgDefault[3].src="images/right.png";
			colorGray[3].innerHTML = "congratulations!";
			colorGray[3].style.color = "green";
		}else{
			this.style.border = "1px solid red";
			imgDefault[3].src="images/error.png";
			colorGray[3].innerHTML = "请输入正确邮箱格式";
			colorGray[3].style.color = "red";
		}
	}
	//手机号码
	input_phone.onfocus = function() {
		hint_phone.style.display = "block";
	}
	input_phone.onblur = function() {
		//hint_phone.style.display = "none";
		if(right_email.test(this.value)){
			imgDefault[4].src="images/right.png";
			colorGray[4].innerHTML = "congratulations!";
			colorGray[4].style.color = "green";
		}else{
			this.style.border = "1px solid red";
			imgDefault[4].src="images/error.png";
			colorGray[4].innerHTML = "请输入正确手机号格式";
			colorGray[4].style.color = "red";
		}
	}
	//验证码
	input_identifyCode.onfocus = function() {
		hint_identifyCode.style.display = "block";
	}
	input_identifyCode.onblur = function() {
		hint_identifyCode.style.display = "none";
	}
	
}
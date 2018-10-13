window.onload = function(){
	/*
		1、代码格式尽量统一
		2、写出核心函数实现
		3、找出变量，进行传参
	*/

	var oDiv = document.getElementById('pic');
	var oImg = oDiv.getElementsByTagName('img')[0];
	var oP = oDiv.getElementsByTagName('p')[0];
	var oSpan = oDiv.getElementsByTagName('span')[0];
	var oUl = oDiv.getElementsByTagName('ul')[0];

	var aLi = oUl.getElementsByTagName('li');

	var arrSrc = ['images/phone1.jpg','images/phone2.jpg','images/phone3.jpg','images/phone4.jpg','images/phone5.jpg','images/phone6.jpg'];
	var arrText = ['图片一','图片二','图片三','图片四','图片五','图片六'];

	var num = 0;

	for(var i = 0;i < arrText.length;i++){
		oUl.innerHTML +='<li></li>';
	}
	//初始化
	function fnTab(){
		oImg.src = arrSrc[num];
		oSpan.innerHTML = arrText[num];
		oP.innerHTML = 1 + num + '/' +arrText.length;
		for(var i = 0;i<aLi.length;i++){
			aLi[i].className = '';
		}
		aLi[num].className = 'active';
	}
	fnTab();
	for(var i = 0;i < arrText.length;i++){
		aLi[i].index = i;	//自定义属性
		aLi[i].onclick = function(){
			num = this.index;
			fnTab();
		};
	}
};

// 减
var sum = 0;
$(".list-cart").on("click", ".num-minus", function() {
	// 获取数值
	var num = $(this).siblings(".num-input").val();
	// 单价
	var price = $(this).parents().siblings(".price").text();
	// 小计


	if (num <= 1) {
		alert("最少得搞一个吧");
		return;
	}
	num--;
	sum = num * price;

	$(this).siblings(".num-input").val(num);
	$(this).parents().siblings(".total").text(sum);



	var number = 0;
	var price = 0;
	var su = 0;
	$(this).parents(".goods").each(function() {


		var x = $(this).find(".total").text();
		var y = $(this).find(".num-input").val();
		number += parseInt(x); //number = number +x;
		su += parseInt(y);
		price += number * y;
	});
	// console.log("总数：%s", number);
	$(".num1").text(su);
	var flag = $(this).parents('.goods').find('.cb').find('input').prop('checked');

	if (!flag) {
		return;
	}
	console.log(123123123221212121221231);
	$(".z_num").text(number);

});
// 加
var sum = 0;
$(".list-cart").on("click", ".num-plus", function() {


	// 获取数值
	var num = $(this).siblings(".num-input").val();
	// 单价
	var price = $(this).parents().siblings(".price").text();
	num++;
	// 小计
	sum = num * price;
	$(this).siblings(".num-input").val(num);
	$(this).parents().siblings(".total").text(sum);

	var number = 0;
	var price = 0;
	var su = 0;
	$(this).parents(".goods").each(function() {

		var x = $(this).find(".total").text();
		console.log(x);
		var y = $(this).find(".num-input").val();
		number += parseInt(x); //number = number +x;
		price += number * y;
		su += parseInt(y);
	});
	// console.log("总数：%s", number);
	$(".num1").text(su);

	var flag = $(this).parents('.goods').find('.cb').find('input').prop('checked');

	if (!flag) {
		return;
	}
	console.log(123123123221212121221231);
	$(".z_num").text(number);

});


// 全选checkbox
var $con = $(".list-cart");
$("#checkAll").click(function() {
	var isChecked = $(this).prop("checked");
	$con.find("input:checkbox").prop("checked", isChecked);
});

// tbody中的checkbox
$con.on("click", "input:checkbox", function() {
	var total = $con.find("input:checkbox").length;
	var checked = $(".goods input:checked").length;
	console.log(checked);
	console.log(total);

	var number = 0;
	var price = 0;
	var su = 0;
	$(".goods").each(function() {
		var flag = $(this).find('.cb').find('input').prop('checked');
		if (!flag) {
			return;
		}
		console.log(flag, 1233333)
		var x = $(this).find(".total").text();
		var y = $(this).find(".num-input").val();
		number += parseInt(x); //number = number +x;
		su += parseInt(y);
		price += number * y;
	});
	

	$("#checkAll").prop("checked", checked == total);
	$(".num1").text(total);
	$(".num2").text(checked);
	var flag = $(this).parents('.goods').find('.cb').find('input').prop('checked');
	
	if (!flag) {
		return;
	}
	$(".z_num").text(number);
	
});

// 插入购物驹的东 西
//获取cookie
function getCookie(cname) {
	var name = cname + "=";
	var ca = document.cookie.split(';');
	for (var i = 0; i < ca.length; i++) {
		var c = ca[i].trim();
		var arrC = c.split("=");
		if (arrC[0] == cname) {
			return arrC[1];
		}
	}
	return "";
}
//设置Cookie
function setCookie(cname, cvalue, exdays) {
	var d = new Date();
	d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
	var expires = "expires=" + d.toGMTString();
	document.cookie = cname + "=" + cvalue + "; " + expires;
}







$(document).ready(function() {
	// 1.页面加载完成获取cookie中的cart数据
	var cart = getCookie("cart");
	if (cart) {
		cart = JSON.parse(cart);
	} else {
		cart = [];
	}
	// 2.渲染数据
	console.log(cart);
	cart.forEach(function(item, index) {
		var $item = $(
			'<div class="goods  clearfix"><div class="cb"><input type="checkbox" name="" id="" value="" /></div>' +
			'<div class="img"><img src="' + item.photo + '"></div>' +
			'<div class="name">' + item.name + '</div>' +
			'<div class="price">' + item.price + '</div>' +
			'<div class="cont clearfix"><p class=""><a href="javascript:;" class="num-minus">-</a>' +
			'<input type="text" value="' + item.num +
			'" class="num-input"><a href="javascript:;" class="num-plus">+</a></p></div>' +
			'<div class="total">' + item.price * item.num + '</div><div class="action">删除</div></div>');
		$(".list-cart").append($item);

		var number = 0;
		var price = 0;
		var su = 0;
		$(".goods").each(function() {
			var x = $(this).find(".total").text();
			var y = $(this).find(".num-input").val();
			number += parseInt(x); //number = number +x;
			price += number * y;
			su += parseInt(y);
		});
		// console.log("总数：%s", number);
		var total = $con.find("input:checkbox").length;
		$(".num1").text(total);
	});

});

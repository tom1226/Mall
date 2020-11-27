var swiper = new Swiper('.swiper-container', {
 	loop: true,
 	autoplay: true,
 	pagination: {
 		el: '.swiper-pagination',
 		type: 'bullets',
 	},
 	navigation: {
 		nextEl: '.swiper-button-next',
 		prevEl: '.swiper-button-prev',
 	},
 });


 new PCAS("province3", "city3", "area3");

 //选项卡
 $(".con_top li").click(function() {
 	//获取索引
 	var i = $(this).index();
 	$(this).addClass("active");
 	$(this).siblings("li").removeClass("active");
 	//对应内容切换
 	$(this).parent().siblings(".con_photo").find("li").hide().eq(i).show();
 	console.log($(this).parent().siblings(".con_photo").find("li").eq(i));
 });
 $(".set_meal ul li").click(function() {
 	console.log(123);
 	$(this).addClass("act");
 	$(this).siblings("li").removeClass("act");
 });



 // 加入购物车
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






 $(".add_cart").click(function() {
 	//点击时候先把商品数据拿出来-goods
 	var id = $(this).parents(".introduce_frig").data("id");
 	var name = $(this).parents(".introduce_frig").find(".title").text().trim();
 	var photo = $(this).parents(".introduce_frig").siblings(".introduce_left").find(".img").attr("src");
 	var price = $(this).parents(".introduce_frig").find(".present_price").text().trim();
		console.log(price);
 	var goods = {
 		id: id,
 		name: name,
 		photo: photo,
 		price: price,
 		num: 1,
 	}
 	//1.提取cookie中购物车数组
 	var cart = getCookie("cart");
 	if (cart) {
 		//2.JSON转换成数组
 		cart = JSON.parse(cart);
 	} else {
 		cart = [];
 	}
 	//3.在cart中查找此商品，如果有数量加1如果没有push进数组
 	var i = cart.findIndex(function(item, index) { return item.id == id; });

 	if (i >= 0) {
 		//如果有数量+1	
 		cart[i].num += 1;
 	} else {
 		//如果没有push数组
 		cart.push(goods);
 	}
 	//4.添加goods至购物车
 	//5.转换为JSON
 	cart = JSON.stringify(cart);
 	//6.存储至cookie
 	setCookie("cart", cart);
 });

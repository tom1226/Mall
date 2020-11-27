var swiper = new Swiper('.rotation .swiper-container', {
	// cssMode: true,
	loop: true,
	autoplay: true,
	navigation: {
		nextEl: '.rotation .swiper-button-next',
		prevEl: '.rotation .swiper-button-prev',
	},
	pagination: {
		el: '.swiper-pagination'
	},
	mousewheel: true,
	keyboard: true,
});


var swiper = new Swiper('.purchase_btt_rig .swiper-container', {
	slidesPerView: 4,
	spaceBetween: 15,
	slidesPerGroup: 4,
	loop: true,
	autoplay: true,
	loopFillGroupWithBlank: true,
	navigation: {
		nextEl: '.purchase_btt_rig .swiper-button-next',
		prevEl: '.purchase_btt_rig .swiper-button-prev',
	},
});
$(".p_top .switch p").mouseenter(function() {
	//获取索引
	console.log(123);
	var i = $(this).index();
	$(this).addClass("active");
	$(this).siblings("p").removeClass("active");
	//对应内容切换
	$(this).parents().siblings(".row").find(".row_r").hide().eq(i).show();
})

//启动定时器  倒计时
setInterval(function() {
	//时间处理
	// 当前时间
	var time = new Date();
	//结束时间
	var endtime = new Date(2020, 10 - 1, 1, 10, 0, 0);
	// 时间差毫秒数
	time = (endtime - time) / 1000;
	//时
	var hour = parseInt(time / 3600);
	//分
	var min = parseInt((time - (hour * 3600)) / 60);
	//秒
	var sec = parseInt(time % 60);
	
	$(".hour").text(getStr(hour));
	$(".min").text(getStr(min));
	$(".sec").text(getStr(sec));

}, 500);
function getStr (num) {
	if(num<10){
		return "0" +num;
	}else{
		return num;
	}
}

$(function() {
   	$("#txtPhone").on("change", function() {
   		var phone = $("#txtPhone").attr("data-mobile");
   		var mobile = $("#txtPhone").val()
   		console.log(phone)
   		console.log(mobile)
   		if (phone == "" || phone != mobile) {
   			$(".regitem-mesage").show()
   		};
   	});
   })


   // 三级联动
   $("#city").click(function(e) {
   	SelCity(this, e);
   });
   $("s").click(function(e) {
   	SelCity($("#city"), e);
   });

   //页面层-自定义
   $('#add').click(function() {
   	layer.open({
   		type: 1,
   		title: '添加地址',
   		closeBtn: 1,
   		area: ['650px', '450px'],
   		shadeClose: true,
   		shade: 0.5,
   		content: $('.form'),
   		zIndex: -1
   	});
   })
   // 关闭弹窗
   $('.o_close').click(function() {
   	layer.closeAll();
   })
   //验证-添加
   $('.form').Validform({
   	// tiptype: 4,
   	tiptype: function(msg, o, cssctl) {
   		if (o.type == 3) {
   			alert(msg);
   		}
   	},
   	beforeSubmit: function(curform) {
   		layer.closeAll();
   		// 获取表单的元素
   		var o_name = $('.o_name').val();
   		var o_phone = $('.o_phone').val();
   		// 省市区三级联动
   		var o_provice = $('#city').val();
   		var o_text = $('.o_text').val();

   		var $li = '<div class="add_item"><div class="add_box clearfix"><div class="add_name fl">' + o_name +
   			'</div><div class="add_default fr"><span>默认地址</span></div></div><div class="add_phone"> ' +
   			o_phone + ' </div><div class="add_size"><span class="add_three"> ' + o_provice +
   			' </span><span class="add_tip"> ' + o_text +
   			' </span></div><div class="add_edit"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div><div class="add_del"><i class="fa fa-trash-o" aria-hidden="true"></i></div></div>'

   		$('.addbox').append($li);

   		$('.o_name').val('');
   		$('.o_phone').val('');
   		// 省市区三级联动
   		$('#city').val('');
   		$('.o_text').val('');
   		return false;
   		//在验证成功后，表单提交前执行的函数，curform参数是当前表单对象。
   		//这里明确return false的话表单将不会提交;	
   	},

   });

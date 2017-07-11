$(function() {
	// 声明变量
	var rotation = $('#rotation'); // 获取显示区域
	var imgList = $('#img-list'); // 获取滚动区域
	var item = $('.item'); // 获取LI
	var focusList = $('#focus-list'); //获取焦点区域
	var imgs = item.length; // 获取图片个数
	var imgW = rotation.width(); // 获取图片宽度
	var index = 0; // 图片下标
	var timer = null; // 计时器
	var tr = 3000; //计时器时间
	var timeo = null; // 定时器
	var to = 200; //定时器时间
	var prev = $('#rotation .prev'); // 获取上一个
	var next = $('#rotation .next'); // 获取下一个
	// 初始化
	createFocusFn(); // 创建焦点并设置
	rotationFn(); // 图片轮播
	focusTabFn(); // 焦点切换图片
	switchFn(); // 左右按钮切换图片

	// 控制台输出
	console.log('\n%cPlugin was started', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:18px;');
	console.log("%c--by Flandre"," text-shadow: 0 1px 1px #ccc,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size: 16px");

	// 图片轮播
	function rotationFn() {
		clearInterval(timer);
		timer = setInterval(function timerFn() {
			if (index >= imgs - 1) {
				index = -1;
			}
			index++;
			// 绑定图片与焦点
			imgTabFn();
		}, tr)
	}

	// 创建焦点并设置
	function createFocusFn() {
		for (var i = 0; i < imgs; i++) {
			focusList.append('<i></i>');
		}
		if (i == imgs) {
			focusList.css('margin-left', -(focusList.width()) / 2);
			focusList.children('i:first').addClass('hover');
		}
	}

	// 焦点切换图片
	function focusTabFn() {
		focusList.delegate('i', 'mouseover', function() {
			item.stop(true, true)
			index = $(this).index();
			clearTimeout(timeo);
			timeo = setTimeout(function() {
				imgTabFn();
				rotationFn(index); // 图片轮播
			}, to)
		})
	}

	// 左右按钮切换图片
	function switchFn() {
		prev.click(function() {
			index--;
			if (index < 0) {
				index = imgs - 1;
			}
			imgTabFn();
			rotationFn(); // 图片轮播
		})
		next.click(function() {
			index++;
			if (index >= imgs) {
				index = 0;
			}
			imgTabFn();
			rotationFn(); // 图片轮播
		})
	}

	// 图片切换动画
	function imgTabFn() {
		focusList.children().removeClass('hover').eq(index).addClass('hover');
		item.eq(index).siblings().fadeOut();
		item.eq(index).fadeIn();
	}
})

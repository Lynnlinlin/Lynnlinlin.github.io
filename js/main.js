/*console.log('lalal')在控制台打印一个东西，专门用于调试*/
;$(function()
{
	'use strict';

	var sidebar = $('#sidebar'),//选择侧栏
		mask = $('.mask'),
		backButton = $('.back-to-top'),
		sidebar_trigger = $('#sidebar_trigger');//选择返回菜单

	function showSideBar()
	{
		mask.fadeIn();
		/*sidebar.css('right',0);*/
		sidebar.css('transform', 'translate(0,0)');
	}

	function hideSideBar()
	{
		mask.fadeOut();
		/*sidebar.css('right', -sidebar.width());*/
		sidebar.css('transform', 'translate(' + sidebar.width() +'px'+',0)');
	}

	function backToTop()//监听返回按钮点金时间
	{
		$('html, body').animate({
			scrollTop: 0
		},800)
	}

	sidebar_trigger.on('click',showSideBar)
	mask.on('click',hideSideBar)
	backButton.on('click',backToTop)

	$(window).on('scroll',function()//监听window的scrol事件
	{//如果以滚动的部分高于窗口高度，显示返回按钮，否则隐藏
		if($(window).scrollTop() > $(window).height())
			backButton.fadeIn();
		else
			backButton.fadeOut();
	})

	/*$(window).trigger('scroll'); 触发scroll事件；页面刷新自动加载scroll，让程序自己促发scroll事件*/
})
/*自定义函数，自动加载，相当于(function(){})()*/
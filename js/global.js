$(function() {
	swiper();
});

function swiper() {
	
	function addClassA(i){
		$('.section-'+i).addClass('section-'+i+'-o');
		if($(window).width() < 1024){
			$('.header .logo').hide();
		}
	}
	function removeClassA(i){
		$('.section-'+i).removeClass('section-'+i+'-o');
		if($(window).width() < 1024){
			$('.header .logo').hide();
		}
	}

	var mySwiper = new Swiper('.swiper-parent',{
	    pagination: '.pagination-parent',
	    paginationClickable: true,
	 	mode: 'vertical',
		mousewheelControl: true,
	  	onSlideChangeStart: function(swiper){ 

			if (swiper.activeIndex == 0) {
				removeClassA(2);
				$('.header .logo').show();
			};
			if (swiper.activeIndex == 1) {
				addClassA(2);
				removeClassA(3);
			};
			if (swiper.activeIndex == 2) {
				removeClassA(2);
				addClassA(3);
				removeClassA(4);
			};
			if (swiper.activeIndex == 3) {
				removeClassA(3);
				addClassA(4);
				removeClassA(5);
			};	
			if (swiper.activeIndex == 4) {
				removeClassA(4);
				addClassA(5);
				removeClassA(6);
			};
			if (swiper.activeIndex == 5) {
				removeClassA(5);
				addClassA(6);
				removeClassA(7);
			};	
			if (swiper.activeIndex == 6) {
				removeClassA(6);
				addClassA(7);
			};
	  	}
	});

	// 第一屏
	var swiperNested2 = new Swiper('.swiper-nested-2', {
		pagination: '.pagination-nested-2',
		loop: true,
		grabCursor: true,
		paginationClickable: true
	});
	$('.arrow-left').on('click', function(e) {
		e.preventDefault();
		swiperNested2.swipePrev();
	})
	$('.arrow-right').on('click', function(e) {
		e.preventDefault();
		swiperNested2.swipeNext();
	});
	
	// 第二屏
	if($(window).width() < 1024){
		var swiperNested3 = new Swiper('.swiper-nested-3', {
			pagination: '.pagination-nested-3',
			loop: true,
			grabCursor: true,
			paginationClickable: true,
			resizeReInit : true
		});
	}

	 $('.service').hover(function() {
	 	$(this).addClass('serviceHover');
	 	$(this).removeClass('serviceHover-o');
	 }, function() {
	 	$(this).removeClass('serviceHover');
	 	$(this).addClass('serviceHover-o');
	 });
	


	 // 第三屏
	$('.section-3 .product').hover(function() {
	 	$(this).addClass('productHover');
	}, function() {
	 	$(this).removeClass('productHover');
	});
	if($(window).width() < 1024){
		 var swiperNested4 = new Swiper('.swiper-nested-4', {
			pagination: '.pagination-nested-4',
			loop: true,
			grabCursor: true,
			paginationClickable: true,
			resizeReInit : true
		});	
		$('.section-3 .product').click(function() {
			if(!$(this).hasClass('productHover')){
				$(this).addClass('productHover');
			}else{
				$(this).removeClass('productHover');
			}
		});
	}

	// 第四屏
	if($(window).width() < 1024){
		var swiperNested5 = new Swiper('.swiper-nested-5', {
			pagination: '.pagination-nested-5',
			loop: true,
			grabCursor: true,
			paginationClickable: true,
			resizeReInit : true
		});
	}
	
	// 第五屏
	if($(window).width() < 1024){
		var swiperNested6 = new Swiper('.swiper-nested-6', {
			pagination: '.pagination-nested-6',
			loop: true,
			grabCursor: true,
			paginationClickable: true,
			resizeReInit : true
		});
	}
	// 第七屏
	if($(window).width() < 1024){
		var swiperNested7 = new Swiper('.swiper-nested-7', {
			pagination: '.pagination-nested-7',
			loop: true,
			grabCursor: true,
			paginationClickable: true,
			resizeReInit : true
		});
	}
	
	// 导航
	var $menu = $('#menu');

	$menu.find('span').eq(0).html('首页');
	$menu.find('span').eq(1).html('服务');
	$menu.find('span').eq(2).html('产品');
	$menu.find('span').eq(3).html('公司动态');
	$menu.find('span').eq(4).html('加入我们');
	$menu.find('span').eq(5).html('关于我们');
	$menu.find('span').eq(6).html('联系我们');
	$('.menu').click(function(){
		var menu = $('#menu');
		if(!menu.hasClass('menu-box')){
			menu.addClass('menu-box');
		}else{
			menu.removeClass('menu-box');
		}
		
	});
	
	mySwiper.resizeFix();
};
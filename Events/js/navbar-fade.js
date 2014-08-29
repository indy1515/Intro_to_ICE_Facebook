$(function() {
	$(window).scroll(function(){
		var scrollTop = $(window).scrollTop();
		if(scrollTop != 0)
			$('.navbar-fixed-top').stop().animate({'opacity':'0.3'},400);
		else	
			$('.navbar-fixed-top').stop().animate({'opacity':'1'},400);
	});
	
	$('.navbar-fixed-top .container-fluid').hover(
		function (e) {
			var scrollTop = $(window).scrollTop();
			if(scrollTop != 0){
				$('.navbar-fixed-top').stop().animate({'opacity':'1'},400);
			}
		},
		function (e) {
			var scrollTop = $(window).scrollTop();
			if(scrollTop != 0){
				$('.navbar-fixed-top').stop().animate({'opacity':'0.3'},400);
			}
		}
	);
});
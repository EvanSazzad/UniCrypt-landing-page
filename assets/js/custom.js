$(document).ready(function(){
	$(".back_top").click(function(){
		$("html,body").animate({scrollTop:0},1000);
	});
});

$(document).ready(function(){
	$(window).scroll(function(){
		if ($(document).scrollTop() > 100) {
			$(".back_top").fadeIn(500);
			$("nav").removeClass("open"),
			$(".hamburger-menu").removeClass("open")
		}
		else($(".back_top").fadeOut(500));
	})
})

$(document).ready(function(){
	$(document).click(function(){
		$(".hamburger-menu").click(function(){
			$(".hamburger-menu").toggleClass("open");
			$("nav").toggleClass("open");
		})
	})
})
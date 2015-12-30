$(function (){
	$(document).on("mouseenter", ".progress",function(){
		$(this).find("span").fadeIn();
	});
	$(document).on("mouseleave", ".progress", function(){
		$(this).find("span").fadeOut();
	});
	$(document).on("click", ".profile-menu a", function(){
		if (!$(this).hasClass("active")) {
			$(".profile-menu a").removeClass("active");
			$(this).addClass("active");
		}
	});
});
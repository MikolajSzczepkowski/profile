$(function (){
	$(document).on("click", ".profile-menu a", function(){
		if (!$(this).hasClass("active")) {
			$(".profile-menu a").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(document).on("click", ".radio", function(){
		if (!$(this).hasClass("active")) {
			$(".radio").removeClass("active");
			$(this).addClass("active");
		}
	});
	$(document).on("click", "#likeButton", function(){
		$(this).find("img").attr("src", "images/liked.png")
	});
	$(".player-avatar-box").on("mouseenter", function(){
		$(this).parent().find(".player-box-bar span").css("opacity", "1");
	});
	$(".player-avatar-box").on("mouseleave", function(){
		$(this).parent().find(".player-box-bar span").css("opacity", "0");
	});

	$("nav a").on("click", function(e){
		e.preventDefault();
		var url = this.href;

		$("nav a.active").removeClass("active");
		$(this).addClass("active");

		$.ajax({
			url: url,
			dataType: "html",
			type: "GET",
			success: function(data){
				$(".bottom-main").html($(data).find(".bottom-inner-wrapper")).hide().fadeIn(500);
			}
		});
	});
});
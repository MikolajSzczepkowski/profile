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
		if (!$(this).hasClass("liked")) {
			$(this).find("img").attr("src", "images/liked.png");
			$(this).addClass("liked");
		}
		else{
			$(this).find("img").attr("src", "images/like.png");
			$(this).removeClass("liked");
		}
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
				$("#content-wrapper").html($(data).find("#content")).hide().fadeIn(500);
			}
		});
	});
	$(document).on("click", "a.match-link", function(e){
		e.preventDefault();
		var url = this.href;

		$.ajax({
			url: url,
			dataType: "html",
			type: "GET",
			success: function(data){
				$("#content-wrapper").html($(data).find("#content")).hide().fadeIn(500);
			}
		});
	});
});
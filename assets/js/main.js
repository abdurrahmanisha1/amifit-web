(function ($) {
	"use strict";

	// Side Bar Menu Js
	$(".menu-toogle-btn").on("click", function () {
		$(".mobile-sidebar").addClass("info-opened");
		$(".body-overlay").addClass("opened");
	});

	$(".sidebar-close-btn").on("click", function () {
		$(".mobile-sidebar").removeClass("info-opened");
		$(".body-overlay").removeClass("opened");
	});

	$(".body-overlay").on("click", function () {
		$(".mobile-sidebar").removeClass("info-opened");
		$(".body-overlay").removeClass("opened");
	});


	$(".sidebar__open, .open__schedul").on("click", function () {

		$(".sidebar, .bottom__schedul").addClass("open");
		$(".body-overlay").addClass("body-open");
	});


	$(".sidebar__close-btn, .bottom__schedul-close").on("click", function () {

		$(".sidebar, .bottom__schedul").removeClass("open");
		$(".body-overlay").removeClass("body-open");

	});


	// Data-Background Js
	$("[data-background").each(function () {
		$(this).css("background-image", "url( " + $(this).attr("data-background") + "  )");
	});



	$('.auto__scroll').slick({
		vertical: true,
		verticalSwiping: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 0,
		speed: 9000,
		cssEase: 'linear',
		infinite: true,
		arrows: false,
	});


	/* magnificPopup video view Js */
	$('.round-video, .video-poppup').magnificPopup({
		type: 'iframe'
	});

	// Nice Select Js 
	$('.sidebar__inner-form select, .contact__form-select select').niceSelect();


	//testimonial__slider active
	$('.testimonial__slider').owlCarousel({
		loop: true,
		smartSpeed: 2000,
		nav: true,
		dots: true,
		items: 1,
		margin: 30,
		navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
		autoplay: true,
	});

	$('.workout__slider').owlCarousel({
		loop: true,
		smartSpeed: 800,
		nav: true,
		dots: true,
		items: 1,
		margin: 30,
		navText: ['<i class="fa-solid fa-angle-left"></i>', '<i class="fa-solid fa-angle-right"></i>'],
		autoplay: true,
	});




	// Client Slider Js 
	$('.testimonial-item-area').owlCarousel({
		loop: true,
		autoplay: false,
		autoplayTimeout: 3000,
		smartSpeed: 500,
		items: 1,
		nav: false,
		dots: false,
	});

	$('.calendar').pignoseCalendar();

	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});

	$('.count').counterUp({
		delay: 100,
		time: 1000
	});

	new WOW().init();

	// scrollToTop
	$.scrollUp({
		scrollName: 'scrollUp', // Element ID
		topDistance: '300', // Distance from top before showing element (px)
		topSpeed: 300, // Speed back to top (ms)
		animation: 'fade', // Fade, slide, none
		animationInSpeed: 200, // Animation in speed (ms)
		animationOutSpeed: 200, // Animation out speed (ms)
		scrollText: '<i class="fa-solid fa-arrow-turn-up"></i>', // Text for element
		activeOverlay: false, // Set CSS color to display scrollUp active point, e.g '#00FFFF'
	});

})(jQuery);
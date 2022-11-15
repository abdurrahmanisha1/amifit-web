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


	$('.sidebar-toggle').on("click", function () {
		$(".sidebar").toggleClass("closed");
	});




	// Nice Select Js 
	$('.sidebar__inner-form select, .contact__form-select select').niceSelect();

	// Country Selector Js 
	$(".country_selector").countrySelect({
		defaultCountry: "us"
	});




	$(window).on('scroll', function () {
		var scroll = $(window).scrollTop();
		if (scroll < 245) {
			$(".header-sticky").removeClass("sticky");
		} else {
			$(".header-sticky").addClass("sticky");
		}
	});




})(jQuery);
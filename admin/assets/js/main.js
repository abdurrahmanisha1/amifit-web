(function ($) {
	"use strict";

	$('.sidebar-toggle').on("click", function () {
		$(".sidebar").toggleClass("closed");
	});

	$('.content__box-breadcrumb a').on('click', function (e) {
		e.preventDefault();
	});

	// Pie Chart Js 
	$('.donut, .micro-stat').listtopie({
		startAngle: 270,
		strokeWidth: 4,
		hoverEvent: false,
		hoverAnimate: true,
		drawType: 'round',
		speedDraw: 150,
		textColor: '#000',
		strokeColor: '#ffffff',
		textSize: '0',
		hoverAnimate: true,
		marginCenter: 50,
		fillOpacity: 1,

	});


	// generatePieGraph('myCanvas', {
	// 	values: [15, 50, 20, 85, 30],
	// 	colors: ['#4CAF50', '#00BCD4', '#E91E63', '#FFC107', '#9E9E9E']
	// });


	let myChart = document.getElementById('myChart').getContext('2d');

	// Global Options
	// Chart.defaults.global.defaultFontFamily = 'Lato';
	// Chart.defaults.global.defaultFontSize = 18;
	// Chart.defaults.global.defaultFontColor = '#777';

	let massPopChart = new Chart(myChart, {
		type: 'doughnut', // bar, horizontalBar, pie, line, doughnut, radar, polarArea
		data: {
			labels: ['Boston', 'Worcester', 'Springfield'],
			datasets: [{
				label: 'Population',
				data: [
					64,
					201045,
					153060
				],
				//backgroundColor:'green',
				backgroundColor: [
					'rgba(255, 99, 132, 0.6)',
					'rgba(54, 162, 235, 0.6)',
					'rgba(255, 206, 86, 0.6)',
				],
				borderWidth: 1,
				borderColor: '#777',
				hoverBorderColor: '#000'
			}]
		},
		options: {
			title: {
				display: true,
				text: 'Largest Cities In Massachusetts',
				fontSize: 25
			},
			legend: {
				display: true,
				position: 'right',
				labels: {
					fontColor: '#000'
				}
			},
			layout: {
				padding: {
					left: 50,
					right: 0,
					bottom: 0,
					top: 0
				}
			},
			tooltips: {
				enabled: true
			}
		}
	});








	// Nice Select Js 
	$('.nice-select, .nice-fillter').niceSelect();

	$(".recent__order-list-table tr").after('<tr class="tr-spacer"/>');




})(jQuery);
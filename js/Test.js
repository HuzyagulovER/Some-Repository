"use strict";

$(document).ready( function() {
	$('.menu_burger').click( function(event) {
		$('.menu_burger, .menu_burger__line').toggleClass('active');
	});
});
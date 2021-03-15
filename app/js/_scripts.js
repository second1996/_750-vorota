/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * Fix closing dropdown menu when selecting the text
 *-------------------------------------------------------------------------------------------------------------------------------------------
*/
$('.dropdown-menu').on('click', function (e) {
	e.stopPropagation()
})


/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * Hide Shop Promo string and setup «key -> hide-shop-promo into the sessionStorage
 *-------------------------------------------------------------------------------------------------------------------------------------------
*/
$('.shop-promo .btn-close').on('click', function () {
	$('.shop-promo').hide()
	sessionStorage.setItem('shop-promo', 'hide')
})

// Check if «hide-shop-promo set «true» in sessionStorage...
if( sessionStorage.getItem('shop-promo') == 'hide' ) {
	// ... and then hide this
	$('.shop-promo').hide()
} else {
	// ... or show
	$('.shop-promo').removeClass('d-none')
}


/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * Toggle phone mask in forms
 *-------------------------------------------------------------------------------------------------------------------------------------------
*/
function switch_phone_mask(selector) {
	var switch_phone_mask_checkbox = $(selector).find('input[type="checkbox"]'),
			switch_phone_mask_input = switch_phone_mask_checkbox.parents('.form-group').find('input[type="tel"]');

	if( switch_phone_mask_checkbox.is(':checked') ) {
		switch_phone_mask_input.mask('+7 (999) 999-99-99')
		switch_phone_mask_input.attr('placeholder', '+7 (___) ___ __ __')
	} else {
		switch_phone_mask_input.mask('0#')
		switch_phone_mask_input.attr('placeholder', 'Номер телефона')
	}
}
// Callback
$('.switch-input-mask').each(function(index, element) {
	// Run switch_phone_mask function for each selector on the page
	switch_phone_mask(element)

	// Run switch_phone_mask function when checkbox is changed
	$(element).find('input[type="checkbox"]').on('input checked', function() {
		switch_phone_mask(element)
	})
})


/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * Product card gallery slideshow on hover
 *-------------------------------------------------------------------------------------------------------------------------------------------
*/
if( window.matchMedia('(min-width: 992px)').matches ) {
	$(document).on('mouseenter', '.card-product .card-gallery-item', function() {
		$(this).siblings().removeClass('_active')
		$(this).addClass('_active')
	})
}


/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * Go up button
 *-------------------------------------------------------------------------------------------------------------------------------------------
*/
var go_up_btn = $('#go-up-button')

$(window).on('scroll', function() {
	if ($(window).scrollTop() > 1000) {
		go_up_btn.addClass('_is-shown')
	} else {
		go_up_btn.removeClass('_is-shown')
	}
})

go_up_btn.on('click', function(e) {
	e.preventDefault()
	$('html, body').animate({scrollTop:0}, 1000)
})
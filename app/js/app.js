// Import jQuery module
import $ from 'jquery'
window.jQuery = $
window.$ = $

// Import vendor jQuery plugin (not module)
require('../../node_modules/popper.js/dist/popper.min.js') // Popper lib
require('../../node_modules/bootstrap/js/dist/util.js') // Bootstrap Util lib
require('../../node_modules/bootstrap/js/dist/dropdown.js') // Bootstrap Dropdown
require('../../node_modules/bootstrap/js/dist/tab.js') // Bootstrap Tab
require('../../node_modules/jquery-mask-plugin/dist/jquery.mask.min.js') // jQuery Mask

document.addEventListener('DOMContentLoaded', () => {
	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Import files
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	*/
	require('./_scripts.js')
	require('./_sliders.js')


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Toggle Search results
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	*/
	const searchEl = $('.header-middle-search')
	$('#header-search-field, .header-middle-actions .search').on('click', function() {
		searchEl.addClass('_is-focused')
		searchEl.find('.search-results').addClass('_is-opened')

		$(document).on('click', function(e) {
			if ((!searchEl.is(e.target) && !$('.header-middle-actions .search').is(e.target)) && (searchEl.has(e.target).length === 0 && $('.header-middle-actions .search').has(e.target).length === 0)) {
				$('body').removeClass('lock-scroll')
				searchEl.removeClass('_is-focused')
				searchEl.find('.search-results').removeClass('_is-opened')
			}
		})

		if( window.matchMedia('(max-width: 1239.98px)').matches ) {
			$('body').addClass('lock-scroll')
		}
	})

	$('.header-middle-search .heading .btn-close').on('click', function() {
		searchEl.removeClass('_is-focused')
		searchEl.find('.search-results').removeClass('_is-opened')
	})


	/**
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	 * Mobile menu
	 *-------------------------------------------------------------------------------------------------------------------------------------------
	*/
	function mmenuBackdrop() {
		if (!$('.mmenu-backdrop').length) {
			$('body').append('<div class="mmenu-backdrop fade"></div>')
			$('.mmenu-backdrop').delay(5).queue(function() {
				$(this).addClass('show').dequeue()
			})
		} else {
			$('.mmenu-backdrop').remove()
		}
	}

	// Open menu
	$('.toggle-mmenu-btn').on('click', function() {
		mmenuBackdrop()

		$('body').addClass('lock-scroll')
		$('.mmenu').addClass('_is-active')
	})

	// Close menu
	$('.mmenu .mmenu-heading .btn-close').on('click', function() {
		mmenuBackdrop()

		$('body').removeClass('lock-scroll')
		$('.mmenu').removeClass('_is-active')
	})

	// Toggle Submenu
	$('.mmenu-main-catalog > .btn, .mmenu-main-nav .menu-item > span').on('click', function() {
		$(this).siblings('.submenu').addClass('_is-opened')
	})

	// Close Submenu
	$('.mmenu-main-catalog > .submenu > .submenu-back-btn, .mmenu-main-nav .menu-item > .submenu > .submenu-back-btn').on('click', function() {
		$(this).parent().removeClass('_is-opened')
	})

})
// Import jQuery module
import $ from 'jquery'
window.jQuery = $
window.$ = $

// Import vendor jQuery plugin (not module)
require('../../node_modules/popper.js/dist/popper.min.js') // Popper lib
require('../../node_modules/bootstrap/js/dist/util.js') // Bootstrap Util lib
require('../../node_modules/bootstrap/js/dist/dropdown.js') // Bootstrap Dropdown
require('../../node_modules/jquery-mask-plugin/dist/jquery.mask.min.js') // jQuery Mask

// Another imports
require('./_scripts.js')
require('./_sliders.js')

document.addEventListener('DOMContentLoaded', () => {
	$('#header-search-field').on('click', function() {
		const searchEl = $('.header-middle-search')

		searchEl.addClass('_is-focused')
		searchEl.find('.search-results').addClass('_is-opened')

		$(document).on('click', function(e) {
			if (!searchEl.is(e.target) && searchEl.has(e.target).length === 0) {
				searchEl.removeClass('_is-focused')
				searchEl.find('.search-results').removeClass('_is-opened')
			}
		})
	})
})

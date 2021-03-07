// Import jQuery module
import $ from 'jquery'
window.jQuery = $
window.$ = $

// Import vendor jQuery plugin example (not module)
require('../../node_modules/popper.js/dist/popper.min.js') // Popper lib
require('../../node_modules/bootstrap/js/dist/util.js') // Bootstrap Util lib
require('../../node_modules/bootstrap/js/dist/dropdown.js') // Bootstrap Dropdown

// Another imports
require('./_scripts.js')

document.addEventListener('DOMContentLoaded', () => {
	// JS code...
})

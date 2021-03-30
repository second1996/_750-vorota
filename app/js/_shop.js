import noUiSlider from 'nouislider'

/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * Shop Settings: Toggle Filter sidebar
 *-------------------------------------------------------------------------------------------------------------------------------------------
*/
function filtersBackdrop() {
	if (!$('.mmenu-backdrop').length) {
		$('body').append('<div class="mmenu-backdrop fade"></div>')
		$('.mmenu-backdrop').delay(5).queue(function() {
			$(this).addClass('show').dequeue()
			$(this).on('click', function () {
				filtersBackdrop()
				$('body').removeClass('lock-scroll')
				$('#shop-filters-sidebar').removeClass('_is-active')
			})
		})
	} else {
		$('.mmenu-backdrop').remove()
	}
}

// Open sidebar
$('#toggle-filters-sidebar').on('click', function() {
	filtersBackdrop()

	$('body').addClass('lock-scroll')
	$('#shop-filters-sidebar').addClass('_is-active')
})

// Close sidebar
$('#shop-filters-sidebar .btn-close').on('click', function() {
	filtersBackdrop()

	$('body').removeClass('lock-scroll')
	$('#shop-filters-sidebar').removeClass('_is-active')
})


/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * WIDGET: Filter 'Show all' button
 *-------------------------------------------------------------------------------------------------------------------------------------------
*/
$('.filter-item').each(function (el, index) {
	$(this).find('.filter-more > .filter-more-btn').on('click', function(e) {
		e.preventDefault()
		$(this).remove()
	})
})


/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * WIDGET: Price Filter (noUiSlider)
 *-------------------------------------------------------------------------------------------------------------------------------------------
 */
window.priceFilter = function () {
	document.querySelectorAll('.filter-slider-handle').forEach(slider => {
		let filterMinPrice = parseInt( slider.dataset.slidermin );
		let filterMaxPrice = parseInt( slider.dataset.slidermax );
		let priceFrom      = slider.nextElementSibling.querySelector('.filter-slider-from');
		let priceTo        = slider.nextElementSibling.querySelector('.filter-slider-to');
		let inputMinPrice  = parseInt( priceFrom.value );
		let inputMaxPrice  = parseInt( priceTo.value );

		// Create noUiSlide
		noUiSlider.create(slider, {
			start: [inputMinPrice, inputMaxPrice],
			connect: true,
			range: {
				'min': filterMinPrice,
				'max': filterMaxPrice
			}
		})

		// Change/Update noUiSlide values
		priceFrom.addEventListener('change', priceUpdateValues);
		priceTo.addEventListener('change', priceUpdateValues);

		slider.noUiSlider.on('update', function (values, handle) {
			var value = values[handle];

			// Set «from» value
			if (handle == 0) {
				priceFrom.value = Math.round(value);
			}

			// Set «to» value
			if( handle == 1) {
				priceTo.value = Math.round(value);
			}
		})

		slider.noUiSlider.on('end', function (values, handle) {
			// Trigger «from» input value
			if (handle == 0) {
				$(priceFrom).change()
			}

			// Trigger «to» input value
			if( handle == 1) {
				$(priceTo).change()
			}
		})

		function priceUpdateValues() {
			var priceFromValue, priceToValue;

			// Check if value isn't empty...
			if (priceFrom.value != '') {
				priceFromValue = priceFrom.value;
			}
			if (priceTo.value != '') {
				priceToValue = priceTo.value;
			}

			// ... and change values
			slider.noUiSlider.set([priceFromValue, priceToValue]);
		}

		// Set default values when form is reset
		// document.querySelector('.filter-reset').addEventListener('click', function () {
		// 	slider.noUiSlider.set([parseInt(slider.dataset.slidermin), parseInt(slider.dataset.slidermax)]);
		// 	priceFrom.setAttribute('value', parseInt(slider.dataset.slidermin));
		// 	priceTo.setAttribute('value', parseInt(slider.dataset.slidermax));
		// })
	})
}
priceFilter()

// // Reinit filter
// reinitFilterSlider = function() {
// 	$('.filter-toggle-header._toggled, .widget-header._toggled').next().css('display', 'block');

// 	filterSlider = document.querySelectorAll('.filter-slider-handle');
// 	initFilterSliders()
// }


/**
 *-------------------------------------------------------------------------------------------------------------------------------------------
 * Single Product: Discount Modal (noUiSlider)
 *-------------------------------------------------------------------------------------------------------------------------------------------
 */
const discountSlider = document.querySelector('#m-discount-slider');

if( typeof(discountSlider) != 'undefined' && discountSlider != null ) {
	const discountSliderMin = parseInt( discountSlider.dataset.slidermin );
	const discountSliderMax = parseInt( discountSlider.dataset.slidermax );
	const discountSliderStart = parseInt( discountSlider.dataset.sliderstart );
	const discountSliderInputValue = document.querySelector('.discount-slider-value');

	// Create noUiSlide
	noUiSlider.create(discountSlider, {
		start: discountSliderStart,
		step: 1,
		connect: [true, false],
		range: {
			'min': discountSliderMin,
			'max': discountSliderMax
		}
	})

	// Set default value
	discountSliderInputValue.value = Math.round(discountSlider.noUiSlider.get()) + '%';

	// Set pins
	document.querySelector('.form-group-slider-values > .from').innerHTML = discountSliderMin + '%';
	document.querySelector('.form-group-slider-values > .to').innerHTML = discountSliderMax + '%';

	// Change value on toggle slider
	discountSlider.noUiSlider.on('update', function (value) {
		discountSliderInputValue.value = Math.round(value) + '%';
		discountNewPrice(value);
	})

	// Calculate new price
	function discountNewPrice(value) {
		const productPriceEl = document.querySelector('.s-product .product-info-price .price ins').dataset.finalPrice;
		const productPriceValue = parseInt(productPriceEl);
		const discountNewPriceInput = document.querySelector('.discount-new-price');
		const discountNewPriceValue = productPriceValue * Math.round(value) / 100;

		discountNewPriceInput.value = Math.round(productPriceValue - discountNewPriceValue).toLocaleString('ru') + ' руб.';
	}
}
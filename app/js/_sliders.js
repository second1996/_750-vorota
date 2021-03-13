// Import Swiper slider bundle
import SwiperCore, { Autoplay, Navigation, Pagination, Swiper } from 'swiper/core'
SwiperCore.use([Autoplay, Navigation, Pagination])


// Home page: Heroes main slider
new Swiper('.h-heroes-slider', {
	loop: true,
	autoplay: {
		delay: 3500,
	},
	navigation: {
		prevEl: '.h-heroes-slider-nav .swiper-button-prev',
		nextEl: '.h-heroes-slider-nav .swiper-button-next',
	},
})

// Home page: Heroes product slider
new Swiper('.h-heroes-product-slider', {
	loop: true,
	navigation: {
		prevEl: '.h-heroes-product-slider-nav .swiper-button-prev',
		nextEl: '.h-heroes-product-slider-nav .swiper-button-next',
	},
	pagination: {
		el: '.h-heroes-product-slider-dots .swiper-pagination',
		type: 'bullets',
	},
})

// Products slider for each section
$('.products-slider').each(function (index, element) {
	let id = index;

	$(element).addClass(`products-slider-${id}`)

	new Swiper(`.products-slider-${id} .swiper-container`, {
		slidesPerView: 2,
		spaceBetween: 16,
		navigation: {
			prevEl: `.products-slider-${id} .products-slider-nav .swiper-button-prev`,
			nextEl: `.products-slider-${id} .products-slider-nav .swiper-button-next`,
		},
		pagination: {
			el: `.products-slider-${id} .products-slider-dots .swiper-pagination`,
			type: 'bullets',
		},
		breakpoints: {
			576: {
				slidesPerView: 3,
				spaceBetween: 24,
			},
			768: {
				slidesPerView: 4,
			},
			992: {
				slidesPerView: 5,
			},
			1240: {
				slidesPerView: 6,
			}
		}
	})
})

// Home page: Partners slider
new Swiper('.h-partners-slider .swiper-container', {
	slidesPerView: 3,
	spaceBetween: 16,
	loop: true,
	navigation: {
		prevEl: '.h-partners-slider-nav .swiper-button-prev',
		nextEl: '.h-partners-slider-nav .swiper-button-next',
	},
	pagination: {
		el: '.h-partners-slider-dots .swiper-pagination',
		type: 'bullets',
	},
	breakpoints: {
		576: {
			slidesPerView: 4,
			spaceBetween: 24,
		},
		768: {
			slidesPerView: 5,
		},
		992: {
			slidesPerView: 6,
		},
		1240: {
			slidesPerView: 7,
		},
		1468: {
			slidesPerView: 9,
		}
	}
})

// Home page: Testimonials slider
new Swiper('.h-testimonials-slider .swiper-container', {
	slidesPerView: 1,
	spaceBetween: 16,
	autoHeight: true,
	navigation: {
		prevEl: '.h-testimonials-slider-nav .swiper-button-prev',
		nextEl: '.h-testimonials-slider-nav .swiper-button-next',
	},
	pagination: {
		el: '.h-testimonials-slider-dots .swiper-pagination',
		type: 'bullets',
	},
	breakpoints: {
		992: {
			slidesPerView: 2,
			spaceBetween: 24,
			autoHeight: false,
		}
	}
})
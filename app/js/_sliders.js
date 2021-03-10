// Import Swiper slider bundle
import SwiperCore, { Autoplay, Navigation, Pagination, Swiper } from 'swiper/core'
SwiperCore.use([Autoplay, Navigation, Pagination])


// Home page: Heroes main slider
new Swiper('.h-heroes-slider', {
	loop: true,
	// autoplay: {
	// 	delay: 5000,
	// },
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
		slidesPerView: 6,
		spaceBetween: 24,
		navigation: {
			prevEl: `.products-slider-${id} .products-slider-nav .swiper-button-prev`,
			nextEl: `.products-slider-${id} .products-slider-nav .swiper-button-next`,
		},
		pagination: {
			el: `.products-slider-${id} .products-slider-dots .swiper-pagination`,
			type: 'bullets',
		},
	})
})

// Home page: Partners slider
new Swiper('.h-partners-slider .swiper-container', {
	slidesPerView: 9,
	spaceBetween: 24,
	loop: true,
	navigation: {
		prevEl: '.h-partners-slider-nav .swiper-button-prev',
		nextEl: '.h-partners-slider-nav .swiper-button-next',
	},
	pagination: {
		el: '.h-partners-slider-dots .swiper-pagination',
		type: 'bullets',
	},
})

// Home page: Testimonials slider
new Swiper('.h-testimonials-slider .swiper-container', {
	slidesPerView: 2,
	spaceBetween: 24,
	navigation: {
		prevEl: '.h-testimonials-slider-nav .swiper-button-prev',
		nextEl: '.h-testimonials-slider-nav .swiper-button-next',
	},
	pagination: {
		el: '.h-testimonials-slider-dots .swiper-pagination',
		type: 'bullets',
	},
})
// Import Swiper slider bundle
import SwiperCore, { Navigation, Pagination, Swiper } from 'swiper/core'
SwiperCore.use([Navigation, Pagination])


// Home page: Heroes main slider
const homeMainSlider = new Swiper('.h-heroes-slider', {
	loop: true,
	autoplay: {
		delay: 10000,
	},
	navigation: {
		prevEl: '.h-heroes-slider-nav .swiper-button-prev',
		nextEl: '.h-heroes-slider-nav .swiper-button-next',
	},
})

// Home page: Heroes product slider
const homeProductSlider = new Swiper('.h-heroes-product-slider', {
	loop: true,
	autoplay: {
		delay: 10000,
	},
	navigation: {
		prevEl: '.h-heroes-product-slider-nav .swiper-button-prev',
		nextEl: '.h-heroes-product-slider-nav .swiper-button-next',
	},
	pagination: {
		el: '.h-heroes-product-slider-dots .swiper-pagination',
		type: 'bullets',
	},
})
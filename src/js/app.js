import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// core version + navigation, pagination modules:
import Swiper from 'swiper/bundle';
// import Swiper and modules styles

// init Swiper:
const swiper = new Swiper('.image-slider', {
// configure Swiper to use modules
    loop: true,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
});
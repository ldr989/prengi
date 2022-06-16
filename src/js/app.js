import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// core version + navigation, pagination modules:
import Swiper, { Navigation, Pagination } from 'swiper';
// import Swiper and modules styles

// init Swiper:
const swiper = new Swiper('.swiper', {
// configure Swiper to use modules
modules: [Navigation, Pagination],
});
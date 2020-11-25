import { Slider } from '../../slider/scripts/slider.js';

new Slider({
    id: '#testimonials-slider',
    disabledStyleClass: 'testimonial--disabled',
    endless: false,
    margin: 30,
    resPoint: 1090,
    transition: 2000
});
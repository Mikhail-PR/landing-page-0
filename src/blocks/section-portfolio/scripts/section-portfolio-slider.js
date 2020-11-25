import { Slider } from '../../slider/scripts/slider.js';

new Slider({
    id: '#portfolio-slider',
    disabledStyleClass: 'portfolio-card--disabled',
    endless: true,
    margin: 60,
    transition: 2000
});
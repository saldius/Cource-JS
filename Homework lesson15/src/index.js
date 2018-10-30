window.addEventListener('DOMContentLoaded', function(){

'use strict';
	
	let timer = require('./parts/timer.js'),
		form = require('./parts/form.js'),
		modal = require('./parts/modal.js'),
		slider = require('./parts/slider.js'),
		calc = require('./parts/calc.js'),
		tabs = require('./parts/tabs.js');

tabs();
calc();
timer();
form();
modal();
slider();

});
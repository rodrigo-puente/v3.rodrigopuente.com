const background1 = '#4ABDAC';
const background2 = '#FC4A1A';
const background3 = '#F7B733';

const body = document.querySelector('body');
const portfolioContent = document.querySelector('#portfolio-content');
const wcidContent = document.querySelector('#what-can-i-do-content');
const otherWorkContent = document.querySelector('#other-work-content');

inView.threshold(0.1);

inView('#portfolio')
  .on('enter', () => {
  	body.style.background = background1;
  });

inView('#what-can-i-do')
  .on('enter', () => {
  	body.style.background = background2;
  });

inView('#other-work')
  .on('enter', () => {
  	body.style.background = background3;
  });

$(function() {
	
	var $grid = $('#portfolio-grid').imagesLoaded( function() {
	  $grid.masonry({
	  	itemSelector: '.portfolio-item'
	  });
	});

  $('.img-container').perfectScrollbar();

});
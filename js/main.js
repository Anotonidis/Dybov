$(document).ready(function() {
	$('.header__burger').click(function() {
		$('.header__burger, .header__list').toggleClass('active');
      $('body').toggleClass('lock');
	});
});


// $(window).load(function(){
// 	$('.products__slider, .stand__slider').slick({
//    infinite: true,
//    slidesToShow: 1,
//    dots: true,
//    prevArrow: '<div class="prev"></div>',
// 	nextArrow: '<div class="next"></div>',
// 	})
//  });


$(window).on('load', function(){
	$('.products__slider, .stand__slider').slick({
   infinite: true,
   slidesToShow: 1,
   dots: true,
   prevArrow: '<div class="prev"></div>',
	nextArrow: '<div class="next"></div>',
	})
});




const tables = document.getElementById('tables');
const mirrors = document.getElementById('mirrors');
const stands = document.getElementById('stands');
const tablesBlock = document.getElementById('catalog__tables');
const mirrorsBlock = document.getElementById('catalog__mirrors');
const standsBlock = document.getElementById('catalog__stands');

// tables.classList.add('activity');
// mirrorsBlock.classList.add('hidden');
// 	standsBlock.classList.add('hidden');



	if (window.screen.width < 768) {
		tables.classList.add('activity');
		mirrorsBlock.classList.add('hidden');
		standsBlock.classList.add('hidden');
	}


tables.addEventListener('click', function(){
	tables.classList.add('activity');
	mirrors.classList.remove('activity');
	stands.classList.remove('activity')
	mirrorsBlock.classList.add('hidden');
	standsBlock.classList.add('hidden');
	tablesBlock.classList.remove('hidden');
});

mirrors.addEventListener('click', function(){
	mirrors.classList.add('activity');
	tables.classList.remove('activity');
	stands.classList.remove('activity');
	mirrorsBlock.classList.remove('hidden');
	tablesBlock.classList.add('hidden');
	standsBlock.classList.add('hidden');	
});

stands.addEventListener('click', function(){
	stands.classList.add('activity')
	mirrors.classList.remove('activity');
	tables.classList.remove('activity');
	mirrorsBlock.classList.add('hidden');
	tablesBlock.classList.add('hidden');
	standsBlock.classList.remove('hidden');	
});







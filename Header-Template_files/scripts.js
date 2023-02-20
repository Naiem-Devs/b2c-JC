jQuery(document).ready(function($){

	// STAT ICONS

	/*
	$('.CARDS .number').each(function(){
		var text = $(this).text();
		if(text.charAt(0) == '+') $(this).addClass('alt-positive').text(text.substring(1));
		if(text.charAt(0) == '-') $(this).addClass('alt-negative').text(text.substring(1));
	});
	*/



	// FLICKITY

	/*if($('.testimonials .testimonial').length > 1){*/
		$('.testimonials').flickity({
			cellAlign: 'left',
			cellSelector: '.testimonial',
			prevNextButtons: false
		});
//	}

	/* if($('.logos .logo-image').length > 1){ */
		$('.logos').flickity({
			cellAlign: 'left',
			cellSelector: '.logo-image',
			prevNextButtons: false,
			wrapAround: true
		});
	/* }*/


    $('.logos-home').flickity({
			cellAlign: 'left',
			groupCells: true,
			autoPlay: 6000,
			cellSelector: '.logo-image',
			prevNextButtons: false,
			wrapAround: true
		});




	// DISABLE SCROLL

	function disableScroll() {
		var scrollDiv = document.createElement("div");
		scrollDiv.className = "b-scrollbar";
		document.body.appendChild(scrollDiv);
		var scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
		document.body.removeChild(scrollDiv);

		$('body').css({'overflow': 'hidden'});
		$('.b-page').css({'border-right-width': scrollbarWidth + 'px'});
		$('.b-page-head, .b-nav, .b-modal').css({'right': scrollbarWidth + 'px'});
	}



	// ENABLE SCROLL

	function enableScroll() {
		$('body').removeAttr('style');
		$('.b-page').removeAttr('style');
		$('.b-page-head, .b-nav, .b-modal').removeAttr('style');
	}



	// STOP PAGE SCROLL WHEN NAV OPEN

	$('#toggle-nav').change(function() {
		if ($('#toggle-nav').prop('checked')) {
			if ($(document).scrollTop() < $('.b-page-head').height()) $(document).scrollTop(0);
			$('.NAV .frame').scrollTop(0);
			disableScroll();
		} else {
			setTimeout(function() {
				enableScroll();
			}, 250);
		}
	});



	// SMOOTH SCROLL ON ACHORS

	$('a[href*="#"]').on('click', function(event) {
		if (
			location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
			location.hostname == this.hostname &&
			$(this.hash).length
		) {
			event.preventDefault();

			if ($(this).parents('.b-nav')) {
				$('#toggle-nav').prop('checked', false);
				enableScroll();
			}

			$('html, body').animate({ scrollTop: $(this.hash).offset().top }, 500, function() {
				$('.b-page').removeAttr('data-scroll');
			});
		}
	});



	// STICKY SCROLL CHECK

	var previousScrollPosition = $(document).scrollTop();
	var page = $('.b-page');
	var pageHead = $('.b-page-head');

	$(document).scroll(function() {
		var currentScrollPosition = $(document).scrollTop();

		if (currentScrollPosition > pageHead.height()) {
			page.attr('data-scroll', (currentScrollPosition < previousScrollPosition ? 'up' : 'down'));
		}

		if (currentScrollPosition < 1) {
			page.removeAttr('data-scroll');
		}

		previousScrollPosition = currentScrollPosition;
	});

});

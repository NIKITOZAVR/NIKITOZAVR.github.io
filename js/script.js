$(document).ready(function(){



  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 900);
  });



  $("#scroll_button_block").on("click","a", function (event) {
      event.preventDefault();
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });



  $("a[href='#scroll_top']").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
  });





	$('div.tabs__caption').on('click', 'div:not(.active)', function() {
		$(this)
			.addClass('active').siblings().removeClass('active')
			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
	});

  $('.hamburger').on('click', function() {
		$('.scroll_top_block').toggleClass('active');
	});


  $('.map_link').on('click', function(e) {
    e.preventDefault();
		$('.contact_text_block').toggleClass('contact_text_block--innactive');
		$('.contact_block iframe').toggleClass('active');
	});





  $(window).scroll(function(){
		if ( $(document).scrollTop() > 500 ) {
			$('.scroll_top_block').addClass('show');
		} else {
			$('.scroll_top_block').removeClass('show');
		}
	});



});

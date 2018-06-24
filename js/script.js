$(function(){
  $(".remodal__phoneform").inputmask("+38(999)999-99-99", {
		"clearIncomplete": true
	});


  // $('.bannerblock__header').click(function() {
  //
  //     $(this).siblings('.bannerblock__text').slideToggle(500)
  //         .parent().toggleClass('active')
  //         .siblings().removeClass('active')
  //         .children('.bannerblock__text').slideUp(500);
  // });

  $('.menu__link').click(function() {
      $menuDropdown = $(".menu__dropdown");
      $(this).toggleClass("menu__linkactive");

      // $menuDropdown.slideDown(500);

      if ($(this).hasClass("menu__link--company") ) {
        $menuDropwown.slideUp(500);
        $(".menu__dropdown--company").slideDown(500);
      }
      if ($(this).hasClass("menu__link--contacts") ) {
        $menuDropwown.slideUp(500);
        $(".menu__dropdown--contacts").slideDown(500);
      }
      if ($(this).hasClass("menu__link--pay") ) {
        $menuDropwown.slideUp(500);
        $(".menu__dropdown--pay").slideDown(500);
      }
      if ($(this).hasClass("menu__link--delivery") ) {
        $menuDropwown.slideUp(500);
        $(".menu__dropdown--delivery").slideDown(500);
      }
      if ($(this).hasClass("menu__link--sale") ) {
        $menuDropwown.slideUp(500);
        $(".menu__dropdown--sale").slideDown(500);
      }
      if ($(this).hasClass("menu__link--council") ) {
        $menuDropwown.slideUp(500);
        $(".menu__dropdown--council").slideDown(500);
      }
      if ($(this).hasClass("menu__link--howto") ) {
        $menuDropwown.slideUp(500);
        $(".menu__dropdown--howto").slideDown(500);
      }
  });

  //
  //
  // $(".menu__link--company").click(function(e){
  //         e.preventDefault();
  //         $(".menu__dropdown--company").slideToggle("slow");
  //         $(this).toggleClass("menu__linkactive");
  // });
  // $(".menu__link--contacts").click(function(e){
  //         e.preventDefault();
  //         $(".menu__dropdown--contacts").slideToggle("slow");
  //         $(this).toggleClass("menu__linkactive");
  // });
  // $(".menu__link--pay").click(function(e){
  //         e.preventDefault();
  //         $(".menu__dropdown--pay").slideToggle("slow");
  //         $(this).toggleClass("menu__linkactive");
  // });
  // $(".menu__link--delivery").click(function(e){
  //         e.preventDefault();
  //         $(".menu__dropdown--delivery").slideToggle("slow");
  //         $(this).toggleClass("menu__linkactive");
  // });
  // $(".menu__link--sale").click(function(e){
  //         e.preventDefault();
  //         $(".menu__dropdown--sale").slideToggle("slow");
  //         $(this).toggleClass("menu__linkactive");
  // });
  // $(".menu__link--council").click(function(e){
  //         e.preventDefault();
  //         $(".menu__dropdown--council").slideToggle("slow");
  //         $(this).toggleClass("menu__linkactive");
  // });
  // $(".menu__link--howto").click(function(e){
  //         e.preventDefault();
  //         $(".menu__dropdown--howto").slideToggle("slow");
  //         $(this).toggleClass("menu__linkactive");
  // });
  //


	$('.jcarousel--dog').jcarousel({
			// Configuration goes here
	});

	$('.jcarousel-prev--dog').click(function() {
		$('.jcarousel--dog').jcarousel('scroll', '-=1');
	});

	$('.jcarousel-next--dog').click(function() {
		$('.jcarousel--dog').jcarousel('scroll', '+=1');
	});



	$('.jcarousel--cat').jcarousel({
			// Configuration goes here
	});

	$('.jcarousel-prev--cat').click(function() {
		$('.jcarousel--cat').jcarousel('scroll', '-=1');
	});

	$('.jcarousel-next--cat').click(function() {
		$('.jcarousel--cat').jcarousel('scroll', '+=1');
	});



	$('.jcarousel--hamster').jcarousel({
			// Configuration goes here
	});

	$('.jcarousel-prev--hamster').click(function() {
		$('.jcarousel--hamster').jcarousel('scroll', '-=1');
	});

	$('.jcarousel-next--hamster').click(function() {
		$('.jcarousel--hamster').jcarousel('scroll', '+=1');
	});





//	$('.jcarousel').jcarousel({
//		// Configuration goes here
//	});
//
//	$('.jcarousel-prev--cat').click(function() {
//		$('.jcarousel--cat').jcarousel('scroll', '-=1');
//	});
//
//	$('.jcarousel-next--cat').click(function() {
//		$('.jcarousel--cat').jcarousel('scroll', '+=1');
//	});



//	$('.jcarousel--cat').jcarousel({
//		// Configuration goes here
//	});
//
//	$('.jcarousel-prev--cat').click(function() {
//		$('.jcarousel--cat').jcarousel('scroll', '-=1');
//	});
//
//	$('.jcarousel-next--cat').click(function() {
//		$('.jcarousel--cat').jcarousel('scroll', '+=1');
//	});





  // var div = $('.wrapper')[0];
  // var getDivStyle = getComputedStyle(div).width;
  // console.log(getDivStyle);
  // $( "div" ).hover(
  //   function() {
  //     $( this ).animate({width: 550}, 150);
  //   }, function() {
  //     $( this ).animate({width: parseInt(getDivStyle)}, 150);
  //
  //   }
  // );



});

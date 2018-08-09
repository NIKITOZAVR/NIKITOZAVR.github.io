$(function(){
  $(".remodal__phoneform").inputmask("+38(999)999-99-99", {
		"clearIncomplete": true
	});




  $('#scrollup img').mouseover( function(){
		$( this ).animate({opacity: 0.65},100);
	}).mouseout( function(){
		$( this ).animate({opacity: 1},100);
	}).click( function(){
		window.scroll(0 ,0);
		return false;
	});

	$(window).scroll(function(){
		if ( $(document).scrollTop() > 0 ) {
			$('#scrollup').fadeIn('fast');
		} else {
			$('#scrollup').fadeOut('fast');
		}
	});


  var menuLinkCompany = $(".menu__link--company");
  var menuDropDOwnCompany = $(".menu__dropdown--company");
  menuLinkCompany.click(function(e){
          e.preventDefault();
          menuDropDOwnCompany.slideToggle("slow");
          $(this).toggleClass("menu__linkactive");
  });

  var menuLinkContacts = $(".menu__link--contacts");
  var menuDropDOwnContacts = $(".menu__dropdown--contacts");
  menuLinkContacts.click(function(e){
          e.preventDefault();
          menuDropDOwnContacts.slideToggle("slow");
          $(this).toggleClass("menu__linkactive");
  });

  var menuLinkPay = $(".menu__link--pay");
  var menuDropDOwnPay = $(".menu__dropdown--pay");
  menuLinkPay.click(function(e){
          e.preventDefault();
          menuDropDOwnPay.slideToggle("slow");
          $(this).toggleClass("menu__linkactive");
  });

  var menuLinkDelivery = $(".menu__link--delivery");
  var menuDropDOwnDelivery = $(".menu__dropdown--delivery");
  menuLinkDelivery.click(function(e){
          e.preventDefault();
          menuDropDOwnDelivery.slideToggle("slow");
          $(this).toggleClass("menu__linkactive");
  });

  var menuLinkSale = $(".menu__link--sale");
  var menuDropDOwnSale = $(".menu__dropdown--sale");
  menuLinkSale.click(function(e){
          e.preventDefault();
          menuDropDOwnSale.slideToggle("slow");
          $(this).toggleClass("menu__linkactive");
  });

  var menuLinkCouncil = $(".menu__link--council");
  var menuDropDOwnCoucil = $(".menu__dropdown--council");
  menuLinkCouncil.click(function(e){
          e.preventDefault();
          menuDropDOwnCoucil.slideToggle("slow");
          $(this).toggleClass("menu__linkactive");
  });

  var menuLinkHowto = $(".menu__link--howto");
  var menuDropDOwnHowto = $(".menu__dropdown--howto");
  menuLinkHowto.click(function(e){
          e.preventDefault();
          menuDropDOwnHowto.slideToggle("slow");
          $(this).toggleClass("menu__linkactive");
  });



	$('.jcarousel--dog').jcarousel({
	});

	$('.jcarousel-prev--dog').click(function() {
		$('.jcarousel--dog').jcarousel('scroll', '-=1');
	});

	$('.jcarousel-next--dog').click(function() {
		$('.jcarousel--dog').jcarousel('scroll', '+=1');
	});



	$('.jcarousel--cat').jcarousel({
	});

	$('.jcarousel-prev--cat').click(function() {
		$('.jcarousel--cat').jcarousel('scroll', '-=1');
	});

	$('.jcarousel-next--cat').click(function() {
		$('.jcarousel--cat').jcarousel('scroll', '+=1');
	});



	$('.jcarousel--hamster').jcarousel({
	});

	$('.jcarousel-prev--hamster').click(function() {
		$('.jcarousel--hamster').jcarousel('scroll', '-=1');
	});

	$('.jcarousel-next--hamster').click(function() {
		$('.jcarousel--hamster').jcarousel('scroll', '+=1');
	});






  $(window).scroll(function(){
      $('.animationleft').each(function(){ // .mov это класс данного елемента. Можно задать разные класы и накопировать несколько скриптов, чтобы для всех была разная анимация.
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) { //+200 значит за 200 пикселей начней действовать.
          $(this).addClass('animated bounceInLeft');
        }
      });
  });
  $(window).scroll(function(){
      $('.animationdown').each(function(){ // .mov это класс данного елемента. Можно задать разные класы и накопировать несколько скриптов, чтобы для всех была разная анимация.
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) { //+200 значит за 200 пикселей начней действовать.
          $(this).addClass('animated bounceInDown');
        }
      });
  });
  $(window).scroll(function(){
      $('.animationdown, .carouselwrapper__foranimal').each(function(){ // .mov это класс данного елемента. Можно задать разные класы и накопировать несколько скриптов, чтобы для всех была разная анимация.
        var imagePos = $(this).offset().top;
        var topOfWindow = $(window).scrollTop();
        if (imagePos < topOfWindow+500) { //+200 значит за 200 пикселей начней действовать.
          $(this).addClass('animated bounceInDown');
        }
      });
  });

// var div = $('.wrapper')[0];
// var getDivStyle = getComputedStyle(div).width;
// console.log(getDivStyle);

// $( ".menu__link--company" ).hover(
//   function() {
//     $('.menu__dropdown--company').toggleClass('active');
//   }, function() {
//     $('.menu__dropdown--company').toggleClass('active');
//   }
// );
//
//
// $( ".menu__link--contacts" ).hover(
//   function() {
//     $('.menu__dropdown--contacts').toggleClass('active');
//   }, function() {
//     $('.menu__dropdown--contacts').toggleClass('active');
//   }
// );
//
});

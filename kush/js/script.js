$(function(){


  $('#hamburger')[0].onclick = function () {
    // $('.wrapper').toggleClass('blur');
    $('.menu').toggleClass('menu--active');
    $('.we-offer').toggleClass('active');
  }


  $(".list_of_sevices li:nth-child(1) a, .design_images_block img:nth-child(1)").hover(
  function() {
    $(".list_of_sevices li:nth-child(2), .list_of_sevices li:nth-child(3), .list_of_sevices li:nth-child(4)").toggleClass("desing_innactive_li");
    $(".design_images_block img:nth-child(2), .design_images_block img:nth-child(3), .design_images_block img:nth-child(4)").toggleClass("desing_inactive_img");
  }, function() {
    $(".list_of_sevices li:nth-child(2), .list_of_sevices li:nth-child(3), .list_of_sevices li:nth-child(4)").toggleClass("desing_innactive_li");
    $(".design_images_block img:nth-child(2), .design_images_block img:nth-child(3), .design_images_block img:nth-child(4)").toggleClass("desing_inactive_img");
  });


  $(".list_of_sevices li:nth-child(2) a, .design_images_block img:nth-child(3)").hover(
  function() {
    $(".list_of_sevices li:nth-child(1), .list_of_sevices li:nth-child(3), .list_of_sevices li:nth-child(4)").toggleClass("desing_innactive_li");
    $(".design_images_block img:nth-child(1), .design_images_block img:nth-child(2), .design_images_block img:nth-child(4)").toggleClass("desing_inactive_img");
  }, function() {
    $(".list_of_sevices li:nth-child(1), .list_of_sevices li:nth-child(3), .list_of_sevices li:nth-child(4)").toggleClass("desing_innactive_li");
    $(".design_images_block img:nth-child(1), .design_images_block img:nth-child(2), .design_images_block img:nth-child(4)").toggleClass("desing_inactive_img");
  });


  $(".list_of_sevices li:nth-child(3) a, .design_images_block img:nth-child(4)").hover(
  function() {
    $(".list_of_sevices li:nth-child(1), .list_of_sevices li:nth-child(2), .list_of_sevices li:nth-child(4)").toggleClass("desing_innactive_li");
    $(".design_images_block img:nth-child(1), .design_images_block img:nth-child(2), .design_images_block img:nth-child(3)").toggleClass("desing_inactive_img");
  }, function() {
    $(".list_of_sevices li:nth-child(1), .list_of_sevices li:nth-child(2), .list_of_sevices li:nth-child(4)").toggleClass("desing_innactive_li");
    $(".design_images_block img:nth-child(1), .design_images_block img:nth-child(2), .design_images_block img:nth-child(3)").toggleClass("desing_inactive_img");
  });


  $(".list_of_sevices li:nth-child(4) a, .design_images_block img:nth-child(2)").hover(
  function() {
    $(".list_of_sevices li:nth-child(1), .list_of_sevices li:nth-child(2), .list_of_sevices li:nth-child(3)").toggleClass("desing_innactive_li");
    $(".design_images_block img:nth-child(1), .design_images_block img:nth-child(3), .design_images_block img:nth-child(4)").toggleClass("desing_inactive_img");
  }, function() {
    $(".list_of_sevices li:nth-child(1), .list_of_sevices li:nth-child(2), .list_of_sevices li:nth-child(3)").toggleClass("desing_innactive_li");
    $(".design_images_block img:nth-child(1), .design_images_block img:nth-child(3), .design_images_block img:nth-child(4)").toggleClass("desing_inactive_img");
  });




});

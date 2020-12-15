//back to top
$(document).ready(function(){
  $(window).scroll(function(){
    var pos = $('html,body').scrollTop();
    if(pos>500){
      $('.backToTop').attr('style','visibility:visible; bottom: 5%;')
    }
    else{
      $('.backToTop').attr('style','visibility:hidden;')
    }
  });
  $('.backToTop').click(function() {
      $('html,body').animate({scrollTop: 0},1000);
   });
});

//banner slider
$(document).ready(function(){
  $('.banner-slide').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '.prevBanner',
    nextArrow: '.nextBanner',
  });
});

//banner title
$(document).ready(function(){
  $('.prevBanner').click(function(){
    // $('.banner-word').addClass('slide-appear');
  });
  $('.nextBanner').click(function(){
    // $('.banner-word').css('animation-name','APPEAR');
  });
});


//dining-slide
$(document).ready(function(){
  $('.dining-slide').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    prevArrow: '.prevBanner',
    nextArrow: '.nextBanner',
  });
});

//stats
$(document).ready(function(){
  $('.number').counterUp({
    'time': 2000,
  });
});
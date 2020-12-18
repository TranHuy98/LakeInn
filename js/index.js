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

// resMenu
$(document).ready(function(){
  $('#resMenuLogo').click(function(){
    $('.res-header').css('display','block');
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
    prevArrow: '#prevBanner',
    nextArrow: '#nextBanner',
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


// review slide
$(document).ready(function(){
  $('.review-slide').slick({
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: false,
    dots: true,
    slideToShow: 1,
    slideToScroll: 1,
  });
});

//read policy
$(function(){
  $('#check-policy').click(function(){
    if ($(this).is(':checked')){
      $('.condition-policy').css('opacity','1');
      $('.condition-policy').css('pointer-events','all');
      $('.condition-policy').css('cursor','pointer');
    }
    else{
      $('.condition-policy').css('opacity','0.7');
      $('.condition-policy').css('pointer-events','none');
      $('.condition-policy').css('cursor','default');
    }
  });
});

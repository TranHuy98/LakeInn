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

//header scroll fixed
$(document).ready(function(){
  $(window).scroll(function(){
    var pos = $('html,body').scrollTop();
    if(pos>150){
      $('.header').addClass('fixed-header');
    }
    else{
      $('.header').removeClass('fixed-header');
    }
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
    autoplaySpeed: 5000,
    speed: 5000,
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




// resheader button animation
// header button animation
// $(document).ready(function(){
//   $('#box1').click(function(){
//     $('#box3').css('display','none');
//     $('#box1').css('display','none');
//     $('#box2').css('display','block');
//     $('.hidden-drop-menu').slideUp(500);
//   });
// });
// $(document).ready(function(){
//   $('#box2').click(function(){
//     $('#box3').css('display','none');
//     $('#box2').css('display','none'); 
//     $('#box1').css('display','block');
//     $('.hidden-drop-menu').slideDown(500);
//   });
// });
// $(document).ready(function(){
//   $('#box3').click(function(){
//     $('#box3').css('display','none');
//     $('#box2').css('display','none'); 
//     $('#box1').css('display','block');
//     $('.hidden-drop-menu').slideDown(500);
//   });
// });
$(document).ready(function(){
  $('#resMenuLogo').click(function(){
    $('.resHeader').slideToggle(500);
  });
});
//grand child menu
$(document).ready(function(){
  $('.pre-hid-child').click(function(){
    $(this).parent().find('.grandchild-menu').slideToggle(500);
  });
});

$(document).ready(function(){
  $('.pre-hid-child').click(function(){
    $(this).parent().find('.grand-child-menu').slideToggle(500);
    $(this).parent().find('span').toggleClass('button-rotate');
  });
});

//toggle each item of res menu
$(document).ready(function(){
  $('.pre-hid').click(function(){
    $('.each').slideUp(300);
    $('.pre-hid').find('i').removeClass('fa fa-angle-down').addClass('fa fa-angle-up');
    if($(this).parent().find('.child-menu').css('display') == 'none'){
      $(this).parent().find('.child-menu').slideDown(300);
      $(this).parent().find('i').removeClass('fa fa-angle-down').addClass('fa fa-angle-up');
    }
    else{
      $(this).parent().find('.child-menu').slideUp(300);
      $(this).parent().find('i').removeClass('fa fa-angle-up').addClass('fa fa-angle-down');
    }
  });
});



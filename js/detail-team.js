// image zoom
$(document).ready(function(){
	$('.member-detail .member-img').mouseenter(function(){
		$(this).find('.zoom-layer').css('animation-name','layerShow');
		$(this).find('.zoom-btn').css('animation-name','btnShowUp');
	})
	$('.member-detail .member-img').mouseleave(function(){
		$(this).find('.zoom-layer').css('animation-name','layerHide');
		$(this).find('.zoom-btn').css('animation-name','btnHideDown');
	})
});


// skill count up
$(document).ready(function(){
  $('.number-count').counterUp({
    time: 2000,
  });
});


//image popup
$(document).ready(function(){
	$('.member-img .zoom-btn').click(function(){
		$('.member-img .img-popup').css('display','block');
	});
	$('.img-popup .close-popup').click(function(){
		$('.member-img .img-popup').css('display','none');
	});
});

// close image popup
$(document).ready(function(){
  window.addEventListener('mouseup',function(event){
    if(event.target != $('.img-box') && event.target.parentNode != $('.img-box')){
             $('.img-popup').css('display','none');
    	}
  });
});
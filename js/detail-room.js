// zoom layer on image
$(document).ready(function(){
	$('.left .room-img').mouseenter(function(){
		$(this).find('.zoom-layer').css('animation-name','layerShow');
		$(this).find('.zoom-btn').css('animation-name','btnShowUp');
	})
	$('.left .room-img').mouseleave(function(){
		$(this).find('.zoom-layer').css('animation-name','layerHide');
		$(this).find('.zoom-btn').css('animation-name','btnHideDown');
	})
});


// calendar
$(document).ready(function(){
	$('.calendar-init').datepicker({
		todayHightlight:true,
		language:"vi"
	});
});


//image popup
$(document).ready(function(){
	$('.room-img .zoom-btn').click(function(){
		$('.room-img .img-popup').css('display','block');
	});
	$('.img-popup .close-popup').click(function(){
		$('.room-img .img-popup').css('display','none');
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
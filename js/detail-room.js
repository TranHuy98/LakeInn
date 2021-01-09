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
	$('#calendar-init').datepicker({
		todayHighlight: true,
	});
});

//image popup - show and hide
$(document).ready(function(){
	$('.zoom-layer .zoom-btn').click(function(){
		var $bgImg = $(this).parent().parent().css('background-image');
		$('.img-box').css('background-image',$bgImg);
		$('.img-popup').css('display','block');
	});
	$('.img-popup .close-popup').click(function(){
		$('.room-img .img-popup').css('display','none');
	});
});

// close image popup when not click on it
$(document).mouseup(function(e) 
{
    // if the target of the click isn't the container nor a descendant of the container
    if (!$('.img-box').is(e.target) && $('.img-box').has(e.target).length === 0){
        $('.img-popup').hide();
    }
});
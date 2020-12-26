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
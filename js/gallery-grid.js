// layer
$(document).ready(function(){
	$('.gallery-grid .item').mouseenter(function(){
		$(this).find('.info-layer').css('animation-name','infoShow');
	});
	$('.gallery-grid .item').mouseleave(function(){
		$(this).find('.info-layer').css('animation-name','infoHide');
	});
});


// button
$(document).ready(function(){
	$('.gallery-grid .item').mouseenter(function(){
		$(this).find('.layer-item').css('animation-name','buttonShow');
	});
	$('.gallery-grid .item').mouseleave(function(){
		$(this).find('.layer-item').css('animation-name','buttonHide');
	});
});
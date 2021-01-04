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


//image popup
$(document).ready(function(){
	$('.info-layer .zoom').click(function(){
		$('.info-layer .img-popup').css('display','block');
	});
	$('.img-popup .close-popup').click(function(){
		$('.info-layer .img-popup').css('display','none');
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
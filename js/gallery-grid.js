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


// close image popup
$(document).ready(function(){
  window.addEventListener('mouseup',function(event){
    if(event.target != $('.image-item')){
             $('.image-show').css('display','none');
    	}
  });
});

//image popup
$(document).ready(function(){
	$('.info-layer .zoom').click(function(){
		var $bgImg = $(this).parent().parent().find('.image').css('background-image');
		$('.image-item').css('background-image',$bgImg);
		$('.image-show').css('display','block');
	});
});
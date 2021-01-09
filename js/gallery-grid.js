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
$(document).mouseup(function(e) 
{
    // if the target of the click isn't the container nor a descendant of the container
    if (!$('.image-item').is(e.target) && $('.image-item').has(e.target).length === 0){
        $('.image-show').hide();
    }
});

//image popup
$(document).ready(function(){
	$('.info-layer .zoom').click(function(){
		var $bgImg = $(this).parent().parent().find('.image').css('background-image');
		$('.image-item').css('background-image',$bgImg);
		$('.image-show').css('display','block');
	});
});
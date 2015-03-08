$(document).ready(function(){
 	$('.sqs-gallery-design-grid-slide').each(function() {
		$(this).mouseover(function(){
          
          $('.image-slide-title').hide();
          
          $(this).find('.image-slide-title').css('position','absolute');
          $(this).find('.image-slide-title').css('bottom','-50%');
          $(this).find('.image-slide-title').css('font-size','20px');
          $(this).find('.image-slide-title').css('height','100%');
          $(this).find('.image-slide-title').css('text-align','center');
          $(this).find('.image-slide-title').css('width','100%');
          $(this).find('.image-slide-title').css('color','black');
          $(this).find('.image-slide-title').css('background','rgba(255, 255, 255, 0.3)');
          $(this).find('.image-slide-title').css('font-family','futura-pt');
          $(this).find('.image-slide-title').css('cursor','pointer');
          
          
          var href_link = $(this).find('a').attr('href');
          $(this).find('.image-slide-title').click(function(){
              window.location.href = href_link;
          });
          

          $(this).find('.image-slide-title').show();
          
        });
	});
});

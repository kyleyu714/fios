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

      $(this).find('.image-slide-title').show();
    });

  });

/*
  $('.sqs-gallery-design-grid-slide').mouseover(function() {
  
    
    $('.sqs-gallery-design-grid-slide').children('div div.image-slide-title').hide();
    $(this).children('div div.image-slide-title').show();
  });
  */
});

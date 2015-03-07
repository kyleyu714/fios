$(document).ready(function(){

  $('.sqs-gallery-design-grid-slide').each(function() {      

    $(this).mouseover(function(){
      
      console.log('mouse over');
      console.log($(this).find('.image-slide-title').html());
      $(this).children('image-slide-title').show();
    });

  });

/*
  $('.sqs-gallery-design-grid-slide').mouseover(function() {
  
    
    $('.sqs-gallery-design-grid-slide').children('div div.image-slide-title').hide();
    $(this).children('div div.image-slide-title').show();
  });
  */

});

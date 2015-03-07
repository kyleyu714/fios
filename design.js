$(document).ready(function(){

  $('.sqs-gallery-design-grid-slide').each(function() {      

    $(this).mouseover(function(){
      
      alert('mouse over');
      
          $(this).children('.image-slide-title').hide();
          $(this).children('.image-slide-title').show();
    });

  });


  $('.sqs-gallery-design-grid-slide').mouseover(function() {
  
    
    $('.sqs-gallery-design-grid-slide').children('.image-slide-title').hide();
    $(this).children('.image-slide-title').show();
  });

});

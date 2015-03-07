$(document).ready(function(){

  $('.sqs-gallery-design-grid-slide').each(function() {      
    console.log($(this).html());

  });


  $('.sqs-gallery-design-grid-slide').mouseover(function() {      
    $('.sqs-gallery-design-grid-slide').children('.image-slide-title').hide();
    $(this).children('.image-slide-title').show();
  });

});

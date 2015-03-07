$(document).ready(function(){

  $('.design-grid-slide').each(function() {      
    console.log($(this).html());

  });


  $('.design-grid-slide').mouseover(function() {      
    $('.design-grid-slide').children('.hiddenx').hide();
    $(this).children('.hiddenx').show();
  });

});

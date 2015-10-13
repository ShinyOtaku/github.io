setAnimations = function() {
  
  var topOfWindow = $(window).scrollTop();
  var heightOfWindow = $(window).height();
  $('.education, .experience').each(function(){

    var elementPos = $(this).offset().top;
    if (elementPos < (topOfWindow + (heightOfWindow - 200))) {

      if ($(this).hasClass('education') && $(window).width() <= 490) {
        
        $(this).addClass('fadeInLeft');
  
      } else if ($(this).hasClass('education') && $(window).width() > 490) {
        
        $(this).addClass('fadeInRight');

      } else if ($(this).hasClass('experience')) {
        
        $(this).addClass('fadeInLeft');

      }

    }

  });
  
}

$(window).scroll(function() {

  setAnimations();

});
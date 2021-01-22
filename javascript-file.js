$(document).ready(function(){
  $(".flip").click(function(){
    $(this).next().find(".panel").slideToggle("slow");
  });
});

jQuery(document).ready(function() {

    // add class on hover
    jQuery('.panel, .flip').hover(function() {
      jQuery(this).addClass('panel, .flip:hover');
    });

    // remove class on transition end
    jQuery('.panel, .flip').bind('webkitTransitionEnd otransitionend oTransitionEnd msTransitionEnd transitionend', function() {
      jQuery(this).delay(1000).queue(function() {
      jQuery(this).removeClass('panel, .flip:hover');
    });
    });
});

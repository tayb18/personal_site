$(document).ready(function(){

  var $contactLink = $('.links');
  $contactLink.hover(function(){
    $(this).addClass("animated pulse");
  }, function(){
    $(this).removeClass("animated pulse");
  });

  var $navLink = $('.nav-links');
  $navLink.hover(function(){
    $(this).addClass("animated pulse");
  }, function(){
    $(this).removeClass("animated pulse");
  });

  var $contactLogo = $('.contact-logos');
  $contactLogo.hover(function(){
    $(this).addClass("animated pulse");
  }, function(){
    $(this).removeClass("animated pulse");
  });  


  $(window).scroll(
    {
        previousTop: 0
    }, 
    function () {
    // get current distance from top of viewport
    var currentTop = $(window).scrollTop();
    // define the header height here
    var headerHeight = 100;
    // if user has scrolled past header, initiate the scroll up/scroll down hide show effect
    if( $(window).scrollTop() > headerHeight ) {
      if (currentTop < this.previousTop) {
        $(".sidebar em").text("Up"); /* optional for demo */
        $(".header").show();
    } else {
        $(".sidebar em").text("Down");
        $(".header").hide("slow");
    }
    }
    this.previousTop = currentTop;
  });
});
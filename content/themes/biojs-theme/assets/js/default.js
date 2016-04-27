(function(){
  $(document).ready(function(){
    $(".button-collapse").sideNav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.slider').slider({
      full_width: true,
      indicators: false,
      interval: 1500
    });
    $('.collapsible').collapsible({
      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
    window.onscroll = function(){
      if (document.body.scrollTop === 0){
        $('.main-nav .nav-wrapper').removeClass('biojs-black');
        $('.main-nav .nav-wrapper').addClass('biojs-transparent');
        console.log("top");
        return;
      }
        $('.main-nav .nav-wrapper').removeClass('biojs-transparent');
        $('.main-nav .nav-wrapper').addClass('biojs-black');
        console.log("not top");
    }
  });
})();
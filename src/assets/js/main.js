$(document).ready(function () {
    svg4everybody({});

   $('.banner-slider').slick({
        dots: true,
   });

    $('.menu-button').click(function() {
        $( ".mobile-menu" ).fadeToggle( "slow", "linear" );
    });

});
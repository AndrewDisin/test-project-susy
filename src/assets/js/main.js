$(document).ready(function () {
    svg4everybody({});

   $('.banner-slider').slick({
        dots: true,
   });

    $('.menu-button').click(function() {
        $( ".mobile-menu" ).fadeToggle( "slow", "linear" );
    });

    $('.catalog-button').click(function() {
        $( ".catalog-menu" ).css( "transform", "translateX(0)" );
    });

    $('.close-catalog-menu').click(function() {
        $( ".catalog-menu" ).css( "transform", "translateX(-100%)" );
    });

    $('.catalog-sorting').click(function() {
        $( ".catalog-sorting-menu" ).fadeToggle( "slow", "linear" );
    });

    $('.big-pictures').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.miniatures',
        centerMode: true
    });

    $('.miniatures').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        asNavFor: '.big-pictures',
        focusOnSelect: true,
        centerMode: true,
        variableWidth: true,
        arrows: false
    });

    var list = $(".catalog-item__categories").length;

    for (var i = 1; i<= list; i++){
        if ($(".catalog-item:nth-child("+i+")").find($(".category-item")).length < 5){
            ($(".catalog-item:nth-child("+i+") .catalog-item__more")).css("display","none");
        };
    }

    $('.catalog-item__more').click(function(){
        $(this).prev('.catalog-item__categories').toggleClass('open');
    });

});
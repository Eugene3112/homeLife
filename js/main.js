$(document).ready(function(){
    $('.advantages').slick({
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [{
                breakpoint: 900,
                settings: {
                    dots: true,
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
                },
                {
            breakpoint: 700,
            settings: {
                dots: true,
                slidesToShow: 1,
                slidesToScroll: 1
            }
            }
        ]
    });
  });
$(window).on('load', function () {
    var $preloader = $('.preload'),
        $svg_anm   = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(500).fadeOut('slow');
});
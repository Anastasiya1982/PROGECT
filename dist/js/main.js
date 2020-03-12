$(window).on('load', function() {
    var $preloader = $('#p_prldr'),
        $svg_anm = $preloader.find('.svg_anm');
    $svg_anm.fadeOut();
    $preloader.delay(1000).fadeOut('slow');
});

let btnBurger = document.querySelector('.header-burger');

btnBurger.addEventListener('click', function() {
    let mobMenu = document.querySelector('.header-menu');

    btnBurger.classList.toggle('burger-menu-active');
    mobMenu.classList.toggle('show-menu');
});
$(document).ready(function() {
    $('[data-fancybox="gallery"]').fancybox({
        loop: true,
        gutter: 10,
        keyboard: true,
        arrows: true,
        infobar: true,
        smallBtn: true,
        toolbar: true,
        idleTime: 3,
        animationEffect: "zoom-in-out",
        animationDuration: 600,
        transitionEffect: "circular",
        transitionDuration: 600,
        slideClass: "myClass",
        baseClass: "myclass",


    });
});


$(document).ready(function() {
    $('.slider').slick({
        dots: false,
        autoplay: false
    });
});

$('.slider-wr').slick({
    dots: false,
    autoplay: false
});

$('.team-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [{
            breakpoint: 865,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 650,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]

});




$('input,textarea').focus(function() {
    $(this).data('placeholder', $(this).attr('placeholder'))
    $(this).attr('placeholder', '');
});
$('input,textarea').blur(function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
});
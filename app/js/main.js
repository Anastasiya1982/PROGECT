let btnBurger = document.querySelector('.header-burger');

btnBurger.addEventListener('click', function() {
    let mobMenu = document.querySelector('.header-menu');

    btnBurger.classList.toggle('burger-menu-active');
    mobMenu.classList.toggle('show-menu');
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


$(document).ready(function() {
    $('[data-fancybox="gallery"]').fancybox({
        buttons: [
            'slideShow',
            'share',
            'zoom',
            'fullScreen',
            'download',
            'close'
        ],
        loop: true,
        gutter: 10,
        keyboard: true,
        arrows: true,
        infobar: true,
        smallBtn: false,
        toolbar: true,
        idleTime: 3,
        animationEffect: "zoom-in-out",
        animationDuration: 600,
        transitionEffect: "tube",
        transitionDuration: 600,
        slideClass: "myClass",
        baseClass: "myclass",
        slideShow: {
            autoStart: false,
            speed: 1000
        },
        youtube: {
            controls: 0,
            showinfo: 0
        },
        thumbs: {
            autoStart: true
        }
    });
});

$('input,textarea').focus(function() {
    $(this).data('placeholder', $(this).attr('placeholder'))
    $(this).attr('placeholder', '');
});
$('input,textarea').blur(function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
});
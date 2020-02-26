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

$(document).ready(function() {
    $('.slider-wr').slick({
        dots: false,
        autoplay: false
    });
});

$(document).ready(function() {
    $(".fancybox").fancybox();
});

$('input,textarea').focus(function() {
    $(this).data('placeholder', $(this).attr('placeholder'))
    $(this).attr('placeholder', '');
});
$('input,textarea').blur(function() {
    $(this).attr('placeholder', $(this).data('placeholder'));
});
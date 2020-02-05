/*$(document).ready(function() {
    $('header_burger').click(function(event) {
        $('header_burger', 'header_menu').toggleClass('active');
    });

});*/

$(document).ready(function() {
    $('.slider').slick({
        dots: true,
        autoplay: false,
        autoplaySpeed: 500
    });
});
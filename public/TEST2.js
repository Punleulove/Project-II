$(document).ready(function () {
    $('.fa-bars').click(function () {
        $(this).toggleClass('fa-times');
        $('.nav').toggleClass('nav-show');
    })
    $(window).on('load scroll', function () {
        $('.fa-bars').removeClass('fa-time');
        $('.nav').removeClass('nav-show');
    })

    $('.facility').magnificpopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enabled:true
        }
    })
});
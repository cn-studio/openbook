$(document).ready(function () {
    $(window).scroll(function () {
        var WindowScrollTop = $(this).scrollTop();
        var BooksPostionTop = $('.books').offset().top;
        var MentHeight = $('.menu').height();
        if (WindowScrollTop > BooksPostionTop - MentHeight*2) {
            $('.menu').removeClass('menu-bg-transparent').addClass('menu-bg-primary');
        } else {
            $('.menu').removeClass('menu-bg-primary').addClass('menu-bg-transparent');
        }
    });
    $('.menu-list-btn').bind('click', function(e) {
        var ContentLink = $($(this).attr('href')).offset().top;
        var MentHeight = $('.menu').height();
        $('html, body').animate({scrollTop: ContentLink - MentHeight}, 1000);
    });
});
$(document).ready(function () {
    var ScreenHeight = document.body.clientHeight;
    var ScreenWidth = document.body.clientWidth;
    if (ScreenHeight < 500 && ScreenWidth < 1000) {
        $('body').css('overflow-y', 'hidden');
        $('body').append("<section class='screen-alert'></section>");
        $('.screen-alert').append("<div class='screen-alert-content'></div>");
        $('.screen-alert-content').append("<i class='fas fa-mobile-alt'></i>");
        $('.screen-alert-content').append("<p>為了最佳的使用體驗，<br>請旋轉您的手機為直立瀏覽</p>");
    }
    $(window).resize(function () {
        var ScreenHeight = document.body.clientHeight;
        var ScreenWidth = document.body.clientWidth;
        if (ScreenHeight < 500 && ScreenWidth < 1000) {
            $('body').css('overflow-y', 'hidden');
            $('body').append("<section class='screen-alert'></section>");
            $('.screen-alert').append("<div class='screen-alert-content'></div>");
            $('.screen-alert-content').append("<i class='fas fa-mobile-alt'></i>");
            $('.screen-alert-content').append("<p>為了最佳的使用體驗，<br>請旋轉您的手機為直立瀏覽</p>");
        } else {
            $('.screen-alert').remove();
            $('body').css('overflow-y', 'auto');
        }
    });
});
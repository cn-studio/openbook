$(document).ready(function () {
    var VideoWidth = $('.video iframe').width();
    $('.video iframe').height(VideoWidth*0.5625);
    $(window).resize(function () {
        var VideoWidth = $('.video iframe').width();
        $('.video iframe').height(VideoWidth*0.5625);
    });
});
$(document).ready(function () {
    var ScreenHeight = document.body.clientHeight;
    var ScreenWidth = document.body.clientWidth;
    var BtnTimes = $('.loading-content-btn span').text();
    var OpenBtnTimes = BtnTimes - 1;
    if (ScreenHeight < 500 && ScreenWidth < 1000) {
        $('.loading-content-btn span').text(3);
    } else {
        var OpenBtncout = setInterval(function () {
            $('.loading-content-btn span').text(OpenBtnTimes);
            OpenBtnTimes -= 1;
            if (OpenBtnTimes == -1) {
                $('.loading-content-btn').text('點我開獎');
                $('.loading-content-btn').addClass('loading-content-btn-active');
                clearInterval(OpenBtncout);
            }
        }, 1000);
        $('body').css({ 'overflow-y': 'hidden' });
        $('.loading-content-btn').bind('click', function (e) {
            var BtnContent = $(this).text();
            if (BtnContent == '點我開獎') {
                $('.loading-content-bg').addClass('loading-content-bg-full');
                setTimeout(() => {
                    $('.loading').addClass('hide');
                }, 0);
                setTimeout(() => {
                    $('.loading').remove();
                    $('body').css({ 'overflow-y': 'auto' });
                }, 1000);
            } else {
                return false;
            }
        });
    }
    $(window).resize(function () {
        var ScreenHeight = document.body.clientHeight;
        var ScreenWidth = document.body.clientWidth;
        var BtnTimes = $('.loading-content-btn span').text();
        var OpenBtnTimes = BtnTimes - 1;
        if (ScreenHeight < 500 && ScreenWidth < 1000) {
            $('.loading-content-btn span').text(3);
        } else {
            var OpenBtncout = setInterval(function () {
                $('.loading-content-btn span').text(OpenBtnTimes);
                OpenBtnTimes -= 1;
                if (OpenBtnTimes == -1) {
                    $('.loading-content-btn').text('點我開獎');
                    $('.loading-content-btn').addClass('loading-content-btn-active');
                    clearInterval(OpenBtncout);
                }
            }, 1000);
            $('body').css({ 'overflow-y': 'hidden' });
            $('.loading-content-btn').bind('click', function (e) {
                var BtnContent = $(this).text();
                if (BtnContent == '點我開獎') {
                    $('.loading-content-bg').addClass('loading-content-bg-full');
                    setTimeout(() => {
                        $('.loading').addClass('hide');
                    }, 0);
                    setTimeout(() => {
                        $('.loading').remove();
                        $('body').css({ 'overflow-y': 'auto' });
                    }, 1000);
                } else {
                    return false;
                }
            });
        }
    });
    /*
    var BtnTimes = $('.loading-content-btn span').text();
    var OpenBtnTimes = BtnTimes - 1;
    var OpenBtncout = setInterval(function () {
        $('.loading-content-btn span').text(OpenBtnTimes);
        OpenBtnTimes -= 1;
        if (OpenBtnTimes == -1) {
            $('.loading-content-btn').text('點我開獎');
            $('.loading-content-btn').addClass('loading-content-btn-active');
            clearInterval(OpenBtncout);
        }
    }, 1000);
    $('body').css({ 'overflow-y': 'hidden' })

    $('.loading-content-btn').bind('click', function (e) {
        var BtnContent = $(this).text();
        if (BtnContent == '點我開獎') {
            $('.loading-content-bg').addClass('loading-content-bg-full');
            setTimeout(() => {
                $('.loading').addClass('hide');
            }, 0);
            setTimeout(() => {
                $('.loading').remove();
                $('body').css({ 'overflow-y': 'auto' });
            }, 1000);
        } else {
            return false;
        }
    });*/
});
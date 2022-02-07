$(document).ready(function () {
    $(window).scroll(function () {
        var WindowScrollTop = $(this).scrollTop();
        var BooksPostionTop = $('.books').offset().top;
        var MentHeight = $('.menu').height();
        if (WindowScrollTop >= BooksPostionTop - MentHeight - 10) {
            $('.more').removeClass('hide').addClass('show');
        } else {
            $('.more').removeClass('show').addClass('hide');
        }
    });

    function Subject(PageData1, PageText1, PageData2, PageText2, PageData3, PageText3, PageData4, PageText4, PageData5, PageText5, PageData6, PageText6) {
        $('.more').bind('click', function (e) {
            var PageName = $('body').data('name');
            $('body').append('<section class="subject"></section>');
            $('.subject').append('<div class="subject-content"></div>');
            $('.subject-content').append('<div class="subject-content-title"></div><div class="subject-content-text"></div>');
            $('.subject-content-title').append('<h5>引導您前往</h5><a href="#"><i class="fas fa-times subject-content-close"></i></a>');
            $('.subject-content-text').append('<a href="' + PageData1 + '" class="subject-content-text-link" data-name="' + PageData1 + '" target="_blank"><i class="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;' + PageText1 + '</a>');
            $('.subject-content-text').append('<a href="' + PageData2 + '" class="subject-content-text-link" data-name="' + PageData2 + '" target="_blank"><i class="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;' + PageText2 + '</a>');
            $('.subject-content-text').append('<a href="' + PageData3 + '" class="subject-content-text-link" data-name="' + PageData3 + '" target="_blank"><i class="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;' + PageText3 + '</a>');
            $('.subject-content-text').append('<a href="' + PageData4 + '" class="subject-content-text-link" data-name="' + PageData4 + '" target="_blank"><i class="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;' + PageText4 + '</a>');
            $('.subject-content-text').append('<a href="' + PageData5 + '" class="subject-content-text-link" data-name="' + PageData5 + '" target="_blank"><i class="fas fa-arrow-circle-right"></i>&nbsp;&nbsp;' + PageText5 + '</a>');
            $('.subject').css({ 'display': 'flex', 'visibility': 'visible' });
            setTimeout(() => {
                $('.subject').css({ 'opacity': '1' });
            }, 1);
            var Number = $('.subject-content-text a').length;
            for (let i = 0; i < Number; i++) {
                var ListName = $('.subject-content-text a').eq(i).data('name');
                if (PageName == ListName) {
                    $('.subject-content-text a').eq(i).removeClass('subject-content-text-link');
                    $('.subject-content-text a').eq(i).addClass('subject-content-text-active click-none');
                    $('.subject-content-text a i').eq(i).addClass('fas fa-street-view');
                }
            };
            $('body').css('overflow-y', 'hidden');
            return false;
        });
    }
    Subject('https://reurl.cc/dx4y92', '得獎書單', 'https://youtu.be/uOzUJc6qQSs', '酷的夢推薦', 'https://reurl.cc/oxEyXV', '入圍書單', 'https://reurl.cc/emYnMW', '歷屆得獎書單', 'https://reurl.cc/1oRMKD', '歷屆入圍書單', 'https://reurl.cc/q1j2Dp', '絕版書單');

    $('body').on('click', '.subject-content-close', function (e) {
        $('.subject').css({ 'opacity': '0', 'visibility': 'hidden' });
        setTimeout(() => {
            $('.subject').remove();
        }, 1000);
        $('body').css('overflow-y', 'auto');
        return false;
    });

    $('body').on('click', '.click-none', function (e) {
        return false;
    });
});
$(document).ready(function () {
    $('.books-content-view-more').on('click', function () {
        var BooksImage = $(this).siblings('.books-content-view-image').children('img').attr('src');
        var BooksName = $(this).siblings('h4').text();
        var BooksOther = $(this).siblings('span').text();
        var BooksArticle = $(this).siblings('article').text();
        var BooksLink = $(this).siblings('.books-content-view-image').attr('href');
        $('body').append('<div class="books-newcontent"></div>').css({ 'overflow': 'hidden' });
        $('.books-newcontent').append('<div class="books-newcontent-infor"></div>');
        $('.books-newcontent-infor').append('<div class="books-newcontent-infor-img"></div><div class="books-newcontent-infor-content"></div>');
        $('.books-newcontent-infor-img').append('<img src=' + BooksImage + '>');
        $('.books-newcontent-infor-content').append('<div class="books-newcontent-infor-content-title"></div>');
        $('.books-newcontent-infor-content-title').append('<h4>' + BooksName + '</h4><i class="fas fa-times books-newcontent-infor-content-close"></i>')
        $('.books-newcontent-infor-content').append('<span>' + BooksOther + '</span>');
        $('.books-newcontent-infor-content').append('<article>' + BooksArticle + '</article>');
        $('.books-newcontent-infor-content').append('<a href="' + BooksLink + '" class="books-newcontent-infor-content-link" target="_blank">看書去</a>');
        $('.books-newcontent').css({ 'display': 'flex', 'visibility': 'visible' });
        setTimeout(() => {
            $('.books-newcontent').css({ 'opacity': '1' });
        }, 1);
        return false;
    });
    $('body').on('click', '.books-newcontent-infor-content-close', function () {
        $('.books-newcontent').css({'opacity':'0'});
        $('body').css({ 'overflow': 'auto' });
        setTimeout(() => {
            $('.books-newcontent').remove();
        }, 500);
        return false;
    });
});
$(document).ready(function () {
    console.log(333)
    let btn = $('.hamburger-btn'),
        nav = $('.header__nav');

    btn.click(function () {
        if (nav.css('display') === 'none') {
            btn.html('<i class="fa fa-times" aria-hidden="true"></i>');
            nav.fadeIn('slow', () => nav.show());
        } else {
            btn.html('<i class="fa fa-bars" aria-hidden="true"></i>');
            nav.fadeOut('slow', () => nav.hide());
        }
    })
});
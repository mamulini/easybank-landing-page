$(document).ready(function () {
    console.log(333)
    let btn = $('.hamburger-btn'),
        nav = $('.header__nav');

    btn.click(function () {
        nav.toggle('slow', function () {
            if (nav.css('display', 'none')) {
                nav.show();
            } else {
                nav.hide();
            }
        })
    })


});
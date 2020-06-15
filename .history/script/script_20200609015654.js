$(document).ready(function () {
    console.log(333)
    let btn = $('.hamburger-btn'),
        nav = $('.header__nav');

    btn.click(function () {
        nav.slideToggle('slow', function () {
            nav.show()
            if (nav.css) {
                nav.hide();
            } else {
                nav.show();
            }
        })
    })


});
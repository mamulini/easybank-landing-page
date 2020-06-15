$(document).ready(function () {
    console.log(333)
    let btn = $('.hamburger-btn'),
        nav = $('.header__nav');

    btn.click(function () {
        if (!nav.css('display') === 'block') {
            nav.hide();
            console.log(nav.css('display'));
        } else {
            nav.show();
        }
    })
});
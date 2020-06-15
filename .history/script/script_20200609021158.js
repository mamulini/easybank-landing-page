$(document).ready(function () {
    console.log(333)
    let btn = $('.hamburger-btn'),
        nav = $('.header__nav');

    btn.click(function () {
        console.log(nav.hide())
        if (nav.hide()) {
            nav.show();
            console.log(nav.css('display'));
        } else if (nav.css('display', 'block')) {
            nav.hide();
        }
    })
});
$(document).ready(function () {
    console.log(333)
    let btn = $('.hamburger-btn'),
        nav = $('.header__nav');

    btn.click(function () {
        if (nav.css('display') === 'none') {
            nav.show();
            nav.html();
            console.log(nav.css('display'));
        } else {
            nav.html(<i class="fa fa-bars" aria-hidden="true"></i>);
            nav.hide();
        }
    })
});
$(document).ready(function () {
    console.log(333)
    let btn = $('.hamburger-btn'),
        nav = $('.header_nav');

    btn.click(function () {
        nav.slideToggle('slow', function () {
            nav.show()
            // if (nav.show()) {
            //     nav.hide();
            // }
        })
    })


});
$(document).ready(function () {
    $('#slider').slick({
        slidesToShow: 1.1,
        arrows: false,
        mobileFirst: true,
        dots: true,
        infinite: false,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            }
        ]
    });
});
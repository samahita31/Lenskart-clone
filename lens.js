$(function () {
    // Owl Carousel
    var owl = $(".car");
    owl.owlCarousel({
        items: 4,
        margin: 5,
        loop: true,
        nav: true,
        dots: false,
        autoplay: true,
        autoplayTimeout: 3000,
        responsiveClass: true,

        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
});
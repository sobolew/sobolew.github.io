$(document).ready(function(){
    $(".partners-carousel").owlCarousel({
        loop: true,
        autoplay: true,
        navText: [],
        autoplayHoverPause: true,
        responsive: {
            0:{
                items:2
            },
            600: {
                items: 3
            },
            768:{
                items:4
            },
            992: {
                items: 5
            }
        }
    });
});
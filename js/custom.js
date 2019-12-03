$(document).ready(function(){
    
    $('.navbar-nav .nav-item .nav-link').click(function(e) {
        e.preventDefault();
        $('.navbar-nav .nav-item').removeClass('active');
        $(this).parent().addClass('active');
    });

    // Add Active Class
    $('.navbar-nav .nav-item .nav-link').click( function(e) {
        e.preventDefault;
        $('html, body').animate({
            scrollTop: $('#' + $(this).data('scroll')).offset().top + 1
        }, 1000);
    });

    // Services Carousel
    $(".owl-carousel1").owlCarousel({
        items: 3.5,
        responsiveClass:true,
        responsive:{
            0:{
                items:1.5,
                nav:true
            },
            600:{
                items:2,
                nav:false
            },
            1000:{
                items:3.5,
                nav:true,
                loop:false
            }
        }
    });

    // Portfolio
    var mixer = mixitup('.mixitup');

    $('.content-portfolio ul li').click(function() {
        $('.content-portfolio ul li').removeClass('active');
        $(this).addClass('active');
    });

    // Blog Carousel
    $(".owl-carousel2").owlCarousel({
        items: 2.5
    });
});

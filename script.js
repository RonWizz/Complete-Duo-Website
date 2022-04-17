/* =============================================================
                            PRELOADER
===============================================================*/
$(window).on('load', function () {
    $('#status').fadeOut();
    $('#preloader').delay(350).fadeOut('slow');
});

/* =============================================================
                            TEAM
===============================================================*/
$(function () {
    $("#team-members").owlCarousel({
        items: 2,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});
/* =============================================================
                            Progress Bar
===============================================================*/
$(function () {

    $("#progress-element").waypoint(function () {

        $(".progress-bar").each(function () {

            $(this).animate({
                width: $(this).attr("aria-valuenow") + "%"
            }, 1000);

        });

        this.destroy();
    }, {
        offset: 'bottom-in-view'
    });
});
/* =============================================================
                            Responsive tabs
===============================================================-*/
$(function () {

    $("#services-tabs").responsiveTabs({
        animation: 'slide'

    });

});
/* =============================================================
                            Responsive tabs
===============================================================-*/
$(window).on('load', function(){
    $("#isotope-container").isotope({      
    });
    
    $("#isotope-filters").on('click', 'button', function() {
        
        var filterValue = $(this).attr('data-filter');
        
        $("#isotope-container").isotope({
            filter: filterValue
        });
        
        $("#isotope-filters").find('.active').removeClass('active');
        $(this).addClass('active');
    });
});
/* =============================================================
                            magnifier popup
===============================================================-*/
$ (function(){
    
    $("#portfolio-wrapper").magnificPopup({
        delegate: 'a',
        type: 'image',
        gallery: {
            enable: true
        }
    })
})
/* =============================================================
                            Testimonials
===============================================================-*/
$(function () {
    $("#testimonial-slider").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});
/* =============================================================
                            Stats
===============================================================-*/
$(function() {
    $(".counter").counterUp ({
        delay: 10,
        time: 2000
    });

});
/* =============================================================
                            Stats
===============================================================-*/
$(function () {
    $("#clients-list").owlCarousel({
        items: 6,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        nav: true,
        dots: false,
        navText: ['<i class="fas fa-angle-left"></i>', '<i class="fas fa-angle-right"></i>']
    });
});
/* =============================================================
                            maps
===============================================================-*/
$(window).on('load', function() {
    var addressString='159, Kasba Police Station';
    var mylating={lat: 22.513060, lng: 88.381300};
    
    var map=new google.maps.Map(document.getElementById('map'), {
        zoom: 11,
        center: myLatlng
    });
    var marker = new google.maps.Market ({
        position: myLatlng,
        map: map,
        title: "click to see Adress"
    });
    var infowindow = new google.maps.InfoWindow ({
        content: addressString
    });
    
    market.addListener('click', function() {
        information.open(map, market);
    });
});
/* =============================================================
                            Navbar
===============================================================-*/
//var lastScrollTop = 0;
//    navbar = document.getElementById("navbar");
//window.addEventListener("scroll", function(){
//    var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
//    if(scrollTop > lastScrollTop){
//        navbar.style.top = "-80px";
//    } else {
//        navbar.style.top = "0";
//    }
//    lastScrollTop = scrollTop;
//});

/* =============================================================
                            wow
===============================================================-*/
$ (function() {
    new WOW().init();
});

$(window).on('load', function () {
    $("#home-heading-1").addClass("animated fadeInDown");
    $("#home-heading-2").addClass("animated fadeInLeft");
    $("#home-text").addClass("animated zoomIn");
    $("#home-btn").addClass("animated zoomIn");
    $("#arrow-down i").addClass("animated fadeInDown infinite");
});





































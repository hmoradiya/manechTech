$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 30) {
            $("nav").addClass("background-header");
            $('.navbar .navbar-brand img').attr('src','image/header-logo-c.png');
            $('.navbar .icon-cart img').attr('src','image/cart-b.png');
            $(".header-btn").addClass("white-theme");
            $(".navbar-toggler-icon").addClass("white-menu");

        } else {
           $("nav").removeClass("background-header");
           $('.navbar .navbar-brand img').attr('src','image/header-logo.png');
           $('.navbar .icon-cart img').attr('src','image/cart-w.png');
           $(".header-btn").removeClass("white-theme");
           $(".navbar-toggler-icon").removeClass("white-menu");

        }
    });
});

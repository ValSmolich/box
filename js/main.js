$(document).ready(function(){
    
    let header = $("#header");
    let wrapper = $("#wrapper");
    let wrapperHgt = wrapper.innerHeight(); //высота враппера с паддингом
    let scrollP = $(window).scrollTop(); //сколько проскроллил

    $(window).on("scroll load resize", function() {
        let wrapperHgt = wrapper.innerHeight(); //высота враппера с паддингом
        scrollP = $(this).scrollTop();

            if (scrollP > wrapperHgt) {
                header.addClass("fixed");
            } else {
                header.removeClass("fixed");
            }

    });

    let navigation = $("#navigation"); 
    let navToggle = $("#navToggle");
    navToggle.on("click", function(event) {
        event.preventDefault();

        navigation.toggleClass("show");


    });


    let slider = $("#reviewsSlider");

    slider.slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        arrows: false,
        dots: true
    });



});
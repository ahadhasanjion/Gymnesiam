$(function(){
    'use strict'

    //BANNER SLIDER
   $('#banner').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       autoplay: false,
       autoplaySpeed: 1000,
       arrows: false,
       dots: true,
    });
    
    //TEAM SLIDER 
    $('.team_slider').slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        responsive: [
            {
              breakpoint: 991.98,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
              }
            },
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            }
        ]    
    });

    //ABOUT PART VIDEO
    $('.venobox').venobox({
        spinner:'wandering-cubes',
        overlayColor: 'rgba(0, 0, 0, 0.6)'
    }); 

    //TESTIMONIAL SLIDER
    $('.testo_slider').slick({
        slidesToShow: 2,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: true,
        responsive: [
            {
              breakpoint: 767.98,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 575.98,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
        ]   
    });


    //MENU FIXED
    
    // var navoff = $('.main_menu').offset().top;

    // $(window).scroll(function(){
    //     var scrolling = $(this).scrollTop();

    //     if(scrolling > navoff){
    //         $('.main_menu').addClass('menu_fix')
    //     }

    //     else{
    //         $('.main_menu').removeClass('menu_fix')
    //     }

    // });

    //COUNTR UP 

    //COUNTER PART
    $('.counter').counterUp();

    //BRANDS SLIDER
    $('.client_slider').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: true,
        nextArrow: '<i class="fas fa-chevron-right nxt_arrow"></i>',
        prevArrow: '<i class="fas fa-chevron-left pre_arrow"></i>',
        centerMode: true,
        centerPadding: 0,
        responsive: [
          {
            breakpoint: 1399.98,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              arrows: false,
            }
          },
          {
            breakpoint: 1199.98,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              arrows: false,
            }
          },
          {
            breakpoint: 991.98,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 767.98,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              arrows: false,
            }
          },
          {
            breakpoint: 575.98,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          }
      ]    
    });

});
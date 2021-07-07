$(document).ready(function(){

    $('.slides-container').slick({
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-prev" title="slide to previous slide"><span class="iconify" data-icon="bi:chevron-left" data-inline="false"></span></button>',
        nextArrow: '<button class="slick-next"  title="slide to next slide"><span class="iconify" data-icon="bi:chevron-right" data-inline="false"></span></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

      $('.card-scroller').slick({
        dots: false,
        infinite: false,
        autoplay: true,
        autoplaySpeed: 3000,
        speed: 300,
        slidesToShow: 6,
        slidesToScroll: 4,
        prevArrow: '<button class="slick-prev" title="slide to previous slide"><span class="iconify" data-icon="bi:chevron-left" data-inline="false"></span></button>',
        nextArrow: '<button class="slick-next"  title="slide to next slide"><span class="iconify" data-icon="bi:chevron-right" data-inline="false"></span></button>',
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1
            }
          }
          // You can unslick at a given breakpoint now by adding:
          // settings: "unslick"
          // instead of a settings object
        ]
      });

    //ready closes here
});
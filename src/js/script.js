$(document).ready(function(){
  $('.carousel').slick({
    infinite: true,
        speed: 1000,
        autoplay: false,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
        //  responsive: [
        //     {
        //         breakpoint: 991,
        //         settings: {
        //             dots: true,
        //             arrows: false
        //         }

        //     }
        // ]
  });
});
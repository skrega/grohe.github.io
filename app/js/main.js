$(function(){

 $('.main__slider').slick({
    fade: true,
    arrows: false,
    autoplay: true
 });

 $('.products__inner').slick({
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  customPaging: 10,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
      }
      
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
})

$('.collection__inner').slick({
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
})

$('.offers__inner').slick({
  arrows: true,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<button type="button" class="slick-prev"></button>',
  nextArrow: '<button type="button" class="slick-next"></button>',
  responsive: [
    {
      breakpoint: 1250,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 950,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 630,
      settings: {
        slidesToShow: 1,
      }
    },
  ]
})

 
  $(".rate-star").rateYo({
    rating: 5,
    starWidth: "15px",
    ratedFill: '#F9D362',
    normalFill: '#C3C3C3',
    readOnly: true
  });
   
  $('.favorite-btn').on('click', function(){
    $(this).toggleClass('add')
  })
  $('.comparison-btn').on('click', function(){
    $(this).toggleClass('add')
  })
  
});
$(".blog-list").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 468,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

$(".top-slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: true,
  prevArrow:
    "<span class='slick-arrow prev'><i class='fa-solid fa-angle-left'></i></span>",
  nextArrow:
    "<span class='slick-arrow next'><i class='fa-solid fa-angle-right'></i></span>",
});

$("#product-slide").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$("#testimonial-slide").slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 468,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

var indexBannerSlider = (function () {
  var $slider = $('.js-slider--main');

  var init = function () {
    if ($slider.length) {
      $slider.slick({
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 501,
            settings: {
              slidesToShow: 1,
              arrows: false
            }
          }
        ]
      })
    }
  };

  return {
    init: init
  }
})();

var indexWhySlider = (function () {
  var $slider = $('.js-slider--why');

  var init = function () {
    if ($slider.length) {
      /*$slider.slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        rows:1,
        slidesPerRow:1,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 4
            }
          },
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 501,
            settings: {
              slidesToShow: 2,
              rows:2,
              slidesPerRow:2
            }
          }
        ]
      })*/
      var swiper = new Swiper('.js-slider--why', {
        slidesPerView: 5,
        slidesPerColumn: 1,
        loop: true,
        navigation: {
          nextEl: '.c-why__prev',
          prevEl: '.c-why__next'
        },
        breakpoints: {
          1200: {
            slidesPerView: 4,
            slidesPerColumn: 1
          },
          1024: {
            slidesPerView: 3,
            slidesPerColumn: 1
          },
          768: {
            slidesPerView: 2,
            slidesPerColumn: 2
          }
        }
      });
    }
  };

  return {
    init: init
  }
})();

var indexCatalogSlider = (function () {
  var $slider = $('.js-slider--catalog');

  var init = function () {
    if ($slider.length) {
      $slider.slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        responsive: [
          {
            breakpoint: 1025,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 501,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      })
    }
  };

  return {
    init: init
  }
})();

$(document)
  .ready(function () {
    indexBannerSlider.init();
    indexWhySlider.init();
    indexCatalogSlider.init();
  });
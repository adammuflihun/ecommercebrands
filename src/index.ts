import Swiper from 'swiper/bundle';

window.Webflow ||= [];
window.Webflow.push(() => {
  var head = document.getElementsByTagName('HEAD')[0];

  // Create new link Element
  var link = document.createElement('link');

  // set the attributes for link element
  link.rel = 'stylesheet';

  link.type = 'text/css';

  link.href = 'http://localhost:3000/swiperhome.css';

  // Append link element to HTML head
  head.appendChild(link);

  $('.swiper').append(`<div class="swiper-scrollbar"></div>`);
  $('.swiper').append(`<div class="swiper-pagination"></div>`);
  $('.swiper').append(`<div class="swiper-arrow button-prev"></div>`);
  $('.swiper').append(`<div class="swiper-arrow button-next"></div>`);
  console.log('jos');

  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    slidesPerGroup: 1,
    spaceBetween: 20,
    // loop: false,
    centeredSlides: false,
    mousewheel: {
      forceToAxis: true,
    },
    speed: 300,
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 480px
      480: {
        slidesPerView: 1.5,
        spaceBetween: 25,
        slidesPerGroup: 1,

        centeredSlides: true,
      },
      // when window width is >= 768px
      768: {
        slidesPerView: 2,
      },
      // when window width is >= 992px
      992: {
        slidesPerView: 3,
      },
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.button-next',
      prevEl: '.button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
      draggable: true,
    },
  });
});

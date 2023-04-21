// -- slider  -- //

const swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    keyboard: {
    enabled: true,
  },
    navigation: {
      nextEl: ".button-next",
      prevEl: ".button-prev",
  },

    pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
            return '<span class="' + currentClass + '"></span>' +
            ' of ' +
            '<span class="' + totalClass + '"></span>'; 
        },
    },
  });
 // -- swiper - gallery -- //

 const swiper = new Swiper(".mySwiper2", {
    direction: "vertical",
    spaceBetween: 10,
    slidesPerView: 4,
    freeMode: true,
    watchSlidesProgress: true
  });
  const swiper2 = new Swiper(".mySwiper3", {
    spaceBetween: 10,
    effect: "fade",
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    thumbs: {
      swiper: swiper
    }
  });

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
  
      type: "custom",
      renderCustom: function (swiper, current, total) {
        // Тут може бути довільна розмітка та класи для кастомной пагінації
        return `<span class="current">${String(current).padStart(
          2,
          "0"
        )}</span><span class="total">${String(total).padStart(2, "0")}</span>`;
      }
    },
    });
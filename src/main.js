
// -- slider  -- //



const swiper = new Swiper(".mySwiper", {

const swiper = new Swiper('.mySwiper', {

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

    nextEl: '.button-next',
    prevEl: '.button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    renderFraction: function (currentClass, totalClass) {
      return (
        '<span class="' +
        currentClass +
        '"></span>' +
        ' of ' +
        '<span class="' +
        totalClass +
        '"></span>'
      );
    },

  });
=======

  },
});

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.menu-open'),
    closeMenuBtn: document.querySelector('.menu-close'),
    menu: document.querySelector('.mobile-menu'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
  }
})();

});
  

// ? Modal

"use strict";

(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();




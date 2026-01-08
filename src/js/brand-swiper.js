
import Swiper from 'swiper/bundle';
let swiper = null;

/* =========================
   Swiper enable / disable
========================= */
function enableSwiper() {
  swiper = new Swiper('.swiper', {
    slidesPerView: 1.5,
    spaceBetween: 15,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
}

function disableSwiper() {
  if (swiper) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

function checkWidth() {
  if (window.innerWidth < 768) {
    if (!swiper) enableSwiper();
  } else {
    disableSwiper();
  }
}

window.addEventListener('load', checkWidth);
window.addEventListener('resize', checkWidth);

/* =========================
   Expand / Collapse
========================= */
window.addEventListener('load', checkWidth);
window.addEventListener('resize', checkWidth);

const toggleBtn = document.querySelector('.brands__toggle');
const slider = document.querySelector('.brands__slider');

if (toggleBtn && slider) {
  toggleBtn.addEventListener('click', () => {
    slider.classList.toggle('expanded');
  });
}


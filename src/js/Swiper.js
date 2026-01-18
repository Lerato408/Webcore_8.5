           
    let swiper = null;

function enableSwiper() {
    swiper = new Swiper('.brand-swiper', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  });
}

function disableSwiper() {
  if (swiper !== null) {
    swiper.destroy(true, true);
    swiper = null;
  }
}

function checkWidth() {
  const width = window.innerWidth;

  if (width < 768) {
    if (!swiper) {
      enableSwiper();
    }
  } 
  else {
    disableSwiper();
  }
}


window.addEventListener('load', checkWidth);

window.addEventListener('resize', checkWidth);


const btn = document.querySelector('.container-toggle');
const label = btn.querySelector('.label');
const arrow = btn.querySelector('.content__arrow--img');
const list = document.querySelector('.brand-swiper__wrapper');

if (btn && list) {
 btn.addEventListener('click', () => {
   list.classList.toggle('expanded');          
    if (list.classList.contains('expanded')) {
                   label.textContent = "hide";
                  arrow.classList.add('rotated');
                } 
                else {
                 label.textContent = "show all";
                 arrow.classList.remove('rotated');
                }
  });
 }

var repairSwiper = new Swiper('.repair-swiper', {
  slidesPerView: 1.3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

var serviceSwiper = new Swiper('.service-swiper', {
  slidesPerView: 1.3,
  spaceBetween: 30,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  }
})

let brandSwiper = null

function enableBrandSwiper() {
  brandSwiper = new Swiper('.brand-swiper', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

function disableBrandSwiper() {
  if (brandSwiper !== null) {
    brandSwiper.destroy(true, true)
    brandSwiper = null
  }
}

function checkBrandWidth() {
  const width = window.innerWidth

  if (width < 768) {
    if (!brandSwiper) {
      enableBrandSwiper()
    }
  } else {
    disableBrandSwiper()
  }
}

window.addEventListener('load', checkBrandWidth)

window.addEventListener('resize', checkBrandWidth)

const btnBrand = document.querySelector('.container-toggle')
const labelBrand = btnBrand.querySelector('.label')
const arrowBrand = btnBrand.querySelector('.content__arrow--img')
const listBrand = document.querySelector('.brand-swiper__wrapper')

if (btnBrand && listBrand) {
  btnBrand.addEventListener('click', () => {
    listBrand.classList.toggle('expanded')
    if (listBrand.classList.contains('expanded')) {
      labelBrand.textContent = 'hide'
      arrowBrand.classList.add('rotated')
    } else {
      labelBrand.textContent = 'show all'
      arrowBrand.classList.remove('rotated')
    }
  })
}

let repairSwiper = null

function enableRepairSwiper() {
  repairSwiper = new Swiper('.repair-swiper', {
    slidesPerView: 1.5,
    spaceBetween: 30,
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    }
  })
}

function disableRepairSwiper() {
  if (repairSwiper !== null) {
    repairSwiper.destroy(true, true)
    repairSwiper = null
  }
}

function checkRepairWidth() {
  const width = window.innerWidth

  if (width < 768) {
    if (!repairSwiper) {
      enableRepairSwiper()
    }
  } else {
    disableRepairSwiper()
  }
}

window.addEventListener('load', checkRepairWidth)

window.addEventListener('resize', checkRepairWidth)

const btnRepair = document.querySelector('.container-toggle')
const labelRepair = btnRepair.querySelector('.label')
const arrowRepair = btnRepair.querySelector('.content__arrow--img')
const listRepair = document.querySelector('.repair-swiper__wrapper')

if (btnRepair && listRepair) {
  btnRepair.addEventListener('click', () => {
    listRepair.classList.toggle('expanded')
    if (listRepair.classList.contains('expanded')) {
      labelRepair.textContent = 'hide'
      arrowRepair.classList.add('rotated')
    } else {
      labelRepair.textContent = 'show all'
      arrowRepair.classList.remove('rotated')
    }
  })
}

let serviceSwiper = null

function enableServiceSwiper() {
  serviceSwiper = new Swiper('.service-swiper', {
    slidesPerView: 1.5,
    spaceBetween: 30,
  })
}

function disableServiceSwiper() {
  if (serviceSwiper !== null) {
    serviceSwiper.destroy(true, true)
    serviceSwiper = null
  }
}

function checkServiceWidth() {
  const width = window.innerWidth

  if (width < 768) {
    if (!serviceSwiper) {
      enableServiceSwiper()
    }
  } else {
    disableServiceSwiper()
  }
}

window.addEventListener('load', checkServiceWidth)

window.addEventListener('resize', checkServiceWidth)

const btnService = document.querySelector('.container-toggle')
const labelService = btnService.querySelector('.label')
const arrowService = btnService.querySelector('.content__arrow--img')
const listService = document.querySelector('.service-swiper__wrapper')




document.addEventListener('DOMContentLoaded', () => {
 
  const menuBtn = document.querySelector('.header__menu-btn');
  const aside = document.querySelector('.aside');
  const asideCloseBtn = document.querySelector('.aside__close-btn');

  if (!menuBtn || !aside) return;

  // =========================
  // Breakpoint 
  // =========================
  const desktopQuery = window.matchMedia('(min-width: 1120px)');

  // =========================
  // Functions
  // =========================
  const openAside = () => {
    aside.classList.add('aside--open');
    document.body.style.overflow = 'hidden';
  };

  const closeAside = () => {
    aside.classList.remove('aside--open');
    document.body.style.overflow = '';
  };

  // =========================
  // Open aside (mobile only)
  // =========================
  menuBtn.addEventListener('click', () => {
    if (!desktopQuery.matches) {
      openAside();
    }
  });

  // =========================
  // Close aside (mobile only)
  // =========================
  if (asideCloseBtn) {
    asideCloseBtn.addEventListener('click', () => {
      if (!desktopQuery.matches) {
        closeAside();
      }
    });
  }

  // =========================
  // Handle resize
  // =========================
  desktopQuery.addEventListener('change', () => {
    if (desktopQuery.matches) {
      aside.classList.remove('aside--open');
      document.body.style.overflow = '';
    }
  });
});

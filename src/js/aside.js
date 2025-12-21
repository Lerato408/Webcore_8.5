document.addEventListener("DOMContentLoaded", () => {
  const aside = document.querySelector(".aside");
  const asideBurger = document.querySelector(".aside-header__menu-btn");
  const mainBurger = document.querySelector(".header__menu-btn");
  const menuItems = document.querySelectorAll(".aside-main__menu-item");

  if (!aside) return;

  const desktopQuery = window.matchMedia("(min-width: 1120px)");

  const openAside = () => {
    aside.classList.add("aside--open");
    document.body.style.overflow = "";
  };

  const closeAside = () => {
    aside.classList.remove("aside--open");
    document.body.style.overflow = "";
  };

  const toggleAside = () => {
    aside.classList.contains("aside--open") ? closeAside() : openAside();
  };

  // Mobile only toggles
  asideBurger?.addEventListener("click", () => {
    if (!desktopQuery.matches) toggleAside();
  });

  mainBurger?.addEventListener("click", () => {
    if (!desktopQuery.matches) toggleAside();
  });

  // Active state
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((el) =>
        el.classList.remove("aside-main__menu-item--active")
      );
      item.classList.add("aside-main__menu-item--active");
    });
  });

  // Reset on resize
  desktopQuery.addEventListener("change", () => {
    if (desktopQuery.matches) {
      closeAside();
    }
  });
});


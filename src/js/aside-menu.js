document.addEventListener("DOMContentLoaded", () => {
  const asideMenu = document.querySelector(".aside-menu");
  const burgerBtn = document.querySelector(".aside-header__menu-btn");
  const menuItems = document.querySelectorAll(".aside-main__menu-item");

  if (!asideMenu || !burgerBtn) return;

  // Initially hide the menu only on mobile
  function handleStartState() {
    if (window.innerWidth < 768) {
      asideMenu.classList.add("aside-menu--hidden");
    } else {
      asideMenu.classList.remove("aside-menu--hidden");
    }
  }

  handleStartState();

  // Toggle for mobile view
  burgerBtn.addEventListener("click", () => {
    asideMenu.classList.toggle("aside-menu--hidden");  // Toggle visibility on/off //
  });

  // Highlight active menu item
  menuItems.forEach((item) => {
    item.addEventListener("click", () => {
      menuItems.forEach((el) => el.classList.remove("aside-main__menu-item--active"));
      item.classList.add("aside-main__menu-item--active");
    });
  });

  // Adjust menu visibility on window resize
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      asideMenu.classList.remove("aside-menu--hidden");
    } else {
      asideMenu.classList.add("aside-menu--hidden");
    }
  });
});
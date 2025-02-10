function loading () {
  const menuIcon = document.querySelector(".menu-icon");
  const sideMenu = document.querySelector(".side-menu");
  const menuItems = document.querySelectorAll(".button");
  const animatedElements = document.querySelectorAll(".animate-on-scroll");

  menuIcon.addEventListener("click", function () {
    sideMenu.classList.toggle("show");
  });

  menuItems.forEach((element) => {
    element.addEventListener("click", () => {
      sideMenu.classList.remove("show");
    });
  });

  function handleScroll() {
    animatedElements.forEach((element) => {
      const rect = element.getBoundingClientRect();
      const isVisible = rect.top < window.innerHeight * 0.8 && rect.bottom > 0;

      if (isVisible) {
        element.classList.add("visible");
        element.classList.remove("hidden");
      } else {
        element.classList.remove("visible");
        element.classList.add("hidden");
      }
    });
  }

  animatedElements.forEach((element) => {
    element.classList.add("hidden");
  });

  document.addEventListener("scroll", handleScroll);
  handleScroll();
};

loading();

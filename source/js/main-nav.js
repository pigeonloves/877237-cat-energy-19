  var mainNav = document.querySelector(".main-nav");
  var navToggle = document.querySelector(".main-nav__toggle");

  if (navToggle) {
    navToggle.classList.remove("main-nav__toggle--hidden");
    mainNav.classList.add("main-nav--closed");

    navToggle.addEventListener("click", function () {
      mainNav.classList.toggle("main-nav--opened");
      mainNav.classList.toggle("main-nav--closed");
    })
  };

const currentWindowUrl = window.location.href
  .split("/")
  [window.location.href.split("/").length - 1].split(".")[0];

const sideMenuBtn = document.querySelector(".menus").children[0];
const closeSideNavBtn = document.querySelector(".navigation-cross .container")
  .children[0];

const sideNavigation = document.querySelector(".side-navigation");

const propertyShowBtn = document.querySelectorAll(".sp-info-header");

const headerNavWrapper = document.querySelector(".header-wrapper");

const headerLinks = document.querySelector(".links");

const categoryBtn = document.querySelector(".agent-listing-by-category");

const headerTitle = document.querySelector(".header-title");

// Event listiners

sideMenuBtn.addEventListener("click", () => {
  sideNavigation.classList.add("side-navigation-show");
});

closeSideNavBtn.addEventListener("click", () => {
  sideNavigation.classList.remove("side-navigation-show");
});

propertyShowBtn.forEach((item) => {
  item.children[1].addEventListener("click", () => {
    if (item.children[1].classList.contains("fa-chevron-down")) {
      if (item.nextElementSibling.classList.contains("sp-desc-content")) {
        item.nextElementSibling.style.display = "block";
      } else {
        item.nextElementSibling.style.display = "flex";
      }
      item.children[1].classList = "fas fa-chevron-up";
    } else {
      item.nextElementSibling.style.display = "none";
      item.children[1].classList = "fas fa-chevron-down";
    }
  });
});

// Change color on scroll
window.addEventListener("scroll", () => {
  if (window.pageYOffset > 100) {
    headerNavWrapper.classList.add("header-wrapper-fixed");
    changeLinkColor(true);
  } else {
    headerNavWrapper.classList.remove("header-wrapper-fixed");
    changeLinkColor(false);
  }
});

function changeLinkColor(remove) {
  const links = Array.from(headerLinks.children).filter(
    (item) => !item.classList.contains("special")
  );

  links.forEach((item) => {
    if (remove) {
      item.children[0].classList.add("header-link-dark");
      headerTitle.children[0].classList.add("header-link-dark");
    } else {
      item.children[0].classList.remove("header-link-dark");
      headerTitle.children[0].classList.remove("header-link-dark");
    }
  });
}

if (currentWindowUrl === "single_agent") {
  Array.from(categoryBtn.children).forEach((button, index, array) => {
    button.addEventListener("click", () => {
      array.forEach((item) => {
        if (item.classList.contains("category-active")) {
          item.classList.remove("category-active");
          item.classList.add("category-button");
        }
      });
      if (!button.classList.contains("category-active")) {
        button.classList.add("category-active");
        button.classList.remove("category-button");
      }
    });
  });
}

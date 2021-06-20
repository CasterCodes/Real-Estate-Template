console.log(currentWindowUrl);

let chartContainer;

if (currentWindowUrl === "dashboard") {
  chartContainer = document.getElementById("myChart").getContext("2d");
}

const dashboardLeft = document.querySelector(".dashboard-left");
const dashboardLeftClose = document.querySelector(".close-dashboard-nav")
  .children[0];
const dashboardLeftOpen = document.querySelector(".dashboard-side-navigation")
  .children[0];
const navdropDown = document.getElementsByClassName("dropdown");

const dashboardLinks = document.querySelector(".dashboard-left-content")
  .children[0];
const chooseAvatarInput = document.querySelector(".choose-avatar-input");
const chooseAvatarBtn = document.querySelector(".choose-avatar-btn");
const listingFileBtn = document.querySelector(".listing-file");
const chooseListingFile = document.querySelector(".upload-listing-files");

// Event listiners
dashboardLeftOpen.addEventListener("click", () => {
  dashboardLeft.classList.add("dashboard-left-show");
  dashboardLeft.classList.remove("dashboard-left-pro");
});

dashboardLeftClose.addEventListener("click", () => {
  dashboardLeft.classList.remove("dashboard-left-show");
  dashboardLeft.classList.add("dashboard-left-pro");
});

Array.from(navdropDown).forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    if (item.children[2].classList.contains("fa-chevron-down")) {
      item.children[2].classList = "fas fa-chevron-up dashboard-more";
      item.nextElementSibling.style.display = "block";
    } else {
      item.children[2].classList = "fas fa-chevron-down dashboard-more";
      item.nextElementSibling.style.display = "none";
    }

    // item.nextElementSibling.style.display = "none";
  });
});

if (currentWindowUrl === "addlisting") {
  chooseListingFile.addEventListener("click", (e) => {
    e.preventDefault();
    listingFileBtn.click();
  });
}

if (currentWindowUrl === "messages") {
  const messageHeader = document.querySelectorAll(".message-item-header"),
    replyMessageBtn = document.querySelectorAll(".reply-message"),
    cancelReply = document.querySelectorAll(".cancel-reply");

  function changeReplyContent(action) {
    Array.from(messageHeader).forEach((headerItem) => {
      if (action) {
        headerItem.nextElementSibling.children[0].children[2].children[1].classList.add(
          "message-footer-content-show"
        );
      } else {
        headerItem.nextElementSibling.children[0].children[2].children[1].classList.remove(
          "message-footer-content-show"
        );
      }
    });
  }

  Array.from(replyMessageBtn).forEach((replyBtn) => {
    replyBtn.addEventListener("click", () => {
      changeReplyContent(true);
    });
  });
  Array.from(cancelReply).forEach((cancelBtn) => {
    cancelBtn.addEventListener("click", (e) => {
      e.preventDefault();
      changeReplyContent(false);
    });
  });

  Array.from(messageHeader).forEach((headerItem) => {
    headerItem.addEventListener("click", (e) => {
      if (
        headerItem.nextElementSibling.classList.contains("message-content-show")
      ) {
        headerItem.nextElementSibling.classList.remove("message-content-show");
        headerItem.nextElementSibling.classList.add("message-content-hide");
        headerItem.children[2].children[1].classList = "fas fa-envelope-open";
      } else {
        headerItem.children[2].children[1].classList = "fas fa-envelope";
        headerItem.nextElementSibling.classList.add("message-content-show");
        headerItem.nextElementSibling.classList.remove("message-content-hide");
      }
    });
  });
}
// chart code

const myChart = new Chart(chartContainer, {
  type: "bar",
  data: {
    labels: ["Apartments", "Rentals", "Offices", "Sales"],
    datasets: [
      {
        label: "Properties By Category",
        data: [100, 80, 70, 50],
        backgroundColor: [
          "rgba(255, 99, 132, 0.7)",
          "rgba(54, 162, 235, 0.7)",
          "rgba(255, 206, 86, 0.7)",
          "rgba(75, 192, 192, 0.7)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 2,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

if (currentWindowUrl === "profile") {
  chooseAvatarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    chooseAvatarInput.click();
  });
}

const endTime = new Date().getTime() + 10 * 60 * 60 * 1000; // 10 hours from now

function updateTimer() {
  const now = new Date().getTime();
  const remaining = endTime - now;

  const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((remaining / (1000 * 60)) % 60);
  const seconds = Math.floor((remaining / 1000) % 60);

  document.getElementById("hours").textContent = String(hours).padStart(2, "0");
  document.getElementById("minutes").textContent = String(minutes).padStart(
    2,
    "0"
  );
  document.getElementById("seconds").textContent = String(seconds).padStart(
    2,
    "0"
  );
}

updateTimer(); // Initial call
setInterval(updateTimer, 1000); // Update every second

const thumbSlider = new Swiper(".thumb-slider", {
  spaceBetween: 10,
  loop: true,
  slidesPerView: 5,
  watchSlidesProgress: true,
  freeMode: true,
});

const mainSlider = new Swiper(".main-slider", {
  spaceBetween: 10,
  autoplay: {
    delay: 3000, // 3 seconds
    disableOnInteraction: false, // keeps autoplay running after user interaction
    pauseOnMouseEnter: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbSlider,
  },
});

var swiper = new Swiper(".section__four .swiper", {
  slidesPerView: 1.2,
  spaceBetween: 10,
  centeredSlides: true,
  on: {
    slideChange: function () {
      let slides = document.querySelectorAll(".section__four .swiper-slide");
      slides.forEach((slide) => slide.classList.remove("active-scale"));
      this.slides[this.activeIndex].classList.add("active-scale");
    },
  },
  breakpoints: {
    768: {
      slidesPerView: 4,
      spaceBetween: 20,
      centeredSlides: false,
    },
  },
});
$(".acdn-heading").click(function () {
  var questionDiv = $(this);
  var answerDiv = $(this).next(".acdn-content");
  var idx = $(".acdn-content").index(answerDiv);

  $(".acdn-content").each(function (index, ansDiv) {
    if (index != idx && $(ansDiv).is(":visible")) {
      $(ansDiv).slideUp(500, function () {
        $(ansDiv).prev(".acdn-heading").removeClass("accordion-open");
      });
    }
  });

  if (answerDiv.is(":visible")) {
    answerDiv.stop().slideUp(500, function () {
      questionDiv.removeClass("accordion-open");
    });
  } else {
    questionDiv.addClass("accordion-open");
    answerDiv.stop().slideDown(500);
  }
});

// document.addEventListener("DOMContentLoaded", function () {
//   const mainCTA = document.getElementById("section__two");
//   const stickyCTA = document.getElementById("sticky-cta");

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting) {
//           stickyCTA.classList.add("d-none");
//         } else {
//           stickyCTA.classList.remove("d-none");
//         }
//       });
//     },
//     {
//       threshold: 0.1,
//     }
//   );

//   observer.observe(mainCTA);
// });

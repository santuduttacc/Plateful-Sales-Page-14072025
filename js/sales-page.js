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

var swiper = new Swiper(".section__four .swiper-container", {
  slidesPerView: 1.3, // Show 1 full + part of next
  centeredSlides: true,
  spaceBetween: 12,
  loop: true,
  grabCursor: true,
  initialSlide: 2, // start from first
  breakpoints: {
    768: {
      enabled: false, // disable Swiper on desktop
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

document.addEventListener("DOMContentLoaded", function () {
  const mainCTA = document.getElementById("section__two");
  const stickyCTA = document.getElementById("sticky-cta");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          stickyCTA.classList.add("d-none");
        } else {
          stickyCTA.classList.remove("d-none");
        }
      });
    },
    {
      threshold: 0.1,
    }
  );

  observer.observe(mainCTA);
});

//play video

const playButtons = document.querySelectorAll(".playButton");

playButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const video = button.previousElementSibling;
    video.play();
  });
});
setTimeout(() => {
  swiper.slideToLoop(0, 0); // jump to real first slide instantly
}, 100);

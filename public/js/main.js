const counters = document.querySelectorAll(".stats h2");
const section = document.querySelector(".statistics");

let started = false;

function startCounters() {
  counters.forEach((counter) => {
    let target = parseInt(counter.textContent);
    let count = 0;
    counter.textContent = 0;

    const interval = setInterval(() => {
      count++;
      counter.textContent = count;

      if (count === target) {
        clearInterval(interval);
      }
    }, 10);
  });
}

window.addEventListener("scroll", () => {
  const sectionTop = section.getBoundingClientRect().top;
  const screenHeight = window.innerHeight;

  if (sectionTop < screenHeight && !started) {
    started = true;
    startCounters();
  }
});

//!Menu JS
const startersBtn = document.querySelector(".categories .starters");
const breakfastBtn = document.querySelector(".categories .breakfast");
const lunchBtn = document.querySelector(".categories .lunch");
const dinnerBtn = document.querySelector(".categories .dinner");
const categoryName = document.querySelector(".categoriesName span");
const allItems = document.querySelectorAll(".menuItems .items");

startersBtn.addEventListener("click", () => {
  startersBtn.classList.add("active");
  breakfastBtn.classList.remove("active");
  lunchBtn.classList.remove("active");
  dinnerBtn.classList.remove("active");
  categoryName.textContent = "STARTERS";

  allItems.forEach((item) => {
    item.classList.remove("hide");
    item.style.display = "flex";
  });
});

breakfastBtn.addEventListener("click", () => {
  startersBtn.classList.remove("active");
  breakfastBtn.classList.add("active");
  lunchBtn.classList.remove("active");
  dinnerBtn.classList.remove("active");
  categoryName.textContent = "BREAKFAST";

  allItems.forEach((item) => {
    if (item.classList.contains("breakfast")) {
      item.classList.remove("hide");
      item.style.display = "flex";
    } else {
      item.classList.add("hide");
      setTimeout(() => (item.style.display = "none"), 300);
    }
  });
});

lunchBtn.addEventListener("click", () => {
  startersBtn.classList.remove("active");
  breakfastBtn.classList.remove("active");
  lunchBtn.classList.add("active");
  dinnerBtn.classList.remove("active");
  categoryName.textContent = "LUNCH";

  allItems.forEach((item) => {
    if (item.classList.contains("lunch")) {
      item.classList.remove("hide");
      item.style.display = "flex";
    } else {
      item.classList.add("hide");
      setTimeout(() => (item.style.display = "none"), 300);
    }
  });
});

dinnerBtn.addEventListener("click", () => {
  startersBtn.classList.remove("active");
  breakfastBtn.classList.remove("active");
  lunchBtn.classList.remove("active");
  dinnerBtn.classList.add("active");
  categoryName.textContent = "DINNER";

  allItems.forEach((item) => {
    if (item.classList.contains("dinner")) {
      item.classList.remove("hide");
      item.style.display = "flex";
    } else {
      item.classList.add("hide");
      setTimeout(() => (item.style.display = "none"), 300);
    }
  });
});

//!Testimonials carousel js
const testimonialsTrack = document.querySelector(".testimonials .track");
const testimonialsSlides = document.querySelectorAll(".testimonials .slide");
const testimonialsDots = document.querySelectorAll(".testimonials .dot");
let currentTestimonialSlide = 0;
const totalTestimonialSlides = testimonialsSlides.length;
let autoTestimonialInterval;

// Only run if testimonials section exists
if (testimonialsTrack && testimonialsSlides.length > 0) {
  testimonialsDots[0].classList.add("active");

  testimonialsSlides.forEach((slide) => {
    slide.style.display = "flex";
  });

  testimonialsDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      currentTestimonialSlide = index;
      updateTestimonialCarousel();
      resetTestimonialAutoSlide();
    });
  });

  function updateTestimonialCarousel() {
    const offset = currentTestimonialSlide * 100;
    testimonialsTrack.style.transform = `translateX(-${offset}%)`;

    testimonialsDots.forEach((dot) => dot.classList.remove("active"));
    testimonialsDots[currentTestimonialSlide].classList.add("active");
  }

  function autoTestimonialSlide() {
    if (currentTestimonialSlide >= totalTestimonialSlides - 1) {
      currentTestimonialSlide = 0;
    } else {
      currentTestimonialSlide++;
    }
    updateTestimonialCarousel();
  }

  function resetTestimonialAutoSlide() {
    clearInterval(autoTestimonialInterval);
    autoTestimonialInterval = setInterval(autoTestimonialSlide, 5000);
  }

  autoTestimonialInterval = setInterval(autoTestimonialSlide, 5000);
}

//!ehe
const track = document.querySelector(".events .track");
const slides = document.querySelectorAll(".events .slide");
const dots = document.querySelectorAll(".events .dot");

let index = 0;

function getSlideWidth() {
  const slide = slides[0];
  const gap = parseFloat(getComputedStyle(track).gap) || 0;
  return slide.offsetWidth + gap;
}

function getVisibleSlides() {
  if (window.innerWidth <= 768) return 1;
  if (window.innerWidth <= 1024) return 2;
  return 3;
}

function updateCarousel() {
  const slideWidth = getSlideWidth();
  track.style.transform = `translateX(-${index * slideWidth}px)`;

  dots.forEach((dot) => dot.classList.remove("active"));
  dots[index].classList.add("active");
}

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
});

setInterval(() => {
  const maxIndex = slides.length - getVisibleSlides();

  index++;

  if (index > maxIndex) {
    index = 0;
  }

  updateCarousel();
}, 5000);

window.addEventListener("resize", updateCarousel);
//!Socials appearness
const chefCards = document.querySelectorAll(".chefItems");

chefCards.forEach((card) => {
  const socials = card.querySelector(".socials");

  card.addEventListener("mouseenter", () => {
    socials.classList.add("show");
  });

  card.addEventListener("mouseleave", () => {
    socials.classList.remove("show");
  });
});

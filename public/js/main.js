//!counter dial statistics section
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
    }, 1);
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
let isTransitioning = false;


if (testimonialsTrack && testimonialsSlides.length > 0) {
  testimonialsDots[0].classList.add("active");

  testimonialsDots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      if (isTransitioning) return;
      currentTestimonialSlide = index;
      updateTestimonialCarousel();
      resetTestimonialAutoSlide();
    });
  });

  function updateTestimonialCarousel() {
    isTransitioning = true;
    const offset = currentTestimonialSlide * 100;
    testimonialsTrack.style.transform = `translateX(-${offset}%)`;

    testimonialsDots.forEach((dot) => dot.classList.remove("active"));
    testimonialsDots[currentTestimonialSlide].classList.add("active");

    setTimeout(() => {
      isTransitioning = false;
    }, 600); 
  }

  function autoTestimonialSlide() {
    if (isTransitioning) return;
    
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

  testimonialsTrack.addEventListener('mouseenter', () => {
    clearInterval(autoTestimonialInterval);
  });

  testimonialsTrack.addEventListener('mouseleave', () => {
    autoTestimonialInterval = setInterval(autoTestimonialSlide, 5000);
  });
}

//!Events Carosel
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
//!Socials appearness in the chef section
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

//!Gallery carossel 
//!Gallery carousel
const galleryTrack = document.querySelector(".gallery .track");
const gallerySlides = document.querySelectorAll(".gallery .slide");
const galleryDots = document.querySelectorAll(".gallery .dot");

let galleryIndex = 0;
let galleryAutoInterval;


if (galleryTrack && gallerySlides.length > 0) {
  galleryDots[0].classList.add("active");

  function getGallerySlideWidth() {
    const slide = gallerySlides[0];
    const gap = parseFloat(getComputedStyle(galleryTrack).gap) || 0;
    return slide.offsetWidth + gap;
  }

  function getGalleryVisibleSlides() {
    if (window.innerWidth <= 768) return 1;
    if (window.innerWidth <= 1024) return 2;
    return 3;
  }

  function updateGalleryCarousel() {
    const slideWidth = getGallerySlideWidth();
    galleryTrack.style.transform = `translateX(-${galleryIndex * slideWidth}px)`;

    galleryDots.forEach((dot) => dot.classList.remove("active"));
    galleryDots[galleryIndex].classList.add("active");
  }

  galleryDots.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      galleryIndex = i;
      updateGalleryCarousel();
      resetGalleryAutoSlide();
    });
  });

  function autoGallerySlide() {
    const maxIndex = gallerySlides.length - getGalleryVisibleSlides();

    galleryIndex++;

    if (galleryIndex > maxIndex) {
      galleryIndex = 0;
    }

    updateGalleryCarousel();
  }

  function resetGalleryAutoSlide() {
    clearInterval(galleryAutoInterval);
    galleryAutoInterval = setInterval(autoGallerySlide, 3000);
  }

  galleryAutoInterval = setInterval(autoGallerySlide, 3000);

  window.addEventListener("resize", updateGalleryCarousel);
}

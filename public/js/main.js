//!Statistics counter function 
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);
  
  const updateCounter = () => {
    start += increment;
    
    if (start < target) {
      element.textContent = Math.floor(start);
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target;
    }
  };
  
  updateCounter();
}

function handleCounterAnimation() {
  const statisticsSection = document.querySelector('.statistics');
  const counters = document.querySelectorAll('.stats h2');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        counters.forEach(counter => {
          const target = parseInt(counter.textContent);
          counter.textContent = '0';
          animateCounter(counter, target);
        });
        
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });
  
  observer.observe(statisticsSection);
}

document.addEventListener('DOMContentLoaded', handleCounterAnimation);

//!Menu JS
const startersBtn = document.querySelector('.categories .starters');
const breakfastBtn = document.querySelector('.categories .breakfast');
const lunchBtn = document.querySelector('.categories .lunch');
const dinnerBtn = document.querySelector('.categories .dinner');
const categoryName = document.querySelector('.categoriesName span');
const allItems = document.querySelectorAll('.menuItems .items');

startersBtn.addEventListener('click', () => {
  startersBtn.classList.add('active');
  breakfastBtn.classList.remove('active');
  lunchBtn.classList.remove('active');
  dinnerBtn.classList.remove('active');
  categoryName.textContent = 'STARTERS';
  
  allItems.forEach(item => {
    item.classList.remove('hide');
    item.style.display = 'flex';
  });
});

breakfastBtn.addEventListener('click', () => {
  startersBtn.classList.remove('active');
  breakfastBtn.classList.add('active');
  lunchBtn.classList.remove('active');
  dinnerBtn.classList.remove('active');
  categoryName.textContent = 'BREAKFAST';
  
  allItems.forEach(item => {
    if (item.classList.contains('breakfast')) {
      item.classList.remove('hide');
      item.style.display = 'flex';
    } else {
      item.classList.add('hide');
      setTimeout(() => item.style.display = 'none', 300);
    }
  });
});

lunchBtn.addEventListener('click', () => {
  startersBtn.classList.remove('active');
  breakfastBtn.classList.remove('active');
  lunchBtn.classList.add('active');
  dinnerBtn.classList.remove('active');
  categoryName.textContent = 'LUNCH';
  
  allItems.forEach(item => {
    if (item.classList.contains('lunch')) {
      item.classList.remove('hide');
      item.style.display = 'flex';
    } else {
      item.classList.add('hide');
      setTimeout(() => item.style.display = 'none', 300);
    }
  });
});

dinnerBtn.addEventListener('click', () => {
  startersBtn.classList.remove('active');
  breakfastBtn.classList.remove('active');
  lunchBtn.classList.remove('active');
  dinnerBtn.classList.add('active');
  categoryName.textContent = 'DINNER';
  
  allItems.forEach(item => {
    if (item.classList.contains('dinner')) {
      item.classList.remove('hide');
      item.style.display = 'flex';
    } else {
      item.classList.add('hide');
      setTimeout(() => item.style.display = 'none', 300);
    }
  });
});

//!Testomonials carosel js
const track = document.querySelector('.track');
const slides = document.querySelectorAll('.slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
const totalSlides = slides.length;
let autoSlideInterval;

dots[0].classList.add('active');

slides.forEach(slide => {
  slide.style.display = 'flex';
});

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentSlide = index;
    updateCarousel();
    resetAutoSlide();
  });
});

function updateCarousel() {
  const offset = currentSlide * 100;
  track.style.transform = `translateX(-${offset}%)`;
  
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentSlide].classList.add('active');
}

function autoSlide() {
  if (currentSlide >= totalSlides - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  updateCarousel();
}

function resetAutoSlide() {
  clearInterval(autoSlideInterval);
  autoSlideInterval = setInterval(autoSlide, 5000);
}

autoSlideInterval = setInterval(autoSlide, 5000);
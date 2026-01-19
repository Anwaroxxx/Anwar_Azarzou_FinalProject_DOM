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
document.addEventListener('DOMContentLoaded', function() {
  const starters = document.querySelector('.starters');
  const breakfast = document.querySelector('.breakfast');
  const lunch = document.querySelector('.lunch');
  const dinner = document.querySelector('.dinner');
  const categoryName = document.querySelector('.categoriesName span');
  const allCategories = [starters, breakfast, lunch, dinner];

  starters.addEventListener('click', function() {
    removeActive();
    starters.classList.add('active');
    categoryName.textContent = 'STARTERS';
  });

  breakfast.addEventListener('click', function() {
    removeActive();
    breakfast.classList.add('active');
    categoryName.textContent = 'BREAKFAST';
  });

  lunch.addEventListener('click', function() {
    removeActive();
    lunch.classList.add('active');
    categoryName.textContent = 'LUNCH';
  });

  dinner.addEventListener('click', function() {
    removeActive();
    dinner.classList.add('active');
    categoryName.textContent = 'DINNER';
  });

  function removeActive() {
    allCategories.forEach(cat => {
      cat.classList.remove('active');
    });
  }
});
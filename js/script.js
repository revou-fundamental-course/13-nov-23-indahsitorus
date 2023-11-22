document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault();


        if (validateForm()) {
            alert('Form submitted successfully!');
        }
    });

    function validateForm() {
        const nameInput = document.getElementById('fname');
        const emailInput = document.getElementById('lname');
        const interestInput = document.getElementById('interest');

        if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || interestInput.value.trim() === 'Select option') {
            alert('Please fill in all required fields.');
            return false;
        }



        return true;
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const slidesContainer = document.querySelector('.slides');
    let currentSlideIndex = 0;
  
 
    const slideImages = [
      
      '1.jpg',
      '2.jpg',
      '3.jpg',
      '4.jpg',
     
    ];
  
    function showSlide(index) {
      slidesContainer.style.transform = `translateX(${-index * 100}%)`;
    }
  
    function nextSlide() {
      currentSlideIndex = (currentSlideIndex + 1) % slideImages.length;
      showSlide(currentSlideIndex);
    }
  
  
    showSlide(currentSlideIndex);
  

    setInterval(nextSlide, 3000);
  });
  
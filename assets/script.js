document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider li');
    const descriptions = document.querySelectorAll('.slider .slide-description');

    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].querySelector('input').checked = false;
        descriptions[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].querySelector('input').checked = true;
        descriptions.forEach(description => description.classList.remove('active')); // Remove a classe 'active' de todas as descrições
        descriptions[currentSlide].classList.add('active'); // Adiciona a classe 'active' apenas à descrição correspondente ao slide atual
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 5000);
});

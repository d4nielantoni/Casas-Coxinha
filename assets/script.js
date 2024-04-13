document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider li');
    let currentSlide = 0;

    function nextSlide() {
        slides[currentSlide].querySelector('input').checked = false; // Desmarca o input atual
        currentSlide = (currentSlide + 1) % slides.length; // Avança para o próximo slide
        slides[currentSlide].querySelector('input').checked = true; // Marca o input do próximo slide
    }

    setInterval(nextSlide, 5000); // Muda de slide a cada 5 segundos
});

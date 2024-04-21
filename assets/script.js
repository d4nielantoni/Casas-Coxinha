document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll('.slider li');
    const descriptions = document.querySelectorAll('.slider .slide-description');

    let currentSlide = 0;

    function showSlide(index) {
        slides[currentSlide].querySelector('input').checked = false;
        descriptions[currentSlide].classList.remove('active');
        currentSlide = (index + slides.length) % slides.length;
        slides[currentSlide].querySelector('input').checked = true;
        descriptions.forEach(description => description.classList.remove('active'));
        descriptions[currentSlide].classList.add('active'); 
}

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    setInterval(nextSlide, 5000);
});

const addToCart=document.querySelectorAll('[data-btn-action="add-btn-cart"]');

const closeModal=document.querySelector('.jsModalClose');

addToCart.forEach(btn => {
    
    btn.addEventListener('click',(event)=>{

        const nameModal=event.target.getAttribute('data-modal');

        const modal=document.querySelector(nameModal);

        //abrimos el modal
        modal.classList.add('active');

    })

});

//CERRAR EL MODAL
closeModal.addEventListener('click',(event)=>{
    event.target.parentNode.parentNode.classList.remove('active');
})

//CERRAMOS MODAL CUANDO HACEMOS CLICK FUERA DEL CONTENDINO DEL MODAL
window.onclick = (event)=>{
    const modal=document.querySelector('.modal.active');

    if(event.target == modal){
        modal.classList.remove('active');
    }
}

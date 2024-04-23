document.addEventListener("DOMContentLoaded", function () {
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

// Variáveis para armazenar o subtotal e os produtos no carrinho
let subtotal = 0.00;
const cartItems = [];

// Função para atualizar o subtotal e o total
function updateTotal() {
    const subtotalAmount = document.getElementById('subtotalAmount');
    subtotalAmount.textContent = `R$${subtotal.toFixed(2)}`;

    const totalAmount = document.getElementById('totalAmount');
    totalAmount.textContent = `R$${subtotal.toFixed(2)}`;
}

// Função para adicionar um produto ao carrinho
function addToCartHandler(event) {
    const nameModal = event.target.getAttribute('data-modal');
    const modal = document.querySelector(nameModal);
    modal.classList.add('active');

    // Obter os detalhes do produto adicionado
    const productName = event.target.getAttribute('data-product');
    const productPrice = parseFloat(event.target.getAttribute('data-price'));

    // Adicionar o produto ao carrinho
    cartItems.push({ name: productName, price: productPrice });
    subtotal += productPrice;

    // Criar o elemento do produto no carrinho
    const cartList = document.querySelector('.modal__list');
    const cartItem = document.createElement('div');
    cartItem.classList.add('modal__item');
    cartItem.innerHTML = `
        <div class="modal__thumb">
            <img src="./assets/img/${productName}.jpg" alt="${productName}">
        </div>
        <div class="modal__text-product">
            <p>${productName}</p>
            <p><strong>R$${productPrice.toFixed(2)}</strong></p>
        </div>
    `;
    cartList.appendChild(cartItem);

    // Atualizar subtotal e total
    updateTotal();
}

// Event listener para o clique no botão "Adicionar ao carrinho"
const addToCartButtons = document.querySelectorAll('[data-btn-action="add-btn-cart"]');
addToCartButtons.forEach(btn => {
    btn.addEventListener('click', addToCartHandler);
});

// Event listener para o fechamento do modal
const closeModal = document.querySelector('.jsModalClose');
closeModal.addEventListener('click', (event) => {
    event.target.parentNode.parentNode.classList.remove('active');
});

// Event listener para fechar o modal ao clicar fora dele
window.onclick = (event) => {
    const modal = document.querySelector('.modal.active');
    if (event.target == modal) {
        modal.classList.remove('active');
    }
};

//Botoes das categorias

document.addEventListener('DOMContentLoaded', function () {
    // Obter todos os botões de categoria
    const categoryButtons = document.querySelectorAll('.category-btn');

    // Função para atualizar a classe ativa
    function updateActiveButton(clickedButton) {
        // Remover a classe ativa de todos os botões
        categoryButtons.forEach(button => {
            button.classList.remove('active-btn');
        });
        // Adicionar a classe ativa ao botão clicado
        clickedButton.classList.add('active-btn');
    }

    // Evento de clique no botão Bebidas
    document.querySelector('.category-btn[data-category="Bebidas"]').addEventListener('click', function () {
        // Atualizar o botão ativo
        updateActiveButton(this);
        // Filtra os produtos para mostrar apenas bebidas
        const allProducts = document.querySelectorAll('.product-grid__item');
        allProducts.forEach(function (product) {
            const category = product.getAttribute('data-category');
            // Verifica a categoria do produto
            if (category !== 'Bebidas') {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        });
    });

    // Evento de clique no botão Comidas
    document.querySelector('.category-btn[data-category="Comidas"]').addEventListener('click', function () {
        // Atualizar o botão ativo
        updateActiveButton(this);
        // Filtra os produtos para mostrar apenas comidas
        const allProducts = document.querySelectorAll('.product-grid__item');
        allProducts.forEach(function (product) {
            const category = product.getAttribute('data-category');
            // Verifica a categoria do produto
            if (category !== 'Comidas') {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        });
    });

    // Evento de clique no botão Produtos
    document.querySelector('.category-btn[data-category="Produtos"]').addEventListener('click', function () {
        // Atualizar o botão ativo
        updateActiveButton(this);
        // Filtra os produtos para mostrar apenas produtos
        const allProducts = document.querySelectorAll('.product-grid__item');
        allProducts.forEach(function (product) {
            const category = product.getAttribute('data-category');
            // Verifica a categoria do produto
            if (category !== 'Produtos') {
                product.style.display = 'none';
            } else {
                product.style.display = 'block';
            }
        });
    });
});

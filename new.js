// Элементы
const carouselSlide = document.getElementById('carouselSlide');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const totalImages = dots.length;
let currentIndex = 0;

// Перейти к слайду
function goToSlide(index) {
    if (index < 0 || index >= totalImages) return;

    currentIndex = index;
    carouselSlide.style.transform = `translateX(-${currentIndex * 20}%)`;

    // Обновить точки
    dots.forEach((dot, i) => {
        dot.classList.toggle('active', i === currentIndex);
    });
}

// Обработчики для точек
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'));
        goToSlide(index);
    });
});

// Обработчики для стрелок
prevBtn.addEventListener('click', () => {
    if (currentIndex > 0) {
        goToSlide(currentIndex - 1);
    }
});

nextBtn.addEventListener('click', () => {
    if (currentIndex < totalImages - 1) {
        goToSlide(currentIndex + 1);
    }
});

// Инициализация
goToSlide(0); // Показать первый слайд
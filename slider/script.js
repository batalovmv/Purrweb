const images = document.querySelectorAll('.slider-img');
const controlls = document.querySelectorAll('.controlls');
const dotsContainer = document.querySelector('.dots');
let imageIndex = 0;
let animating = false;
document.querySelector('.next').addEventListener('click', () => {
    if (animating) return;
    let newIndex = imageIndex + 1;
    if (newIndex >= images.length) {
        newIndex = 0;
    }
    animateSlide(imageIndex, newIndex, 'next');
    imageIndex = newIndex;
});
document.querySelector('.prev').addEventListener('click', () => {
    if (animating) return;
    let newIndex = imageIndex - 1;
    if (newIndex < 0) {
        newIndex = images.length - 1;
    }
    animateSlide(imageIndex, newIndex, 'prev');
    imageIndex = newIndex;
});
images.forEach((_, index) => {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => {
        if (animating || index === imageIndex) return;
        show(index);
    });
    dotsContainer.appendChild(dot);
});

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, idx) => {
        if (idx === imageIndex) {
            dot.classList.add('active');
        } else {
            dot.classList.remove('active');
        }
    });
}
function animateSlide(fromIndex, toIndex, direction) {
    animating = true; 
    const fromImage = images[fromIndex];
    const toImage = images[toIndex];
    let currentPosition = direction === 'next' ? 100 : -100;
    toImage.style.left = `${currentPosition}%`;
    toImage.classList.add('active');

    const step = direction === 'next' ? -5 : 5;

    const animation = setInterval(() => {
        currentPosition += step;

        if ((direction === 'next' && currentPosition <= 0) || (direction === 'prev' && currentPosition >= 0)) {
            clearInterval(animation);
            toImage.style.left = '0%';
            fromImage.classList.remove('active');
            animating = false; 
        } else {
            toImage.style.left = `${currentPosition}%`;
        }
        updateDots();
    }, 20);
}

function show(index) {
    if (animating || index === imageIndex) return;
    animating = true;
    const direction = index > imageIndex ? 'next' : 'prev';
    animateSlide(imageIndex, index, direction);
    imageIndex = index;
    updateDots();  
}
controlls.forEach((e) => {
    e.addEventListener('click', () => {
        let newIndex = imageIndex;
        show(newIndex);
    });
});
show(1)
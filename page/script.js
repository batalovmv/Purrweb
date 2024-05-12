document.addEventListener("DOMContentLoaded", function () {
    const scrollers = document.querySelectorAll('.horizontal-scrolling-items');

    scrollers.forEach(scroller => {
        let totalWidth = 0;
        const items = Array.from(scroller.children);
        items.forEach(item => {
            totalWidth += item.offsetWidth + parseInt(window.getComputedStyle(item).marginLeft) + parseInt(window.getComputedStyle(item).marginRight);
        });

        scroller.style.width = `${totalWidth * 2}px`; // Удваиваем ширину для клонирования
        scroller.appendChild(scroller.cloneNode(true)); // Добавление клонированного содержимого

        const animationDuration = totalWidth / 30; // Расчет продолжительности анимации
        scroller.style.animationDuration = `${animationDuration}s`;
    });
});
document.querySelectorAll('.openModal').forEach(function (button) {
    button.onclick = function () {
        document.getElementById('myModal').style.display = "block";
    };
});

document.getElementsByClassName('close')[0].onclick = function () {
    document.getElementById('myModal').style.display = "none";
};

window.onclick = function (event) {
    if (event.target === document.getElementById('myModal')) {
        document.getElementById('myModal').style.display = "none";
    }
};

document.getElementById('phone').addEventListener('input', function (e) {
    var x = e.target.value.replace(/\D/g, '').match(/(\d{0,1})(\d{0,3})(\d{0,3})(\d{0,2})(\d{0,2})/);
    e.target.value = '+' + x[1] + (x[2] ? ' ' + x[2] : '') + (x[3] ? ' ' + x[3] : '') + (x[4] ? ' ' + x[4] : '') + (x[5] ? ' ' + x[5] : '');
});
document.getElementById('registrationForm').addEventListener('submit', function (event) {
    let isValid = true;

    // Валидация для поля email
    const email = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (!email.value.includes('@')) {
        email.classList.add('invalid');
        emailError.textContent = 'Введите корректный email.';
        isValid = false;
    } else {
        email.classList.remove('invalid');
        emailError.textContent = '';
    }

    // Валидация для поля имени
    const name = document.getElementById('name');
    const nameError = document.getElementById('name-error');
    if (name.value.trim() === '') {
        name.classList.add('invalid');
        nameError.textContent = 'Имя не может быть пустым.';
        isValid = false;
    } else if (name.value.length < 2) {
        name.classList.add('invalid');
        nameError.textContent = 'Имя должно содержать минимум 2 символа.';
        isValid = false;
    } else {
        name.classList.remove('invalid');
        nameError.textContent = '';
    }

    // Валидация для поля телефона
    const phone = document.getElementById('phone');
    const phoneError = document.getElementById('phone-error');
    const phoneRegex = /^\+\d{1,2} \d{3} \d{3} \d{2} \d{2}$/; 
    if (!phoneRegex.test(phone.value)) {
        phone.classList.add('invalid');
        phoneError.textContent = 'Введите телефон в формате +X XXX XXX XX XX.';
        isValid = false;
    } else {
        phone.classList.remove('invalid');
        phoneError.textContent = '';
    }

    if (!isValid) {
        event.preventDefault();
        
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const infoModal = document.getElementById('infoModal');
    const infoCloseBtn = infoModal.querySelector('.close');
    const myModal = document.getElementById('myModal');
    const myCloseBtn = myModal.querySelector('.close');

    function openModal(modal) {
        if (modal.style.display !== 'block') {
            modal.style.display = 'block';
        }
    }


    function closeModal(modal) {
        modal.style.display = 'none';
    }


    infoCloseBtn.addEventListener('click', function () {
        closeModal(infoModal);
    });

 
    myCloseBtn.addEventListener('click', function () {
        closeModal(myModal);
    });

    window.addEventListener('click', function (event) {
        if (event.target == infoModal) {
            closeModal(infoModal);
        } else if (event.target == myModal) {
            closeModal(myModal);
        }
    });

    const buttons = infoModal.querySelectorAll('.modal-button');
    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            closeModal(infoModal);
        });
    });

    openModal(infoModal);
});

document.addEventListener('DOMContentLoaded', function () {
    const burgerButton = document.querySelector('.burger-btn');
    const burgerMenu = document.querySelector('.burger-menu');
    const closeButton = document.querySelector('.close-btn');
    const menuLinks = document.querySelectorAll('.burger-menu a'); 

    burgerButton.addEventListener('click', function () {
        burgerMenu.classList.add('open');
    });

    closeButton.addEventListener('click', function () {
        burgerMenu.classList.remove('open');
    });


    menuLinks.forEach(function (link) {
        link.addEventListener('click', function () {
            burgerMenu.classList.remove('open');
        });
    });


    document.addEventListener('click', function (event) {
        if (!burgerButton.contains(event.target) && !burgerMenu.contains(event.target) && !closeButton.contains(event.target)) {
            burgerMenu.classList.remove('open');
        }
    });
});
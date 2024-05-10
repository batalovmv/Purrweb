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
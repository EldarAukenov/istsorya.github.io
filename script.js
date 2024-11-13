document.addEventListener("DOMContentLoaded", function() {
    const buttonContainers = document.querySelectorAll('.anchor-button-container, .wide-anchor-button-container');

    buttonContainers.forEach(container => {
        const button = container.querySelector('.anchor-button');
        const content = container.querySelector('.anchor-text');

        button.addEventListener('click', function() {
            // Переключаем класс "active" на контейнере
            container.classList.toggle('active');

            // Проверяем состояние контента и задаем max-height в зависимости от состояния
            if (container.classList.contains('active')) {
                content.style.maxHeight = content.scrollHeight + "px";
            } else {
                content.style.maxHeight = "0";
            }
        });
    });
});
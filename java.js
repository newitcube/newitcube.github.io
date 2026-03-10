document.addEventListener('DOMContentLoaded', () => {
    // Находим все кнопки вопросов в FAQ
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;

            // Если нужно, чтобы при открытии одного вопроса закрывались другие (аккордеон):
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                }
            });

            // Переключаем класс active у текущего элемента
            currentItem.classList.toggle('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    // --- АККОРДЕОН FAQ ---
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const currentItem = question.parentElement;

            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== currentItem) {
                    item.classList.remove('active');
                }
            });

            currentItem.classList.toggle('active');
        });
    });

    // --- МОБИЛЬНОЕ МЕНЮ (БУРГЕР) ---
    const burgerMenu = document.getElementById('burgerMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    // Открыть меню
    if (burgerMenu && mobileMenu) {
        burgerMenu.addEventListener('click', () => {
            mobileMenu.classList.add('active');
            document.body.style.overflow = 'hidden'; // Запрет прокрутки сайта под меню
        });
    }

    // Закрыть меню (по крестику)
    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = ''; // Возврат прокрутки
        });
    }

    // Закрыть меню при клике на любую ссылку (чтобы перейти к разделу)
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});

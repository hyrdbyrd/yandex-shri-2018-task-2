(function () {
    window.addEventListener('load', () => {
        const header = document.body.querySelector('.header-container');
        const navigation = header.querySelector('.navigation_header_phone_screen');
        const activeClass = 'navigation_header_phone_screen_active';

        header
            .querySelector('.burger')
            .addEventListener('click', function () {
                navigation.classList.toggle(activeClass);
            });
    });
})();
import Popup from './popup.js';
(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const shade = document.body.querySelector('.shade');
        const popups = document.body.querySelectorAll('.popup');
        [...popups].forEach(popup => {
            const wrapper = popup.querySelector('.popup-wrapper');
            const popupItem = popup.querySelector('.popup__item');

            const options = popup.querySelector('.popup-options');

            const close = options.querySelector('.popup-options__close_close');
            const apply = options.querySelector('.popup-options__close_apply');

            new Popup(popupItem, wrapper, [close, apply], [options, shade]);
        });
    });
})();
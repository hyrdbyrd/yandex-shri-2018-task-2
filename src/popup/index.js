import Popup from './popup.js'
(function () {
    window.addEventListener('load', e => {
        const shade = document.body.querySelector('.shade');
        const popups = document.body.querySelectorAll('.popup');
        popups.forEach(popup => {
            const wrapper = popup.querySelector('.popup-wrapper')
            const popupItem = popup.querySelector('.popup__item');
            
            const options = popup.querySelector('.options');

            const close = options.querySelector('.options__close_close');
            const apply = options.querySelector('.options__close_apply');

            const navigation = popup.querySelector('.navigation');

            new Popup(popupItem, wrapper, [close, apply], [navigation, options, shade]);
        });
    });
})()
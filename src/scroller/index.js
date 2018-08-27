import Scroller from './scroller';
(function () {
    window.addEventListener('load', e => {
        const scrollers = document.body.querySelectorAll('.popup-navigation_scroller');

        scrollers.forEach((scroller, i) => {
            const value = scroller.getAttribute('value');
            const thumb = scroller.querySelector('.scroller-wrapper__thumb');

            new Scroller(scroller, thumb, { value, max: 30, min: -10 });
        });
    });
})()
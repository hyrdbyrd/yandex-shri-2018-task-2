import Roller from './roller';
(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const rollers = document.body.querySelectorAll('.roller-wrapper');
        [...rollers].forEach(roller => {
            const arrow = roller.querySelector('.roller-arrow-wrapper');
            const filler = roller.querySelector('.roller__filler');
            new Roller(roller, arrow, filler);
        });
    });
})();
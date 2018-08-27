import Roller from './roller';

(function () {
    window.addEventListener('load', () => {
        const rollers = document.body.querySelectorAll('.roller-temperature');

        rollers.forEach(roller => {
            const arrow = roller.querySelector('.roller-temperature__arrow');
            new Roller (roller, arrow);
        });
    });
})();
import Filter from './filter.js';
(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const options = document.body.querySelectorAll('.content-options');
        if (!options) 
            return;

        [...options].forEach(option => {
            if (!option) 
                return;

            const filterNav = option.querySelector('.filter_favorites');
            if (!filterNav)
                return;
                
            const filterList = [...filterNav.querySelectorAll('.filter__option')];
            if (!filterList)
                return;

            const deviceList = [...option.parentElement.querySelectorAll('.popup')];
            if (!deviceList)
                return;

            new Filter(filterList, deviceList, filterNav);
        });
    });
})();
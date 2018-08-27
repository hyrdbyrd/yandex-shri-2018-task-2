import Filter from './filter.js';
(function () {
    window.addEventListener('load', e => {
        const options = document.body.querySelectorAll('.content-options');
        options.forEach(options => {
            const filterNav = options.querySelector('.navigation-list');

            if (!filterNav)
                return;

            const filterList = [...filterNav.querySelectorAll('.filter__option')];

            if (!filterList)
                return;

            const deviceList = [...options.parentElement.querySelector('.navigation-list_favorites').children];

            if (!deviceList)
                return

            new Filter(filterNav, filterList, deviceList);
        });
    });
})()
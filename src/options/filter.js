export default class Filter {
    constructor (filterNav, filterList, deviceList) {
        this.filter = {
            navigationElement: filterNav,
            list: [...filterList.map(e => ({
                element: e,
                value: e.innerHTML.replace(/[\n ]/gi, '')
            }))],
            filterActiveClass: 'filter__option_active',
            navigationActiveClass: 'navigation-list_filter_active'
        };
        this.devices = [...deviceList.map(e => ({
            element: e,
            value: e.getAttribute('data-filter')
        }))];

        this.init;
    }
    get init () {
        const eventsList = [];

        this.filter.list.forEach((option, index) => {
            eventsList.push({
                self: this,
                value: option.value,
                element: option.element,
                handleEvent: this.onClick
            });
            option.element.addEventListener('click', eventsList[index]);
        });

        return null;
    }
    onClick () {
        const { self, value, element } = this;
        const { filterActiveClass: activeClass } = self.filter;

        const isActive = element.classList.contains(activeClass);
        if (isActive) {
            self.switchNavState;
            return;
        }

        self.toggleFilter('Все');
        self.toggleFilter(value);
        self.filter.navigationElement.querySelector(`.${activeClass}`).classList.remove(activeClass);
        element.classList.add(activeClass);
    }
    get switchNavState () {
        const { navigationElement: navigation, navigationActiveClass: activeClass } = this.filter;
        navigation.classList.toggle(activeClass);
    }
    toggleFilter (value) {
        const { devices } = this;
        if (value === 'Все') {
            devices.forEach(device => {
                device.element.style.display = '';
            });
            return;
        }
        devices.forEach(device => {
            if (device.value !== value) {
                device.element.style.display = 'none';
            }
        });
    
        return null;
    }
}
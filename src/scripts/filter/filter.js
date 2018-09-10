export default class Filter {
    constructor(filterList, deviceList, filterNav) {
        this.filter = {
            list: [...filterList.map(e => (
                {
                    element: e,
                    value: e.innerHTML.replace(/[\n ]/gi, '')
                }
            ))]
        };
        this.devices = [...deviceList.map(e => ({
            element: e,
            value: e.getAttribute('data-filter')
        }))];

        this.nav = filterNav;

        this.init;
    }
    onResize () {
        const { nav } = this;
        const w = window.innerWidth;
        if (w <= 799) {
            nav.setAttribute('size', 1);
        } else {
            nav.setAttribute('size', 2);
        }
    }
    get init() {
        const eventsList = [];
        this.filter.list.forEach((obj, index) => {
            eventsList.push({
                self: this,
                value: obj.value,
                element: obj.element,
                handleEvent: this.onClick
            });
            obj.element.addEventListener('click', eventsList[index]);
        });

        this.onResize();
        window.addEventListener('resize', this.onResize.bind(this));
        return null;
    }
    onClick() {
        const { self, value } = this;

        self.toggleFilter('Все');
        self.toggleFilter(value);
    }
    toggleFilter(value) {
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
    }
}
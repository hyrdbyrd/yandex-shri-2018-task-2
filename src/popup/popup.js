export default class Popup {
    constructor (popup, wrapper, closeItems, transparentItems) {
        this.popup = {
            element: popup, // Ссылка на попап-блок
            wrapper: wrapper, // Обертка для выезжающей части попапа
            close: closeItems, // Все элементы, на которых будет происходит событие закрытия
            transparent: transparentItems, // Все те элементы, которые будут в зависимости от состояния прозрачные или нет
            state: true // Состояние - если правда, то на данный момент, этот попап можно открытть, иначе, закрыть
        };

        this.events = {
            click: { handleEvent: this.toggle, self: this },
            resize: { handleEvent: this.resize, self: this }
        };

        this.init;
    }
    get init() {
        const { click, resize } = this.events;
        
        this.popup.element.addEventListener('click', click);
        this.popup.close.forEach(closeItem => {
            closeItem.addEventListener('click', click);
        });

        window.addEventListener('resize', resize);
    }
    resize () {
        const { self } = this;
        if (!self.popup.state) {
            self.popup.close[0].click();
        }
    }
    toggle () {
        const { self } = this;
        const { state } = self.popup;
        const { click } = self.events;

        self.toCenter;
        self.switchTransparent;

        setTimeout(() => {
            self.popup.element.classList.toggle('popup__item_active');
            self.popup.wrapper.classList.toggle('popup-wrapper_active');

            self.popup.element[(state ? 'remove' : 'add') + 'EventListener']('click', click);
        }, state ? 0 : 200);
        
        self.popup.state = !self.popup.state;
    }
    get switchTransparent () {
        this.popup.transparent.forEach(item => {
            item.classList.toggle('transparent');
        });
    }
    get toCenter () {
        const { state } = this.popup;

        if (!state) {
            this.popup.wrapper.style.marginTop = 0;
            this.popup.wrapper.style.marginLeft = 0;
            return;
        }
        
        // w - window metrika
        const w = {
            h: window.innerHeight, // height
            w: window.innerWidth // width
        }

        w.x = w.w / 2; // coord X
        w.y = w.h / 2; // coord Y

        setTimeout(() => {
            // m - wrapper metrika
            const m = this.popup.wrapper.getBoundingClientRect();
            m.x += m.width / 2;
            m.y += m.height / 2;

            // Get margin as pixels
            let marginTop = w.y - m.y;
            let marginLeft = w.x - m.x;

            this.popup.wrapper.style.marginTop = `${marginTop}px`;
            this.popup.wrapper.style.marginLeft = `${marginLeft}px`;
        }, 200);
    }
}
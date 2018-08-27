export default class Scroller {
    constructor(scroller, thumb, value) {
        this.value = value;
        
        this.scroller = {
            element: scroller,
            get direction() {
                return this.element.offsetWidth > this.element.offsetHeight ? 'X' : 'Y';
            },
            get dimension() {
                return this.element.offsetWidth > this.element.offsetHeight ? 'Width' : 'Height';
            },
            get ident () {
                return this.element.offsetWidth > this.element.offsetHeight ? 'left' : 'top';
            },
            metrika: {}
        };
        this.thumb = {
            element: thumb,
            metrika: {}
        };
        
        this.scroller.element.ondragstart = () => false;

        // Этот объект создаеться для того,
        // чтобы можно было передать контекст класса,
        // для последующих монипуляций с ним (понадобиться только на события)
        this.events = {
            start: { handleEvent: this.onDrag, self: this },
            move: { handleEvent: this.onMove, self: this },
            end: { handleEvent: this.onDragEnd, self: this },
            resize: { handleEvent: this.onResize, self: this }
        };

        this.init;
    }
    // Init method
    get init() {
        const { start, resize } = this.events;

        this.scroller.element.addEventListener('mousedown', start);
        this.scroller.element.addEventListener('touchstart', start);
        window.addEventListener('resize', resize);
        
        return null;
    }
    // window.onresize
    onResize() {
        const { self } = this;
        self.thumb.element.style.top = 0;
        self.thumb.element.style.left = 0;
    }
    // mousedown || touchstart
    onDrag(event) {
        // Получение контекста конструктора
        const { self } = this;
        const queue = `client${self.scroller.direction}`;
        self.dragStart(event[queue] || event.touches[0][queue]);
    }
    // onDrag - after
    dragStart() {
        var { x, y, left, top } = this.thumb.element.getBoundingClientRect();
        this.thumb.metrika = { x, y, left, top };

        var { x, y, left, top } = this.scroller.element.getBoundingClientRect();
        this.scroller.metrika = { x, y, left, top };
        
        const { move, end } = this.events;

        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', end);
        document.addEventListener('touchmove', move);
        document.addEventListener('touchend', end);
    }
    // move || touchmove
    onMove(event) {
        // Получение контекста конструктора
        const { self } = this;
        const queue = `client${self.scroller.direction}`;
        self.moveTo(event[queue] || event.touches[0][queue]);
    }
    // onMove - after
    moveTo(scrollOn) {
        const dimension = this.scroller.dimension;
        const direction = this.scroller.direction.toLowerCase();

        const thumbSize = this.thumb.element[`offset${dimension}`];
        const scrollerCoord = this.scroller.metrika[direction];
        const scrollerSize = this.scroller.element[`offset${dimension}`];

        // Вычисление грани (справа)
        const rightEdge = 100 - (thumbSize / scrollerSize) * 100;
        const thumbCoord = scrollOn - scrollerCoord - thumbSize;

        let newMargin = thumbCoord / (scrollerSize - thumbSize) * 100;
        // Если слева нет места
        if (newMargin < 0) {
            newMargin = 0;
        }
        // Если справа нет места
        if (newMargin > rightEdge) {
            newMargin = rightEdge;
        }
        
        this.thumb.element.style[this.scroller.ident] = `${newMargin}%`;
    }
    // mouseup || touchend
    onDragEnd() {
        // Завершение процесса (опираясь на конструктор)
        this.self.endDrag;
    }
    // onDragEnd - after
    get endDrag() {
        const { move, end } = this.events;

        document.removeEventListener('mousemove', move);
        document.removeEventListener('mouseup', end);
        document.removeEventListener('touchmove', move);
        document.removeEventListener('touchend', end);

        return null;
    }
}
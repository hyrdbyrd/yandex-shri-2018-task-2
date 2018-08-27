export default class Roller {
    constructor (roller, arrow) {
        this.roller = {
            element: roller,
            arrow,
            min: -135,
            max: 135,
            prevX: 0,
            nextX: 0,
            rotate: -135
        };

        this.events = {
            start: { handleEvent: this.onDrag, self: this },
            move: { handleEvent: this.onMove, self: this },
            end: { handleEvent: this.onDragEnd, self: this },
        };

        this.init;
    }
    // Init method
    get init() {
        const { start } = this.events;

        this.roller.element.addEventListener('mousedown', start);
        this.roller.element.addEventListener('touchstart', start);
    
        return null;
    }
    // mousedown || touchstart
    onDrag(event) {
        // Получение контекста конструктора
        const { self } = this;
        self.roller.prevX = event.clientX || event.touches[0].clientX;
        self.dragStart(self.roller.prevX);
    }
    // onDrag - after
    dragStart() {
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
        self.roller.nextX = event.clientX || event.touches[0].clientX;
        self.moveTo(self.roller.nextX);
    }
    // onMove - after
    moveTo(diff) {
        let { max, min, rotate } = this.roller;

        rotate += diff - this.roller.prevX;
        this.roller.prevX = diff;

        if (rotate > max) {
            rotate = max;
        }

        if (rotate < min) {
            rotate = min;
        }

        this.roller.arrow.style.transform = `rotate(${this.roller.rotate}deg)`;
        this.roller.rotate = rotate;
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
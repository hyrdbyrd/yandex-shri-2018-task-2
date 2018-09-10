export default class Roller {
    constructor (roller, arrow, filler) {
        this.roller = {
            element: roller,
            arrow,
            min: -148,
            max: 148,
            prevX: 0,
            nextX: 0,
            rotate: -148,
            filler,
            fillerVal: 1
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
    moveTo(nextX) {
        let { max, min, rotate } = this.roller;

        rotate += nextX - this.roller.prevX;
        this.roller.prevX = nextX;


        if (rotate > max) {
            rotate = max;
        }

        if (rotate < min) {
            rotate = min;
        }

        this.roller.rotate = rotate;
        this.roller.arrow.style.transform = `rotate(${this.roller.rotate}deg)`;
        
        this.roller.fillerVal = (rotate + 148) * 1.73;        
        this.roller.filler.style.strokeDasharray = `${this.roller.fillerVal} 300%`;
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
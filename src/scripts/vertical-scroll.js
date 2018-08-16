(function(){
    window.addEventListener('load', e => {
        const rightBoard = document.querySelector('.board-part_right');
        
        const arrows = document.createElement('div');
        arrows.classList.add('arrows');
        arrows.addEventListener('click', function (event) {
            // this.parentElement.scrollBy(0, 270)
            let summ = 0;
            const diff = 270 / 90;
            const scrolling = setInterval(() => {
                if (summ >= 270)
                    clearInterval(scrolling)
                this.parentElement.scrollBy(0, diff)
                summ += diff;
            }, 0)
        })

        rightBoard.insertAdjacentElement('afterBegin', arrows);

        rightBoard.addEventListener('scroll', function (event) {
            if (rightBoard.scrollTop * 2 > rightBoard.scrollHeight) {
                arrows.classList.add('arrows_hidden')
            } else if (arrows.classList.contains('arrows_hidden')) {
                arrows.classList.remove('arrows_hidden')
            }
        })
    })
})()
(function(){
    window.addEventListener('load', e => {
        const rightBoard = document.body.querySelector('.board__right');

        function check (event) {
            if (rightBoard.offsetHeight + rightBoard.scrollTop >= rightBoard.scrollHeight) {
                arrows.classList.add('transparent')
            } else if (arrows.classList.contains('transparent')) {
                arrows.classList.remove('transparent')
            }
        }

        const arrows = document.body.querySelector('.arrows');
        arrows.addEventListener('click', function (event) {
            let summ = 0;
            const end = 270;
            const diff = 10;
            const scrolling = setInterval(() => {
                if (summ >= end)
                    clearInterval(scrolling)
                this.parentElement.scrollBy(0, diff)
                summ += diff;
            }, 10)
        })

        rightBoard.addEventListener('scroll', check)
    })
})()
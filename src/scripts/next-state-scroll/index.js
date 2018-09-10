(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const rightBoard = document.body.querySelector('.board__part_right').querySelector('.navigation');
        function check() {
            if (rightBoard.offsetHeight + rightBoard.scrollTop + 40 >= rightBoard.scrollHeight) {
                arrows.classList.add('transparent');
            } else if (arrows.classList.contains('transparent')) {
                arrows.classList.remove('transparent');
            }
        }

        const arrows = document.body.querySelector('.db-arrows');
        arrows.addEventListener('click', function () {
            let summ = 0;
            const end = 270;
            const diff = 10;
            const scrolling = setInterval(() => {
                if (summ >= end)
                    clearInterval(scrolling);
                rightBoard.scrollBy(0, diff);
                summ += diff;
            }, 10);
        });

        rightBoard.addEventListener('scroll', check);
        check();
    });
})();
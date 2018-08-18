(function () {
    window.addEventListener('load', e => {
        const optionsList = document.body.querySelectorAll('.content-section_arrows');
        const options = {
            behavior: 'smooth'
        };

        optionsList.forEach(block => {
            const list = block.querySelector('.navigation-scrolls');
            const arrows = block.querySelector('.slide-arrows');

            let end = list.offsetWidth;
            const diff = 2;

            function scroll(dir) {
                let summ = 0;
                const scrolling = setInterval(() => {
                    if (
                        summ >= end ||
                        (list.scrollLeft + list.offsetWidth >= list.scrollWidth && dir > 0) ||
                        (!list.scrollLeft && dir < 0)
                    )
                        clearInterval(scrolling)
                    list.scrollBy(diff * dir, 0)
                    summ += diff;
                }, 0)
            }

            const onLeft = e => {
                scroll(-1)
            };
            const onRight = e => {
                scroll(1)
            };

            const arrowLeft = arrows.querySelector('.slide-arrows__arrow_left');
            const arrowRight = arrows.querySelector('.slide-arrows__arrow_right');


            function check() {
                const ac = 'slide-arrows__arrow_active'; // activeClass

                if (list.scrollLeft === 0) {
                    arrowLeft.classList.remove(ac);
                    arrowLeft.removeEventListener('click', onLeft)
                } else if (!arrowLeft.classList.contains(ac)) {
                    arrowLeft.classList.add(ac);
                    arrowLeft.addEventListener('click', onLeft);
                }

                if (list.offsetWidth + list.scrollLeft >= list.scrollWidth) {
                    arrowRight.classList.remove(ac);
                    arrowRight.removeEventListener('click', onRight)
                } else if (!arrowRight.classList.contains(ac)) {
                    arrowRight.classList.add(ac);
                    arrowRight.addEventListener('click', onRight);
                }
            }

            list.addEventListener('scroll', check)
            check();
        })
    })
})()
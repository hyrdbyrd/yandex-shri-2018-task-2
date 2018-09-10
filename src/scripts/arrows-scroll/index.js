(function () {
    window.addEventListener('DOMContentLoaded', () => {
        const optionsList = document.body.querySelectorAll('.content-section_arrows');
        [...optionsList].forEach(section => {
            const arrows = section.querySelector('.slide-arrows');
            if (!arrows) return;

            const arrowLeft = arrows.querySelector('.slide-arrows__arrow_left');
            const arrowRight = arrows.querySelector('.slide-arrows__arrow_right');
            if (!arrowLeft || !arrowRight) return;            

            const scrollElem = section.querySelector('.scroll');
            let dimension;

            if (scrollElem.classList.contains('scroll_horizontal')) {
                dimension = 'width';
            } else if (scrollElem.classList.contains('scroll_vertical')) {
                dimension = 'height';
            }

            if (!dimension) return;

            const rHandler = function () {
                scroll(scrollElem, 1, dimension);
            };

            const lHandler = function () {
                scroll(scrollElem, -1, dimension);
            };

            function scroll(element, dir, side = 'height') {
                element = element.querySelector('.navigation-list');
                const isHeight = side === 'height' ? true : false;
                const end = (isHeight ? 100 : 200) + 15; // height/width + margin (15)
                const diff = 5;
                let summ = 0;
                const scrolling = setInterval(() => {
                    if (summ >= end) {
                        clearInterval(scrolling);
                        setTimeout(function () {
                            check(element, dimension);
                        }, 0);
                    }
                    element.scrollBy(!isHeight && diff * dir, isHeight && diff * dir);
                    summ += diff;
                }, 0);
            }

            function check(element, dimension = 'height') {
                const isHeight = dimension === 'height' ? true : false;
                dimension = dimension[0].toUpperCase() + dimension.slice(1);
                const scroll = element[`scroll${dimension}`];
                const offset = element[`offset${dimension}`];
                const scrollBy = element[`scroll${ isHeight ? 'Top' : 'Left' }`];

                const activeClass = 'slide-arrows__arrow_active';

                // scrollHeight/Width === offsetHeight/Width + scrollTop/Left + margin
                if (scroll === offset + scrollBy + 15 || scroll === offset + scrollBy) {
                    arrowRight.removeEventListener('click', rHandler);
                    arrowRight.classList.remove(activeClass);
                } else if (!arrowRight.classList.contains(activeClass)) {
                    arrowRight.classList.add(activeClass);
                    arrowRight.addEventListener('click', rHandler);
                }

                if (scrollBy === 0) {
                    arrowLeft.removeEventListener('click', lHandler);
                    arrowLeft.classList.remove(activeClass);
                } else if (!arrowLeft.classList.contains(activeClass)) {
                    arrowLeft.classList.add(activeClass);
                    arrowLeft.addEventListener('click', lHandler);
                }
            }

            check(scrollElem, dimension);
        });
    });
})();
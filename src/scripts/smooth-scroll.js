(function(){
    window.addEventListener('load', e => {
        const optionsList = document.body.querySelectorAll('.content-section_arrows');
        optionsList.forEach(section => {
            const arrows = section.querySelector('.slide-arrows');

            const arrowLeft = arrows.querySelector('.slide-arrows__arrow_left');
            const arrowRight = arrows.querySelector('.slide-arrows__arrow_right');

            const list = section.querySelector('.navigation');

            const rHandler = function (event) {
                scroll(list, 1);
            }

            const lHandler = function (event) {
                scroll(list, -1);
            }

            function scroll (element, dir, side='height') {
                const bool = side === 'height' ? true : false
                const end = (bool ? 100 : 200) + 15; // height/width + margin (15)
                const diff = 5;
                let summ = 0;
                const scrolling = setInterval(() => {
                    if (summ >= end) {
                        clearInterval(scrolling);
                        if (dir < 0) {
                            setTimeout(function () {
                                check(element);
                            }, 0)
                        } else {
                            check(element);
                        }
                    }
                    element.scrollBy(!bool && diff * dir, bool && diff * dir);
                    summ += diff;
                }, 0)
            }

            function check (element, side='height') {
                const bool = side === 'height' ? true : false;
                const metrika = side[0].toUpperCase() + side.slice(1);
                
                const scroll = element[`scroll${metrika}`];
                const offset = element[`offset${metrika}`];
                const scrollBy = element[`scroll${bool ? 'Top' : 'Left'}`];
                
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

            check(list);

        });
    });
})()
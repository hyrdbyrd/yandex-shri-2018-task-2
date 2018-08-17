(function(){
    window.addEventListener('load', e => {
        const optionsList = document.body.querySelectorAll('.content-section_arrows');

        optionsList.forEach(block => {
            const options = block.querySelector('.content-options');
            const list = block.querySelector('.navigation-scrolls');
            const arrows = block.querySelector('.slide-arrows');

            const end = (200 + 30) * (list.classList.contains('navigation-list_grid') ? 4 : 0.9);
            const diff = 10;

            const arrowLeft = arrows.querySelector('.slide-arrows__arrow_left');
            arrowLeft.addEventListener('click', function (event) {
                let summ = 0;
                const scrolling = setInterval(() => {
                    if (summ >= end)
                        clearInterval(scrolling)
                    list.scrollBy(-diff, 0)
                    summ += diff;
                }, 0)

                // list.scrollBy((200 + 15) * 4, 0);
            });

            const arrowRight = arrows.querySelector('.slide-arrows__arrow_right');
            arrowRight.addEventListener('click', function (event) {
                let summ = 0;
                const scrolling = setInterval(() => {
                    if (summ >= end)
                        clearInterval(scrolling)
                    list.scrollBy(diff, 0)
                    summ += diff;
                }, 0)

                // list.scrollBy((200 + 15) * 4, 0);
            });

            function check () {
                const blockWidth = (200 + 15) * 3; // 200 - width; 15 - margin; 3 - amout of elems
                const step = list.scrollWidth / blockWidth | 0; // Math.floor

                const ac = 'slide-arrows__arrow_active'; // activeClass
                
                if (list.scrollLeft === 0) {
                    arrowLeft.classList.remove(ac);
                } else if (!arrowLeft.classList.contains(ac)) {
                    arrowLeft.classList.add(ac);
                }

                if (list.offsetWidth + list.scrollLeft >= list.scrollWidth) {
                    arrowRight.classList.remove(ac);
                } else if (!arrowRight.classList.contains(ac)) {
                    arrowRight.classList.add(ac);
                }
            }

            list.addEventListener('scroll', check)
            check();
        })
    })
})()
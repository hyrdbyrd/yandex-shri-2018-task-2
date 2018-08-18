(function(){
    window.addEventListener('load', e => {
        const optionsList = document.body.querySelectorAll('.content-section_arrows');
        const options = { behavior: 'smooth' };
        optionsList.forEach(section => {
            const arrows = section.querySelector('.slide-arrows');

            const arrowLeft = arrows.querySelector('.slide-arrows__arrow_left');
            const arrowRight = arrows.querySelector('.slide-arrows__arrow_right');

            const list = section.querySelector('.navigation');

            arrowRight.addEventListener('click', function (event) {
                list.scrollBy(100, 0)
            });
            
        });
    });
})()
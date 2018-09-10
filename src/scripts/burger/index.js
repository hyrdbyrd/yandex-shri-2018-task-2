(function(){
    window.addEventListener('DOMContentLoaded', () => {
        const body = document.body;
        const burger = body.querySelector('.burger');
        const nav = body.querySelector('.navigation_header');
        burger.addEventListener('click', () => {
            nav.classList.toggle('navigation_header_active');
            body.style.overflow = body.style.overflow ? '' : 'hidden';
        });
    });
})();
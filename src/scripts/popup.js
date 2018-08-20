(function () {
    let state = true;
    const shade = document.body.querySelector('.shade');

    function switchState (state, element, from, to, ms=200) {
        let states;
        if (state) {
            states = [from, to];
        } else {
            states = [to, from];
        }

        element.classList.toggle(states[0]);
        setTimeout(() => {
            element.classList.toggle(states[1]);
        }, ms);
    }

    function toCenter (element, state) {
        function clearMargin(withTop=true) {
            element.style.marginLeft = '';
            if (withTop) {
                element.style.marginTop = '';
            }
        }

        // m - metrika
        const m = element.getBoundingClientRect();
        m.x += m.width / 2;
        m.y += m.height / 2;

        // center
        const c = {
            // coord X
            x: window.innerWidth / 2,
            // coord Y
            y: window.innerHeight / 2
        }

        c.dx = m.x < c.x ? 1 : -1;
        c.dy = m.y < c.y ? 1 : -1;

        element.style.marginTop = `${c.dy * Math.abs(m.y - c.y)}px`;
        element.style.marginLeft = `${c.dx * Math.abs(m.x - c.x)}px`;

        if (!state) {
            element.classList.toggle('popup-wrapper_replaced');
            clearMargin();
            return;
        }

        setTimeout(() => {
            element.classList.toggle('popup-wrapper_replaced');
            clearMargin(false);
        }, 200);
    }

    window.addEventListener('load', e => {
        const popups = document.body.querySelectorAll('.popup');

        popups.forEach(popup => {
            const wrapper = popup.querySelector('.popup-wrapper')
            const popupItem = popup.querySelector('.popup_item');
            const options = popup.querySelector('.options');

            const close = options.querySelector('.options__close_close');
            const apply = options.querySelector('.options__close_apply');

            const navigation = popup.querySelector('.navigation');

            function toggle(event) {
                switchState(state, shade, 'hidden', 'no-visible', state ? 0 : 200);
                switchState(state, options, 'hidden', 'no-visible', state ? 0 : 200);
                switchState(state, navigation, 'hidden', 'no-visible', 0);

                popupItem.classList.toggle('popup_item_active');

                if (state) {
                    wrapper.classList.toggle('popup-wrapper_active');
                    popup.removeEventListener('click', toggle);
                } else {
                    setTimeout(() => {
                        wrapper.classList.toggle('popup-wrapper_active');
                        popup.addEventListener('click', toggle);
                    }, 200);
                }

                toCenter(wrapper, state);
                state = !state;
            }

            popup.addEventListener('click', toggle);
            close.addEventListener('click', toggle);
            apply.addEventListener('click', toggle);
        });
    });
})()
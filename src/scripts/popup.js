(function(){
    window.addEventListener('load', e => {
        const _ = document;
        const div = _.createElement('div');
        const body = document.body;

        const popupsElems = body.querySelectorAll('.popups');
        const shade = body.querySelector('.shade');
        let state = true;

        function handler (event) {
            const element = this;

            const wrappet = div.cloneNode(false);
            const wrappetOptions = div.cloneNode(false);

            const closeOpt = div.cloneNode(false);
            closeOpt.classList.add('options_close');
            closeOpt.classList.add('hidden');

            const close = closeOpt.cloneNode(true);
            const apply = closeOpt.cloneNode(true);

            if (state) {
                wrappet.classList.add('wrappet');
                wrappetOptions.classList.add('wrappet-options');

                function fullToggle (event) {
                    toggle();
                    removeWrappet();
                }

                close.classList.add('options__close');
                close.addEventListener('click', fullToggle);

                apply.classList.add('options__apply');
                apply.addEventListener('click', fullToggle);

                let paste = element.previousElementSibling;
                let flag = 'afterEnd';
                const parent = element.parentElement;

                if (!paste) {
                    flag = 'beforeBegin'
                    paste = element.nextElementSibling;
                }

                wrappetOptions.appendChild(close);
                wrappetOptions.appendChild(apply);

                wrappet.appendChild(element);
                wrappet.appendChild(wrappetOptions);

                regulator();

                if (paste) {
                    paste.insertAdjacentElement(flag, wrappet);
                } else {
                    parent.appendChild(wrappet);
                }

            }

            function regulator() {
                const classes = element.classList;
                if (classes.contains('device-info_temperature_active')) {
                    const intro = element.querySelector('.device-intro-info');
                    
                    const t = div.cloneNode(false);
                    t.textContent = element.getAttribute('temperature');
                    t.classList.add('temperature-info');
                    
                    intro.insertAdjacentElement('beforeBegin', t);
                }
            }

            toggle();

            function removeWrappet() {
                setTimeout(() => {
                    wrappet.removeChild(wrappetOptions);
                    let paste = wrappet.previousElementSibling;
                    let flag = 'afterEnd';
                    const parent = wrappet.parentElement;
                    if (!paste) {
                        flag = 'beforeBegin';
                        paste = wrappet.nextElementSibling;
                    }

                    if (paste) {
                        paste.insertAdjacentElement(flag, element);
                    } else {
                        parent.appendChild(element);
                    }

                    parent.removeChild(wrappet);

                    const intro = element.querySelector('.device-intro');
                    const t = intro.querySelector('.temperature-info');
                    if (t)
                        intro.removeChild(t);
                }, 200)
            }

            function toggle() {
                element.classList.toggle('popup_active');
                if (state) {
                    element.removeEventListener('click', handler);
                } else {
                    element.addEventListener('click', handler);
                }
                
                fullRebase();
                state = !state;
            }

            function rebase(element, start, end, ms=0, hasStart=true, hasEnd=true) {
                const s = [start, end];
                if (!state) [s[0], s[1]] = [s[1], s[0]];

                if (hasStart) {
                    element.classList.toggle(s[0]);
                }
                if (hasEnd) {
                    setTimeout(() => {
                        element.classList.toggle(s[1])
                    }, ms);
                }
            }

            function fullRebase () {
                rebase(shade, 'shade_hidden', 'shade_active', state ? 0 : 200);
                rebase(close, 'hidden', 'options_close_active', 200);
                rebase(apply, 'hidden', 'options_close_active', 200);
                rebase(element, 'popup_active', 'popup');
                if (state) {
                    rebase(wrappet, 'wrappet', 'wrappet_active', 0, false);
                }
            }
        }
        
        popupsElems.forEach((popup, i, link) => {
            popup.addEventListener('click', handler);
        })
    });
})()
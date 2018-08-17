(function(){
    window.addEventListener('load', e => {
        const _ = document;
        const div = _.createElement('div');
        const body = document.body;

        const popupsElems = body.querySelectorAll('.device-info');
        const shade = body.querySelector('.shade');
        let state = true;

        function handler (event) {
            const element = this;
        
            const wrappet = div.cloneNode(false);
            const wrappetOptions = div.cloneNode(false);

            const closeOpt = div.cloneNode(false);
            closeOpt.classList.add('options_close');
            closeOpt.classList.add('options_close_hidden');

            const close = closeOpt.cloneNode(true);
            const apply = closeOpt.cloneNode(true);

            if (state) {
                wrappet.classList.add('wrappet');
                wrappetOptions.classList.add('wrappet-options');
                
                close.classList.add('options__close');
                close.addEventListener('click', e => { 
                    toggle();
                    removeWrappet();
                });
                
                apply.classList.add('options__apply');
                apply.addEventListener('click', e => { 
                    toggle();
                    removeWrappet();
                });

                let paste = element.previousElementSibling;
                let flag = 'afterEnd';

                if (!paste) {
                    flag = 'beforeBegin'
                    paste = element.nextElementSibling;
                }

                wrappetOptions.appendChild(close);
                wrappetOptions.appendChild(apply);

                wrappet.appendChild(element);
                wrappet.appendChild(wrappetOptions);

                paste.insertAdjacentElement(flag, wrappet);
            }
            
            toggle();

            function removeWrappet() {
                setTimeout(() => {
                    wrappet.removeChild(wrappetOptions);
                    let paste = wrappet.previousElementSibling;
                    let flag = 'afterEnd';
                    if (!paste) {
                        flag = 'beforeBegin';
                        paste = wrappet.nextElementSibling;
                    }

                    paste.insertAdjacentElement(flag, element);

                    const parent = wrappet.parentElement;
                    parent.removeChild(wrappet);
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
                rebase(close, 'options_close_hidden', 'options_close_active', 200);
                rebase(apply, 'options_close_hidden', 'options_close_active', 200);
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
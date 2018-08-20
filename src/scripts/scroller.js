(function () {
    const min = -10;
    const max = 30;

    const { abs } = Math;

    const getPercent = value => (value / (abs(min) + abs(max)) ) * 100;

    function toPosition(wrapper, element, posPercent) {
        const { width: offsetWidth } = wrapper;
        element.style.marginLeft = `calc(${posPercent}% + 30px)`;
    }

    window.addEventListener('load', e => {
        const scrollers = document.body.querySelectorAll('.popup-navigation_scroller');

        scrollers.forEach(scroller => {
            const value = scroller.getAttribute('value');
            const thumb = scroller.querySelector('.scroller-wrapper__thumb');

            let sliderCoords, thumbCoords, shiftX, shiftY;

            function startDrag(startClientX, startClientY) {
                thumbCoords = thumb.getBoundingClientRect();
                shiftX = startClientX - thumbCoords.left;
                shiftY = startClientY - thumbCoords.top;

                sliderCoords = scroller.getBoundingClientRect();

                document.addEventListener('mousemove', onDocumentMouseMove);
                document.addEventListener('mouseup', onDocumentMouseUp);
            }



            function moveTo(clientX) {
                let newLeft = clientX - shiftX - sliderCoords.left;

                if (newLeft < 0) {
                    newLeft = 0;
                }
                let rightEdge = scroller.offsetWidth - thumb.offsetWidth;
                if (newLeft > rightEdge) {
                    newLeft = rightEdge;
                }

                thumb.style.left = newLeft + 'px';
            }


            function onDocumentMouseMove(e) {
                moveTo(e.clientX);
            }

            function onDocumentMouseUp() {
                endDrag();
            }


            function endDrag() {
                document.removeEventListener('mousemove', onDocumentMouseMove);
                document.removeEventListener('mouseup', onDocumentMouseUp);
            }

            scroller.ondragstart = () => false;

            scroller.addEventListener('mousedown', function (event) {
                startDrag(event.clientX, event.clientY);
                return false;
            })
            // const position = getPercent(value); // because, thumb stand at center
            // toPosition(scroller, thumb, position);
        });
    });
})()
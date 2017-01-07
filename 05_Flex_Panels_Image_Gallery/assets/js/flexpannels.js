(function () {
    'use strict';

    const pannels = document.querySelectorAll('.panel');

    function toggleOpen() {
        pannels.forEach(pannel => pannel.classList.remove('open'));
        this.classList.add('open');
    }

    function toggleActive(e) {
        if (e.propertyName.includes('font')) {
            this.classList.toggle('open-active');
        }
    }

    pannels.forEach(pannel => pannel.addEventListener('click', toggleOpen));
    pannels.forEach(pannel => pannel.addEventListener('transitionend', toggleActive));
})();

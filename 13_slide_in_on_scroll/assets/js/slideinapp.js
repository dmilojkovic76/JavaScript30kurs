(function() {
    'use strict';

    // funkcija sa neta koja kao argumente prima: funkciju koju treba izvrsiti,
    // vreme u msec na koliko treba funkcija da se izvrsi,
    // a vraca funkciju koja se izvrsava svakih zadatih msec.
    function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function() {
            let context = this,
                args = arguments;
            let later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    const sliderImages = document.querySelectorAll('.slide__in');

    function checkSlide() {
        sliderImages.forEach(slideImage => {
            // na trecini pojavljene slike
            const slideInAt = (window.scrollY + window.innerHeight) - (2 * (slideImage.height / 3));
            // na 3/4 visine slike
            const slideOutAt = slideImage.offsetTop + (slideImage.height - slideImage.height / 4);
            // true ako je trenutni skroll > vrha slike
            const doShow = slideInAt > slideImage.offsetTop;
            // true ako trenutni scroll < od zadatoe vrednosi za scroll out
            const stillShown = window.scrollY < slideOutAt;
            if (doShow && stillShown) {
                slideImage.classList.add('active');
            } else {
                slideImage.classList.remove('active');
            }
        });
    }

    // posto se generise ogromna kolilcina scroll evenata
    // checkSlide f-ja je prosledjena debounce f-ji koja ce raditi na svakih 50ms
    // i tako znatno smanjiti opterecenje browsera.
    window.addEventListener('scroll', debounce(checkSlide));
})();

// !minifyOnSave
// compress: false
// jshint esversion: 6

(function() {
    window.onload = function() {
        'use strict';

        function playSound(e) {
            // Prvo inicijalizujemo promenljive da sadrze vrednosti elemenata koji odgovaraju stisnutom tasteru.
            // Ovakva selekcija (``) radi samo na ES6 browserima.
            const zvuk = document.querySelector(`audio[data-key="${e.keyCode}"]`); // Ako postoji, 'zvuk' sada sadrzi element koji odgovara tasteru prosledjenom kroz 'Event(e)'.
            const dirka = document.querySelector(`.key[data-key="${e.keyCode}"]`); // Ako postoji, 'dirka' sada sadrzi element koji odgovara tasteru prosledjenom kroz 'Event(e)'.
            if (!dirka) {
                return; // Ako taster nije odgovarao nasoj listi elemenata, 'dirka' nece biti definisan pa napustamo funkciju.
            }

            zvuk.currentTime = 0; // Ako dodje do ovde, znaci da je taster bio OK pa se sada premotava audio klip,
            zvuk.play(); // reprodukuje,
            dirka.classList.add('playing'); // i dodaje klasa kako bi se i vizuelno uocilo koji taster je pritisnut.
        }

        function removeClass(e) {
            if (e.propertyName !== 'transform') {
                return; // Ako element, tj. prosledjeni 'Event(e)', nije transformisan - napusti funkciju.
            }
            this.classList.remove('playing'); // 'this' je jednak elementu koji ga je pozvao, tj. 'dirka' koja je upravo zavrsila tranziciju.
        }

        window.addEventListener('keydown', playSound); // Globalni 'EventListener' koji ceka pritisak tastera i poziva 'playSound' f-ju.

        const dirke = document.querySelectorAll('.key'); // Inicijalizuje 'dirke' kao listu svih definisanih elemenata u dokumentu.
        // Svakom elementu se zatim dodeljuje 'EventListener' koji ceka kraj tranzicije a zatim poziva 'removeClass' f-ju.
        dirke.forEach(dirka => dirka.addEventListener('transitionend', removeClass));
    };
})();

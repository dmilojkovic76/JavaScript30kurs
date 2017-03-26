(function() {
    'use strict';

    const ukucano = [];
    const secretCode = 'secretcode';

    window.addEventListener('keyup', (e) => {
        ukucano.push(e.key);

        // sledeci korak ogranicava duzinu ukucano array na duzinu secretCode
        ukucano.splice(-secretCode.length - 1, ukucano.length - secretCode.length);

        // osvo sam se zezao sa verovatnocom izbora metode
        let rnd = Math.floor(Math.random() * 10);
        if (rnd > 5) {
            // metod 1
            if (ukucano.join('') == secretCode) {
                console.log('TO JE METOD 1!');
                cornify_add();
            }
        }
        if (rnd < 5) {
            // metod 2
            if (ukucano.join('').includes(secretCode)) {
                console.log('TO JE METOD 2!');
                cornify_add();
            }
        }
    });
})();

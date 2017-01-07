/*jshint
    esversion:6
*/
(function () {
    const secondHand = document.querySelector('.second-hand');
    const minHand = document.querySelector('.min-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setDate() {
        const now = new Date();
        const seconds = now.getSeconds();
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

        const mins = now.getMinutes();
        const minsDeg = ((mins / 60) * 360) + 90;
        minHand.style.transform = `rotate(${minsDeg}deg)`;

        const hours = now.getHours();
        const hoursDeg = (((hours - 12) / 12) * 360) + 90;
        hourHand.style.transform = `rotate(${hoursDeg}deg)`;
    }

    setInterval(setDate, 1000);
})();

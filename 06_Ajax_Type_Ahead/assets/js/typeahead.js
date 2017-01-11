(function () {
    'use strict';

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

    const cities = [];

    fetch(endpoint)
        .then(blob => blob.json())
        .then(data => cities.push(...data));

    function formatNumbers(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    }

    function findMatches(wordToMatch, cities) {
        const myRegExp = new RegExp(wordToMatch, 'gi');

        return cities.filter(place => {
            // here we need to figure out if the city or state matches what was searched
            return place.city.match(myRegExp) || place.state.match(myRegExp);
        });
    }

    function displayMatches() {
        const matchArray = findMatches(this.value, cities);
        const insertHtml = matchArray.map(place => {
            const hlRegExp = new RegExp(this.value, 'gi');
            const hlName = place.city.replace(hlRegExp, `<span class="hl">${this.value}</span>`);
            const hlState = place.state.replace(hlRegExp, `<span class="hl">${this.value}</span>`);
            return `<li>
<span class="name">${hlName}, ${hlState}</span>
<span class="population">${formatNumbers(place.population)}</span>
</li>`;
        }).join('');
        suggestionsLst.innerHTML = insertHtml;
    }

    const myInput = document.querySelector('.search');
    const suggestionsLst = document.querySelector('.suggestions');

    myInput.addEventListener('keyup', displayMatches);
    myInput.addEventListener('change', displayMatches);
})();

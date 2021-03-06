(function () {
    'use strict';
    window.onload = function () {
        // Some data we can work with
        const inventors = [
            {
                first: 'Albert',
                last: 'Einstein',
                year: 1879,
                passed: 1955
            },
            {
                first: 'Isaac',
                last: 'Newton',
                year: 1643,
                passed: 1727
            },
            {
                first: 'Galileo',
                last: 'Galilei',
                year: 1564,
                passed: 1642
            },
            {
                first: 'Marie',
                last: 'Curie',
                year: 1867,
                passed: 1934
            },
            {
                first: 'Johannes',
                last: 'Kepler',
                year: 1571,
                passed: 1630
            },
            {
                first: 'Nicolaus',
                last: 'Copernicus',
                year: 1473,
                passed: 1543
            },
            {
                first: 'Max',
                last: 'Planck',
                year: 1858,
                passed: 1947
            },
            {
                first: 'Katherine',
                last: 'Blodgett',
                year: 1898,
                passed: 1979
            },
            {
                first: 'Ada',
                last: 'Lovelace',
                year: 1815,
                passed: 1852
            },
            {
                first: 'Sarah E.',
                last: 'Goode',
                year: 1855,
                passed: 1905
            },
            {
                first: 'Lise',
                last: 'Meitner',
                year: 1878,
                passed: 1968
            },
            {
                first: 'Hanna',
                last: 'Hammarström',
                year: 1829,
                passed: 1909
            }
        ];

        const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

        const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

        // Array.prototype.filter()
        // 1. Filter the list of inventors for those who were born in the 1500's
        const fifteens1 = inventors.filter(function (inventor) {
            if (inventor.year > 1499 && inventor.year < 1600) {
                return inventor;
            }
        });
        console.log('Filter inventors by 1500s old-way:');
        console.table(fifteens1);

        const fifteens2 = inventors.filter(inventor => (inventor.year > 1499 && inventor.year < 1600));
        console.log('Filter inventors by 1500s es6-way:');
        console.table(fifteens2);

        // Array.prototype.map()
        // 2. Give us an array of the inventors' first and last names
        const name1 = inventors.map(function (inventor) {
            return inventor.first + ' ' + inventor.last;
        });
        console.log('Make new array by name old-way:');
        console.table(name1);

        const name2 = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
        console.log('Make new array by name es6-way:');
        console.table(name2);

        // Array.prototype.sort()
        // 3. Sort the inventors by birthdate, oldest to youngest
        const birthdate1 = inventors.sort(function (inventor1, inventor2) {
            if (inventor1.year > inventor2.year) {
                return 1;
            } else {
                return -1;
            }
        });
        console.log('Sort inventors by birthdate old-way:');
        console.table(birthdate1);

        const birthdate2 = inventors.sort((a, b) => (a.year > b.year) ? 1 : -1);
        console.log('Sort inventors by birthdate es6-way:');
        console.table(birthdate2);

        // Array.prototype.reduce()
        // 4. How many years did all the inventors live?
        (function () {
            var totalYears1 = 0;
            for (var i = 0; i < inventors.length; i += 1) {
                totalYears1 += inventors[i].passed - inventors[i].year;
            }
            console.log('Total Years of inventors old-way: ' + totalYears1);
        })();

        const totalYears2 = inventors.reduce((total, inventor) => {
            return total + (inventor.passed - inventor.year);
        }, 0);
        console.log('Total Years of inventors es6-way: ' + totalYears2);

        // 5. Sort the inventors by years lived
        const oldest1 = inventors.sort((a, b) => {
            const currentA = a.passed - a.year;
            const nextB = b.passed - b.year;
            return currentA < nextB ? 1 : -1;
        });
        console.log('Sort inventors by age:');
        console.table(oldest1);

        // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
        // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
        const wikigrp = document.querySelector('.mw-category');
        const wikiLinks = Array.from(wikigrp.querySelectorAll('a'));
        const deList = wikiLinks.map(link => link.textContent);
        const deBlvds = deList.filter(filter => filter.includes('de'));

        console.log('List of Boulevards with "de":');
        console.table(deBlvds);


        // 7. sort Exercise
        // Sort the people alphabetically by last name
        const lastNameSort = people.sort((a, b) => {
            const [alast, afirst] = a.split(', ');
            const [blast, bfirst] = b.split(', ');
            return alast > blast ? 1 : -1;
        });
        console.log(lastNameSort);

        // 8. Reduce Exercise
        // Sum up the instances of each of these
        const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];

        const transportation = data.reduce(function (obj, item) {
            if (!obj[item]) {
                obj[item] = 0;
            }
            obj[item]++;
            return obj;
        }, {});

        console.log(transportation);
    };
})();

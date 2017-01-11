(function (global) {
    'use strict';

    // ## Array Cardio Day 2

    const people = [
        {
            name: 'Wes',
            year: 1988
    },
        {
            name: 'Kait',
            year: 1986
    },
        {
            name: 'Irv',
            year: 1970
    },
        {
            name: 'Lux',
            year: 2015
    }
    ];

    const comments = [
        {
            text: 'Love this!',
            id: 523423
    },
        {
            text: 'Super good',
            id: 823423
    },
        {
            text: 'You are the best',
            id: 2039842
    },
        {
            text: 'Ramen is my fav food ever',
            id: 123523
    },
        {
            text: 'Nice Nice Nice!',
            id: 542328
    }
    ];

    // Some and Every Checks
    // Array.prototype.some() // is at least one person 19?
    const some19_old = people.some(function (person) {
        const currentYear = (new Date()).getFullYear();
        if (currentYear - person.year >= 19) {
            return true;
        }
    });
    console.log({
        some19_old // should return true
    });

    const some19_es6 = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({
        some19_es6 //should return true
    });

    // Array.prototype.every() // is everyone 19?
    const every19_es6 = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
    console.log({
        every19_es6 // should return false
    });

    // Array.prototype.find()
    // Find is like filter, but instead returns just the one you are looking for
    // find the comment with the ID of 823423
    const myComment_old = comments.find(function (elem) {
        if (elem.id === 823423) {
            return true;
        }
    });
    console.log({
        myComment_old
    });

    const myComment_es6 = comments.find(elem => (elem.id === 823423));
    console.log({
        myComment_es6
    });

    // Array.prototype.findIndex()
    // Find the comment with this ID
    // delete the comment with the ID of 823423
    const searchIndex = comments.findIndex(elem => elem.id === 823423);

    console.log(comments.splice(searchIndex, 1));

})();

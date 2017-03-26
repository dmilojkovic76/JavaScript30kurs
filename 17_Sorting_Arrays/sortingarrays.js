/**
 * Created by d00mil on 3/18/17.
 */
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function strip(item){
    "use strict";
    return item.replace(/^(a |an |the)/i, "").trim();
}

const sortedBands = bands.sort(function (a, b){
    'use strict';
    if ( strip(a) > strip(b)) {
        return 1;
    } else {
        return -1;
    }
});

for (const i in sortedBands){
    const bli = document.createElement("li");
    bli.innerHTML += sortedBands[i];
    document.getElementById("bands").appendChild(bli);
}

'use strict';

const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const checkAllBtn = document.querySelector('[name=checker]');
const uncheckAllBtn = document.querySelector('[name=unchecker]');
const items = JSON.parse(localStorage.getItem('Items')) || [];

// popunjava items array vrednostima unetim u input box-u
function addItem(e) {
    // onemogucava automatski refresh forma i reload strane
    e.preventDefault();

    const txt = (this.querySelector('[name=item]')).value;

    // formira objekat koji sadrzi ukucani tekst
    const item = {
        text: txt,
        state: false
    };

    items.push(item);
    populateList(items, itemsList);

    // konvertuje objekte iz items array u stringove kako bi mogli da se snime u localStorage
    localStorage.setItem('Items', JSON.stringify(items));

    // ocisti polje za input forme
    this.reset();
}

// popunjava listu arg[1] objektima iz arg[0], a ovde je
// kao default arg[0] podesen na [] - prazan array za svaki slucaj
// Nije optimalan nacin jer svaki put kad se doda novi clan u array
// ova f-ja ce regenerisati citavu listu, (tj. map f-ja to radi)
function populateList(plates = [], platesList) {
    // za svaki elemenat array-a generisi html <li> element
    platesList.innerHTML = plates.map((plate, i) => {
        return `
			<li>
				<input type="checkbox" data-index=${i} id="item${i}" ${plate.state ? 'checked' : ''}/>
				<label for="item${i}">${plate.text}</label>
			</li>
		`;
    }).join('');
}

function toggleState(e) {
    if (!e.target.matches('input')) {
        return; // ako nije kliknuto na checkbox ili njegov label - ne reaguj
    }
    const el = e.target;
    const index = el.dataset.index;
    items[index].state = !items[index].state;
    localStorage.setItem('Items', JSON.stringify(items));
    populateList(items, itemsList);
}

function checkAll() {
    console.log('Check all');
    items.forEach(item => item.state = true);
    localStorage.setItem('Items', JSON.stringify(items));
    populateList(items, itemsList);
}

function uncheckAll() {
    console.log('uncheck all');
    items.forEach(item => item.state = false);
    localStorage.setItem('Items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem);
itemsList.addEventListener('click', toggleState);
checkAllBtn.addEventListener('click', checkAll);
uncheckAllBtn.addEventListener('click', uncheckAll);

populateList(items, itemsList);

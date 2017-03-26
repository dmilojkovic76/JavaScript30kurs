/**
 * Created by d00mil on 3/18/17.
 */

const hero = document.querySelector(".hero");
const text = hero.querySelector("h1");
const distance = 100; // 100px za maximum senke

function shadow (e){
    //ova dva reda su ista sto i treci red u es6
    // const width = hero.offsetWidth;
    // const height = hero.offsetHeight;
    const { offsetWidth: width, offsetHeight: height } = hero;
    let { offsetX: x, offsetY: y } = e;

    if (this !== e.target) {
        x = x + e.target.offsetLeft;
        y += e.target.offsetTop;
    }

    // xydistance se krece izmedju -distance/2 i distance/2
    const xDistance = (x / width * distance) - (distance / 2);
    const yDistance = (y / height * distance) - (distance / 2);

    text.style.textShadow = `${xDistance}px ${yDistance}px 0 rgba(0,0,0,0.5)`;
}

hero.addEventListener("mousemove", shadow);
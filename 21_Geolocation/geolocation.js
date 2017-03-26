/**
 * Created by d00mil on 3/21/17.
 */


const arrow = document.querySelector('.arrow');
const speed = document.querySelector('.speed-value');

navigator.geolocation.watchPosition((data) => {
    console.log(data);
    speed.textContent = data.coords.speed;
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
}, (err) => {
    console.err(err);
    alert('HEY! YOU GOTTA ALLOW THAT TO HAPPEN!!!');
});

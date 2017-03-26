/**
 * Created by d00mil on 3/21/17.
 */

const words = document.querySelector(".words");
let p = document.createElement("p"); // kreiranje paragrafa za prihvat prepoznatog teksta
words.appendChild(p); // i dodavanje tog paragrafa div-u 'words'

// Init SpeechRecognition promenljivu zavisno od browsera
window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

// kreiranje nove instance
const recognition = new SpeechRecognition();
recognition.interimResults = true; // ukljucivanje opcije za momentalni prikaz a ne na kraju govora

recognition.addEventListener("result", e => {
    p.textContent = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join("");

    if(e.results[0].isFinal){
        p = document.createElement("p");
        words.appendChild(p);
    }
});

recognition.addEventListener("end", recognition.start);

recognition.start();
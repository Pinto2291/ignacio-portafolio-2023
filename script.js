let buttonNav = document.querySelector('.icons');
let sidebar = document.getElementById('sidebar');
let mainBody = document.querySelector('body');

window.addEventListener('scroll', () => {
    let revealElements = document.querySelectorAll('.reveal');

    for(let i = 0; i < revealElements.length; i++ ){

        let windowHeight = window.innerHeight;
        let revealTop = revealElements[i].getBoundingClientRect().top;
        let revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){
            revealElements[i].classList.add('active');
        }
    }
})

/* CURSOR ANIMATION */

const carouselText = [
    {text: 'a Developer', color: '#29D663'},
    {text: 'an Engineer', color: '#DBE22D'},
    {text: 'a Front-End Developer', color: '#23B94E'},
    {text: 'a Designer', color: '#29D6BA'},
]

document.addEventListener('DOMContentLoaded', () => {
    carousel(carouselText, 'feature-text')
    carousel(carouselText, 'feature-text-sidebar')
})

async function typeSentence(sentence, eleRef, delay = 100) {

    const letters = sentence.split("");
    let i = 0;
    const arrLetters = [];

    while(i < letters.length) {
        await waitForMs(delay)
        arrLetters.push(letters[i]);
        document.getElementById(eleRef).innerHTML = arrLetters.join('')
        i++
    }
    return;
};

async function deleteSentence(eleRef) {
    const sentence = document.getElementById(eleRef).innerHTML;
    const letters = sentence.split("");

    while(letters.length > 0){
        await waitForMs(100);
        letters.pop();
        document.getElementById(eleRef).innerHTML = letters.join('')
    }
}

async function carousel(carouselList, eleRef){
    let i = 0;

    while(true){
        updateFontColor(eleRef, carouselList[i].color)
        await typeSentence(carouselList[i].text, eleRef);
        await waitForMs(1200);
        await deleteSentence(eleRef);
        await waitForMs(500); 
        i++
        if(i >= carouselList.length){
            i = 0;
        }
    }
}

function updateFontColor(eleRef, color){
    document.getElementById(eleRef).style.color = color;
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

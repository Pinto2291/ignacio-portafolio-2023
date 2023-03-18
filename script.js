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

$(document).ready(async function() {
   carousel(carouselText, '#feature-text')
   carousel(carouselText, '#feature-text-sidebar')
});

async function typeSentence(sentence, eleRef, delay = 100) {

    const letters = sentence.split("");
    let i = 0;

    while(i < letters.length) {
        await waitForMs(delay)
        $(eleRef).append(letters[i])
        i++
    }
    return;
};

async function deleteSentence(eleRef) {
    const sentence = $(eleRef).html();
    const letters = sentence.split("");
    let i = 0;

    while(letters.length > 0){
        await waitForMs(100);
        letters.pop();
        $(eleRef).html(letters.join(''));
    }
}

async function carousel(carouselList, eleRef){
    var i = 0;

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
    $(eleRef).css('color', color)
}

function waitForMs(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

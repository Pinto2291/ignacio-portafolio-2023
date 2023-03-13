let buttonNav = document.querySelector('.icons');
let sidebar = document.getElementById('sidebar');
let mainBody = document.querySelector('body');

let active = false;
/*
buttonNav.addEventListener('click', () => {

    if(active){
        mainBody.style.marginLeft = 'var(--sidebar-width)';
        sidebar.style.width = 'var(--sidebar-width)';
        active = false;
    } else {
        mainBody.style.marginLeft = '0';
        sidebar.style.width = '0';
        active = true;
    }
});
*/

window.addEventListener('scroll', () => {
    let revealElements = document.querySelectorAll('.reveal');

    for(let i = 0; i < revealElements.length; i++ ){

        let windowHeight = window.innerHeight;
        let revealTop = revealElements[i].getBoundingClientRect().top;
        let revealPoint = 120;

        if(revealTop < windowHeight - revealPoint){
            revealElements[i].classList.add('active');
        }/* else {
            revealElements[i].classList.remove('active');
        }*/
    }
})
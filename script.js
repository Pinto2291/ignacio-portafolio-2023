let buttonNav = document.querySelector('.icons');
let sidebar = document.getElementById('sidebar');
let mainBody = document.querySelector('body');

let active = false;

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

function hideSidebar() {
    if(sidebar.style.width == 'var(--sidebar-width)' && mainBody.style.marginLeft == 'var(--sidebar-width)'){
        mainBody.style.marginLeft = '0';
        sidebar.style.width = '0';
    }
}

hideSidebar();
console.log(sidebar.style.display == 'none');
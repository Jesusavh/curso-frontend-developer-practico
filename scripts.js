const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const burguerMenuIcon = document.querySelector('.burguerMenu');
const mobileMenu = document.querySelector('.mobile-menu');
const aside = document.querySelector('.product-detail');

const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');


menuEmail.addEventListener('click', toggleDesktopMenu);
burguerMenuIcon.addEventListener('click', toggleMobileMenu);
menuCarritoIcon.addEventListener('click', toggleCarritoAside);

function toggleDesktopMenu() {
    const isAsideClosed = aside.classList.contains
    ('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }

    desktopMenu.classList.toggle('inactive');
}

function toggleMobileMenu(){
    
    const isAsideClosed = aside.classList.contains
    ('inactive');

    if (!isAsideClosed){
        aside.classList.add('inactive');
    }
    mobileMenu.classList.toggle('inactive');


}

function toggleCarritoAside() {
    const isDesktopMenuClosed = desktopMenu.classList.contains('inactive');
    const isMobileMenuClosed = mobileMenu.classList.contains
    ('inactive');

    //aside.classList.toggle('inactive');

    if (!isMobileMenuClosed || !isDesktopMenuClosed){  
        mobileMenu.classList.add('inactive');
        desktopMenu.classList.add('inactive');
    }
    
    aside.classList.toggle('inactive');
    
}

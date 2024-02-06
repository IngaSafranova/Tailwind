const initApp = ()=>{
    const hamburgerBtn = document.getElementById('mobile-open-button');
    const mobileMenu = document.getElementById('mobile-menu');

    const toggleMenu = ()=>{
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
        //for second variantion with made up hamburger
        hamburgerBtn.classList.toggle('toggle-btn');
    }

    hamburgerBtn.addEventListener('click', toggleMenu );
    mobileMenu.addEventListener('click', toggleMenu )
}

//call the function on HTML document when DOM content is fully loaded, so buttons are there to listen.

document.addEventListener('DOMContentLoaded', initApp)
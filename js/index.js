const navSlide = () => {
    const menu = document.querySelector('.menu');
    const nav = document.querySelector('.ul');

    menu.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    });
}
navSlide();
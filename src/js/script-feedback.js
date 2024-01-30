//Pop-up меню

let fbButton = document.getElementById('d06-sec'),
    fbMenu = document.querySelector('.popup-menu'),
    fbBack = document.querySelector('.dark-fb'),
    fbCross = document.querySelector('.popup-menu__cross'),
    fbBody = document.querySelector('body');

fbButton.addEventListener('click', (e) => {
    e.preventDefault();

    if (fbMenu.classList.contains('popup-menu--out')) {
        fbMenu.classList.remove('popup-menu--out');
    };
    fbMenu.classList.add('popup-menu--in');
    fbBack.style.display = 'block';
    fbBody.style.overflow = 'hidden';
});

fbCross.addEventListener('click', (e) => {
    fbMenu.classList.remove('popup-menu--in');
    fbMenu.classList.add('popup-menu--out');
    fbBody.style.overflow = 'scroll';
    function start() {
        fbBack.style.display = 'none';
    };
    setTimeout(start, 300);
});
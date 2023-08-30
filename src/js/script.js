//accordeon

let accordeon = document.querySelector('.experience'),
    tab = document.querySelectorAll('.experience__frame'),
    cut = document.querySelectorAll('.experience__cut'),
    button = document.querySelectorAll('.experience__button');
    buttonW = document.querySelectorAll('.experience__button--w');

function click1(e) {
    const target = e.target.closest('.experience__frame');
    if (target) {
        tab.forEach((item, i) => {
            sur = +[i];// "+" преобразует строку в число
            let surrent = sur + 1;
            if (item === target) {

                if (tab[i].classList.contains('experience__frame--max')) {
                    tab[i].classList.remove('experience__frame--max');
                    tab[i].style.animation = 'framemin-' + surrent + ' .7s';
                    tab[i].classList.add('experience__frame--min');
                    function noone() {
                        cut[i].style.display = 'none';
                    }
                    setTimeout(noone, 350); //1000 - 1 second
                    
                    button[i].style.transform = 'translate(-50%, 50%)'+'rotate(180deg)';
                    buttonW[i].style.transform = 'translate(-50%, 50%)'+'rotate(180deg)';
                } else {
                    if (tab[i].classList.contains('experience__frame--min')) {
                        tab[i].classList.remove('experience__frame--min');
                    };
                    
                    tab[i].style.animation = 'framemax-' + surrent + ' .7s';
                    tab[i].classList.add('experience__frame--max');
                    function cutt() {
                        cut[i].style.display = 'block';
                    }
                    setTimeout(cutt, 100); 
                    button[i].style.transform = 'translate(-50%, 50%)'+'rotate(0deg)';
                    buttonW[i].style.transform = 'translate(-50%, 50%)'+'rotate(0deg)';
                }
            } else {
                if (tab[i].classList.contains('experience__frame--max')) {
                    tab[i].classList.remove('experience__frame--max');
                    tab[i].style.animation = 'framemin-' + surrent + ' .7s';
                    tab[i].classList.add('experience__frame--min');
                    function noone() {
                        cut[i].style.display = 'none';
                    }
                    setTimeout(noone, 350); //1000 - 1 second
                    
                    button[i].style.transform = 'translate(-50%, 50%)'+'rotate(180deg)';
                    buttonW[i].style.transform = 'translate(-50%, 50%)'+'rotate(180deg)';
                };
            };
        })
    };
}; 
accordeon.addEventListener('click', (e) => { 
    click1(e); 
});







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


//Pop-up меню

let puBurger = document.querySelector('.header__burger'),
    puBody = document.querySelector('.popup-menu'),
    puBack = document.querySelector('.dark'),
    puBack2 = document.querySelector('.dark2'),
    puBack3 = document.querySelector('.dark3'),
    puCross = document.querySelector('.popup-menu__cross'),
    puLinks = document.querySelector('.popup-menu__links'),
    body = document.querySelector('body');

puBurger.addEventListener('click', (e) => {

    //puBody.style.display = 'block';
    if (puBody.classList.contains('popup-menu--out')) {
        puBody.classList.remove('popup-menu--out');
    }; 
    puBody.classList.add('popup-menu--in');
    puBack.style.display = 'block';
    puBack2.style.display = 'block';
    puBack3.style.display = 'block';
    body.style.overflow = 'hidden';
});

let puArr = [puCross, puLinks].forEach(item => {
    item.addEventListener('click', (e) => {
        puBody.classList.remove('popup-menu--in');
        puBody.classList.add('popup-menu--out');
        puBack.style.display = 'none';
        puBack2.style.display = 'none';
        puBack3.style.display = 'none';
        body.style.overflow = 'scroll';
        //puBody.style.display = 'none';
    }); 
});

    

window.addEventListener('resize', (e) => { 
    if (puBody.classList.contains('popup-menu--out')) {
        puBody.classList.remove('popup-menu--out');
    }; 
});



//Проигрыватель

//let vcross = document.querySelector('.video__cross');


var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
player = new YT.Player (
                'player', {
                height: '1572',
                width: '720',
                videoId: 'd-_XvkSt1UI',
                events: {
                'onReady': onPlayerReady,
            }
        }
    );
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.









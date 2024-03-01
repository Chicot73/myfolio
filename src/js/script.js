//accordeon

let accordeon = document.querySelector('.experience'),
    tab = document.querySelectorAll('.experience__frame'),
    cut = document.querySelectorAll('.experience__cut'),
    button = document.querySelectorAll('.experience__button'),
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

                    button[i].style.transform = 'translate(-50%, 50%)' + 'rotate(180deg)';
                    buttonW[i].style.transform = 'translate(-50%, 50%)' + 'rotate(180deg)';
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
                    button[i].style.transform = 'translate(-50%, 50%)' + 'rotate(0deg)';
                    buttonW[i].style.transform = 'translate(-50%, 50%)' + 'rotate(0deg)';
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

                    button[i].style.transform = 'translate(-50%, 50%)' + 'rotate(180deg)';
                    buttonW[i].style.transform = 'translate(-50%, 50%)' + 'rotate(180deg)';
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
    });
});

//Меню выбора сайта

let changeBtn = document.querySelector('.benefits__button'),
    changeBody = document.querySelector('.change-menu'),
    changeBack = document.querySelector('.dark-site'),
    changeCross = document.querySelector('.change-menu__cross'),
    body2 = document.querySelector('body');

changeBtn.addEventListener('click', (e) => {

    if (changeBody.classList.contains('change-menu--out')) {
        changeBody.classList.remove('change-menu--out');
    };
    changeBody.classList.add('change-menu--in');
    changeBack.style.display = 'block';
    body2.style.overflow = 'hidden';
});
let changeArr = [changeCross, changeBack].forEach(item => {
    item.addEventListener('click', (e) => {
        changeBody.classList.remove('change-menu--in');
        changeBody.classList.add('change-menu--out');
        changeBack.style.display = 'none';
        body2.style.overflow = 'scroll';
    });
});



window.addEventListener('resize', (e) => {
    if (puBody.classList.contains('popup-menu--out')) {
        puBody.classList.remove('popup-menu--out');
    };
    if (changeBody.classList.contains('change-menu--out')) {
        changeBody.classList.remove('change-menu--out');
    };
});


//верхнее меню

function aboutmeFn() {
    //e.preventDefault();
    document.getElementById('aboutme').scrollIntoView({
        block: "start",
        behavior: 'smooth'
    })
}

function experienceFn() {
    //e.preventDefault();
    document.getElementById('experience').scrollIntoView({
        block: "start",
        behavior: 'smooth'
    })
}

function examplesFn() {
    //e.preventDefault();
    document.getElementById('examples').scrollIntoView({
        block: "start",
        behavior: 'smooth'
    })
}

function contactsFn() {
    //e.preventDefault();
    document.getElementById('contacts').scrollIntoView({
        block: "start",
        behavior: 'smooth'
    })
}

//Проигрыватель



document.addEventListener('DOMContentLoaded', function () {

    var tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    var firstScriptTag = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

    var player;

    let ytCross = document.getElementById('vcross1'),
        backgro = document.getElementById('vframe1'),
        ytBack = document.querySelector('.dark4'),
        mark = document.querySelectorAll('.yt-button__mark'),
        body = document.querySelector('body');

    document.addEventListener('click', (e) => {
        const targetVideo = e.target.closest('.yt-button__mark');
        if (targetVideo) {
            mark.forEach((item, i) => {
                if (item === targetVideo) {
                    backgro.classList.add('active');
                    ytBack.classList.add('active');
                    body.style.overflow = 'hidden';
                    player = new YT.Player('player', {
                        height: '1080',
                        width: '100%',
                        videoId: item.dataset.video,//из атрибута data-video кнопки
                        playerVars: { 'autoplay': 1, 'controls': 1 },
                        events: {
                            'onReady': onPlayerReady,
                            'onStateChange': onPlayerStateChange
                        }
                    });

                    function onPlayerReady(event) {
                        event.target.setVolume(30);
                        event.target.playVideo();
                        event.target.setPlaybackQuality('highres');
                    }

                    function onPlayerStateChange(event) {
                        if (event.data == YT.PlayerState.BUFFERING) {
                            event.target.setPlaybackQuality('highres');
                        }
                    }
                }
            })
        }
    })

    let ytbgArr = [ytBack, ytCross];
    ytbgArr.forEach(item => {
        item.addEventListener('click', (e) => {
            backgro.classList.remove('active');
            ytBack.classList.remove('active');
            body.style.overflow = 'scroll';
            player.destroy();
        });
    });
})



//Cертификаты

let educationLinks = document.querySelectorAll(".education__link"),
    diplomaImg = document.getElementById('diploma-img'),
    sertificateImg = document.getElementById('sertificate-img'),
    regards = [diplomaImg, sertificateImg],
    bodySert = document.querySelector('body');

document.addEventListener('click', (e) => {
    const targetBtn = e.target.closest(".education__link");
    if (targetBtn) {
        educationLinks.forEach((item, i) => {
            if (item === targetBtn) {
                if (i === 0) { //первый объект в массиве
                    diplomaImg.classList.add("active");
                    bodySert.style.overflow = 'hidden';
                } else {
                    sertificateImg.classList.add("active");
                    bodySert.style.overflow = 'hidden';
                }
            }
        })
    }
})

regards.forEach(item => {
    item.addEventListener('click', (e) => { //одно событие на каждый item
        diplomaImg.classList.remove("active");
        sertificateImg.classList.remove("active");
        bodySert.style.overflow = 'scroll';
    });
});






/* window.addEventListener('DOMContentLoaded', () => {

    let budgetHide = document.querySelector(".budget__hide"),
        turgetHide = document.querySelector(".turget__hide"),
        positioningHide = document.querySelector(".positioning__hide"),
        collageHide = document.querySelector(".collage__hide");
    const nextBtnArr = Array.from(document.querySelectorAll(".next"));

    window.addEventListener("scroll", scrollHandler);

    function scrollHandler(e) {



        function getCoords(budgetDlm) {
            let box = budgetDlm.getBoundingClientRect();

            return {
                top: box.top + window.scrollY
            };
        }

        let coords = getCoords(budgetDlm);
        let scrl = window.scrollY || document.documentElement.scrollTop;
        if (scrl > coords.top - 90) {
            window.scrollTo({
                top: coords.top - 90,
                behavior: 'auto',
            });
        } else {
            return;
        };
        function goNext() {
            e.preventDefault();
            scrl = null;
            window.removeEventListener("scroll", scrollHandler);
            budgetHide.style.display = "none";
            window.scrollTo({
                top: coords.top + 500,
                behavior: 'smooth',
            });
            window.addEventListener("scroll", scrollHandler);
        }
        budgetBtn.addEventListener('click', goNext);

    };
})



const cardAddArr = Array.from(document.querySelectorAll(".card__basket"));

myCart.products = cardAddArr.forEach((cardAdd) => {

    cardAdd.addEventListener("click", (e) => { })
})

removeProduct(product) {
    const findIndex = this.products.indexOf(product);
    if (findIndex !== -1) {
        this.products.splice([findIndex], 1);
    }
}
let index = cardAddArr.findIndex(el => el.dataset.id === product.id);
cardAdd = cardAddArr[index];
let index = myCart.products.findIndex(el => el.id === cardId);
if (index !== -1) { }

this.imageSrc = card.querySelector(".card__image").children[0].src;

//mainmenu

let mainMenu = document.querySelector(".header__mainmenu"),
    tab = document.querySelectorAll(".header__item"),
    tab2 = document.querySelector(".header__item--last");



mainMenu.addEventListener('click', (e) => {

    const area = e.target.closest(".header__item");

    if (area) {
        tab.forEach((item, i) => {
            if (item === area) {
                tab[i].classList.add("header__active");
                tab2.classList.add("header__active2");
            } else {
                tab[i].classList.remove("header__active");
                tab2.classList.remove("header__active2");
            }
        });
    }
}); */











window.addEventListener('DOMContentLoaded', () => {

    function throttle(func, ms) {

        let isThrottled = false,
            savedArgs,
            savedThis;

        function wrapper() {

            if (isThrottled) { // (2)
                savedArgs = arguments;
                savedThis = this;
                return;
            }

            func.apply(this, arguments); // (1)

            isThrottled = true;

            setTimeout(function () {
                isThrottled = false; // (3)
                if (savedArgs) {
                    wrapper.apply(savedThis, savedArgs);
                    savedArgs = savedThis = null;
                }
            }, ms);
        }

        return wrapper;
    }; //это функция для торможения срабатывания события "scroll"

    const f1000 = throttle(scrollHandler, 500);
    //это подключение с аргументами: что подрубать и время в мс

    window.addEventListener("scroll", f1000);

    let budgetHide = document.querySelector(".budget__hide"),
        turgetDlm = document.getElementById("d02"),
        turget = document.querySelector(".turget"),
        budgetBtn = document.getElementById("d01-sec"),
        budgetTitle = document.getElementById("budget-title");
    //let budgetDlm = document.getElementById("d01");

    function getCoords(budgetBtn) {
        let box = budgetBtn.getBoundingClientRect();

        return {
            top: box.top + window.scrollY
        }
    }
    let coords = getCoords(budgetBtn);
    /* let maxWidth;
    let maxWidth2;
    let maxWidthSec;
    let maxWidthSec2;

    maxWidth = 90;
    maxWidth2 = 90;
    maxWidthSec = 500;
    maxWidthSec2 = 500; */



    function change765(e) {
        if (e.matches) {
            coords = getCoords(budgetBtn);
            /* maxWidth = -70;
            maxWidth2 = -70;
            maxWidthSec = 1000;
            maxWidthSec2 = 700; */
        }
    };
    const mQuery1 = window.matchMedia('(min-width: 62.51em) and (max-width: 76.5em)');
    change765(mQuery1);
    mQuery1.addEventListener('change', function () {
        change765(mQuery1);
    });

    function change625(e) {
        if (e.matches) {
            coords = getCoords(budgetBtn);
            /* maxWidth = -1100;
            maxWidth2 = -250;
            maxWidthSec = 1350;
            maxWidthSec2 = 700; */
        }
    };
    const mQuery2 = window.matchMedia('(min-width: 48.1em) and (max-width: 62.5em)');
    change625(mQuery2);
    mQuery2.addEventListener('change', function () {
        change625(mQuery2);
    });

    function change481(e) {
        if (e.matches) {
            coords = getCoords(budgetBtn);
            /* maxWidth = -1350;
            maxWidth2 = -370;
            maxWidthSec = 1700;
            maxWidthSec2 = 600; */
        }
    };
    const mQuery3 = window.matchMedia('(min-width: 36.1em) and (max-width: 48.09em)');
    change481(mQuery3);
    mQuery3.addEventListener('change', function () {
        change481(mQuery3);
    });

    function change361(e) {
        if (e.matches) {
            coords = getCoords(budgetBtn);
            /* maxWidth = -2300;
            maxWidthSec = 2500;
            maxWidth2 = -320;
            maxWidthSec2 = 600; */
        }
    };
    const mQuery4 = window.matchMedia('(min-width: 20.1em) and (max-width: 36.09em)');
    change361(mQuery4);
    mQuery4.addEventListener('change', function () {
        change361(mQuery4);
    });

    function change201(e) {
        if (e.matches) {
            coords = getCoords(budgetBtn);
            /* maxWidth = -2100;
            maxWidthSec = 2500;
            maxWidth2 = -270;
            maxWidthSec2 = 600; */
        }
    };
    const mQuery5 = window.matchMedia('(max-width: 20.09em)');
    change201(mQuery5);
    mQuery5.addEventListener('change', function () {
        change201(mQuery5);
    });


    function scrollHandler() {

        let scrl = window.scrollY || document.documentElement.scrollTop;

        if (scrl > coords.top + 200) {
            budgetBtn.scrollIntoView({
                block: "center"
            });
            /* window.scrollTo({
                top: coords.top,
                behavior: 'auto',
            }); */
        } else {
            return;
        };


        budgetBtn.addEventListener('click', (e) => {
            e.preventDefault();
            scrl = null;
            window.removeEventListener("scroll", f1000);
            budgetHide.style.display = "none";
            turgetDlm.style.display = "block";
            turget.style.display = "block";

            /* window.scrollTo({
                top: coords.top + 1400,
                behavior: 'smooth',
            }); */
            budgetTitle.scrollIntoView({
                block: "center",
                behavior: 'smooth'
            });




            const f021000 = throttle(scrollHandler02, 500);

            window.addEventListener("scroll", f021000);

            let turgetHide = document.querySelector(".turget__hide"),
                turgetBtn = document.getElementById("d02-sec"),
                //turgetDlmB = document.getElementById("d02"),
                posit = document.querySelector(".positioning"),
                positDlm = document.getElementById("d03"),
                turgetTitle = document.getElementById("turget-title");

            function getCoords02(turgetBtn) {
                let box2 = turgetBtn.getBoundingClientRect();

                return {
                    top: box2.top + window.scrollY
                };
            }
            let coords02 = getCoords02(turgetBtn);

            function scrollHandler02() {
                let scrl02 = window.scrollY || document.documentElement.scrollTop;
                if (scrl02 > coords02.top + 200) {
                    turgetBtn.scrollIntoView({
                        block: "center"
                    });
                };




                turgetBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    scrl = null;
                    scrl02 = null;
                    window.removeEventListener("scroll", f021000);
                    turgetHide.style.display = "none";
                    positDlm.style.display = "block";
                    posit.style.display = "block";
                    /* window.scrollTo({
                        top: coords02.top + maxWidthSec2,
                        behavior: 'smooth',
                    }); */
                    turgetTitle.scrollIntoView({
                        block: "center",
                        behavior: 'smooth'
                    });




                    const f031000 = throttle(scrollHandler03, 500);

                    window.addEventListener("scroll", f031000);

                    let positHide = document.querySelector(".positioning__hide"),
                        positBtn = document.getElementById("d03-sec"),
                        //positDlmB = document.getElementById("d03"),
                        collage = document.querySelector(".collage"),
                        collageDlm = document.getElementById("d04"),
                        positTitle = document.getElementById("posit-title");

                    function getCoords03(positBtn) {
                        let box3 = positBtn.getBoundingClientRect();

                        return {
                            top: box3.top + window.scrollY
                        };
                    }
                    let coords03 = getCoords03(positBtn);

                    function scrollHandler03() {
                        let scrl03 = window.scrollY || document.documentElement.scrollTop;
                        /* if (scrl03 > coords03.top) {
                            window.scrollTo({
                                top: coords03.top,
                                behavior: 'auto',
                            });
                        }; */
                        if (scrl03 > coords03.top + 200) {
                            positBtn.scrollIntoView({
                                block: "center"
                            });
                        };

                        positBtn.addEventListener('click', (e) => {
                            e.preventDefault();
                            scrl = null;
                            scrl02 = null;
                            scrl03 = null;
                            window.removeEventListener("scroll", f031000);
                            positHide.style.display = "none";
                            collageDlm.style.display = "block";
                            collage.style.display = "block";
                            /* window.scrollTo({
                                top: coords03.top + maxWidthSec2,
                                behavior: 'smooth',
                            }); */
                            positTitle.scrollIntoView({
                                block: "center",
                                behavior: 'smooth'
                            });






                            const f041000 = throttle(scrollHandler04, 500);

                            window.addEventListener("scroll", f041000);

                            let collageHide = document.querySelector(".collage__hide"),
                                collageBtn = document.getElementById("d04-sec"),
                                //collageDlmB = document.getElementById("d04"),
                                finishDlm = document.getElementById("d05"),
                                collageTitle = document.getElementById("collage-title");

                            function getCoords04(collageBtn) {
                                let box4 = collageBtn.getBoundingClientRect();

                                return {
                                    top: box4.top + window.scrollY
                                };
                            }
                            let coords04 = getCoords04(collageBtn);

                            function scrollHandler04() {
                                let scrl04 = window.scrollY || document.documentElement.scrollTop;
                                /* if (scrl04 > coords04.top) {
                                    window.scrollTo({
                                        top: coords04.top,
                                        behavior: 'auto',
                                    });
                                }; */
                                if (scrl04 > coords04.top + 200) {
                                    collageBtn.scrollIntoView({
                                        block: "center"
                                    });
                                };

                                collageBtn.addEventListener('click', (e) => {
                                    e.preventDefault();
                                    scrl = null;
                                    scrl02 = null;
                                    scrl03 = null;
                                    scrl04 = null;
                                    window.removeEventListener("scroll", f041000);
                                    collageHide.style.display = "none";
                                    finishDlm.style.display = "block";
                                    collage.style.display = "block";
                                    /* window.scrollTo({
                                        top: coords04.top + maxWidthSec2,
                                        behavior: 'smooth',
                                    }); */
                                    collageTitle.scrollIntoView({
                                        block: "center",
                                        behavior: 'smooth'
                                    });
                                })
                            };
                        })
                    };
                })
            };
        })
    };
})





///////////////////////////////////////////////////////////////////////////
// BRIEF.HTML

//Запрет прокрутки
//mainmenu animation
/* function stopScroll() {
let scrollMax;
window.onscroll = function () {
scrollMax = 170;
let scrl = window.scrollY;
scrl > 170 ? (stop = scrollMax)
   : ('')
}, history.scrollRestoration = "manual";
};
stopScroll(); */

//let result = условие ? значение1 : значение2;
//Например:
//let accessAllowed = (age > 18) ? true : false;
//Этот пример будет делать то же самое, что и предыдущий:
//let accessAllowed = age > 18 ? true : false;








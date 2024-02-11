window.addEventListener('DOMContentLoaded', () => {

    let formSucess = false;

    //Анимация спиннера - включение

    const buttonCustomer = document.getElementById('d01-sec');

    let counterCustomer;

    function downloadAnimIn() {
        if (counterCustomer >= 1) {
            if (!document.querySelector('.downloader').classList.contains('active')) {
                document.querySelector('.downloader').classList.add('active');
            }
            //console.log(counterTurg);
        };
    };

    function customerAnim(e) {
        e.preventDefault();
        e.stopPropagation();


        downloadAnimIn(e);
        counterCustomer = 0;

        counterCustomer++;

    }

    buttonCustomer.addEventListener('click', customerAnim);

    const buttonBudget = document.getElementById('d02-sec');

    let counterBudget;

    function downloadAnimIn() {
        if (counterBudget >= 1) {
            if (!document.querySelector('.downloader').classList.contains('active')) {
                document.querySelector('.downloader').classList.add('active');
            }
            //console.log(counterTurg);
        };
    };

    function budgetAnim(e) {
        e.preventDefault();
        e.stopPropagation();


        downloadAnimIn(e);
        counterBudget = 0;

        counterBudget++;

    }

    buttonBudget.addEventListener('click', budgetAnim);

    const buttonTurg = document.getElementById('d03-sec');

    let counterTurg;

    function downloadAnimIn() {
        if (counterTurg >= 1) {
            if (!document.querySelector('.downloader').classList.contains('active')) {
                document.querySelector('.downloader').classList.add('active');
            }
            //console.log(counterTurg);
        };
    };

    function turgetAnim(e) {
        e.preventDefault();
        e.stopPropagation();


        downloadAnimIn(e);
        counterTurg = 0;

        counterTurg++;

    }

    buttonTurg.addEventListener('click', turgetAnim);

    const buttonPosit = document.getElementById('d04-sec');

    let counterPosit;

    function downloadAnimIn() {
        if (counterPosit >= 1) {
            if (!document.querySelector('.downloader').classList.contains('active')) {
                document.querySelector('.downloader').classList.add('active');
            }
            //console.log(counterTurg);
        };
    };

    function PositAnim(e) {
        e.preventDefault();
        e.stopPropagation();


        downloadAnimIn(e);
        counterPosit = 0;

        counterPosit++;

    }

    buttonPosit.addEventListener('click', PositAnim);

    /* const buttonCollage = document.getElementById('d05-sec');

    let counterCollage;

    function downloadAnimIn() {
        if (counterCollage >= 1) {
            if (!document.querySelector('.downloader').classList.contains('active')) {
                document.querySelector('.downloader').classList.add('active');
            }
            //console.log(counterTurg);
        };
    };

    function CollageAnim(e) {
        e.preventDefault();
        e.stopPropagation();


        downloadAnimIn(e);
        counterCollage = 0;

        counterCollage++;

    }

    buttonCollage.addEventListener('click', CollageAnim); */


    //Прокрутка по секциям

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

    const f1000 = throttle(scrollHandler, 1000);
    //это подключение с аргументами: что подрубать и время в мс

    window.addEventListener("scroll", f1000);

    let budgetHide = document.querySelector(".budget__hide"),
        turgetDlm = document.getElementById("d02"),
        turget = document.querySelector(".turget"),
        budgetBtn = document.getElementById("d01-sec"),
        turgetBtn = document.getElementById("d02-sec"),
        positBtn = document.getElementById("d03-sec"),
        collageBtn = document.getElementById("d04-sec"),
        finishForm = document.getElementById("d05-sec");
    const budgetTitle = document.getElementById("budget-title");
    const turgetTitle = document.getElementById("turget-title");
    const positTitle = document.getElementById("posit-title");
    //let budgetDlm = document.getElementById("d01");
    let box;
    let scrl = window.scrollY;
    let scrl02 = 0,
        scrl03 = 0,
        scrl04 = 0;

    function getCoords(e) {
        box = e.getBoundingClientRect();

        return {
            top: box.top + window.scrollY
        }
    }
    let coords = getCoords(budgetBtn),
        coords02 = getCoords(turgetBtn),
        coords03 = getCoords(positBtn),
        coords04 = getCoords(collageBtn);

    let heightScroll = 0;

    /* let maxWidth;
    let maxWidth2;
    let maxWidthSec;
    let maxWidthSec2;

    maxWidth = 90;
    maxWidth2 = 90;
    maxWidthSec = 500;
    maxWidthSec2 = 500; */


    function scrollHandler() {

        scrl = window.scrollY || document.documentElement.scrollTop;

        if (scrl > coords.top + 400) {//дополнительный отступ нужен, чтобы при откате к кнопке положение скролла было выше запретной черты, чтобы можно было прокрутить вверх
            budgetBtn.scrollIntoView({
                block: "center"
            });
            /* window.scrollBy({
                top: -500,
                behavior: 'auto',
            }); */
        };


        // let completed = false,
        //     completed2 = false;

        let customerInputs = document.querySelectorAll(".customer__marc");
        let customerInputsData = document.querySelectorAll(".customer__marc2");

        let emptyInputs = [];
        let tempInputs = [];
        let emptyInputs02 = [];
        let tempInputs02 = [];

        const controller = new AbortController();

        function downloadAnimOut(e) {

            if (document.querySelector('.downloader').classList.contains('active')) {
                document.querySelector('.downloader').classList.remove('active');
            }
        };

        function customerCheck(e) {
            //e.preventDefault();
            //e.stopPropagation();



            //successChecked();/////////........\\\\\\\\\.......////////   УДАЛИТЬ!!!!
            ////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////
            ////////////////////////////////////////////////////////////////////////



            /* function pushToStart(arr) {

                for (let str of arr) {
                    if (!startInputs.includes(str)) {
                        startInputs.push(str);
                    }
                }

                return emptyInputs;
            } */



            emptyChecker = () => {
                emptyInputs.forEach(item => {
                    document.addEventListener('change', function () {
                        if (item.value != "") {
                            //console.log(el);
                            let num = item.value.length;

                            if (num > 3) {
                                item.parentNode.parentNode.children[0].children[0].style.display = 'none';

                                if (!tempInputs.includes(item)) {
                                    tempInputs.push(item);
                                }

                                let newArray = emptyInputs.filter((item) => item.id == item.id);
                                emptyInputs = newArray;
                                newArray = null;

                                setTimeout(tempChecker, 3000);
                                clearTimeout(tempChecker);
                            }
                        }
                    },
                        { signal: controller.signal },
                    );
                })
            }

            tempChecker = () => {
                tempInputs.forEach(item => {
                    item.addEventListener('change', function () {
                        if (item.value.trim() == "") {

                            item.parentNode.parentNode.children[0].children[0].style.display = 'block';
                            // document.getElementById("dlm-alert-customer").style.display = "block";

                            if (!emptyInputs.includes(item)) {
                                emptyInputs.push(item);
                            }
                            let newArray = tempInputs.filter((item) => item.id == item.id);
                            tempInputs = newArray;
                            newArray = null;

                            setTimeout(emptyChecker, 3000);
                            clearTimeout(emptyChecker);

                        } else if (item.value != "") {

                            //console.log(el);
                            let num = item.value.length;

                            if (num <= 3) {
                                item.parentNode.parentNode.children[0].children[0].style.display = 'block';

                                if (!emptyInputs.includes(el)) {
                                    emptyInputs.push(el);
                                };

                                let newArray = tempInputs.filter((item) => item.id == item.id);
                                tempInputs = newArray;
                                newArray = null;

                                setTimeout(emptyChecker, 3000);
                                clearTimeout(emptyChecker);
                            }
                        }
                    },
                        { signal: controller.signal },
                    );
                })
            }



            emptyChecker02 = () => {
                emptyInputs02.forEach(item => {
                    item.addEventListener('change', function () {
                        if (item.value != 0) {
                            //console.log(el);
                            let num = item.value.length;

                            if (num == 10) {
                                item.parentNode.parentNode.children[0].children[0].style.display = 'none';

                                if (!tempInputs02.includes(item)) {
                                    tempInputs02.push(item);
                                }

                                let newArray = emptyInputs02.filter((item) => item.id == item.id);
                                emptyInputs02 = newArray;
                                newArray = null;

                                setTimeout(tempChecker02, 3000);
                                clearTimeout(tempChecker02);
                            }
                        }
                    },
                        { signal: controller.signal },
                    );
                })
            }



            tempChecker02 = () => {
                tempInputs02.forEach(item => {
                    item.addEventListener('change', function () {
                        if (item.value.trim() == 0) {

                            item.parentNode.parentNode.children[0].children[0].style.display = 'block';
                            // document.getElementById("dlm-alert-customer").style.display = "block";

                            if (!emptyInputs02.includes(item)) {
                                emptyInputs02.push(item);
                            }
                            let newArray = tempInputs02.filter((item) => item.id == item.id);
                            tempInputs02 = newArray;
                            newArray = null;

                            setTimeout(emptyChecker02, 3000);
                            clearTimeout(emptyChecker02);

                        } else if (item.value != 0) {

                            //console.log(el);
                            let num = item.value.length;

                            if (num < 10) {
                                item.parentNode.parentNode.children[0].children[0].style.display = 'block';

                                if (!emptyInputs.includes(el)) {
                                    emptyInputs.push(el);
                                };

                                let newArray = tempInputs.filter((item) => item.id == item.id);
                                tempInputs = newArray;
                                newArray = null;

                                setTimeout(emptyChecker02, 3000);
                                clearTimeout(emptyChecker02);
                            }
                        }
                    },
                        { signal: controller.signal },
                    );
                })
            }


            closeAlert = () => {
                document.getElementById("dlm-alert-customer").style.display = "none";
            }

            customerInputs.forEach((el) => {

                if (el.value.trim() == "") {

                    el.parentNode.parentNode.children[0].children[0].style.display = 'block';

                    document.getElementById("dlm-alert-customer").style.display = "block";
                    setTimeout(closeAlert, 3000);
                    clearTimeout(closeAlert);


                    if (!emptyInputs.includes(el)) {
                        emptyInputs.push(el);
                        //console.log(emptyInputs);
                    };

                    emptyChecker(e);

                } else if (el.value != "") {

                    //console.log(el);
                    let num = el.value.length;

                    if (num > 3) {
                        // el.parentNode.parentNode.children[0].children[0].style.display = 'none';

                        if (!tempInputs.includes(el)) {
                            tempInputs.push(el);
                        };

                        //return tempChecker();
                        tempChecker(e);

                        /* let newArray = emptyInputs.filter((el) => el.id == el.id);
                        emptyInputs = newArray; */
                    } else {
                        el.parentNode.parentNode.children[0].children[0].style.display = 'block';

                        document.getElementById("dlm-alert-customer").style.display = "block";
                        setTimeout(closeAlert, 3000);
                        clearTimeout(closeAlert);


                        if (!emptyInputs.includes(el)) {
                            emptyInputs.push(el);
                        };

                        //return emptyChecker();
                        emptyChecker(e);
                    }
                }
            })

            customerInputsData.forEach((el) => {

                if (el.value == 0) {

                    el.parentNode.parentNode.children[0].children[0].style.display = 'block';

                    document.getElementById("dlm-alert-customer").style.display = "block";
                    setTimeout(closeAlert, 3000);
                    clearTimeout(closeAlert);


                    if (!emptyInputs02.includes(el)) {
                        emptyInputs02.push(el);
                    }
                    //return emptyChecker02();
                    emptyChecker02();

                    /* let commonEmpty = emptyInputs.length + emptyInputs02.length;
                    //console.log(commonEmpty);
 
                    if (commonEmpty == 0) {
 
                        if (document.getElementById("dlm-alert-customer").style.display = "block") {
                            document.getElementById("dlm-alert-customer").style.display = "none"
                        }
                    }; */

                    //return;

                } else if (el.value != 0) {

                    //console.log(el);
                    let num = el.value.length;

                    if (num == 10) {
                        el.parentNode.parentNode.children[0].children[0].style.display = 'none';

                        if (!tempInputs02.includes(el)) {
                            tempInputs02.push(el);
                        }
                        //return tempChecker02();
                        tempChecker02();

                        // let newArray = emptyInputs.filter((el) => el.id == el.id);
                        // emptyInputs = newArray; 
                    } else if (num < 10) {

                        el.parentNode.parentNode.children[0].children[0].style.display = 'block';

                        document.getElementById("dlm-alert-customer").style.display = "block";
                        setTimeout(closeAlert, 3000);
                        clearTimeout(closeAlert);


                        if (!emptyInputs02.includes(el)) {
                            emptyInputs02.push(el);
                        }
                        //return emptyChecker02();
                        emptyChecker02();

                        let commonEmpty = emptyInputs.length + emptyInputs02.length;
                        //console.log(commonEmpty);

                        /* if (commonEmpty == 0) {
 
                            if (document.getElementById("dlm-alert-customer").style.display = "block") {
                                document.getElementById("dlm-alert-customer").style.display = "none"
                            }
                        }; */
                        //return;
                    }
                }
            })





            let commonEmpty = emptyInputs.length + emptyInputs02.length;

            //console.log(commonEmpty);

            downloadAnimOut()


            function successChecked() {

                controller.abort();

                const controller02 = new AbortController();


                scrl = 0;
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


                const f021000 = throttle(scrollHandler02, 1000);

                window.addEventListener("scroll", f021000);

                let turgetHide = document.querySelector(".turget__hide"),
                    //turgetBtn = document.getElementById("d02-sec"),
                    //turgetDlmB = document.getElementById("d02"),
                    posit = document.querySelector(".positioning"),
                    positDlm = document.getElementById("d03");

                /* function getCoords02(turgetBtn) {
                    let box2 = turgetBtn.getBoundingClientRect();
     
                    return {
                        top: box2.top + window.scrollY
                    };
                } */
                //coords02 = getCoords(turgetBtn);

                function scrollHandler02() {
                    scrl02 = window.scrollY;
                    heightScroll = 7500;
                    if (scrl02 > heightScroll) {
                        turgetBtn.scrollIntoView({
                            block: "center"
                        });
                        /* window.scrollBy({
                            top: -500,
                            behavior: 'auto',
                        }); */
                    };

                    function downloadAnimOut(e) {

                        if (document.querySelector('.downloader').classList.contains('active')) {
                            document.querySelector('.downloader').classList.remove('active');
                        }
                    };


                    function budgetCheck(e) {
                        //e.preventDefault();
                        //e.stopPropagation();




                        //successTrue();/////////........\\\\\\\\\.......////////   УДАЛИТЬ!!!!
                        ////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////
                        ////////////////////////////////////////////////////////////////////////

                        const boxes = document.querySelectorAll('.budget__inputs');

                        const box01 = document.querySelector('.budget__inputs01');
                        let box01Inputs = box01.querySelectorAll('input[type="checkbox"]');
                        const box02 = document.querySelector('.budget__inputs02');
                        let box02Inputs = box02.querySelectorAll('input[type="checkbox"]');
                        const box03 = document.querySelector('.budget__inputs03');
                        let box03Inputs = box03.querySelectorAll('input[type="checkbox"]');
                        const box04 = document.querySelector('.history__textarea');
                        let box04Inputs = box04.querySelectorAll('textarea');
                        let ids; //заполненные чекбоксы




                        let empty01 = [];
                        let temp01 = [];
                        let empty02 = [];
                        let temp02 = [];
                        let empty03 = [];
                        let temp03 = [];

                        let error = false;
                        let error01 = false;
                        let error02 = false;
                        let error03 = false;
                        let errorTa = false;
                        let success = false;
                        //let counter = 0;
                        //let success = false;
                        let budgetAlert01 = document.getElementById("alert-budget-01");
                        let budgetAlert02 = document.getElementById("alert-budget-02");
                        let budgetAlert03 = document.getElementById("alert-budget-03");


                        boxes.forEach(el => {

                            closeAlert = () => {
                                document.getElementById("dlm-alert-budget").style.display = "none";
                            }

                            if (!el.querySelectorAll('input:checked').length) {

                                error = true;

                                document.getElementById("dlm-alert-budget").style.display = "block";
                                setTimeout(closeAlert, 3000);
                                clearTimeout(closeAlert);
                            }
                        });

                        /* if (box04Inputs.value == "") {

                            closeAlert = () => {
                                document.getElementById("dlm-alert-budget").style.display = "none";
                            }

                            errorTa = true;

                            document.getElementById("dlm-alert-budget").style.display = "block";
                            setTimeout(closeAlert, 3000);

                        }; */

                        box04Inputs.forEach(el => {

                            checkAreas = () => {
                                el.addEventListener('change', function () {
                                    if ((el == undefined) || (el.value.trim() == '')) {

                                        el.parentNode.parentNode.children[0].children[0].style.display = 'block';

                                        closeAlert = () => {
                                            document.getElementById("dlm-alert-budget").style.display = "none";
                                        }

                                        document.getElementById("dlm-alert-budget").style.display = "block";
                                        setTimeout(closeAlert, 3000);
                                        clearTimeout(closeAlert);

                                        errorTa = true;

                                    } else {

                                        if (el.value != '') {

                                            let num = el.value.length;

                                            if (num > 3) {

                                                if (el.parentNode.parentNode.children[0].children[0].style.display == 'block') {
                                                    el.parentNode.parentNode.children[0].children[0].style.display = 'none';
                                                }
                                            } else {

                                                closeAlert = () => {
                                                    document.getElementById("dlm-alert-budget").style.display = "none";
                                                }

                                                document.getElementById("dlm-alert-budget").style.display = "block";
                                                setTimeout(closeAlert, 3000);
                                                clearTimeout(closeAlert);

                                                el.parentNode.parentNode.children[0].children[0].style.display = 'block';

                                                errorTa = true;
                                            }
                                        }
                                    }
                                },
                                    { signal: controller02.signal },
                                )
                            };

                            el.getAttribute('value');
                            if ((el == undefined) || (el.value.trim() == '')) {

                                el.parentNode.parentNode.children[0].children[0].style.display = 'block';

                                closeAlert = () => {
                                    document.getElementById("dlm-alert-budget").style.display = "none";
                                }

                                document.getElementById("dlm-alert-budget").style.display = "block";
                                setTimeout(closeAlert, 3000);
                                clearTimeout(closeAlert);

                                errorTa = true;

                                checkAreas();


                            } else {

                                if (el.value != '') {

                                    let num = el.value.length;

                                    if (num > 3) {

                                        if (el.parentNode.parentNode.children[0].children[0].style.display == 'block') {
                                            el.parentNode.parentNode.children[0].children[0].style.display = 'none';
                                        };

                                        //checkAreas();

                                    } else {

                                        closeAlert = () => {
                                            document.getElementById("dlm-alert-budget").style.display = "none";
                                        }

                                        document.getElementById("dlm-alert-budget").style.display = "block";
                                        setTimeout(closeAlert, 3000);
                                        clearTimeout(closeAlert);

                                        el.parentNode.parentNode.children[0].children[0].style.display = 'block';

                                        errorTa = true;

                                        checkAreas();
                                    }
                                }
                            }
                        });


                        if (!box01.querySelectorAll('input:checked').length) {

                            error01 = true;

                            budgetAlert01.style.display = 'block';
                        };

                        if ((!box02.querySelectorAll('input:checked').length) && (box02.querySelector(".budget__input-txt").value.trim() == '')) {

                            error02 = true;

                            budgetAlert02.style.display = 'block';

                        };

                        if ((!box03.querySelectorAll('input:checked').length) && (box03.querySelector(".budget__input-txt").value.trim() == '')) {

                            error03 = true;

                            budgetAlert03.style.display = 'block';
                        };


                        checkEmpty01 = () => {

                            empty01.forEach(e => {

                                e.addEventListener('change', function () {

                                    if (e.checked) {

                                        if (!temp01.includes(e)) {
                                            temp01.push(e);
                                        };
                                        if (temp01.length != 0) {
                                            budgetAlert01.style.display = 'none';
                                        };
                                        let coll = box01.querySelectorAll('input:not(checked)');
                                        empty01 = null;
                                        empty01 = [];
                                        coll.forEach(e => {
                                            if (!empty01.includes(e)) {
                                                empty01.push(e);
                                            }
                                        })
                                        /* const findIndex = empty01.findIndex(i => i.e === e)
                                        if (findIndex) {
                                            empty01.splice([findIndex], 1);
                                        } */
                                    };
                                    // setTimeout(checkTemp01, 3000);
                                    // clearTimeout(checkTemp01);
                                },
                                    { signal: controller02.signal },
                                );
                            })
                        }

                        checkTemp01 = () => {

                            temp01.forEach(e => {

                                e.addEventListener('change', function () {

                                    if (!e.checked) {

                                        if (!empty01.includes(e)) {
                                            empty01.push(e);
                                        };
                                        /* const findIndex = temp01.findIndex(i => i.e === e)
                                        if (findIndex) {
                                            temp01.splice([findIndex], 1);
                                        }; */
                                        let coll = box01.querySelectorAll('input:checked');
                                        temp01 = null;
                                        temp01 = [];
                                        coll.forEach(e => {
                                            if (!temp01.includes(e)) {
                                                temp01.push(e);
                                            }
                                        });

                                        if (temp01.length == 0) {
                                            budgetAlert01.style.display = 'block';
                                            //alarm01.style.display = 'block';
                                        };
                                    };
                                    // setTimeout(checkEmpty01, 3000);
                                    // clearTimeout(checkEmpty01);
                                },
                                    { signal: controller02.signal },
                                );
                            })
                        }

                        checkEmpty02 = () => {

                            empty02.forEach(e => {

                                e.addEventListener('change', function () {

                                    if (e.checked) {

                                        if (!temp02.includes(e)) {
                                            temp02.push(e);
                                        };
                                        if (temp02.length != 0) {
                                            budgetAlert02.style.display = 'none';
                                        };
                                        let coll = box02.querySelectorAll('input:not(checked)');
                                        empty02 = null;
                                        empty02 = [];
                                        coll.forEach(e => {
                                            if (!empty02.includes(e)) {
                                                empty02.push(e);
                                            }
                                        })
                                        /* const findIndex = empty01.findIndex(i => i.e === e)
                                        if (findIndex) {
                                            empty01.splice([findIndex], 1);
                                        } */
                                    };
                                    // setTimeout(checkTemp02, 3000);
                                    // clearTimeout(checkTemp02);
                                },
                                    { signal: controller02.signal },
                                );
                            })
                        }

                        checkTemp02 = () => {

                            temp02.forEach(e => {

                                e.addEventListener('change', function () {

                                    if (!e.checked) {

                                        if (!empty02.includes(e)) {
                                            empty02.push(e);
                                        };
                                        /* const findIndex = temp01.findIndex(i => i.e === e)
                                        if (findIndex) {
                                            temp01.splice([findIndex], 1);
                                        }; */
                                        let coll = box02.querySelectorAll('input:checked');
                                        temp02 = null;
                                        temp02 = [];
                                        coll.forEach(e => {
                                            if (!temp02.includes(e)) {
                                                temp02.push(e);
                                            }
                                        });

                                        if (temp02.length == 0) {
                                            budgetAlert02.style.display = 'block';
                                            //alarm01.style.display = 'block';
                                        };
                                    };
                                    // setTimeout(checkEmpty02, 3000);
                                    // clearTimeout(checkEmpty02);
                                },
                                    { signal: controller02.signal },
                                );
                            })

                            /* box02.addEventListener('click', function (e) {
                                if (e) {
                                    temp02.forEach(e => {
                                        if (!e.checked) {

                                            if (!empty02.includes(e)) {
                                                empty02.push(e);
                                            };
                                            let coll = box02.querySelectorAll('input:not(checked)');
                                            temp02 = null;
                                            temp02 = [];
                                            coll.forEach(e => {
                                                if (!temp02.includes(e)) {
                                                    temp02.push(e);
                                                }
                                            });
                                            if (temp02.length == 0) {
                                                budgetAlert02.style.display = 'block';
                                                //alarm01.style.display = 'block';
                                            };
                                        }
                                    })
                                }
                            }) */
                        }

                        checkEmpty03 = () => {

                            empty03.forEach(e => {

                                e.addEventListener('change', function () {

                                    if (e.checked) {

                                        if (!temp03.includes(e)) {
                                            temp03.push(e);
                                        };
                                        if (temp03.length != 0) {
                                            budgetAlert03.style.display = 'none';
                                        };
                                        let coll = box03.querySelectorAll('input:not(checked)');
                                        empty03 = null;
                                        empty03 = [];
                                        coll.forEach(e => {
                                            if (!empty03.includes(e)) {
                                                empty03.push(e);
                                            }
                                        })
                                        /* const findIndex = empty01.findIndex(i => i.e === e)
                                        if (findIndex) {
                                            empty01.splice([findIndex], 1);
                                        } */
                                    };
                                    // setTimeout(checkTemp03, 3000);
                                    // clearTimeout(checkTemp03);
                                },
                                    { signal: controller02.signal },
                                );
                            })
                        }

                        checkTemp03 = () => {

                            temp03.forEach(e => {

                                e.addEventListener('change', function () {

                                    if (!e.checked) {

                                        if (!empty03.includes(e)) {
                                            empty03.push(e);
                                        };
                                        /* const findIndex = temp01.findIndex(i => i.e === e)
                                        if (findIndex) {
                                            temp01.splice([findIndex], 1);
                                        }; */
                                        let coll = box03.querySelectorAll('input:checked');
                                        temp03 = null;
                                        temp03 = [];
                                        coll.forEach(e => {
                                            if (!temp03.includes(e)) {
                                                temp03.push(e);
                                            }
                                        });

                                        if (temp03.length == 0) {
                                            budgetAlert03.style.display = 'block';
                                            //alarm01.style.display = 'block';
                                        };
                                    };
                                    // setTimeout(checkEmpty03, 3000);
                                    // clearTimeout(checkEmpty03);
                                },
                                    { signal: controller02.signal },
                                )
                            })
                        }

                        /* if (!error) {
                            ids = budget.querySelectorAll('input:checked');
                        } */

                        if (!error01) {
                            //console.log('true');
                            box01Inputs.forEach((e) => {

                                if (e.checked) {

                                    if (!temp01.includes(e)) {
                                        temp01.push(e);
                                    };

                                    checkTemp01();

                                } else {

                                    if (!empty01.includes(e)) {
                                        empty01.push(e);
                                    };

                                    checkEmpty01();
                                }
                            })
                        };

                        if (error01) {
                            //console.log('true');
                            box01Inputs.forEach(e => {

                                if (!empty01.includes(e)) {
                                    empty01.push(e);
                                };

                            });
                            checkEmpty01();
                        }

                        if (!error02) {
                            box02Inputs.forEach((e) => {

                                if (e.checked) {

                                    if (!temp02.includes(e)) {
                                        temp02.push(e);
                                    };

                                    checkTemp02();

                                } else {

                                    if (!empty02.includes(e)) {
                                        empty02.push(e);
                                    };

                                    checkEmpty02();
                                }
                            })
                        };

                        if (error02) {

                            box02.querySelector(".budget__input-txt").addEventListener('change', function () {

                                if (box02.querySelector(".budget__input-txt").value != '') {

                                    let num = box02.querySelector(".budget__input-txt").value.length;

                                    if (num > 3) {

                                        budgetAlert02.style.display = 'none';

                                        error02 = false;

                                    }
                                }
                            })

                            box02Inputs.forEach(e => {

                                if (!empty02.includes(e)) {
                                    empty02.push(e);
                                };

                            });
                            checkEmpty02();
                        }

                        if (!error03) {
                            box03Inputs.forEach((e) => {

                                if (e.checked) {

                                    if (!temp03.includes(e)) {
                                        temp03.push(e);
                                    };

                                    checkTemp03();

                                } else {

                                    if (!empty03.includes(e)) {
                                        empty03.push(e);
                                    };

                                    checkEmpty03();
                                }
                            })
                        };

                        if (error03) {

                            box03.querySelector(".budget__input-txt").addEventListener('change', function () {

                                if (box03.querySelector(".budget__input-txt").value != '') {

                                    let num = box03.querySelector(".budget__input-txt").value.length;

                                    if (num > 3) {

                                        if (budgetAlert03.style.display == 'block') {
                                            budgetAlert03.style.display = 'none';
                                        }

                                        error03 = false;

                                    }
                                }
                            })

                            box03Inputs.forEach(e => {

                                if (!empty03.includes(e)) {
                                    empty03.push(e);
                                };

                            });
                            checkEmpty03();
                        };

                        function box02Click(e) {

                            if (e) {

                                let counters = function () {
                                    if (!box02.querySelectorAll('input:checked').length) {

                                        budgetAlert02.style.display = 'block';

                                    } else {

                                        budgetAlert02.style.display = 'none';
                                    }
                                };

                                setTimeout(counters, 0);
                            }
                        };
                        box02.addEventListener('click', box02Click);

                        downloadAnimOut();


                        function successTrue() {

                            controller02.abort();




















                            const controller03 = new AbortController();








                            scrl02 = 0;
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




                            const f031000 = throttle(scrollHandler03, 1000);

                            window.addEventListener("scroll", f031000);

                            let positHide = document.querySelector(".positioning__hide"),
                                //positBtn = document.getElementById("d03-sec"),
                                //positDlmB = document.getElementById("d03"),
                                collage = document.querySelector(".collage"),
                                collageDlm = document.getElementById("d04");

                            /* function getCoords03(positBtn) {
                                let box3 = positBtn.getBoundingClientRect();
         
                                return {
                                    top: box3.top + window.scrollY
                                };
                            } */
                            //coords03 = getCoords(positBtn);

                            function scrollHandler03() {

                                scrl03 = window.scrollY || document.documentElement.scrollTop;
                                /* if (scrl03 > coords03.top) {
                                    window.scrollTo({
                                        top: coords03.top,
                                        behavior: 'auto',
                                    });
                                }; */

                                heightScroll = 30000;

                                if (scrl03 > heightScroll) {
                                    positBtn.scrollIntoView({
                                        block: "center"
                                    });
                                    /* window.scrollBy({
                                        top: -500,
                                        behavior: 'auto',
                                    }); */
                                };

                                function downloadAnimOut(e) {

                                    if (document.querySelector('.downloader').classList.contains('active')) {
                                        document.querySelector('.downloader').classList.remove('active');
                                    }
                                };



                                const boxes = document.querySelectorAll('.turget__inputs');

                                const inputsTxt = document.querySelectorAll('.turget__input-txt');

                                const boxPh = document.querySelectorAll('.turget__placeholder');







                                //let turgetAlert = document.querySelectorAll("alert-turget");

                                boxes.forEach(box => {

                                    let turgetInputs = box.querySelectorAll('input[type=checkbox]');

                                    turgetInputs.forEach(input => {

                                        input.addEventListener('change', () => {

                                            input.parentNode.parentNode.querySelector('.alert-turget').style.display = "none";

                                        },
                                            { signal: controller03.signal },
                                        )
                                    })
                                })

                                inputsTxt.forEach(el => {
                                    el.addEventListener('change', function () {

                                        if (el.value != '') {

                                            let num = el.value.length;

                                            if (num > 3) {

                                                if (el.parentNode.parentNode.parentNode.querySelector('.alert-turget').style.display == 'block') {
                                                    el.parentNode.parentNode.parentNode.querySelector('.alert-turget').style.display = 'none';
                                                };
                                            }
                                        }
                                    },
                                        { signal: controller03.signal },
                                    )
                                })



                                function turgetCheck(e) {

                                    //e.preventDefault();
                                    //e.stopPropagation();

                                    //successTrue(); ///   удалить!!!
                                    //////////////////    удалить!!!
                                    /////////////////////////////////////////
                                    ////////////////////////////////////////
                                    /////////////////////////////////////////
                                    ////////////////////////////////////////










                                    let error = false;
                                    let errorPh = false;
                                    let success = false;


                                    boxes.forEach(box => {

                                        if (!box.querySelectorAll('input:checked').length) {

                                            let inputTxt = box.contains(document.querySelector(".turget__input-txt"));

                                            if (inputTxt) {

                                                if ((box.querySelector(".turget__input-txt").value == undefined) || (box.querySelector(".turget__input-txt").value.trim() == '')) {

                                                    closeAlert = () => {
                                                        document.getElementById("dlm-alert-turget").style.display = "none";
                                                    }

                                                    box.querySelector('.alert-turget').style.display = "block";

                                                    document.getElementById("dlm-alert-turget").style.display = "block";
                                                    setTimeout(closeAlert, 3000);
                                                    clearTimeout(closeAlert);

                                                    error = true;

                                                } else {

                                                    if (box.querySelector(".turget__input-txt").value != '') {

                                                        let num = box.querySelector(".turget__input-txt").value.length;

                                                        if (num > 3) {

                                                            if (box.querySelector('.alert-turget').style.display == 'block') {
                                                                box.querySelector('.alert-turget').style.display = 'none';
                                                            };

                                                            error = false;
                                                            // checkAreas();

                                                        } else {

                                                            closeAlert = () => {
                                                                document.getElementById("dlm-alert-turget").style.display = "none";
                                                            }

                                                            box.querySelector('.alert-turget').style.display = "block";

                                                            document.getElementById("dlm-alert-turget").style.display = "block";
                                                            setTimeout(closeAlert, 3000);
                                                            clearTimeout(closeAlert);

                                                            error = true;
                                                        }
                                                    }
                                                }
                                            } else {

                                                error = true;

                                                closeAlert = () => {
                                                    document.getElementById("dlm-alert-turget").style.display = "none";
                                                }

                                                box.querySelector('.alert-turget').style.display = "block";

                                                document.getElementById("dlm-alert-turget").style.display = "block";
                                                setTimeout(closeAlert, 3000);
                                                clearTimeout(closeAlert);
                                            }
                                        }
                                    })


                                    boxPh.forEach(el => {

                                        let boxPhInputs = el.querySelectorAll('.turget__input-ph');

                                        boxPhInputs.forEach(el => {

                                            let turgetAlertPh = el.parentNode.parentNode.querySelector('.alert-turget-ph');
                                            // let turgetAlertPh = document.getElementById('alert-turget-ph02');

                                            checkAreas = () => {
                                                el.addEventListener('change', function () {
                                                    if ((el.value == undefined) || (el.value.trim() == '')) {

                                                        turgetAlertPh.style.display = 'block';

                                                        errorPh = true;

                                                    } else {

                                                        if (el.value != '') {

                                                            let num = el.value.length;

                                                            if (num > 3) {

                                                                if (turgetAlertPh.style.display == 'block') {
                                                                    turgetAlertPh.style.display = 'none';
                                                                }
                                                            } else {

                                                                closeAlert = () => {
                                                                    document.getElementById("dlm-alert-turget").style.display = "none";

                                                                }

                                                                document.getElementById("dlm-alert-turget").style.display = "block";
                                                                setTimeout(closeAlert, 3000);
                                                                clearTimeout(closeAlert);

                                                                turgetAlertPh.style.display = 'block';

                                                                errorPh = true;
                                                            }
                                                        }
                                                    }
                                                },
                                                    { signal: controller03.signal },
                                                )
                                            };

                                            el.getAttribute('value');
                                            if ((el.value == undefined) || (el.value.trim() == '')) {

                                                turgetAlertPh.style.display = 'block';

                                                errorPh = true;

                                                closeAlert = () => {
                                                    document.getElementById("dlm-alert-turget").style.display = "none";

                                                }

                                                document.getElementById("dlm-alert-turget").style.display = "block";
                                                setTimeout(closeAlert, 3000);
                                                clearTimeout(closeAlert);

                                                checkAreas();


                                            } else {

                                                if (el.value != '') {

                                                    let num = el.value.length;

                                                    if (num > 3) {

                                                        if (turgetAlertPh.style.display == 'block') {
                                                            turgetAlertPh.style.display = 'none';
                                                        };
                                                        // setTimeout(checkAreas, 3000);
                                                        // clearTimeout(checkAreas);

                                                    } else {

                                                        closeAlert = () => {
                                                            document.getElementById("dlm-alert-turget").style.display = "none";

                                                        }

                                                        document.getElementById("dlm-alert-turget").style.display = "block";

                                                        setTimeout(closeAlert, 3000);
                                                        clearTimeout(closeAlert);

                                                        turgetAlertPh.style.display = 'block';

                                                        errorPh = true;

                                                        checkAreas();
                                                    }
                                                }
                                            }
                                        })
                                    });
                                    downloadAnimOut();










                                    function successTrue() {

                                        controller03.abort();

                                        const controller04 = new AbortController();

                                        //setTimeout(loadingOut, 1000);

                                        scrl03 = 0;
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






                                        const f041000 = throttle(scrollHandler04, 1000);

                                        window.addEventListener("scroll", f041000);

                                        let collageHide = document.querySelector(".collage__hide"),
                                            //collageBtn = document.getElementById("d04-sec"),
                                            //collageDlmB = document.getElementById("d04"),
                                            finishDlm = document.getElementById("d05"),
                                            collageTitle = document.getElementById("collage-title");

                                        /* function getCoords04(collageBtn) {
                                            let box4 = collageBtn.getBoundingClientRect();
             
                                            return {
                                                top: box4.top + window.scrollY
                                            };
                                        } */
                                        //coords04 = getCoords(collageBtn);

                                        function scrollHandler04() {
                                            let scrl04 = window.scrollY;
                                            /* if (scrl04 > coords04.top) {
                                                window.scrollTo({
                                                    top: coords04.top,
                                                    behavior: 'auto',
                                                });
                                            }; */
                                            heightScroll = 32000;
                                            if (scrl04 > heightScroll) {
                                                collageBtn.scrollIntoView({
                                                    block: "center"
                                                });
                                                /* window.scrollBy({
                                                    top: -500,
                                                    behavior: 'auto',
                                                }); */
                                            };


                                            function downloadAnimOut(e) {

                                                if (document.querySelector('.downloader').classList.contains('active')) {
                                                    document.querySelector('.downloader').classList.remove('active');
                                                }
                                            };


                                            const boxes = document.querySelectorAll('.positioning__inputs');

                                            const boxTa2 = document.querySelector('.positioning__radio');

                                            const posTextareas = document.querySelectorAll('.positioning__fieldtxt');

                                            const inputsTa2 = boxTa2.querySelectorAll('textarea');

                                            const inputsTxt = document.querySelectorAll(".positioning__textarea--inp");


                                            let taArr = [];

                                            posTextareas.forEach(el => {
                                                if (!taArr.includes(el)) {
                                                    taArr.push(el);
                                                }
                                            })

                                            inputsTa2.forEach(el => {
                                                if (!taArr.includes(el)) {
                                                    taArr.push(el);
                                                }
                                            })

                                            inputsTxt.forEach(el => {
                                                if (!taArr.includes(el)) {
                                                    taArr.push(el);
                                                }
                                            })






                                            boxes.forEach(box => {

                                                let PosInputs = box.querySelectorAll('input[type=checkbox]');

                                                PosInputs.forEach(input => {

                                                    input.addEventListener('change', () => {

                                                        box.querySelector('.alert-positioning-ta').style.display = "none";

                                                    },
                                                        { signal: controller04.signal },
                                                    )
                                                })
                                            })

                                            taArr.forEach(el => {
                                                el.addEventListener('change', function () {

                                                    el.getAttribute('value');

                                                    if (el.value != '') {

                                                        if (el.value == undefined) {

                                                        } else {

                                                            //console.log(el.value);
                                                            let num = el.value.length;

                                                            if (num > 3) {

                                                                if (el.parentNode.parentNode.parentNode.querySelector('.alert-positioning-ta').style.display == "block") {
                                                                    el.parentNode.parentNode.parentNode.querySelector('.alert-positioning-ta').style.display = 'none';
                                                                };
                                                            }
                                                        }
                                                    }
                                                },
                                                    { signal: controller04.signal },
                                                )
                                            })

                                            function positioningCheck(e) {

                                                // e.preventDefault();
                                                // e.stopPropagation();


                                                //successTrue(); /////////////////////////////////////////////////////-----УДАЛИТЬ!!!!!
                                                /////////////////////////////////////////////////////-----УДАЛИТЬ!!!!!
                                                /////////////////////////////////////////////////////-----УДАЛИТЬ!!!!!
                                                /////////////////////////////////////////////////////-----УДАЛИТЬ!!!!!
                                                /////////////////////////////////////////////////////-----УДАЛИТЬ!!!!!

                                                let error = false;
                                                let errorTa = false;
                                                let errorTa2;
                                                let count = 0;
                                                let count2 = 0;
                                                let count3 = 0;
                                                let countTa = 0;
                                                let temp = false;




                                                boxes.forEach(box => {

                                                    if (!box.querySelectorAll('input:checked').length) {

                                                        //let inputTxt = box.contains(document.querySelector(".positioning__textarea--inp"));

                                                        inputsTxt.forEach(el => {

                                                            el.getAttribute('value');

                                                            if ((el.value == undefined) || (el.value.trim() == '')) {

                                                                box.querySelector('.alert-positioning-ta').style.display = "block";

                                                                closeAlert = () => {
                                                                    document.getElementById("dlm-alert-positioning").style.display = "none";
                                                                }

                                                                document.getElementById("dlm-alert-positioning").style.display = "block";
                                                                setTimeout(closeAlert, 3000);
                                                                clearTimeout(closeAlert);

                                                                error = true;

                                                            } else {

                                                                if (el.value != '') {

                                                                    let num = el.value.length;

                                                                    if (num > 3) {

                                                                        if (box.querySelector('.alert-positioning-ta').style.display == "block") {
                                                                            box.querySelector('.alert-positioning-ta').style.display = 'none';
                                                                        };

                                                                        error = false;

                                                                        // checkAreas();

                                                                    } else {

                                                                        box.querySelector('.alert-positioning-ta').style.display = "block";

                                                                        closeAlert = () => {
                                                                            document.getElementById("dlm-alert-positioning").style.display = "none";
                                                                        }

                                                                        document.getElementById("dlm-alert-positioning").style.display = "block";
                                                                        setTimeout(closeAlert, 3000);
                                                                        clearTimeout(closeAlert);

                                                                        error = true;
                                                                    }
                                                                }
                                                            }
                                                        })
                                                    }
                                                })

                                                posTextareas.forEach(el => {

                                                    el.getAttribute('value');

                                                    if ((el.value == undefined) || (el.value.trim() == '')) {

                                                        closeAlert = () => {
                                                            document.getElementById("dlm-alert-positioning").style.display = "none";
                                                        }

                                                        document.getElementById("dlm-alert-positioning").style.display = "block";
                                                        setTimeout(closeAlert, 3000);
                                                        clearTimeout(closeAlert);

                                                        el.parentNode.parentNode.parentNode.querySelector('.alert-positioning-ta').style.display = 'block';

                                                        errorTa = true;

                                                    } else {

                                                        if (el.value != '') {

                                                            let num2 = el.value.length;

                                                            if (num2 > 3) {

                                                                if (el.parentNode.parentNode.parentNode.querySelector('.alert-positioning-ta').style.display == "block") {
                                                                    el.parentNode.parentNode.parentNode.querySelector('.alert-positioning-ta').style.display = 'none';
                                                                }

                                                                countTa++;

                                                                if (countTa >= 2) {

                                                                    errorTa = false;
                                                                }

                                                            } else {

                                                                closeAlert = () => {
                                                                    document.getElementById("dlm-alert-positioning").style.display = "none";
                                                                }

                                                                document.getElementById("dlm-alert-positioning").style.display = "block";
                                                                setTimeout(closeAlert, 3000);
                                                                clearTimeout(closeAlert);

                                                                el.parentNode.parentNode.parentNode.querySelector('.alert-positioning-ta').style.display = 'block';

                                                                errorTa = true;
                                                            }
                                                        }
                                                    }
                                                });

                                                inputsTa2.forEach(el => {

                                                    el.getAttribute('value');

                                                    if ((el.value == undefined) || (el.value.trim() == '')) {

                                                        temp = true;

                                                        count++;

                                                        if (count >= 2) {

                                                            closeAlert = () => {
                                                                document.getElementById("dlm-alert-positioning").style.display = "none";
                                                            }

                                                            document.getElementById("dlm-alert-positioning").style.display = "block";
                                                            setTimeout(closeAlert, 3000);
                                                            clearTimeout(closeAlert);

                                                            document.getElementById('alert-positioning-02').style.display = 'block';

                                                            errorTa2 = true;
                                                        };

                                                        if ((count == 1) && (count2 == 1)) {

                                                            closeAlert = () => {
                                                                document.getElementById("dlm-alert-positioning").style.display = "none";
                                                            }

                                                            document.getElementById("dlm-alert-positioning").style.display = "block";
                                                            setTimeout(closeAlert, 3000);
                                                            clearTimeout(closeAlert);

                                                            document.getElementById('alert-positioning-02').style.display = 'block';

                                                            errorTa2 = true;
                                                        }

                                                    } else {

                                                        let num3 = el.value.length;

                                                        if (num3 > 3) {

                                                            count3++;

                                                            if (document.getElementById('key').classList.contains('positioning__key')) {
                                                                document.getElementById('key').classList.remove('positioning__key');
                                                            }

                                                            if (document.getElementById('alert-positioning-02').style.display == "block") {
                                                                document.getElementById('alert-positioning-02').style.display = 'none';
                                                            }

                                                            errorTa2 = false;

                                                            if (count3 == 2) {

                                                                document.getElementById('key').classList.add('positioning__key');

                                                                closeAlert = () => {
                                                                    document.getElementById("dlm-alert-positioning").style.display = "none";
                                                                }

                                                                document.getElementById("dlm-alert-positioning").style.display = "block";
                                                                setTimeout(closeAlert, 3000);
                                                                clearTimeout(closeAlert);

                                                                document.getElementById('alert-positioning-02').style.display = 'block';

                                                                errorTa2 = true;

                                                                count3 = null;
                                                            }

                                                        } else if (num3 <= 3) {

                                                            if (temp == true) {

                                                                closeAlert = () => {
                                                                    document.getElementById("dlm-alert-positioning").style.display = "none";
                                                                }

                                                                document.getElementById("dlm-alert-positioning").style.display = "block";
                                                                setTimeout(closeAlert, 3000);
                                                                clearTimeout(closeAlert);

                                                                document.getElementById('alert-positioning-02').style.display = 'block';

                                                                errorTa2 = true;

                                                            } else {

                                                                count2++;

                                                                if (count2 >= 2) {

                                                                    closeAlert = () => {
                                                                        document.getElementById("dlm-alert-positioning").style.display = "none";
                                                                    }

                                                                    document.getElementById("dlm-alert-positioning").style.display = "block";
                                                                    setTimeout(closeAlert, 3000);
                                                                    clearTimeout(closeAlert);

                                                                    document.getElementById('alert-positioning-02').style.display = 'block';

                                                                    errorTa2 = true;
                                                                }
                                                            }
                                                        }
                                                    }
                                                })

                                                //console.log(posTextareas.value);


                                                downloadAnimOut();


                                                function successTrue() {

                                                    controller04.abort();

                                                    const controller05 = new AbortController();



                                                    scrl04 = 0;
                                                    window.removeEventListener("scroll", f041000);
                                                    collageHide.style.display = "none";
                                                    finishDlm.style.display = "block";
                                                    collage.style.display = "block";
                                                    /* window.scrollTo({
                                                        top: coords04.top + maxWidthSec2,
                                                        behavior: 'smooth',
                                                    }); */
                                                    /* collageTitle.scrollIntoView({
                                                        block: "center",
                                                        behavior: 'smooth'
                                                    }) */





                                                    const boxes = document.querySelectorAll('.collage__inputs');

                                                    const collageTextarea = document.querySelector('.collage__fieldtxt');

                                                    const inputsTxt = document.querySelectorAll(".collage__checkbox--inp");


                                                    let taArr = [];

                                                    taArr.push(collageTextarea);

                                                    inputsTxt.forEach(el => {
                                                        if (!taArr.includes(el)) {
                                                            taArr.push(el);
                                                        }
                                                    })

                                                    boxes.forEach(box => {

                                                        let collageInputs = box.querySelectorAll('input[type=checkbox]');

                                                        collageInputs.forEach(input => {

                                                            input.addEventListener('change', () => {

                                                                box.querySelector('.alert-collage').style.display = "none";

                                                            },
                                                                { signal: controller05.signal },
                                                            )
                                                        })
                                                    })

                                                    taArr.forEach(el => {
                                                        el.addEventListener('change', function () {

                                                            el.getAttribute('value');

                                                            if (el.value != '') {

                                                                if (el.value == undefined) {

                                                                } else {

                                                                    //console.log(el.value);
                                                                    let num = el.value.length;

                                                                    if (num > 3) {

                                                                        if (el.parentNode.parentNode.parentNode.querySelector('.alert-collage').style.display == "block") {
                                                                            el.parentNode.parentNode.parentNode.querySelector('.alert-collage').style.display = 'none';
                                                                        };
                                                                    }
                                                                }
                                                            }
                                                        },
                                                            { signal: controller05.signal },
                                                        )
                                                    })






                                                    /////////////////////////////////////////
                                                    /////////////////////////////////////////
                                                    /////////////////////////////////////////
                                                    /////////////////////////////////////////
                                                    /////////////////////////////////////////
                                                    /////////////////////////////////////////

                                                    function collageCheck() {

                                                        //e.preventDefault();

                                                        let error = false;
                                                        let errorTa = false;


                                                        boxes.forEach(box => {

                                                            if (!box.querySelectorAll('input:checked').length) {

                                                                //let inputTxt = box.contains(document.querySelector(".positioning__textarea--inp"));

                                                                inputsTxt.forEach(el => {

                                                                    el.getAttribute('value');

                                                                    if ((el.value == undefined) || (el.value.trim() == '')) {

                                                                        box.querySelector('.alert-collage').style.display = "block";

                                                                        closeAlert = () => {
                                                                            document.getElementById("dlm-alert-collage").style.display = "none";
                                                                        }

                                                                        document.getElementById("dlm-alert-collage").style.display = "block";
                                                                        setTimeout(closeAlert, 3000);
                                                                        clearTimeout(closeAlert);

                                                                        error = true;

                                                                    } else {

                                                                        if (el.value != '') {

                                                                            let num = el.value.length;

                                                                            if (num > 3) {

                                                                                if (box.querySelector('.alert-collage').style.display == "block") {
                                                                                    box.querySelector('.alert-collage').style.display = 'none';
                                                                                };

                                                                                error = false;

                                                                                // checkAreas();

                                                                            } else {

                                                                                box.querySelector('.alert-collage').style.display = "block";

                                                                                closeAlert = () => {
                                                                                    document.getElementById("dlm-alert-collage").style.display = "none";
                                                                                }

                                                                                document.getElementById("dlm-alert-collage").style.display = "block";
                                                                                setTimeout(closeAlert, 3000);
                                                                                clearTimeout(closeAlert);

                                                                                error = true;
                                                                            }
                                                                        }
                                                                    }
                                                                })
                                                            }
                                                        })

                                                        collageTextarea.getAttribute('value');

                                                        if ((collageTextarea.value == undefined) || (collageTextarea.value.trim() == '')) {

                                                            closeAlert = () => {
                                                                document.getElementById("dlm-alert-collage").style.display = "none";
                                                            }

                                                            document.getElementById("dlm-alert-collage").style.display = "block";
                                                            setTimeout(closeAlert, 3000);
                                                            clearTimeout(closeAlert);

                                                            document.getElementById('alert-collage-03').style.display = 'block';

                                                            errorTa = true;

                                                        } else {

                                                            if (collageTextarea.value != '') {

                                                                let num2 = collageTextarea.value.length;

                                                                if (num2 > 3) {

                                                                    if (document.getElementById('alert-collage-03').style.display == "block") {
                                                                        document.getElementById('alert-collage-03').style.display = 'none';
                                                                    }

                                                                    errorTa = false;
                                                                    // setTimeout(checkAreas, 3000);
                                                                    // clearTimeout(checkAreas);

                                                                } else {

                                                                    closeAlert = () => {
                                                                        document.getElementById("dlm-alert-collage").style.display = "none";
                                                                    }

                                                                    document.getElementById("dlm-alert-collage").style.display = "block";
                                                                    setTimeout(closeAlert, 3000);
                                                                    clearTimeout(closeAlert);

                                                                    document.getElementById('alert-collage-03').style.display = 'block';

                                                                    errorTa = true;
                                                                }
                                                            }
                                                        }




                                                        if ((errorTa === false) && (error === false)) {

                                                            //console.log('da');

                                                            //form.addEventListener('submit', letForm);
                                                            //form.submit(letForm);

                                                            formSucess = true;

                                                            //finishForm.removeEventListener('click', collageCheck);
                                                            //finishForm.removeEventListener('click', function () { setTimeout(collageCheck, 0) });

                                                            return;
                                                            //console.log('success = ' + success);

                                                        }
                                                    }

                                                    collageBtn.removeEventListener('click', function () { setTimeout(positioningCheck, 0) });

                                                    finishForm.addEventListener('click', collageCheck);
                                                    //finishForm.addEventListener('click', function () { setTimeout(collageCheck, 0) });
                                                };


                                                if ((error === false) && (errorTa === false) && (errorTa2 === false)) {

                                                    success = true;
                                                    //console.log('success = ' + success);
                                                } else {

                                                    //setTimeout(loadingOut, 1000);
                                                    return;
                                                };

                                                function ifSuccess() {

                                                    if (success == true) {
                                                        successTrue();
                                                    } else {
                                                        return;
                                                    }
                                                };

                                                ifSuccess();
                                            };

                                            //positBtn.removeEventListener('click', turgetCheck);
                                            positBtn.removeEventListener('click', function () { setTimeout(turgetCheck, 0) });

                                            //collageBtn.addEventListener('click', positioningCheck);
                                            collageBtn.addEventListener('click', function () { setTimeout(positioningCheck, 0) });
                                        }
                                    };

                                    if ((error === false) && (errorPh === false)) {

                                        success = true;


                                        //console.log('success = ' + success);
                                    } else {

                                        //setTimeout(loadingOut, 1000);
                                        return;
                                    };

                                    function ifSuccess() {

                                        if (success == true) {

                                            successTrue();

                                        } else {

                                            return;
                                        }
                                    };

                                    ifSuccess();
                                };
                                box02.removeEventListener('click', box02Click);

                                turgetBtn.removeEventListener('click', function () { setTimeout(budgetCheck, 0) });
                                //turgetBtn.removeEventListener('click', budgetCheck);

                                //positBtn.addEventListener('click', turgetCheck);

                                positBtn.addEventListener('click', function () { setTimeout(turgetCheck, 0) });
                            }
                        };

                        if ((error === false) && (errorTa === false)) {

                            success = true;
                            //console.log('success = ' + success);


                        } else {

                            return;
                        };

                        function ifSuccess() {

                            if (success == true) {
                                successTrue();
                            } else {
                                return;
                            }
                        };

                        ifSuccess();

                        /* function ifNotnull() {

                            if (((tempInputs01.length != 0) && (tempInputs02.length != 0) && (tempInputs03.length != 0)) && (budgetAlert04.style.display == 'none') && (budgetAlert05.style.display == 'none')) {

                                if (document.getElementById("dlm-alert-budget").style.display = "block") {
                                    document.getElementById("dlm-alert-budget").style.display = "none"
                                };

                                successChecked();

                            } else {
                                return;
                            }
                        } */

                        //ifNotnull();
                    };

                    //budgetBtn.removeEventListener('click', customerCheck);
                    budgetBtn.removeEventListener('click', function () { setTimeout(customerCheck, 0) });

                    //turgetBtn.addEventListener('click', budgetCheck);
                    turgetBtn.addEventListener('click', function () { setTimeout(budgetCheck, 0) });
                }
            }


            function ifNotnull() {


                if (commonEmpty == 0) {

                    if (document.getElementById("dlm-alert-customer").style.display == "block") {
                        document.getElementById("dlm-alert-customer").style.display = "none"
                    };

                    successChecked();
                } else {
                    return;
                }
            }

            ifNotnull();
        };

        budgetBtn.addEventListener('click', function () { setTimeout(customerCheck, 0) });
    }



    const turgetBtnPrev = document.getElementById("d02-pre");
    const customerTitle = document.querySelector(".customer__title");
    turgetBtnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        customerTitle.scrollIntoView({
            block: "center",
            behavior: 'smooth'
        })
    });
    const positBtnPrev = document.getElementById("d03-pre");
    positBtnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        budgetTitle.scrollIntoView({
            block: "center",
            behavior: 'smooth'
        })
    });
    const collageBtnPrev = document.getElementById("d04-pre");
    collageBtnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        turgetTitle.scrollIntoView({
            block: "center",
            behavior: 'smooth'
        })
    });
    const finishBtnPrev = document.getElementById("d05-pre");
    finishBtnPrev.addEventListener('click', (e) => {
        e.preventDefault();
        positTitle.scrollIntoView({
            block: "center",
            behavior: 'smooth'
        })
    });
    const gotoUp = document.querySelector(".delimiter__gotoup");
    gotoUp.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo(scrollY, 0);//наверх страницы
    })





    ///////////////////////////////////////////////////////////////////
    ///////////////////////////////////////////////////////////////////

    //кнопки включения дополнительной ЦА

    /* function putAddTarget(button) {
        this.button = button;
        button.addTarget = function () {
    
        }
    } */




    /* const section01 = document.querySelector('.turget2');


    document.addEventListener('click', (e) => {

        if (e.target.closest("#normal-button")) {
            e.preventDefault();

            document.querySelector('.turget2').style.display = 'block';

        };
        if (e.target.closest("#normal-button02")) {
            e.preventDefault();

            document.querySelector('.turget2').style.display = 'none';
            //heightScroll = 8600;
        };
        if (e.target.closest("#normal-button03")) {
            e.preventDefault();

            document.querySelector('.turget3').style.display = 'block';
            //heightScroll = 16500;
        };
        if (e.target.closest("#normal-button04")) {
            e.preventDefault();

            document.querySelector('.turget3').style.display = 'none';
            //heightScroll = 12000;
        };
    }) */




    /////////////



    //  Управление счетчиками в инпутах




    class counterInput {
        constructor(rightArr, leftArr, countInput) {
            this.rightArr = rightArr;
            this.leftArr = leftArr;
            this.countInput = countInput;
        }
        start() {

            document.addEventListener('click', (e) => {

                if (e.target == this.rightArr) {

                    let count = this.countInput.value;

                    if (count == undefined || count == null || count.trim() === "" || count == NaN) {

                        count = 1;

                        this.countInput.value = count;
                    };

                    if (count >= 0) {
                        count++;
                        this.countInput.value = count;
                    };

                    this.countInput.parentNode.parentNode.parentNode.children[0].checked = (this.countInput.value > 0 ? true : false)

                } else if (e.target == this.leftArr) {

                    let count02 = this.countInput.value;

                    if (count02 == undefined || count02 == null || count02.trim() === "" || count02 == NaN) {

                        count02 = 0;

                        this.countInput.value = count02;
                    };

                    if (count02 > 0) {
                        count02--;
                        this.countInput.value = count02;
                    };

                    this.countInput.parentNode.parentNode.parentNode.children[0].checked = (this.countInput.value > 0 ? true : false)
                }
            })
        }
    }

    let counter01 = new counterInput(document.getElementById("coun-ar-r").children[0], document.getElementById("coun-ar-l").children[0], document.getElementById("count-form"));
    counter01.start();

    let counter02 = new counterInput(document.getElementById("coun-ar-r02").children[0], document.getElementById("coun-ar-l02").children[0], document.getElementById("count-popup"));
    counter02.start();

    let counter03 = new counterInput(document.getElementById("coun-ar-r03").children[0], document.getElementById("coun-ar-l03").children[0], document.getElementById("count-slider"));
    counter03.start();

    let counter04 = new counterInput(document.getElementById("coun-ar-r04").children[0], document.getElementById("coun-ar-l04").children[0], document.getElementById("count-accordion"));
    counter04.start();

    let counter05 = new counterInput(document.getElementById("coun-ar-r05").children[0], document.getElementById("coun-ar-l05").children[0], document.getElementById("count-map"));
    counter05.start();

    let counter06 = new counterInput(document.getElementById("coun-ar-r06").children[0], document.getElementById("coun-ar-l06").children[0], document.getElementById("count-video"));
    counter06.start();



    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    /////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////



    const form = document.querySelector('.form');

    const sendForm = (data) => {
        return fetch('/mail.php', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8'
            }
        }).then(res => res.json());
    }

    form.addEventListener('submit', (e) => {


        e.preventDefault();



        if (formSucess === true) {

            const dataForm = new FormData(form);
            const user = {};

            dataForm.forEach((val, key) => {
                user[key] = val;
            });

            sendForm(user).then(data => {
                console.log('Письмо отправлено успешно');
            });

            form.reset();



            document.location.replace('https://igorbobyrev.ru/html/feedback.html')

            return;
        }
    })
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








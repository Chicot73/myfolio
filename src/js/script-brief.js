window.addEventListener('DOMContentLoaded', () => {




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

    const f1000 = throttle(scrollHandler, 750);
    //это подключение с аргументами: что подрубать и время в мс

    window.addEventListener("scroll", f1000);

    let budgetHide = document.querySelector(".budget__hide"),
        turgetDlm = document.getElementById("d02"),
        turget = document.querySelector(".turget"),
        budgetBtn = document.getElementById("d01-sec"),
        turgetBtn = document.getElementById("d02-sec"),
        positBtn = document.getElementById("d03-sec"),
        collageBtn = document.getElementById("d04-sec");
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


        budgetBtn.addEventListener('click', function (e) {
            e.preventDefault();

            let customerInputs = document.querySelectorAll(".customer__marc");
            let customerInputsData = document.querySelectorAll(".customer__marc2");

            let emptyInputs = [];
            let tempInputs = [];
            let emptyInputs02 = [];
            let tempInputs02 = [];

            successChecked();/////////   УДАЛИТЬ!!!!



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
                    item.addEventListener('change', function () {
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

                                tempChecker(e);
                            }
                        }
                    })
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

                            emptyChecker(e);

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

                                emptyChecker(e);
                            }
                        }
                    })
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

                                tempChecker02(e);
                            }
                        }
                    })
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

                            emptyChecker02(e);

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

                                emptyChecker(e);
                            }
                        }
                    })
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


            function successChecked() {










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


                const f021000 = throttle(scrollHandler02, 750);

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



                    turgetBtn.addEventListener('click', (e) => {
                        e.preventDefault();

                        let budget = document.querySelector('.budget');
                        let history = document.querySelector('.history');
                        let inputsHistory = history.querySelectorAll('input[type="textarea"]');
                        const inputsBudget = budget.querySelectorAll('input[type="checkbox"]');
                        const boxes = document.querySelectorAll('.budget__inputs');
                        const box01 = document.querySelector('.budget__inputs01');
                        let box01Inputs = box01.querySelectorAll('input[type="checkbox"]');
                        const box02 = document.querySelector('.budget__inputs02');
                        let box02Inputs = box02.querySelectorAll('input[type="checkbox"]');
                        const box03 = document.querySelector('.budget__inputs03');
                        let box03Inputs = box03.querySelectorAll('input[type="checkbox"]');
                        let ids; //заполненные чекбоксы
                        let alarm01 = box01.querySelector('.alert');
                        let alarm02 = box02.querySelector('.alert');
                        let alarm03 = box03.querySelector('.alert');



                        let empty01 = [];
                        let temp01 = [];
                        let empty02 = [];
                        let temp02 = [];
                        let empty03 = [];
                        let temp03 = [];

                        let error01 = false;
                        let error02 = false;
                        let error03 = false;
                        //let counter = 0;
                        //let success = false;
                        let budgetAlert01 = document.getElementById("alert-budget-01");
                        let budgetAlert02 = document.getElementById("alert-budget-02");
                        let budgetAlert03 = document.getElementById("alert-budget-03");

                        boxes.forEach(el => {
                            if (!el.querySelectorAll('input:checked').length) {
                                error = true;
                                //console.log(true);

                                document.getElementById("dlm-alert-budget").style.display = "block";
                                setTimeout(closeAlert, 3000);
                            }
                        });

                        if (!box01.querySelectorAll('input:checked').length) {
                            error01 = true;

                            budgetAlert01.style.display = 'block';
                        };
                        if (!box02.querySelectorAll('input:checked').length) {
                            error02 = true;

                            budgetAlert02.style.display = 'block';
                        };
                        if (!box03.querySelectorAll('input:checked').length) {
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
                                    setTimeout(checkTemp01, 3000);
                                })
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
                                    setTimeout(checkEmpty01, 3000);
                                })
                            });
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
                                    setTimeout(checkTemp02, 3000);
                                })
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
                                    setTimeout(checkEmpty02, 3000);
                                })
                            });
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
                                    setTimeout(checkTemp03, 3000);
                                })
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
                                    setTimeout(checkEmpty03, 3000);
                                })
                            });
                        }

                        /* if (!error) {
                            ids = budget.querySelectorAll('input:checked');
                        } */

                        if (!error01) {
                            console.log('true');
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

                            box03Inputs.forEach(e => {

                                if (!empty03.includes(e)) {
                                    empty03.push(e);
                                };

                            });
                            checkEmpty03();
                        }

                        /* let budgetInputs01 = document.querySelectorAll(".budget__checkbox--01");
                        let budgetInputs02 = document.querySelectorAll(".budget__checkbox--02");
                        let budgetInputs03 = document.querySelectorAll(".budget__checkbox--03");
                        let budgetInputsTextarea01 = document.getElementById("old-progects");
                        let budgetInputsTextarea02 = document.getElementById("competitors");
                        let budgetAlert01 = document.getElementById("alert-budget-01");
                        let budgetAlert02 = document.getElementById("alert-budget-02");
                        let budgetAlert03 = document.getElementById("alert-budget-03");
                        let budgetAlert04 = document.getElementById("alert-budget-04");
                        let budgetAlert05 = document.getElementById("alert-budget-05");


                        let logo = document.getElementById("logo");


                        // let emptyInputs = [];
                        // let tempInputs = [];
                        let emptyInputs01 = [];
                        let tempInputs01 = [];
                        let emptyInputs02 = [];
                        let tempInputs02 = [];
                        let emptyInputs03 = [];
                        let tempInputs03 = [];
                        let budget = document.querySelector('.budget'); */

                        /* emptyChecker01 = () => {
                            document.addEventListener('click', function (e, i) {

                                e.stopPropagation();

                                if (e) {


                                    //console.log(e.target);
                                    e.target[i] = i;
                                    e.target.addEventListener('change', goChange);
                                    function goChange(e, i) {
                                        e.stopPropagation();




                                        if (e.target.checked === true) {


                                            if (!tempInputs01.includes(e.target)) {
                                                tempInputs01.push(e.target);

                                                if (tempInputs01.length != 0) {

                                                    budgetAlert01.style.display = 'none';
                                                };
                                            };
                                            // console.log(emptyInputs01.length);
                                            // emptyInputs01.splice(i, 1);
                                            // console.log('--- ' + (emptyInputs01.length));

                                            let a = true;

                                            console.log(emptyInputs01.length);
                                            if (a) {

                                                emptyInputs01.splice(i, 1);
                                                a = false;
                                            }
                                            console.log('--- ' + (emptyInputs01.length));

                                        }



                                        if (e) {
                                            e.target.removeEventListener('change', goChange);
                                            return;
                                        }
                                    }
                                }
                            })
                        } */

                        /* emptyChecker01 = (e) => {
                            emptyInputs01.forEach(function (e, i) {
                                e.addEventListener('change', function (ev) {
                                    ev.stopPropagation();

                                    if (!e.checked) {
                                        i = null;
                                        throw ev;
                                        return;
                                    }

                                    if (e.checked == true) {


                                        if (!tempInputs01.includes(e)) {
                                            tempInputs01.push(e);

                                            if (tempInputs01.length != 0) {

                                                budgetAlert01.style.display = 'none';
                                            };
                                        };


                                        emptyChecker01(e);

                                        //console.log(i);



                                        // function once(fn, context) {
                                        //     let result;

                                        //     return function () {
                                        //         if (fn) {
                                        //             result = fn.apply(context || this, arguments);
                                        //             fn = null;
                                        //         }

                                        //         return result;
                                        //     }
                                        // }

                                        // let onlyOnce = once(function () {

                                        //     emptyInputs01.splice(-1, 0);
                                        // })

                                        // if (e) {
                                        //     emptyInputs01.splice(i, 1);
                                        // }

                                        // if (e == goal) {

                                        //     emptyInputs01.splice(e.i, 1);
                                        // }


                                        //onlyOnce();

                                        // let a = true;
                                        // if (a) {

                                        //     emptyInputs01.splice(i, 1);
                                        //     a = false;
                                        // }


                                        // console.log('empty');
                                        // console.log(emptyInputs01.length);
                                        // console.log('temp');
                                        // console.log(tempInputs01.length);
                                        console.log(emptyInputs01.length);

                                        emptyInputs01.splice(i, 1);

                                        console.log('--- ' + (emptyInputs01.length));


                                        return;
                                    }
                                })
                            })
                        } */

                        /* tempChecker01 = () => {
                            tempInputs01.forEach(function (e, i) {
                                e.addEventListener('change', function () {

                                    if (e.checked == false) {

                                        if (!emptyInputs01.includes(e)) {
                                            emptyInputs01.push(e);
                                        };


                                        tempChecker01(e);

                                        if (e) {
                                            tempInputs01.splice(i, 1);
                                            if (tempInputs01.length == 0) {

                                                budgetAlert01.style.display = 'block';

                                                document.getElementById("dlm-alert-budget").style.display = "block";

                                                setTimeout(closeAlert, 3000);
                                            }
                                            return;
                                        }
                                    }
                                })
                            })
                        }

                        emptyChecker02 = () => {
                            emptyInputs02.forEach(function (e, i) {
                                e.addEventListener('change', function () {
                                    if (e.checked == true) {

                                        if (!tempInputs02.includes(e)) {
                                            tempInputs02.push(e);

                                            if (tempInputs02.length != 0) {

                                                budgetAlert02.style.display = 'none';
                                            };

                                            tempChecker02(e);
                                        };


                                        let index = i;


                                        emptyInputs02.splice(i, 1);


                                        emptyChecker02(e);
                                    }
                                })
                            })
                        }

                        tempChecker02 = () => {
                            tempInputs02.forEach(function (e, i) {
                                e.addEventListener('change', function () {
                                    if (e.checked == false) {

                                        if (!emptyInputs02.includes(e)) {
                                            emptyInputs02.push(e);

                                            emptyChecker02(e);
                                        };


                                        let index = i;


                                        tempInputs02.splice(i, 1);

                                        if (tempInputs02.length == 0) {

                                            budgetAlert02.style.display = 'block';

                                            document.getElementById("dlm-alert-budget").style.display = "block";

                                            setTimeout(closeAlert, 3000);
                                        }

                                        tempChecker02(e);
                                    }
                                })
                            })
                        }

                        emptyChecker03 = () => {
                            emptyInputs03.forEach(function (e, i) {
                                e.addEventListener('change', function () {
                                    if (e.checked == true) {

                                        if (!tempInputs03.includes(e)) {
                                            tempInputs03.push(e);

                                            if (tempInputs03.length != 0) {

                                                budgetAlert03.style.display = 'none';
                                            };

                                            tempChecker03(e);
                                        };


                                        let index = i;


                                        emptyInputs03.splice(i, 1);


                                        emptyChecker03(e);
                                    }
                                })
                            })
                        }

                        tempChecker03 = () => {
                            tempInputs03.forEach(function (e, i) {
                                e.addEventListener('change', function () {
                                    if (e.checked == false) {

                                        if (!emptyInputs03.includes(e)) {
                                            emptyInputs03.push(e);

                                            emptyChecker03(e);
                                        };


                                        let index = i;


                                        tempInputs03.splice(i, 1);

                                        if (tempInputs03.length == 0) {

                                            budgetAlert03.style.display = 'block';

                                            document.getElementById("dlm-alert-budget").style.display = "block";

                                            setTimeout(closeAlert, 3000);
                                        }

                                        tempChecker03(e);
                                    }
                                })
                            })
                        } */



                        /* budgetInputs01.forEach((el) => {

                            if (el.checked == false) {

                                if (!emptyInputs01.includes(el)) {
                                    emptyInputs01.push(el);
                                };

                                emptyChecker01(e);

                            } else if (el.checked == true) {

                                if (!tempInputs01.includes(el)) {
                                    tempInputs01.push(el);
                                };

                                tempChecker01(e);
                            };
                            if (tempInputs01.length == 0) {

                                budgetAlert01.style.display = 'block';

                                document.getElementById("dlm-alert-budget").style.display = "block";

                                setTimeout(closeAlert, 3000);
                            };
                        })

                        budgetInputs02.forEach((el) => {

                            if (el.checked == false) {

                                if (!emptyInputs02.includes(el)) {
                                    emptyInputs02.push(el);
                                };

                                // emptyChecker02(e);

                            } else if (el.checked == true) {

                                if (!tempInputs02.includes(el)) {
                                    tempInputs02.push(el);
                                };

                                // tempChecker02(e);
                            };
                            if (emptyInputs02.length != 0) {

                                budgetAlert02.style.display = 'block';

                                if (document.getElementById("dlm-alert-budget").style.display == "none") {
                                    document.getElementById("dlm-alert-budget").style.display = "block";

                                    setTimeout(closeAlert, 3000);
                                }
                            } else {

                                budgetAlert02.style.display = 'none';
                            }
                        })

                        budgetInputs03.forEach((el) => {

                            if (el.checked == false) {

                                if (!emptyInputs03.includes(el)) {
                                    emptyInputs03.push(el);
                                };

                                // emptyChecker03(e);

                            } else if (el.checked == true) {

                                if (!tempInputs03.includes(el)) {
                                    tempInputs03.push(el);
                                };

                                // tempChecker03(e);
                            };
                            if (emptyInputs03.length != 0) {

                                budgetAlert03.style.display = 'block';

                                if (document.getElementById("dlm-alert-budget").style.display == "none") {
                                    document.getElementById("dlm-alert-budget").style.display = "block";

                                    setTimeout(closeAlert, 3000);
                                }
                            } else {

                                budgetAlert03.style.display = 'none';
                            }
                        })



                        if (budgetInputsTextarea01.value.trim() == "") {


                            budgetAlert04.style.display = 'block';


                            document.getElementById("dlm-alert-budget").style.display = "block";

                            setTimeout(closeAlert, 3000);



                            budgetInputsTextarea01.addEventListener('change', function () {
                                if (budgetInputsTextarea01.value != "") {

                                    let num = budgetInputsTextarea01.value.length;

                                    if (num > 3) {
                                        budgetAlert04.style.display = 'none';
                                    }
                                }
                            })

                        } else if (budgetInputsTextarea01.value != "") {

                            let num = budgetInputsTextarea01.value.length;

                            if (num > 3) {

                                budgetAlert04.style.display = 'none';

                            } else {

                                budgetAlert04.style.display = 'block';

                                document.getElementById("dlm-alert-budget").style.display = "block";

                                setTimeout(closeAlert, 3000);


                                budgetInputsTextarea01.addEventListener('change', function () {
                                    if (budgetInputsTextarea01.value != "") {

                                        let num = budgetInputsTextarea01.value.length;

                                        if (num > 3) {
                                            budgetAlert04.style.display = 'none';
                                        }
                                    }
                                })
                            }
                        }

                        if (budgetInputsTextarea02.value.trim() == "") {


                            budgetAlert05.style.display = 'block';


                            document.getElementById("dlm-alert-budget").style.display = "block";

                            setTimeout(closeAlert, 3000);



                            budgetInputsTextarea02.addEventListener('change', function () {
                                if (budgetInputsTextarea02.value != "") {

                                    let num = budgetInputsTextarea02.value.length;

                                    if (num > 3) {
                                        budgetAlert05.style.display = 'none';
                                    }
                                }
                            })

                        } else if (budgetInputsTextarea02.value != "") {

                            let num = budgetInputsTextarea02.value.length;

                            if (num > 3) {

                                budgetAlert05.style.display = 'none';

                            } else {

                                budgetAlert05.style.display = 'block';

                                document.getElementById("dlm-alert-budget").style.display = "block";

                                setTimeout(closeAlert, 3000);


                                budgetInputsTextarea02.addEventListener('change', function () {
                                    if (budgetInputsTextarea02.value != "") {

                                        let num = budgetInputsTextarea02.value.length;

                                        if (num > 3) {
                                            budgetAlert05.style.display = 'none';
                                        }
                                    }
                                })
                            }
                        } */




                        function successChecked() {








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




                            const f031000 = throttle(scrollHandler03, 750);

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

                                positBtn.addEventListener('click', (e) => {
                                    e.preventDefault();
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






                                    const f041000 = throttle(scrollHandler04, 750);

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

                                        collageBtn.addEventListener('click', (e) => {
                                            e.preventDefault();
                                            scrl04 = 0;
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
                                            })
                                        })
                                    }
                                })
                            }
                        };

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
                    })
                }
            }


            function ifNotnull() {


                if (commonEmpty == 0) {

                    if (document.getElementById("dlm-alert-customer").style.display = "block") {
                        document.getElementById("dlm-alert-customer").style.display = "none"
                    };

                    successChecked();
                } else {
                    return;
                }
            }

            ifNotnull();

        })
    }
})


//console.log(completed);






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




const section01 = document.querySelector('.turget2');


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
})




/////////////



/* //  Управление счетчиками в инпутах




let rightArr = document.getElementById("coun-ar-r").children[0];
let leftArr = document.getElementById("coun-ar-l").children[0];
let countInput = document.getElementById("count-form");
document.addEventListener('click', (e) => {

    //console.log(e.target.parentNode);

    if (e.target == rightArr) {

        let count = countInput.value;

        if (count == undefined || count == null || count.trim() === "" || count == NaN) {

            count = 1;
            //count++;
            countInput.value = count;
        };

        if (count >= 0) {
            count++;
            countInput.value = count;
        };

        countInput.parentNode.parentNode.parentNode.children[0].checked = (countInput.value > 0 ? true : false)

    } else if (e.target == leftArr) {

        let count02 = countInput.value;

        if (count02 == undefined || count02 == null || count02.trim() === "" || count02 == NaN) {

            count02 = 0;
            //count++;
            countInput.value = count02;
        };

        if (count02 > 0) {
            count02--;
            countInput.value = count02;
        };

        countInput.parentNode.parentNode.parentNode.children[0].checked = (countInput.value > 0 ? true : false)
    }
}); */


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








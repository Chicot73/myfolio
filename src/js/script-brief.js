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

    const f1000 = throttle(scrollHandler, 1000);
    //это подключение с аргументами: что подрубать и время в мс

    window.addEventListener("scroll", f1000);

    let budgetHide = document.querySelector(".budget__hide"),
        turgetDlm = document.getElementById("d02"),
        turget = document.querySelector(".turget"),
        budgetBtn = document.getElementById("d01-sec"),
        turgetBtn = document.getElementById("d02-sec"),
        positBtn = document.getElementById("d03-sec"),
        collageBtn = document.getElementById("d04-sec");
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

        function customerCheck(e) {
            e.preventDefault();

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


                    function budgetCheck(e) {
                        e.preventDefault();




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

                                        errorTa = true;

                                    } else {

                                        if (el.value != '') {

                                            let num = el.value.length;

                                            if (num > 3) {

                                                if (el.parentNode.parentNode.children[0].children[0].style.display = 'block') {
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

                                errorTa = true;

                                checkAreas();


                            } else {

                                if (el.value != '') {

                                    let num = el.value.length;

                                    if (num > 3) {

                                        if (el.parentNode.parentNode.children[0].children[0].style.display = 'block') {
                                            el.parentNode.parentNode.children[0].children[0].style.display = 'none';
                                        };

                                        checkAreas();

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
                                    clearTimeout(checkTemp01);
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
                                    setTimeout(checkEmpty01, 3000);
                                    clearTimeout(checkEmpty01);
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
                                    setTimeout(checkTemp02, 3000);
                                    clearTimeout(checkTemp02);
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
                                    setTimeout(checkEmpty02, 3000);
                                    clearTimeout(checkEmpty02);
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
                                    setTimeout(checkTemp03, 3000);
                                    clearTimeout(checkTemp03);
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
                                    setTimeout(checkEmpty03, 3000);
                                    clearTimeout(checkEmpty03);
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
                        };

                        box02.addEventListener('click', function (e) {
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
                        })




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

                                turgetBtn.removeEventListener('click', budgetCheck);


                                function turgetCheck(e) {

                                    //loadingIn(e);
                                    e.preventDefault();

                                    //successTrue(); ///   удалить!!!
                                    //////////////////  удалить!!!
                                    /////////////////////////////////////////
                                    ////////////////////////////////////////



                                    const boxes = document.querySelectorAll('.turget__inputs');

                                    const box01 = document.querySelector('.turget__inputs01');

                                    const box01Inputs = box01.querySelectorAll('input[type="checkbox"]');

                                    const box02 = document.querySelector('.turget__inputs02');

                                    const box02Inputs = box02.querySelectorAll('input[type="checkbox"]');

                                    const box03 = document.querySelector('.turget__inputs03');

                                    const box03Inputs = box03.querySelectorAll('input[type="checkbox"]');

                                    const box04 = document.querySelector('.turget__inputs04');

                                    const box04Inputs = box04.querySelectorAll('input[type="checkbox"]');

                                    const box05 = document.querySelector('.turget__inputs05');

                                    const box05Inputs = box05.querySelectorAll('input[type="checkbox"]');

                                    const box06 = document.querySelector('.turget__inputs06');

                                    const box06Inputs = box06.querySelectorAll('input[type="checkbox"]');

                                    const box07 = document.querySelector('.turget__inputs07');

                                    const box07Inputs = box07.querySelectorAll('input[type="checkbox"]');

                                    const box08 = document.querySelector('.turget__inputs08');

                                    const box08Inputs = box08.querySelectorAll('input[type="checkbox"]');

                                    const box09 = document.querySelector('.turget__inputs09');

                                    const box09Inputs = box09.querySelectorAll('input[type="checkbox"]');

                                    const box10 = document.querySelector('.turget__inputs10');

                                    const box10Inputs = box10.querySelectorAll('input[type="checkbox"]');

                                    const box11 = document.querySelector('.turget__inputs11');

                                    const box11Inputs = box11.querySelectorAll('input[type="checkbox"]');

                                    const box12 = document.querySelector('.turget__inputs12');

                                    const box12Inputs = box12.querySelectorAll('input[type="checkbox"]');

                                    const box13 = document.querySelector('.turget__inputs13');

                                    const box13Inputs = box13.querySelectorAll('input[type="checkbox"]');

                                    const box14 = document.querySelector('.turget__inputs14');

                                    const box14Inputs = box14.querySelectorAll('input[type="checkbox"]');

                                    const box15 = document.querySelector('.turget__inputs15');

                                    const box15Inputs = box15.querySelectorAll('input[type="checkbox"]');

                                    const boxPh = document.querySelectorAll('.turget__placeholder');







                                    let turgetAlert01 = document.getElementById("alert-turget-01");
                                    let turgetAlert02 = document.getElementById("alert-turget-02");
                                    let turgetAlert03 = document.getElementById("alert-turget-03");
                                    let turgetAlert04 = document.getElementById("alert-turget-04");
                                    let turgetAlert05 = document.getElementById("alert-turget-05");
                                    let turgetAlert06 = document.getElementById("alert-turget-06");
                                    let turgetAlert07 = document.getElementById("alert-turget-07");
                                    let turgetAlert08 = document.getElementById("alert-turget-08");
                                    let turgetAlert09 = document.getElementById("alert-turget-09");
                                    let turgetAlert10 = document.getElementById("alert-turget-10");
                                    let turgetAlert11 = document.getElementById("alert-turget-11");
                                    let turgetAlert12 = document.getElementById("alert-turget-12");
                                    let turgetAlert13 = document.getElementById("alert-turget-13");
                                    let turgetAlert14 = document.getElementById("alert-turget-14");
                                    let turgetAlert15 = document.getElementById("alert-turget-15");








                                    let empty01 = [];
                                    let temp01 = [];
                                    let empty02 = [];
                                    let temp02 = [];
                                    let empty03 = [];
                                    let temp03 = [];
                                    let empty04 = [];
                                    let temp04 = [];
                                    let empty05 = [];
                                    let temp05 = [];
                                    let empty06 = [];
                                    let temp06 = [];
                                    let empty07 = [];
                                    let temp07 = [];
                                    let empty08 = [];
                                    let temp08 = [];
                                    let empty09 = [];
                                    let temp09 = [];
                                    let empty10 = [];
                                    let temp10 = [];
                                    let empty11 = [];
                                    let temp11 = [];
                                    let empty12 = [];
                                    let temp12 = [];
                                    let empty13 = [];
                                    let temp13 = [];
                                    let empty14 = [];
                                    let temp14 = [];
                                    let empty15 = [];
                                    let temp15 = [];


                                    let error = false;
                                    let error01 = false;
                                    let error02 = false;
                                    let error03 = false;
                                    let error04 = false;
                                    let error05 = false;
                                    let error06 = false;
                                    let error07 = false;
                                    let error08 = false;
                                    let error09 = false;
                                    let error10 = false;
                                    let error11 = false;
                                    let error12 = false;
                                    let error13 = false;
                                    let error14 = false;
                                    let error15 = false;

                                    let errorPh = false;
                                    let success = false;



                                    boxes.forEach(el => {

                                        closeAlert = () => {
                                            document.getElementById("dlm-alert-turget").style.display = "none";
                                        }

                                        if (!el.querySelectorAll('input:checked').length) {

                                            error = true;

                                            document.getElementById("dlm-alert-turget").style.display = "block";
                                            setTimeout(closeAlert, 3000);
                                            clearTimeout(closeAlert);
                                        }
                                    });


                                    boxPh.forEach(el => {

                                        let boxPhInputs = el.querySelectorAll('input[type="text"]');

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

                                                                if (turgetAlertPh.style.display = 'block') {
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

                                                setTimeout(checkAreas, 3000);
                                                clearTimeout(checkAreas);


                                            } else {

                                                if (el.value != '') {

                                                    let num = el.value.length;

                                                    if (num > 3) {

                                                        if (turgetAlertPh.style.display = 'block') {
                                                            turgetAlertPh.style.display = 'none';
                                                        };
                                                        setTimeout(checkAreas, 3000);
                                                        clearTimeout(checkAreas);

                                                    } else {

                                                        closeAlert = () => {
                                                            document.getElementById("dlm-alert-turget").style.display = "none";

                                                        }

                                                        document.getElementById("dlm-alert-turget").style.display = "block";

                                                        setTimeout(closeAlert, 3000);
                                                        clearTimeout(closeAlert);

                                                        turgetAlertPh.style.display = 'block';

                                                        errorPh = true;
                                                        setTimeout(checkAreas, 3000);
                                                        clearTimeout(checkAreas);
                                                    }
                                                }
                                            }
                                        })
                                    });


                                    checkEmpty01 = () => {

                                        empty01.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (e.checked) {

                                                    if (!temp01.includes(e)) {
                                                        temp01.push(e);
                                                    };
                                                    if (temp01.length != 0) {
                                                        turgetAlert01.style.display = 'none';
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
                                                { signal: controller03.signal },
                                            )
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
                                                        turgetAlert01.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty01, 3000);
                                                // clearTimeout(checkEmpty01);
                                            },
                                                { signal: controller03.signal },
                                            )
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
                                                        turgetAlert02.style.display = 'none';
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
                                                { signal: controller03.signal },
                                            )
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
                                                        turgetAlert02.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty02, 3000);
                                                // clearTimeout(checkEmpty02);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        });

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
                                                        turgetAlert03.style.display = 'none';
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
                                                { signal: controller03.signal },
                                            )
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
                                                        turgetAlert03.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty03, 3000);
                                                // clearTimeout(checkEmpty03);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        });
                                    }

                                    checkEmpty04 = () => {

                                        empty04.forEach(e => {

                                            e.addEventListener('change', function () {
                                                if (e.checked) {

                                                    if (!temp04.includes(e)) {
                                                        temp04.push(e);
                                                    };
                                                    if (temp04.length != 0) {
                                                        turgetAlert04.style.display = 'none';
                                                    };
                                                    let coll = box04.querySelectorAll('input:not(checked)');
                                                    empty04 = null;
                                                    empty04 = [];
                                                    coll.forEach(e => {
                                                        if (!empty04.includes(e)) {
                                                            empty04.push(e);
                                                        }
                                                    })
                                                    /* const findIndex = empty01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        empty01.splice([findIndex], 1);
                                                    } */
                                                };
                                                // setTimeout(checkTemp04, 3000);
                                                // clearTimeout(checkTemp04);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkTemp04 = () => {

                                        temp04.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (!e.checked) {

                                                    if (!empty04.includes(e)) {
                                                        empty04.push(e);
                                                    };
                                                    /* const findIndex = temp01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        temp01.splice([findIndex], 1);
                                                    }; */
                                                    let coll = box04.querySelectorAll('input:checked');
                                                    temp04 = null;
                                                    temp04 = [];
                                                    coll.forEach(e => {
                                                        if (!temp04.includes(e)) {
                                                            temp04.push(e);
                                                        }
                                                    });

                                                    if (temp04.length == 0) {
                                                        turgetAlert04.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty04, 3000);
                                                // clearTimeout(checkEmpty04);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        });
                                    }

                                    checkEmpty05 = () => {

                                        empty05.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (e.checked) {

                                                    if (!temp05.includes(e)) {
                                                        temp05.push(e);
                                                    };
                                                    if (temp05.length != 0) {
                                                        turgetAlert05.style.display = 'none';
                                                    };
                                                    let coll = box05.querySelectorAll('input:not(checked)');
                                                    empty05 = null;
                                                    empty05 = [];
                                                    coll.forEach(e => {
                                                        if (!empty05.includes(e)) {
                                                            empty05.push(e);
                                                        }
                                                    })
                                                    /* const findIndex = empty01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        empty01.splice([findIndex], 1);
                                                    } */
                                                };
                                                // setTimeout(checkTemp05, 3000);
                                                // clearTimeout(checkTemp05);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkTemp05 = () => {

                                        temp05.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (!e.checked) {

                                                    if (!empty05.includes(e)) {
                                                        empty05.push(e);
                                                    };
                                                    /* const findIndex = temp01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        temp01.splice([findIndex], 1);
                                                    }; */
                                                    let coll = box05.querySelectorAll('input:checked');
                                                    temp05 = null;
                                                    temp05 = [];
                                                    coll.forEach(e => {
                                                        if (!temp05.includes(e)) {
                                                            temp05.push(e);
                                                        }
                                                    });

                                                    if (temp05.length == 0) {
                                                        turgetAlert05.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty05, 3000);
                                                // clearTimeout(checkEmpty05);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        });
                                    }

                                    checkEmpty06 = () => {

                                        empty06.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (e.checked) {

                                                    if (!temp06.includes(e)) {
                                                        temp06.push(e);
                                                    };
                                                    if (temp06.length != 0) {
                                                        turgetAlert06.style.display = 'none';
                                                    };
                                                    let coll = box06.querySelectorAll('input:not(checked)');
                                                    empty06 = null;
                                                    empty06 = [];
                                                    coll.forEach(e => {
                                                        if (!empty06.includes(e)) {
                                                            empty06.push(e);
                                                        }
                                                    })
                                                    /* const findIndex = empty01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        empty01.splice([findIndex], 1);
                                                    } */
                                                };
                                                // setTimeout(checkTemp06, 3000);
                                                // clearTimeout(checkTemp06);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkTemp06 = () => {

                                        temp06.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (!e.checked) {

                                                    if (!empty06.includes(e)) {
                                                        empty06.push(e);
                                                    };
                                                    /* const findIndex = temp01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        temp01.splice([findIndex], 1);
                                                    }; */
                                                    let coll = box06.querySelectorAll('input:checked');
                                                    temp06 = null;
                                                    temp06 = [];
                                                    coll.forEach(e => {
                                                        if (!temp06.includes(e)) {
                                                            temp06.push(e);
                                                        }
                                                    });

                                                    if (temp06.length == 0) {
                                                        turgetAlert06.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty06, 3000);
                                                // clearTimeout(checkEmpty06);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        });
                                    }

                                    checkEmpty07 = () => {

                                        empty07.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (e.checked) {

                                                    if (!temp07.includes(e)) {
                                                        temp07.push(e);
                                                    };
                                                    if (temp07.length != 0) {
                                                        turgetAlert07.style.display = 'none';
                                                    };
                                                    let coll = box07.querySelectorAll('input:not(checked)');
                                                    empty07 = null;
                                                    empty07 = [];
                                                    coll.forEach(e => {
                                                        if (!empty07.includes(e)) {
                                                            empty07.push(e);
                                                        }
                                                    })
                                                    /* const findIndex = empty01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        empty01.splice([findIndex], 1);
                                                    } */
                                                };
                                                // setTimeout(checkTemp07, 3000);
                                                // clearTimeout(checkTemp07);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkTemp07 = () => {

                                        temp07.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (!e.checked) {

                                                    if (!empty07.includes(e)) {
                                                        empty07.push(e);
                                                    };
                                                    /* const findIndex = temp01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        temp01.splice([findIndex], 1);
                                                    }; */
                                                    let coll = box07.querySelectorAll('input:checked');
                                                    temp07 = null;
                                                    temp07 = [];
                                                    coll.forEach(e => {
                                                        if (!temp07.includes(e)) {
                                                            temp07.push(e);
                                                        }
                                                    });

                                                    if (temp07.length == 0) {
                                                        turgetAlert07.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty07, 3000);
                                                // clearTimeout(checkEmpty07);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        });
                                    }

                                    checkEmpty08 = () => {

                                        empty08.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (e.checked) {

                                                    if (!temp08.includes(e)) {
                                                        temp08.push(e);
                                                    };
                                                    if (temp08.length != 0) {
                                                        turgetAlert08.style.display = 'none';
                                                    };
                                                    let coll = box08.querySelectorAll('input:not(checked)');
                                                    empty08 = null;
                                                    empty08 = [];
                                                    coll.forEach(e => {
                                                        if (!empty08.includes(e)) {
                                                            empty08.push(e);
                                                        }
                                                    })
                                                    /* const findIndex = empty01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        empty01.splice([findIndex], 1);
                                                    } */
                                                };
                                                // setTimeout(checkTemp08, 3000);
                                                // clearTimeout(checkTemp08);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkTemp08 = () => {

                                        temp08.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (!e.checked) {

                                                    if (!empty08.includes(e)) {
                                                        empty08.push(e);
                                                    };
                                                    /* const findIndex = temp01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        temp01.splice([findIndex], 1);
                                                    }; */
                                                    let coll = box08.querySelectorAll('input:checked');
                                                    temp08 = null;
                                                    temp08 = [];
                                                    coll.forEach(e => {
                                                        if (!temp08.includes(e)) {
                                                            temp08.push(e);
                                                        }
                                                    });

                                                    if (temp08.length == 0) {
                                                        turgetAlert08.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty08, 3000);
                                                // clearTimeout(checkEmpty08);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        });
                                    }

                                    checkEmpty09 = () => {

                                        empty09.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (e.checked) {

                                                    if (!temp09.includes(e)) {
                                                        temp09.push(e);
                                                    };
                                                    if (temp09.length != 0) {
                                                        turgetAlert09.style.display = 'none';
                                                    };
                                                    let coll = box09.querySelectorAll('input:not(checked)');
                                                    empty09 = null;
                                                    empty09 = [];
                                                    coll.forEach(e => {
                                                        if (!empty09.includes(e)) {
                                                            empty09.push(e);
                                                        }
                                                    })
                                                    /* const findIndex = empty01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        empty01.splice([findIndex], 1);
                                                    } */
                                                };
                                                // setTimeout(checkTemp09, 3000);
                                                // clearTimeout(checkTemp09);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkTemp09 = () => {

                                        temp09.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (!e.checked) {

                                                    if (!empty09.includes(e)) {
                                                        empty09.push(e);
                                                    };
                                                    /* const findIndex = temp01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        temp01.splice([findIndex], 1);
                                                    }; */
                                                    let coll = box09.querySelectorAll('input:checked');
                                                    temp09 = null;
                                                    temp09 = [];
                                                    coll.forEach(e => {
                                                        if (!temp09.includes(e)) {
                                                            temp09.push(e);
                                                        }
                                                    });

                                                    if (temp09.length == 0) {
                                                        turgetAlert09.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty09, 3000);
                                                // clearTimeout(checkEmpty09);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        });
                                    }

                                    checkEmpty10 = () => {

                                        empty10.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (e.checked) {

                                                    if (!temp10.includes(e)) {
                                                        temp10.push(e);
                                                    };
                                                    if (temp10.length != 0) {
                                                        turgetAlert10.style.display = 'none';
                                                    };
                                                    let coll = box10.querySelectorAll('input:not(checked)');
                                                    empty10 = null;
                                                    empty10 = [];
                                                    coll.forEach(e => {
                                                        if (!empty10.includes(e)) {
                                                            empty10.push(e);
                                                        }
                                                    })
                                                    /* const findIndex = empty01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        empty01.splice([findIndex], 1);
                                                    } */
                                                };
                                                // setTimeout(checkTemp10, 3000);
                                                // clearTimeout(checkTemp10);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkTemp10 = () => {

                                        temp10.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (!e.checked) {

                                                    if (!empty10.includes(e)) {
                                                        empty10.push(e);
                                                    };
                                                    /* const findIndex = temp01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        temp01.splice([findIndex], 1);
                                                    }; */
                                                    let coll = box10.querySelectorAll('input:checked');
                                                    temp10 = null;
                                                    temp10 = [];
                                                    coll.forEach(e => {
                                                        if (!temp10.includes(e)) {
                                                            temp10.push(e);
                                                        }
                                                    });

                                                    if (temp10.length == 0) {
                                                        turgetAlert10.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty10, 3000);
                                                // clearTimeout(checkEmpty10);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        });
                                    }

                                    checkEmpty11 = () => {

                                        empty11.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (e.checked) {

                                                    if (!temp11.includes(e)) {
                                                        temp11.push(e);
                                                    };
                                                    if (temp11.length != 0) {
                                                        turgetAlert11.style.display = 'none';
                                                    };
                                                    let coll = box11.querySelectorAll('input:not(checked)');
                                                    empty11 = null;
                                                    empty11 = [];
                                                    coll.forEach(e => {
                                                        if (!empty11.includes(e)) {
                                                            empty11.push(e);
                                                        }
                                                    })
                                                    /* const findIndex = empty01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        empty01.splice([findIndex], 1);
                                                    } */
                                                };
                                                // setTimeout(checkTemp11, 3000);
                                                // clearTimeout(checkTemp11);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkTemp11 = () => {

                                        temp11.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (!e.checked) {

                                                    if (!empty11.includes(e)) {
                                                        empty11.push(e);
                                                    };
                                                    /* const findIndex = temp01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        temp01.splice([findIndex], 1);
                                                    }; */
                                                    let coll = box11.querySelectorAll('input:checked');
                                                    temp11 = null;
                                                    temp11 = [];
                                                    coll.forEach(e => {
                                                        if (!temp11.includes(e)) {
                                                            temp11.push(e);
                                                        }
                                                    });

                                                    if (temp11.length == 0) {
                                                        turgetAlert11.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty11, 3000);
                                                // clearTimeout(checkEmpty11);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkEmpty12 = () => {

                                        empty12.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (e.checked) {

                                                    if (!temp12.includes(e)) {
                                                        temp12.push(e);
                                                    };
                                                    if (temp12.length != 0) {
                                                        turgetAlert12.style.display = 'none';
                                                    };
                                                    let coll = box12.querySelectorAll('input:not(checked)');
                                                    empty12 = null;
                                                    empty12 = [];
                                                    coll.forEach(e => {
                                                        if (!empty12.includes(e)) {
                                                            empty12.push(e);
                                                        }
                                                    })
                                                    /* const findIndex = empty01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        empty01.splice([findIndex], 1);
                                                    } */
                                                };
                                                // setTimeout(checkTemp12, 3000);
                                                // clearTimeout(checkTemp12);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkTemp12 = () => {

                                        temp12.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (!e.checked) {

                                                    if (!empty12.includes(e)) {
                                                        empty12.push(e);
                                                    };
                                                    /* const findIndex = temp01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        temp01.splice([findIndex], 1);
                                                    }; */
                                                    let coll = box12.querySelectorAll('input:checked');
                                                    temp12 = null;
                                                    temp12 = [];
                                                    coll.forEach(e => {
                                                        if (!temp12.includes(e)) {
                                                            temp12.push(e);
                                                        }
                                                    });

                                                    if (temp12.length == 0) {
                                                        turgetAlert12.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty12, 3000);
                                                // clearTimeout(checkEmpty12);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkEmpty13 = () => {

                                        empty13.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (e.checked) {

                                                    if (!temp13.includes(e)) {
                                                        temp13.push(e);
                                                    };
                                                    if (temp13.length != 0) {
                                                        turgetAlert13.style.display = 'none';
                                                    };
                                                    let coll = box13.querySelectorAll('input:not(checked)');
                                                    empty13 = null;
                                                    empty13 = [];
                                                    coll.forEach(e => {
                                                        if (!empty13.includes(e)) {
                                                            empty13.push(e);
                                                        }
                                                    })
                                                    /* const findIndex = empty01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        empty01.splice([findIndex], 1);
                                                    } */
                                                };
                                                // setTimeout(checkTemp13, 3000);
                                                // clearTimeout(checkTemp13);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkTemp13 = () => {

                                        temp13.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (!e.checked) {

                                                    if (!empty13.includes(e)) {
                                                        empty13.push(e);
                                                    };
                                                    /* const findIndex = temp01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        temp01.splice([findIndex], 1);
                                                    }; */
                                                    let coll = box13.querySelectorAll('input:checked');
                                                    temp13 = null;
                                                    temp13 = [];
                                                    coll.forEach(e => {
                                                        if (!temp13.includes(e)) {
                                                            temp13.push(e);
                                                        }
                                                    });

                                                    if (temp13.length == 0) {
                                                        turgetAlert13.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty13, 3000);
                                                // clearTimeout(checkEmpty13);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        });
                                    }

                                    checkEmpty14 = () => {

                                        empty14.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (e.checked) {

                                                    if (!temp14.includes(e)) {
                                                        temp14.push(e);
                                                    };
                                                    if (temp14.length != 0) {
                                                        turgetAlert14.style.display = 'none';
                                                    };
                                                    let coll = box14.querySelectorAll('input:not(checked)');
                                                    empty14 = null;
                                                    empty14 = [];
                                                    coll.forEach(e => {
                                                        if (!empty14.includes(e)) {
                                                            empty14.push(e);
                                                        }
                                                    })
                                                    /* const findIndex = empty01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        empty01.splice([findIndex], 1);
                                                    } */
                                                };
                                                // setTimeout(checkTemp14, 3000);
                                                // clearTimeout(checkTemp14);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkTemp14 = () => {

                                        temp14.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (!e.checked) {

                                                    if (!empty14.includes(e)) {
                                                        empty14.push(e);
                                                    };
                                                    /* const findIndex = temp01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        temp01.splice([findIndex], 1);
                                                    }; */
                                                    let coll = box14.querySelectorAll('input:checked');
                                                    temp14 = null;
                                                    temp14 = [];
                                                    coll.forEach(e => {
                                                        if (!temp14.includes(e)) {
                                                            temp14.push(e);
                                                        }
                                                    });

                                                    if (temp14.length == 0) {
                                                        turgetAlert14.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty14, 3000);
                                                // clearTimeout(checkEmpty14);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkEmpty15 = () => {

                                        empty15.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (e.checked) {

                                                    if (!temp15.includes(e)) {
                                                        temp15.push(e);
                                                    };
                                                    if (temp15.length != 0) {
                                                        turgetAlert15.style.display = 'none';
                                                    };
                                                    let coll = box15.querySelectorAll('input:not(checked)');
                                                    empty15 = null;
                                                    empty15 = [];
                                                    coll.forEach(e => {
                                                        if (!empty15.includes(e)) {
                                                            empty15.push(e);
                                                        }
                                                    })
                                                    /* const findIndex = empty01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        empty01.splice([findIndex], 1);
                                                    } */
                                                };
                                                // setTimeout(checkTemp15, 3000);
                                                // clearTimeout(checkTemp15);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    checkTemp15 = () => {

                                        temp15.forEach(e => {

                                            e.addEventListener('change', function () {

                                                if (!e.checked) {

                                                    if (!empty15.includes(e)) {
                                                        empty15.push(e);
                                                    };
                                                    /* const findIndex = temp01.findIndex(i => i.e === e)
                                                    if (findIndex) {
                                                        temp01.splice([findIndex], 1);
                                                    }; */
                                                    let coll = box15.querySelectorAll('input:checked');
                                                    temp15 = null;
                                                    temp15 = [];
                                                    coll.forEach(e => {
                                                        if (!temp15.includes(e)) {
                                                            temp15.push(e);
                                                        }
                                                    });

                                                    if (temp15.length == 0) {
                                                        turgetAlert15.style.display = 'block';
                                                        //alarm01.style.display = 'block';
                                                    };
                                                };
                                                // setTimeout(checkEmpty15, 3000);
                                                // clearTimeout(checkEmpty15);
                                            },
                                                { signal: controller03.signal },
                                            )
                                        })
                                    }

                                    if (!error01) {

                                        box01Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp01.includes(e)) {
                                                    temp01.push(e);
                                                };
                                                // checkTemp01();

                                            } else {

                                                if (!empty01.includes(e)) {
                                                    empty01.push(e);
                                                };
                                                checkEmpty01();
                                            }
                                        })
                                    };

                                    if (error01) {

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
                                                // checkTemp02();

                                            } else {

                                                if (!empty02.includes(e)) {
                                                    empty02.push(e);
                                                };
                                                checkEmpty02();
                                                //setTimeout(checkEmpty02, 3000);
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
                                        //setTimeout(checkEmpty02, 3000);
                                    }

                                    if (!error03) {

                                        box03Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp03.includes(e)) {
                                                    temp03.push(e);
                                                };
                                                // checkTemp03();
                                                //setTimeout(checkTemp03, 3000);

                                            } else {

                                                if (!empty03.includes(e)) {
                                                    empty03.push(e);
                                                };
                                                checkEmpty03();
                                                //setTimeout(checkEmpty03, 3000);
                                            }
                                        })
                                    };

                                    if (error03) {

                                        box03Inputs.forEach(e => {

                                            if (!empty03.includes(e)) {
                                                empty03.push(e);
                                            };

                                        });
                                        //setTimeout(checkEmpty03, 3000);
                                        checkEmpty03();
                                    }

                                    if (!error04) {

                                        box04Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp04.includes(e)) {
                                                    temp04.push(e);
                                                };
                                                // checkTemp04();
                                                //setTimeout(checkTemp04, 3000);

                                            } else {

                                                if (!empty04.includes(e)) {
                                                    empty04.push(e);
                                                };
                                                checkEmpty04();
                                                //setTimeout(checkEmpty04, 3000);
                                            }
                                        })
                                    };

                                    if (error04) {

                                        box04Inputs.forEach(e => {

                                            if (!empty04.includes(e)) {
                                                empty04.push(e);
                                            };

                                        });
                                        checkEmpty04();
                                        //setTimeout(checkEmpty04, 3000);
                                    }

                                    if (!error05) {
                                        //console.log('true');
                                        box05Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp05.includes(e)) {
                                                    temp05.push(e);
                                                };
                                                // checkTemp05();
                                                //setTimeout(checkTemp05, 3000);

                                            } else {

                                                if (!empty05.includes(e)) {
                                                    empty05.push(e);
                                                };
                                                checkEmpty05();
                                                //setTimeout(checkEmpty05, 3000);
                                            }
                                        })
                                    };

                                    if (error05) {
                                        //console.log('true');
                                        box05Inputs.forEach(e => {

                                            if (!empty05.includes(e)) {
                                                empty05.push(e);
                                            };

                                        });
                                        checkEmpty05();
                                        //setTimeout(checkEmpty05, 3000);
                                    }

                                    if (!error06) {
                                        //console.log('true');
                                        box06Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp06.includes(e)) {
                                                    temp06.push(e);
                                                };
                                                // checkTemp06();
                                                //setTimeout(checkTemp06, 3000);

                                            } else {

                                                if (!empty06.includes(e)) {
                                                    empty06.push(e);
                                                };
                                                checkEmpty06();
                                                //setTimeout(checkEmpty06, 3000);
                                            }
                                        })
                                    };

                                    if (error06) {
                                        //console.log('true');
                                        box06Inputs.forEach(e => {

                                            if (!empty06.includes(e)) {
                                                empty06.push(e);
                                            };

                                        });
                                        //setTimeout(checkEmpty06, 3000);
                                        checkEmpty06();
                                    }

                                    if (!error07) {
                                        //console.log('true');
                                        box07Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp07.includes(e)) {
                                                    temp07.push(e);
                                                };
                                                // checkTemp07();
                                                //setTimeout(checkTemp07, 3000);

                                            } else {

                                                if (!empty07.includes(e)) {
                                                    empty07.push(e);
                                                };
                                                checkEmpty07();
                                                //setTimeout(checkEmpty07, 3000);
                                            }
                                        })
                                    };

                                    if (error07) {
                                        //console.log('true');
                                        box07Inputs.forEach(e => {

                                            if (!empty07.includes(e)) {
                                                empty07.push(e);
                                            };

                                        });
                                        checkEmpty07();
                                        //setTimeout(checkEmpty07, 3000);
                                    }

                                    if (!error08) {
                                        //console.log('true');
                                        box08Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp08.includes(e)) {
                                                    temp08.push(e);
                                                };
                                                // checkTemp08();
                                                //setTimeout(checkTemp08, 3000);

                                            } else {

                                                if (!empty08.includes(e)) {
                                                    empty08.push(e);
                                                };
                                                checkEmpty08();
                                                //setTimeout(checkEmpty08, 3000);
                                            }
                                        })
                                    };

                                    if (error08) {
                                        //console.log('true');
                                        box08Inputs.forEach(e => {

                                            if (!empty08.includes(e)) {
                                                empty08.push(e);
                                            };

                                        });
                                        checkEmpty08();
                                        //setTimeout(checkEmpty08, 3000);
                                    }

                                    if (!error09) {
                                        //console.log('true');
                                        box09Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp09.includes(e)) {
                                                    temp09.push(e);
                                                };
                                                // checkTemp09();
                                                //setTimeout(checkTemp09, 3000);

                                            } else {

                                                if (!empty09.includes(e)) {
                                                    empty09.push(e);
                                                };
                                                checkEmpty09();
                                                //setTimeout(checkEmpty09, 3000);
                                            }
                                        })
                                    };

                                    if (error09) {
                                        //console.log('true');
                                        box09Inputs.forEach(e => {

                                            if (!empty09.includes(e)) {
                                                empty09.push(e);
                                            };

                                        });
                                        checkEmpty09();
                                        //setTimeout(checkEmpty09, 3000);
                                    }

                                    if (!error10) {
                                        //console.log('true');
                                        box10Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp10.includes(e)) {
                                                    temp10.push(e);
                                                };
                                                // checkTemp10();
                                                //setTimeout(checkTemp10, 3000);

                                            } else {

                                                if (!empty10.includes(e)) {
                                                    empty10.push(e);
                                                };
                                                checkEmpty10();
                                                //setTimeout(checkEmpty10, 3000);
                                            }
                                        })
                                    };

                                    if (error10) {
                                        //console.log('true');
                                        box10Inputs.forEach(e => {

                                            if (!empty10.includes(e)) {
                                                empty10.push(e);
                                            };

                                        });
                                        checkEmpty10();
                                        //setTimeout(checkEmpty10, 3000);
                                    }

                                    if (!error11) {
                                        //console.log('true');
                                        box11Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp11.includes(e)) {
                                                    temp11.push(e);
                                                };
                                                // checkTemp11();
                                                //setTimeout(checkTemp11, 3000);

                                            } else {

                                                if (!empty11.includes(e)) {
                                                    empty11.push(e);
                                                };
                                                checkEmpty11();
                                                //setTimeout(checkEmpty11, 3000);
                                            }
                                        })
                                    };

                                    if (error11) {
                                        //console.log('true');
                                        box11Inputs.forEach(e => {

                                            if (!empty11.includes(e)) {
                                                empty11.push(e);
                                            };

                                        });
                                        checkEmpty11();
                                        //setTimeout(checkEmpty11, 3000);
                                    }

                                    if (!error12) {
                                        //console.log('true');
                                        box12Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp12.includes(e)) {
                                                    temp12.push(e);
                                                };
                                                checkTemp12();
                                                //setTimeout(checkTemp12, 3000);

                                            } else {

                                                if (!empty12.includes(e)) {
                                                    empty12.push(e);
                                                };
                                                checkEmpty12();
                                                //setTimeout(checkEmpty12, 3000);
                                            }
                                        })
                                    };

                                    if (error12) {
                                        //console.log('true');
                                        box12Inputs.forEach(e => {

                                            if (!empty12.includes(e)) {
                                                empty12.push(e);
                                            };

                                        });
                                        checkEmpty12();
                                        //setTimeout(checkEmpty12, 3000);
                                    }

                                    if (!error13) {
                                        //console.log('true');
                                        box13Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp13.includes(e)) {
                                                    temp13.push(e);
                                                };
                                                // checkTemp13();
                                                //setTimeout(checkTemp13, 3000);

                                            } else {

                                                if (!empty13.includes(e)) {
                                                    empty13.push(e);
                                                };
                                                checkEmpty13();
                                                //setTimeout(checkEmpty13, 3000);
                                            }
                                        })
                                    };

                                    if (error13) {
                                        //console.log('true');
                                        box13Inputs.forEach(e => {

                                            if (!empty13.includes(e)) {
                                                empty13.push(e);
                                            };

                                        });
                                        checkEmpty13();
                                        //setTimeout(checkEmpty13, 3000);
                                    }

                                    if (!error14) {
                                        //console.log('true');
                                        box14Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp14.includes(e)) {
                                                    temp14.push(e);
                                                };
                                                // checkTemp14();
                                                //setTimeout(checkTemp14, 3000);

                                            } else {

                                                if (!empty14.includes(e)) {
                                                    empty14.push(e);
                                                };
                                                checkEmpty14();
                                                //setTimeout(checkEmpty14, 3000);
                                            }
                                        })
                                    };

                                    if (error14) {
                                        //console.log('true');
                                        box14Inputs.forEach(e => {

                                            if (!empty14.includes(e)) {
                                                empty14.push(e);
                                            };

                                        });
                                        checkEmpty14();
                                        //setTimeout(checkEmpty14, 3000);
                                    }

                                    if (!error15) {
                                        //console.log('true');
                                        box15Inputs.forEach((e) => {

                                            if (e.checked) {

                                                if (!temp15.includes(e)) {
                                                    temp15.push(e);
                                                };
                                                // checkTemp15();
                                                //setTimeout(checkTemp15, 3000);


                                            } else {

                                                if (!empty15.includes(e)) {
                                                    empty15.push(e);
                                                };
                                                checkEmpty15();
                                                //setTimeout(checkEmpty15, 3000);

                                            }
                                        });

                                    };

                                    if (error15) {
                                        //console.log('true');
                                        box15Inputs.forEach(e => {

                                            if (!empty15.includes(e)) {
                                                empty15.push(e);
                                            };

                                        });
                                        checkEmpty15();
                                        //setTimeout(checkEmpty15, 3000);

                                    }




                                    if (!box01.querySelectorAll('input:checked').length) {

                                        error01 = true;

                                        turgetAlert01.style.display = 'block';
                                    };

                                    if (!box02.querySelectorAll('input:checked').length) {

                                        error02 = true;

                                        turgetAlert02.style.display = 'block';
                                    };

                                    if (!box03.querySelectorAll('input:checked').length) {

                                        error03 = true;

                                        turgetAlert03.style.display = 'block';
                                    };

                                    if (!box04.querySelectorAll('input:checked').length) {

                                        error04 = true;

                                        turgetAlert04.style.display = 'block';
                                    };

                                    if (!box05.querySelectorAll('input:checked').length) {

                                        error05 = true;

                                        turgetAlert05.style.display = 'block';
                                    };

                                    if (!box06.querySelectorAll('input:checked').length) {

                                        error06 = true;

                                        turgetAlert06.style.display = 'block';
                                    };

                                    if (!box07.querySelectorAll('input:checked').length) {

                                        error07 = true;

                                        turgetAlert07.style.display = 'block';
                                    };

                                    if (!box08.querySelectorAll('input:checked').length) {

                                        error08 = true;

                                        turgetAlert08.style.display = 'block';
                                    };

                                    if (!box09.querySelectorAll('input:checked').length) {

                                        error09 = true;

                                        turgetAlert09.style.display = 'block';
                                    };

                                    if (!box10.querySelectorAll('input:checked').length) {

                                        error10 = true;

                                        turgetAlert10.style.display = 'block';
                                    };

                                    if (!box11.querySelectorAll('input:checked').length) {

                                        error11 = true;

                                        turgetAlert11.style.display = 'block';
                                    };

                                    if (!box12.querySelectorAll('input:checked').length) {

                                        error12 = true;

                                        turgetAlert12.style.display = 'block';
                                    };

                                    if (!box13.querySelectorAll('input:checked').length) {

                                        error13 = true;

                                        turgetAlert13.style.display = 'block';
                                    };

                                    if (!box14.querySelectorAll('input:checked').length) {

                                        error14 = true;

                                        turgetAlert14.style.display = 'block';
                                    };

                                    if (!box15.querySelectorAll('input:checked').length) {

                                        error15 = true;

                                        turgetAlert15.style.display = 'block';
                                    };






























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

                                            positBtn.removeEventListener('click', turgetCheck);



                                            function positioningCheck(e) {

                                                e.preventDefault();


                                                //successTrue(); /////////////////////////////////////////////////////-----УДАЛИТЬ!!!!!
                                                /////////////////////////////////////////////////////-----УДАЛИТЬ!!!!!
                                                /////////////////////////////////////////////////////-----УДАЛИТЬ!!!!!
                                                /////////////////////////////////////////////////////-----УДАЛИТЬ!!!!!
                                                /////////////////////////////////////////////////////-----УДАЛИТЬ!!!!!




                                                const boxes = document.querySelectorAll('.positioning__inputs');

                                                const boxTa = document.querySelectorAll('.positioning__textarea');
                                                const boxTaInp = document.querySelectorAll('.positioning__textarea--inp');

                                                const boxRadio = document.querySelector('.positioning__radio');

                                                boxRadioInputs = boxRadio.querySelectorAll('textarea');
                                                boxRadioInput2 = document.getElementById("competitor");

                                                const box01 = document.querySelector('.positioning__inputs01');

                                                const box01Inputs = box01.querySelectorAll('input[type="checkbox"]');

                                                const box02 = document.querySelector('.positioning__inputs02');

                                                const box02Inputs = box02.querySelectorAll('input[type="checkbox"]');

                                                //let positioningAlert01 = document.getElementById("alert-positioning-01");
                                                let positioningAlert02 = document.getElementById("alert-positioning-02");
                                                let positioningAlert03 = document.getElementById("alert-positioning-03");
                                                let positioningAlert04 = document.getElementById("alert-positioning-04");

                                                //let positioningAlertTa = document.querySelectorAll('.alert-positioning-ta');

                                                let empty01 = [];
                                                let temp01 = [];
                                                let empty02 = [];
                                                let temp02 = [];

                                                let empty05 = [];
                                                let temp05 = [];


                                                let error = false;
                                                let error01 = false;
                                                let error02 = false;
                                                let errorTa = false;
                                                let errorTaInp = false;

                                                let errorRadio = false;
                                                let count = 0;

                                                boxRadioInputs.forEach(el => {




                                                    if ((el.value == '') || (el.value == undefined)) {


                                                        count++;


                                                    } else {

                                                        if (el.value != '') {

                                                            let num = el.value.length;

                                                            if (num <= 3) {

                                                                count++;


                                                                positioningAlert02.style.display = 'block';

                                                            }
                                                        }
                                                    };

                                                    checkAreas02 = () => {
                                                        el.addEventListener('change', function () {
                                                            if (el.value != '') {

                                                                let num = el.value.length;

                                                                if (num > 3) {

                                                                    count--;

                                                                    if (count < 2) {

                                                                        positioningAlert02.style.display = 'none';

                                                                        errorTaInp = false;
                                                                    }

                                                                } else {

                                                                    if (num <= 3) {

                                                                        count++;
                                                                    }
                                                                }
                                                            } else if (el.value == '') {

                                                                count++;
                                                            }
                                                        },
                                                            { signal: controller04.signal },
                                                        )
                                                    };

                                                    checkAreas02();



                                                    if (count == 2) {

                                                        positioningAlert02.style.display = 'block';

                                                        errorTaInp = true;

                                                        closeAlert = () => {
                                                            document.getElementById("dlm-alert-positioning").style.display = "none";
                                                        }

                                                        document.getElementById("dlm-alert-positioning").style.display = "block";
                                                        setTimeout(closeAlert, 3000);
                                                        clearTimeout(closeAlert);

                                                        checkAreas02();

                                                    } else if (count < 2) {

                                                        positioningAlert02.style.display = 'none';

                                                        errorTaInp = false;
                                                    };
                                                    //console.log(count);
                                                })

                                                boxes.forEach(el => {


                                                    if (!el.querySelectorAll('input:checked').length) {

                                                        error = true;
                                                    };

                                                    if (error == true) {

                                                        boxTaInp.forEach(el => {

                                                            let positioningAlertTa = el.parentNode.parentNode.parentNode.querySelector('.alert-positioning-ta');
                                                            // let turgetAlertPh = document.getElementById('alert-turget-ph02');

                                                            checkAreas = () => {
                                                                el.addEventListener('change', function () {
                                                                    if ((el.value == undefined) || (el.value.trim() == '')) {

                                                                        positioningAlertTa.style.display = 'block';


                                                                    } else {

                                                                        if (el.value != '') {

                                                                            let num = el.value.length;

                                                                            if (num > 3) {

                                                                                if (positioningAlertTa.style.display = 'block') {
                                                                                    positioningAlertTa.style.display = 'none';
                                                                                };

                                                                                error = false;

                                                                            } else {

                                                                                closeAlert = () => {
                                                                                    document.getElementById("dlm-alert-positioning").style.display = "none";
                                                                                }

                                                                                document.getElementById("dlm-alert-positioning").style.display = "block";
                                                                                setTimeout(closeAlert, 3000);
                                                                                clearTimeout(closeAlert);

                                                                                positioningAlertTa.style.display = 'block';

                                                                            }
                                                                        }
                                                                    }
                                                                },
                                                                    { signal: controller04.signal },
                                                                )
                                                            };

                                                            el.getAttribute('value');

                                                            if ((el.value == undefined) || (el.value.trim() == '')) {

                                                                positioningAlertTa.style.display = 'block';

                                                                error = true;

                                                                closeAlert = () => {
                                                                    document.getElementById("dlm-alert-positioning").style.display = "none";
                                                                }

                                                                document.getElementById("dlm-alert-positioning").style.display = "block";
                                                                setTimeout(closeAlert, 3000);
                                                                clearTimeout(closeAlert);

                                                                checkAreas();


                                                            } else {

                                                                if (el.value != '') {

                                                                    let num = el.value.length;

                                                                    if (num > 3) {

                                                                        if (positioningAlertTa.style.display = 'block') {
                                                                            positioningAlertTa.style.display = 'none';
                                                                        };

                                                                        error = false;

                                                                        setTimeout(checkAreas, 3000);
                                                                        clearTimeout(checkAreas);

                                                                    } else {

                                                                        closeAlert = () => {
                                                                            document.getElementById("dlm-alert-positioning").style.display = "none";
                                                                        }

                                                                        document.getElementById("dlm-alert-positioning").style.display = "block";

                                                                        setTimeout(closeAlert, 3000);
                                                                        clearTimeout(closeAlert);

                                                                        positioningAlertTa.style.display = 'block';

                                                                        error = true;

                                                                        checkAreas();
                                                                    }
                                                                }
                                                            }
                                                        })
                                                    }
                                                });

                                                boxTa.forEach(el => {

                                                    //let boxPhInput = document.getElementById('competitor');
                                                    let boxTaInputs = el.querySelectorAll('textarea');

                                                    let AllInputs = boxTaInputs;

                                                    boxTaInputs.forEach(el => {

                                                        let positioningAlertTa = el.parentNode.parentNode.parentNode.querySelector('.alert-positioning-ta');
                                                        // let turgetAlertPh = document.getElementById('alert-turget-ph02');

                                                        checkAreas = () => {
                                                            el.addEventListener('change', function () {
                                                                if ((el.value == undefined) || (el.value.trim() == '')) {

                                                                    positioningAlertTa.style.display = 'block';

                                                                    errorTa = true;



                                                                } else {

                                                                    if (el.value != '') {

                                                                        let num = el.value.length;

                                                                        if (num > 3) {

                                                                            if (positioningAlertTa.style.display = 'block') {
                                                                                positioningAlertTa.style.display = 'none';
                                                                            }
                                                                        } else {

                                                                            closeAlert = () => {
                                                                                document.getElementById("dlm-alert-positioning").style.display = "none";
                                                                            }

                                                                            document.getElementById("dlm-alert-positioning").style.display = "block";
                                                                            setTimeout(closeAlert, 3000);
                                                                            clearTimeout(closeAlert);

                                                                            positioningAlertTa.style.display = 'block';

                                                                            errorTa = true;
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                                { signal: controller04.signal },
                                                            )
                                                        };

                                                        el.getAttribute('value');
                                                        if ((el.value == undefined) || (el.value.trim() == '')) {

                                                            positioningAlertTa.style.display = 'block';

                                                            errorTa = true;

                                                            closeAlert = () => {
                                                                document.getElementById("dlm-alert-positioning").style.display = "none";
                                                            }

                                                            document.getElementById("dlm-alert-positioning").style.display = "block";
                                                            setTimeout(closeAlert, 3000);
                                                            clearTimeout(closeAlert);

                                                            checkAreas();


                                                        } else {

                                                            if (el.value != '') {

                                                                let num = el.value.length;

                                                                if (num > 3) {

                                                                    if (positioningAlertTa.style.display = 'block') {
                                                                        positioningAlertTa.style.display = 'none';
                                                                    };

                                                                    checkAreas();

                                                                } else {

                                                                    closeAlert = () => {
                                                                        document.getElementById("dlm-alert-positioning").style.display = "none";
                                                                    }

                                                                    document.getElementById("dlm-alert-positioning").style.display = "block";

                                                                    setTimeout(closeAlert, 3000);
                                                                    clearTimeout(closeAlert);

                                                                    positioningAlertTa.style.display = 'block';

                                                                    errorTa = true;

                                                                    checkAreas();
                                                                }
                                                            }
                                                        }
                                                    })
                                                });

                                                checkEmpty01 = () => {

                                                    empty01.forEach(e => {
                                                        e.addEventListener('change', function () {
                                                            if (e.checked) {

                                                                if (!temp01.includes(e)) {
                                                                    temp01.push(e);
                                                                };
                                                                if (temp01.length != 0) {
                                                                    positioningAlert03.style.display = 'none';
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
                                                            { signal: controller04.signal },
                                                        )
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
                                                                    positioningAlert03.style.display = 'block';
                                                                    //alarm01.style.display = 'block';
                                                                };
                                                            };
                                                            // setTimeout(checkEmpty01, 3000);
                                                            // clearTimeout(checkEmpty01);
                                                        },
                                                            { signal: controller04.signal },
                                                        )
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
                                                                    positioningAlert04.style.display = 'none';
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
                                                            { signal: controller04.signal },
                                                        )
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
                                                                    positioningAlert04.style.display = 'block';
                                                                    //alarm01.style.display = 'block';
                                                                };
                                                            };
                                                            // setTimeout(checkEmpty02, 3000);
                                                            // clearTimeout(checkEmpty02);

                                                        },
                                                            { signal: controller04.signal },
                                                        )
                                                    })
                                                }





                                                if (!error01) {

                                                    box01Inputs.forEach((e) => {

                                                        if (e.checked) {

                                                            if (!temp01.includes(e)) {
                                                                temp01.push(e);
                                                            };

                                                            // checkTemp01();

                                                        } else {

                                                            if (!empty01.includes(e)) {
                                                                empty01.push(e);
                                                            };

                                                            checkEmpty01();
                                                        }
                                                    })
                                                };

                                                if (error01) {

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

                                                            // checkTemp02();

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



                                                /* if (!errorRadio) {

                                                    boxRadioInputs.forEach((e) => {

                                                        if (e.checked) {

                                                            if (!temp05.includes(e)) {
                                                                temp05.push(e);
                                                            };

                                                            checkTemp05();

                                                        } else {

                                                            if (!empty05.includes(e)) {
                                                                empty05.push(e);
                                                            };

                                                            checkEmpty05();
                                                        }
                                                    })
                                                };

                                                if (errorRadio) {

                                                    boxRadioInputs.forEach(e => {

                                                        if (!empty05.includes(e)) {
                                                            empty05.push(e);
                                                        };

                                                    });
                                                    checkEmpty05();
                                                } */

                                                if (!box01.querySelectorAll('input:checked').length) {

                                                    error01 = true;

                                                    positioningAlert03.style.display = 'block';
                                                };

                                                if (!box02.querySelectorAll('input:checked').length) {

                                                    error02 = true;

                                                    positioningAlert04.style.display = 'block';
                                                };





















                                                //console.log(error);

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
                                                    collageTitle.scrollIntoView({
                                                        block: "center",
                                                        behavior: 'smooth'
                                                    })

                                                    collageBtn.removeEventListener('click', positioningCheck);









                                                    function collageCheck() {

                                                        e.preventDefault();

                                                        const boxes = document.querySelectorAll('.collage__inputs');

                                                        const Ta = document.querySelector('.collage__textarea');
                                                        const taInput = document.querySelector('.collage__textarea--inp');

                                                        const box01 = document.querySelector('.collage__inputs01');

                                                        const box01Inputs = box01.querySelectorAll('input[type="checkbox"]');

                                                        const box02 = document.querySelector('.collage__inputs02');

                                                        const box02Inputs = box02.querySelectorAll('input[type="checkbox"]');

                                                        const boxInputs = document.querySelectorAll('.collage__checkbox--inp');

                                                        //let positioningAlert01 = document.getElementById("alert-positioning-01");
                                                        let collageAlert01 = document.getElementById("alert-collage-01");
                                                        let collageAlert02 = document.getElementById("alert-collage-02");
                                                        let collageAlert03 = document.getElementById("alert-collage-03");

                                                        //let positioningAlertTa = document.querySelectorAll('.alert-positioning-ta');

                                                        let empty01 = [];
                                                        let temp01 = [];
                                                        let empty02 = [];
                                                        let temp02 = [];

                                                        let error = false;
                                                        let error01 = false;
                                                        let error02 = false;
                                                        let errorTa = false;

                                                        boxes.forEach(el => {


                                                            if (!el.querySelectorAll('input:checked').length) {

                                                                error = true;
                                                            }

                                                            if (error == true) {

                                                                boxInputs.forEach(el => {

                                                                    let collageAlertTa = el.parentNode.parentNode.parentNode.querySelector('.alert-collage-ta');
                                                                    // let turgetAlertPh = document.getElementById('alert-turget-ph02');

                                                                    checkAreas = () => {
                                                                        el.addEventListener('change', function () {
                                                                            if ((el.value == undefined) || (el.value.trim() == '')) {

                                                                                collageAlertTa.style.display = 'block';


                                                                            } else {

                                                                                if (el.value != '') {

                                                                                    let num = el.value.length;

                                                                                    if (num > 3) {

                                                                                        if (collageAlertTa.style.display = 'block') {
                                                                                            collageAlertTa.style.display = 'none';
                                                                                        };

                                                                                        error = false;

                                                                                    } else {

                                                                                        closeAlert = () => {
                                                                                            document.getElementById("dlm-alert-collage").style.display = "none";
                                                                                        }

                                                                                        document.getElementById("dlm-alert-collage").style.display = "block";
                                                                                        setTimeout(closeAlert, 3000);
                                                                                        clearTimeout(closeAlert);

                                                                                        collageAlertTa.style.display = 'block';

                                                                                    }
                                                                                }
                                                                            }
                                                                        },
                                                                            { signal: controller05.signal },
                                                                        )
                                                                    };

                                                                    el.getAttribute('value');

                                                                    if ((el.value == undefined) || (el.value.trim() == '')) {

                                                                        collageAlertTa.style.display = 'block';

                                                                        error = true;

                                                                        closeAlert = () => {
                                                                            document.getElementById("dlm-alert-collage").style.display = "none";
                                                                        }

                                                                        document.getElementById("dlm-alert-collage").style.display = "block";

                                                                        setTimeout(closeAlert, 3000);
                                                                        clearTimeout(closeAlert);

                                                                        checkAreas();


                                                                    } else {

                                                                        if (el.value != '') {

                                                                            let num = el.value.length;

                                                                            if (num > 3) {

                                                                                if (collageAlertTa.style.display = 'block') {
                                                                                    collageAlertTa.style.display = 'none';
                                                                                };

                                                                                error = false;

                                                                                checkAreas();

                                                                            } else {

                                                                                closeAlert = () => {
                                                                                    document.getElementById("dlm-alert-collage").style.display = "none";
                                                                                }

                                                                                document.getElementById("dlm-alert-collage").style.display = "block";

                                                                                setTimeout(closeAlert, 3000);
                                                                                clearTimeout(closeAlert);

                                                                                collageAlertTa.style.display = 'block';

                                                                                error = true;

                                                                                checkAreas();
                                                                            }
                                                                        }
                                                                    }
                                                                })
                                                            }
                                                        })

                                                        taInput.getAttribute('value');

                                                        checkAreas02 = () => {
                                                            taInput.addEventListener('change', function () {
                                                                if ((taInput.value == undefined) || (taInput.value.trim() == '')) {

                                                                    collageAlert03.style.display = 'block';


                                                                } else {

                                                                    if (taInput.value != '') {

                                                                        let num = taInput.value.length;

                                                                        if (num > 3) {

                                                                            if (collageAlert03.style.display = 'block') {
                                                                                collageAlert03.style.display = 'none';
                                                                            };

                                                                            errorTa = false;

                                                                        } else {

                                                                            closeAlert = () => {
                                                                                document.getElementById("dlm-alert-collage").style.display = "none";
                                                                            }

                                                                            document.getElementById("dlm-alert-collage").style.display = "block";
                                                                            setTimeout(closeAlert, 3000);
                                                                            clearTimeout(closeAlert);

                                                                            collageAlert03.style.display = 'block';
                                                                        }
                                                                    }
                                                                }
                                                            },
                                                                { signal: controller05.signal },
                                                            )
                                                        };

                                                        if ((taInput.value == undefined) || (taInput.value.trim() == '')) {

                                                            collageAlert03.style.display = 'block';

                                                            errorTa = true;

                                                            closeAlert = () => {
                                                                document.getElementById("dlm-alert-collage").style.display = "none";
                                                            }

                                                            document.getElementById("dlm-alert-collage").style.display = "block";

                                                            setTimeout(closeAlert, 3000);
                                                            clearTimeout(closeAlert);

                                                            checkAreas02();


                                                        } else {

                                                            if (taInput.value != '') {

                                                                let num = taInput.value.length;

                                                                if (num > 3) {

                                                                    if (collageAlert03.style.display = 'block') {
                                                                        collageAlert03.style.display = 'none';
                                                                    };

                                                                    errorTa = false;

                                                                    checkAreas02();

                                                                } else {

                                                                    closeAlert = () => {
                                                                        document.getElementById("dlm-alert-collage").style.display = "none";
                                                                    }

                                                                    document.getElementById("dlm-alert-collage").style.display = "block";

                                                                    setTimeout(closeAlert, 3000);
                                                                    clearTimeout(closeAlert);

                                                                    collageAlert03.style.display = 'block';

                                                                    errorTa = true;

                                                                    checkAreas02();
                                                                }
                                                            }
                                                        }

                                                        checkEmpty01 = () => {

                                                            empty01.forEach(e => {
                                                                e.addEventListener('change', function () {
                                                                    if (e.checked) {

                                                                        if (!temp01.includes(e)) {
                                                                            temp01.push(e);
                                                                        };
                                                                        if (temp01.length != 0) {
                                                                            collageAlert01.style.display = 'none';
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
                                                                    clearTimeout(checkTemp01);
                                                                },
                                                                    { signal: controller05.signal },
                                                                )
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
                                                                            collageAlert01.style.display = 'block';
                                                                            //alarm01.style.display = 'block';
                                                                        };
                                                                    };
                                                                    setTimeout(checkEmpty01, 3000);
                                                                    clearTimeout(checkEmpty01);
                                                                },
                                                                    { signal: controller05.signal },
                                                                )
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
                                                                            collageAlert02.style.display = 'none';
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
                                                                    clearTimeout(checkTemp02);
                                                                },
                                                                    { signal: controller05.signal },
                                                                )
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
                                                                            collageAlert02.style.display = 'block';
                                                                            //alarm01.style.display = 'block';
                                                                        };
                                                                    };
                                                                    setTimeout(checkEmpty02, 3000);
                                                                    clearTimeout(checkEmpty02);
                                                                },
                                                                    { signal: controller05.signal },
                                                                )
                                                            })
                                                        }





                                                        if (!error01) {

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

                                                        if (!box01.querySelectorAll('input:checked').length) {

                                                            error01 = true;

                                                            positioningAlert03.style.display = 'block';
                                                        };

                                                        if (!box02.querySelectorAll('input:checked').length) {

                                                            error02 = true;

                                                            positioningAlert04.style.display = 'block';
                                                        };

                                                        function successTrue() {

                                                            controller05.abort();

                                                            document.location.replace('https://yandex.ru');

                                                            // finishForm.onclick = () => {

                                                            //     document.location.replace('https://yandex.ru');
                                                            // };

                                                            //console.log('true');

                                                            //document.location.href = 'https://yandex.ru';

                                                        };

                                                        if ((errorTa === false) && (error === false)) {

                                                            success = true;
                                                            //console.log('success = ' + success);
                                                        } else {


                                                            //console.log('false');
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

                                                    finishForm.addEventListener('click', collageCheck);
                                                };


                                                if ((error === false) && (errorTa === false) && (errorTaInp === false)) {

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

                                            collageBtn.addEventListener('click', positioningCheck);
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

                                positBtn.addEventListener('click', turgetCheck);
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

                    budgetBtn.removeEventListener('click', customerCheck);

                    turgetBtn.addEventListener('click', budgetCheck);
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
        };

        budgetBtn.addEventListener('click', customerCheck);
    }
})


//console.log(completed);

let loadingOut = () => {
    document.querySelector('.downloader').style.display = 'none';
};
let loadingIn = () => {
    document.querySelector('.downloader').style.display = 'block';
    //setTimeout(loadingOut, 300);
};






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



/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


// Форма отправки


/* const form = document.querySelector('.form');

const sendForm = (data) => {
    return fetch('mail.php', {
        method: 'post',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(res => res.json());
}

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const dataForm = new FormData(form);
    const user = {};

    dataForm.forEach((val, key) => {
        user[key] = val;
    });

    // console.log(dataForm.has([budget_01]));

    sendForm(user).then(data => {
        console.log('Письмо отправлено успешно');
    });

    form.reset();
}) */


















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








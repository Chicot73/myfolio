let formSucess = false;


let budget = document.querySelector(".budget");
let history = document.querySelector(".history");
let turgetDlm = document.getElementById("d02");
let turget = document.querySelector(".turget");
let budgetBtn = document.getElementById("d01-sec");
let turgetBtn = document.getElementById("d02-sec");
let positBtn = document.getElementById("d03-sec");
let collageBtn = document.getElementById("d04-sec");
let finishForm = document.getElementById("d05-sec");
let posit = document.querySelector(".positioning");
let positDlm = document.getElementById("d03");
let collage = document.querySelector(".collage");
let collageDlm = document.getElementById("d04");
let finishDlm = document.getElementById("d05");
const budgetTitle = document.getElementById("budget-title");
const turgetTitle = document.getElementById("turget-title");
const positTitle = document.getElementById("posit-title");
const collageTitle = document.getElementById("collage-title");

window.onload = function () {
    budget.style.display = 'none';
    history.style.display = 'none';
    turget.style.display = 'none';
    turgetDlm.style.display = 'none';
    posit.style.display = 'none';
    positDlm.style.display = 'none';
    collage.style.display = 'none';
    collageDlm.style.display = 'none';
    finishDlm.style.display = 'none';
}
// collageTitle = document.getElementById("collage-title");
// const budgetTitle = document.getElementById("budget-title");
// const turgetTitle = document.getElementById("turget-title");
// const positTitle = document.getElementById("posit-title");

let customerInputs = document.querySelectorAll(".customer__marc");
let customerInputsData = document.querySelectorAll(".customer__marc2");

let emptyInputs = [];
let tempInputs = [];
let emptyInputs02 = [];
let tempInputs02 = [];

let commonEmpty = 5;


function customerCheck(e) {

    emptyChecker = () => {
        emptyInputs.forEach(item => {
            document.addEventListener('change', function () {
                if (item.value != "") {
                    //console.log(item);
                    let num = item.value.length;


                    if (num > 3) {
                        item.parentNode.parentNode.children[0].children[0].style.display = 'none';

                        if (!tempInputs.includes(item)) {
                            tempInputs.push(item);
                        }

                        let index = emptyInputs.indexOf(item);

                        if (index !== -1) {
                            emptyInputs.splice(index, 1);
                        }

                        setTimeout(tempChecker, 3000);
                        clearTimeout(tempChecker);
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

                    let index = tempInputs.indexOf(item);

                    if (index !== -1) {
                        tempInputs.splice(index, 1);
                    }

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

                        let index = tempInputs.indexOf(item);

                        if (index !== -1) {
                            tempInputs.splice(index, 1);
                        }

                        setTimeout(emptyChecker, 3000);
                        clearTimeout(emptyChecker);
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

                        let index = emptyInputs02.indexOf(item);

                        if (index !== -1) {
                            emptyInputs02.splice(index, 1);
                        }

                        setTimeout(tempChecker02, 3000);
                        clearTimeout(tempChecker02);
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

                    let index = tempInputs02.indexOf(item);

                    if (index !== -1) {
                        tempInputs02.splice(index, 1);
                    }

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

                        let index = tempInputs02.indexOf(item);

                        if (index !== -1) {
                            tempInputs02.splice(index, 1);
                        }

                        setTimeout(emptyChecker02, 3000);
                        clearTimeout(emptyChecker02);
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


            //return;

        } else if (el.value != 0) {

            //console.log(el);
            let num = el.value.length;

            if (num == 10) {
                el.parentNode.parentNode.children[0].children[0].style.display = 'none';

                if (!tempInputs02.includes(el)) {
                    tempInputs02.push(el);
                }
                tempChecker02();

            } else if (num < 10) {

                el.parentNode.parentNode.children[0].children[0].style.display = 'block';

                document.getElementById("dlm-alert-customer").style.display = "block";
                setTimeout(closeAlert, 3000);
                clearTimeout(closeAlert);


                if (!emptyInputs02.includes(el)) {
                    emptyInputs02.push(el);
                }
                emptyChecker02();
            }
        }
    })

    function successCustomer() {

        budget.style.display = "block";
        history.style.display = "block";
        turgetDlm.style.display = "block";
        budgetTitle.scrollIntoView({
            block: "center",
            behavior: 'smooth'
        });
    }

    commonEmpty = emptyInputs.length + emptyInputs02.length;


    function ifNotnull() {

        if (commonEmpty == 0) {

            if (document.getElementById("dlm-alert-customer").style.display == "block") {
                document.getElementById("dlm-alert-customer").style.display = "none"
            };

            successCustomer();
        }
    }

    ifNotnull();
}

budgetBtn.addEventListener('click', function (e) {

    e.preventDefault();
    customerCheck();
});



let b_error;
let b_errorTa;
let b_error01 = false;
let b_error02 = false;
let b_error03 = false;


function budgetCheck(e) {

    const boxes = document.querySelectorAll('.budget__inputs');
    const box01 = document.querySelector('.budget__inputs01');
    let box01Inputs = box01.querySelectorAll('input[type="checkbox"]');
    const box02 = document.querySelector('.budget__inputs02');
    let box02Inputs = box02.querySelectorAll('input[type="checkbox"]');
    const box03 = document.querySelector('.budget__inputs03');
    let box03Inputs = box03.querySelectorAll('input[type="checkbox"]');
    const box04 = document.querySelector('.history__textarea');
    let box04Inputs = box04.querySelectorAll('textarea');
    //let ids; //заполненные чекбоксы

    let empty01 = [];
    let temp01 = [];
    let empty02 = [];
    let temp02 = [];
    let empty03 = [];
    let temp03 = [];


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

            b_error = true;

            document.getElementById("dlm-alert-budget").style.display = "block";
            setTimeout(closeAlert, 3000);
            clearTimeout(closeAlert);

        } else {

            b_error = false;
        }
    })

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

                    b_errorTa = true;

                } else {

                    if (el.value != '') {

                        let num = el.value.length;

                        if (num > 3) {

                            if (el.parentNode.parentNode.children[0].children[0].style.display == 'block') {
                                el.parentNode.parentNode.children[0].children[0].style.display = 'none';
                            }

                            b_errorTa = false;

                        } else {

                            closeAlert = () => {
                                document.getElementById("dlm-alert-budget").style.display = "none";
                            }

                            document.getElementById("dlm-alert-budget").style.display = "block";
                            setTimeout(closeAlert, 3000);
                            clearTimeout(closeAlert);

                            el.parentNode.parentNode.children[0].children[0].style.display = 'block';

                            b_errorTa = true;
                        }
                    }
                }
            })
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

            b_errorTa = true;

            checkAreas();


        } else {

            if (el.value != '') {

                let num = el.value.length;

                if (num > 3) {

                    if (el.parentNode.parentNode.children[0].children[0].style.display == 'block') {
                        el.parentNode.parentNode.children[0].children[0].style.display = 'none';
                    };

                    b_errorTa = false;
                    //checkAreas();

                } else {

                    closeAlert = () => {
                        document.getElementById("dlm-alert-budget").style.display = "none";
                    }

                    document.getElementById("dlm-alert-budget").style.display = "block";
                    setTimeout(closeAlert, 3000);
                    clearTimeout(closeAlert);

                    el.parentNode.parentNode.children[0].children[0].style.display = 'block';

                    b_errorTa = true;

                    checkAreas();
                }
            }
        }
    });

    if (!box01.querySelectorAll('input:checked').length) {

        b_error01 = true;

        budgetAlert01.style.display = 'block';
    };

    if ((!box02.querySelectorAll('input:checked').length) && (box02.querySelector(".budget__input-txt").value.trim() == '')) {

        b_error02 = true;

        budgetAlert02.style.display = 'block';

    };

    if ((!box03.querySelectorAll('input:checked').length) && (box03.querySelector(".budget__input-txt").value.trim() == '')) {

        b_error03 = true;

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
                }
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
                // setTimeout(checkEmpty01, 3000);
                // clearTimeout(checkEmpty01);
            })
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
            });
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
                    }
                }
            })
        })
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
                }
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
                    }
                }
            })
        })
    }

    if (!b_error01) {

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
    }

    if (b_error01) {

        box01Inputs.forEach(e => {

            if (!empty01.includes(e)) {
                empty01.push(e);
            };

        });
        checkEmpty01();
    }

    if (!b_error02) {

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

    if (b_error02) {

        box02.querySelector(".budget__input-txt").addEventListener('change', function () {

            if (box02.querySelector(".budget__input-txt").value != '') {

                let num = box02.querySelector(".budget__input-txt").value.length;

                if (num > 3) {

                    budgetAlert02.style.display = 'none';

                    b_error02 = false;

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

    if (!b_error03) {
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

    if (b_error03) {

        box03.querySelector(".budget__input-txt").addEventListener('change', function () {

            if (box03.querySelector(".budget__input-txt").value != '') {

                let num = box03.querySelector(".budget__input-txt").value.length;

                if (num > 3) {

                    if (budgetAlert03.style.display == 'block') {
                        budgetAlert03.style.display = 'none';
                    }

                    b_error03 = false;

                }
            }
        })

        box03Inputs.forEach(e => {

            if (!empty03.includes(e)) {
                empty03.push(e);
            };

        });

        checkEmpty03();
    }

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

    function successBudget() {

        turget.style.display = "block";
        positDlm.style.display = "block";
        turgetTitle.scrollIntoView({
            block: "center",
            behavior: 'smooth'
        });
    };

    let success = false;

    if ((b_error === false) && (b_errorTa === false)) {

        success = true;

    };

    function ifSuccess() {

        if (success == true) {

            successBudget();
        }
    };

    ifSuccess();
};

//budgetBtn.removeEventListener('click', customerCheck);

turgetBtn.addEventListener('click', function (e) {

    e.preventDefault();
    budgetCheck();
});
//turgetBtn.addEventListener('click', function () { setTimeout(budgetCheck, 0) });





function turgetCheck(e) {

    let error = false;
    let errorPh = false;

    const boxes = document.querySelectorAll('.turget__inputs');

    const inputsTxt = document.querySelectorAll('.turget__input-txt');

    const boxPh = document.querySelectorAll('.turget__placeholder');


    boxes.forEach(box => {

        let turgetInputs = box.querySelectorAll('input[type=checkbox]');

        turgetInputs.forEach(input => {

            input.addEventListener('change', () => {

                input.parentNode.parentNode.querySelector('.alert-turget').style.display = "none";
            })
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
        })
    })


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
                })
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
    })

    function successTurget() {

        posit.style.display = "block";
        collageDlm.style.display = "block";
        positTitle.scrollIntoView({
            block: "center",
            behavior: 'smooth'
        });
    }

    let successTrg = false;

    if ((error === false) && (errorPh === false)) {

        successTrg = true;


        //console.log('success = ' + success);
    };

    function ifSuccess03() {

        if (successTrg == true) {

            successTurget();

        }
    };

    ifSuccess03();
}

//turgetBtn.removeEventListener('click', function () { setTimeout(budgetCheck, 0) });
//turgetBtn.removeEventListener('click', budgetCheck);

//box02.removeEventListener('click', box02Click);

positBtn.addEventListener('click', function (e) {
    e.preventDefault();
    turgetCheck();
});

//positBtn.addEventListener('click', function () { setTimeout(turgetCheck, 0) });




//кнопки включения дополнительной ЦА




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





function positioningCheck(e) {

    let p_error = false;
    let p_errorTa = false;
    let p_errorTa2;

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

            })
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
        })
    })

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

                    p_error = true;

                } else {

                    if (el.value != '') {

                        let num = el.value.length;

                        if (num > 3) {

                            if (box.querySelector('.alert-positioning-ta').style.display == "block") {
                                box.querySelector('.alert-positioning-ta').style.display = 'none';
                            };

                            p_error = false;

                            // checkAreas();

                        } else {

                            box.querySelector('.alert-positioning-ta').style.display = "block";

                            closeAlert = () => {
                                document.getElementById("dlm-alert-positioning").style.display = "none";
                            }

                            document.getElementById("dlm-alert-positioning").style.display = "block";
                            setTimeout(closeAlert, 3000);
                            clearTimeout(closeAlert);

                            p_error = true;
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

            p_errorTa = true;

        } else {

            if (el.value != '') {

                let num2 = el.value.length;

                if (num2 > 3) {

                    if (el.parentNode.parentNode.parentNode.querySelector('.alert-positioning-ta').style.display == "block") {
                        el.parentNode.parentNode.parentNode.querySelector('.alert-positioning-ta').style.display = 'none';
                    }

                    countTa++;

                    if (countTa >= 2) {

                        p_errorTa = false;
                    }

                } else {

                    closeAlert = () => {
                        document.getElementById("dlm-alert-positioning").style.display = "none";
                    }

                    document.getElementById("dlm-alert-positioning").style.display = "block";
                    setTimeout(closeAlert, 3000);
                    clearTimeout(closeAlert);

                    el.parentNode.parentNode.parentNode.querySelector('.alert-positioning-ta').style.display = 'block';

                    p_errorTa = true;
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

                p_errorTa2 = true;
            };

            if ((count == 1) && (count2 == 1)) {

                closeAlert = () => {
                    document.getElementById("dlm-alert-positioning").style.display = "none";
                }

                document.getElementById("dlm-alert-positioning").style.display = "block";
                setTimeout(closeAlert, 3000);
                clearTimeout(closeAlert);

                document.getElementById('alert-positioning-02').style.display = 'block';

                p_errorTa2 = true;
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

                p_errorTa2 = false;

                if (count3 == 2) {

                    document.getElementById('key').classList.add('positioning__key');

                    closeAlert = () => {
                        document.getElementById("dlm-alert-positioning").style.display = "none";
                    }

                    document.getElementById("dlm-alert-positioning").style.display = "block";
                    setTimeout(closeAlert, 3000);
                    clearTimeout(closeAlert);

                    document.getElementById('alert-positioning-02').style.display = 'block';

                    p_errorTa2 = true;

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

                    p_errorTa2 = true;

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

                        p_errorTa2 = true;
                    }
                }
            }
        }
    })

    function successPosit() {

        collage.style.display = "block";
        finishDlm.style.display = "block";
        collageTitle.scrollIntoView({
            block: "center",
            behavior: 'smooth'
        });
    }

    let successPos = false;

    if ((p_error === false) && (p_errorTa === false) && (p_errorTa2 === false)) {

        successPos = true;
        //console.log('success = ' + success);
    };

    function ifSuccess02() {

        if (successPos == true) {

            successPosit();

        }
    };

    ifSuccess02();
}

collageBtn.addEventListener('click', function (e) {
    e.preventDefault();
    positioningCheck();
});



function collageCheck() {

    let c_error = false;
    let c_errorTa = false;

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
            })
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
        })
    })


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

                    c_error = true;

                } else {

                    if (el.value != '') {

                        let num = el.value.length;

                        if (num > 3) {

                            if (box.querySelector('.alert-collage').style.display == "block") {
                                box.querySelector('.alert-collage').style.display = 'none';
                            };

                            c_error = false;

                            // checkAreas();

                        } else {

                            box.querySelector('.alert-collage').style.display = "block";

                            closeAlert = () => {
                                document.getElementById("dlm-alert-collage").style.display = "none";
                            }

                            document.getElementById("dlm-alert-collage").style.display = "block";
                            setTimeout(closeAlert, 3000);
                            clearTimeout(closeAlert);

                            c_error = true;
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

        c_errorTa = true;

    } else {

        if (collageTextarea.value != '') {

            let num2 = collageTextarea.value.length;

            if (num2 > 3) {

                if (document.getElementById('alert-collage-03').style.display == "block") {
                    document.getElementById('alert-collage-03').style.display = 'none';
                }

                c_errorTa = false;
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

                c_errorTa = true;
            }
        }
    }


    if ((c_errorTa === false) && (c_error === false)) {

        formSucess = true;
    }
}



finishForm.addEventListener('click', function (e) {
    //e.preventDefault();
    collageCheck();
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

        //console.log(e);

        e.preventDefault();

        if (formSucess === true) {

            const dataForm = new FormData(form);
            const user = {};

            dataForm.forEach((val, key) => {
                user[key] = val;
            });

            sendForm(user).then(data => {

                console.log('Письмо отправлено успешно');

                form.reset();

                document.location.replace('https://igorbobyrev.ru/html/feedback.html');

                formSucess = false;
            })
        }
    })
})


//////////////////////////////////////////////
// кнопки "предыдущая тема"

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

/* const form = document.querySelector('.form');

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

    //console.log(e);

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








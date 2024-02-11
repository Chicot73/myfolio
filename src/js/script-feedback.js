//Валидация и отправка формы

let f_formSucess = false;

let f_finishForm = document.getElementById("d06-sec");


function finishCheck() {

    const finishTextarea = document.querySelectorAll('.header__fb-input');
    const finishCheckbox = document.getElementById('fb-agree');
    const agreeInputalert = document.getElementById('fb-useragree');

    let f_error = false;
    let f_errorTa = false;

    if (!finishCheckbox.checked) {

        f_error = true;

        agreeInputalert.style.display = "block";
    }

    finishTextarea.forEach(el => {

        el.addEventListener('change', function () {

            el.getAttribute('value');

            if (el.value != '') {

                if (el.value == undefined) {

                } else {

                    let num = el.value.length;

                    if (num > 3) {

                        if (el.parentNode.parentNode.querySelector('.alert').style.display == "block") {
                            el.parentNode.parentNode.querySelector('.alert').style.display = 'none';
                        };
                    }
                }
            }
        })
    })

    finishCheckbox.addEventListener('change', function () {

        if (agreeInputalert.style.display == "block") {
            agreeInputalert.style.display = 'none';
        };
    })


    finishTextarea.forEach(el => {

        el.getAttribute('value');

        if ((el.value == undefined) || (el.value.trim() == '')) {

            closeAlert = () => {
                document.querySelector(".delimiter__alert").style.display = "none";
            }

            document.querySelector(".delimiter__alert").style.display = "block";
            setTimeout(closeAlert, 3000);
            clearTimeout(closeAlert);

            el.parentNode.parentNode.querySelector('.alert').style.display = 'block';

            f_errorTa = true;

        } else {

            if (el.value != '') {

                let num2 = el.value.length;

                if (num2 > 3) {

                    if (el.parentNode.parentNode.querySelector('.alert').style.display == "block") {
                        el.parentNode.parentNode.querySelector('.alert').style.display = 'none';
                    }

                } else {

                    closeAlert = () => {
                        document.querySelector(".delimiter__alert").style.display = "none";
                    }

                    document.querySelector(".delimiter__alert").style.display = "block";
                    setTimeout(closeAlert, 3000);
                    clearTimeout(closeAlert);

                    el.parentNode.parentNode.querySelector('.alert').style.display = 'block';

                    f_errorTa = true;
                }
            }
        }
    });


    if ((f_errorTa === false) && (f_error === false)) {

        f_formSucess = true;
    }
}

f_finishForm.addEventListener('click', function () {

    finishCheck();
})

const form = document.querySelector('.form');

const sendForm = (data) => {
    return fetch('/finish.php', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-type': 'application/json; charset=UTF-8'
        }
    }).then(res => res.json());
}

form.addEventListener('submit', (e) => {

    e.preventDefault();

    if (f_formSucess === true) {

        const dataForm = new FormData(form);
        const user2 = {};

        dataForm.forEach((val, key) => {
            user2[key] = val;
        });

        sendForm(user2).then(data => {
            console.log('Письмо отправлено успешно');

            //Pop-up меню

            let fbMenu = document.querySelector('.popup-menu'),
                fbBack = document.querySelector('.dark-fb'),
                fbCross = document.querySelector('.popup-menu__cross'),
                fbBody = document.querySelector('body');

            if (fbMenu.classList.contains('popup-menu--out')) {
                fbMenu.classList.remove('popup-menu--out');
            };
            fbMenu.classList.add('popup-menu--in');
            fbBack.style.display = 'block';
            fbBody.style.overflow = 'hidden';

            let crossArr = [fbCross, fbBack].forEach(item => {

                item.addEventListener('click', (e) => {
                    fbMenu.classList.remove('popup-menu--in');
                    fbMenu.classList.add('popup-menu--out');
                    fbBody.style.overflow = 'scroll';
                    function start() {
                        fbBack.style.display = 'none';
                    };
                    setTimeout(start, 300);
                })
            })
            form.reset();

            f_formSucess = false;
        })
    }
})

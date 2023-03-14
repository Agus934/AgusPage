//GLOBAL STATE
window.form_state = Object.seal({
    id: "autos",
    subform: undefined
});

const html_cotiza_buttons = document.getElementById("cotiza-buttons");
const html_coberturas_buttons = document.getElementById("coberturas-buttons");

const HTML_nav = document.getElementById("nav");
const HTML_ham = document.getElementById("ham-btn");
const HTML_ham_menu = document.getElementById("ham-menu");
const HTML_ham_close = document.getElementById("ham-close");

//NAV STATE
let isClose = true;

function changeIsClose() {
    isClose = !isClose;
    //change the class 
    if (isClose) {
        HTML_nav.classList.toggle("hidden");
        HTML_ham_menu.classList.toggle("display-none");
        HTML_ham_close.classList.toggle("display-none");
    } else {
        HTML_nav.classList.toggle("hidden");
        HTML_ham_menu.classList.toggle("display-none");
        HTML_ham_close.classList.toggle("display-none");
    }
}
//ham button change the close state
HTML_ham.addEventListener("click", changeIsClose);
//All li change the close state
[...HTML_nav.lastElementChild.children].forEach(function fe(el) {
    el.addEventListener("click", changeIsClose);
});

//TOGGLE COTIZA FORMS from COTIZA BUTTONS
[...html_cotiza_buttons.children].forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const button = e.currentTarget;
        const form_id = button.dataset.value;
        const current_form_state = window.form_state;
        const current_form_id = current_form_state.id;

        if (current_form_id !== form_id) {

            window[current_form_id + "-button"].classList.toggle("select");
            button.classList.toggle("select");

            window[current_form_id + "-form"].classList.toggle("display-none");
            window[form_id + "-form"].classList.toggle("display-none");

            current_form_state.id = form_id;
            current_form_state.subform = undefined;
        }
    });
});

//TOGGLE COTIZA FORMS from COBERTURAS BUTTONS
[...html_coberturas_buttons.children].forEach(function (btn) {
    btn.firstElementChild.addEventListener("click", function (e) {
        const anchor = e.currentTarget;
        const form_id = anchor.dataset.value;
        const subform = anchor.dataset.subvalue;
        const current_form_state = window.form_state;
        const current_form_id = current_form_state.id;
        const current_form_subform = current_form_state.subform;

        if (current_form_id !== form_id || current_form_subform !== subform) {
            //toggle class 
            window[current_form_id + "-button"].classList.toggle("select");
            window[form_id + "-button"].classList.toggle("select");

            window[current_form_id + "-form"].classList.toggle("display-none");
            window[form_id + "-form"].classList.toggle("display-none");

            //if a select HTMLElement exist change the define a new selected focus 
            if (window?.[form_id + "-select"] !== undefined) {
                [...window?.[form_id + "-select"].children].forEach(function (option) {
                    if (option.selected) {
                        option.selected = false;
                    }
                    if (option.value === subform) {
                        option.selected = true;
                    }
                });
            }
            //change global form_state
            current_form_state.id = form_id;
            current_form_state.subform = subform;
        }
    });
});

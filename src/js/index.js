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

/*
changeIsClose :: () -> undefined */
function changeIsClose() {
    HTML_nav.classList.toggle("hidden");
    HTML_ham_menu.classList.toggle("display-none");
    HTML_ham_close.classList.toggle("display-none");

}


/*
toggleCotizaFormFromCotizaButton :: (ClickEvent) -> undefined */
function toggleCotizaFormFromCotizaButton(e) {
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
}

/*
toggleCotizaFormFromCoberturasButton :: (ClickEvent) -> undefined */
function toggleCotizaFormFromCoberturasButton(e) {
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
}

//ham button change the close state
HTML_ham.addEventListener("click", changeIsClose);

//All li change the close state
for (const HTML_li of HTML_nav.lastElementChild.children) {
    HTML_li.addEventListener("click", changeIsClose);
}

//TOGGLE COTIZA FORMS from COTIZA BUTTONS
for (const HTML_button of html_cotiza_buttons.children) {
    HTML_button.addEventListener("click", toggleCotizaFormFromCotizaButton);
}

//TOGGLE COTIZA FORMS from COBERTURAS BUTTONS
for (const HTML_button of html_coberturas_buttons.children) {
    HTML_button.firstElementChild.addEventListener("click", toggleCotizaFormFromCoberturasButton)
}

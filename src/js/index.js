//GLOBAL STATE
window.form_state = Object.seal({
    id: "autos",
    field: "otros-accidentes-personales",
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
    const formId = button.dataset.value;
    const currentFormState = window.form_state;
    const currentFormId = currentFormState.id;

    if (currentFormId !== formId) {
        const html_current_form = window[currentFormId + "-form"];

        window[currentFormId + "-button"].classList.toggle("select");
        button.classList.toggle("select");

        html_current_form.classList.toggle("display-none");
        window[formId + "-form"].classList.toggle("display-none");

        html_current_form.reset();

        currentFormState.id = formId;
    }
}

/*
toggleCotizaFormFromCoberturasButton :: (ClickEvent) -> undefined */
function toggleCotizaFormFromCoberturasButton(e) {
    const anchor = e.currentTarget;
    const formId = anchor.dataset.value;
    const field = anchor.dataset.field;
    const currentFormState = window.form_state;
    const currentFormField = currentFormState.field;
    const currentFormId = currentFormState.id;

    if (currentFormId !== formId || currentFormField !== field) {
        const html_current_form = window[currentFormId + "-form"];

        //toggle class 
        window[currentFormId + "-button"].classList.toggle("select");
        window[formId + "-button"].classList.toggle("select");

        html_current_form.classList.toggle("display-none");
        window[formId + "-form"].classList.toggle("display-none");

        html_current_form.reset();

        //if a select HTMLElement exist change the define a new selected focus 
        ///select the specific option 
        if (window?.[field] !== undefined) {
            window[currentFormField].selected = false;
            window[field].selected = true;
        }
        //change global form_state
        currentFormState.id = formId;
        currentFormState.field = field;
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

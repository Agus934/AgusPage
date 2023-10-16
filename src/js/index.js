//GLOBAL STATE
window.form_state = Object.seal({
    id: "autos",
    field: "",
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

function cotizaButtonsToggleCotizaForm(e) {
    var target = e.target;
    var tagName = target.tagName;
    if (tagName === "BUTTON") {
        var formId = target.getAttribute("data-value");
        if (formId !== null && formId !== window.form_state.id) {
            var currentHTMLForm = document.getElementById(`${window.form_state.id}-form`);
            var nextHTMLForm = document.getElementById(`${formId}-form`);
            if (currentHTMLForm === null || nextHTMLForm === null) {
                throw Error("From does not exist");
            }
            currentHTMLForm.toggleAttribute("data-selected");
            nextHTMLForm.toggleAttribute("data-selected");
            currentHTMLForm.reset();

            var currentHTMLButton = document.getElementById(`${window.form_state.id}-button`);
            var nextHTMLButton = document.getElementById(`${formId}-button`);
            if (currentHTMLButton === null || nextHTMLForm === null) {
                throw Error("Form Button does not exist");
            }
            currentHTMLButton?.toggleAttribute("data-selected");
            nextHTMLButton?.toggleAttribute("data-selected");

            window.form_state.id = formId;
        }
    }
}

function coberturasButtonsToggleCotizaForm(e) {
    var target = e.target;
    var type = target.getAttribute("data-type");
    if (type === "button") {
        var formId = target.getAttribute("data-value");
        var formField = target.getAttribute("data-field");
        if (
            formId !== null
            && formField !== null
            && (
                formId !== window.form_state.id
                || (
                    formId === "otros"
                    && formField !== window.form_state.field
                )
            )
        ) {
            var currentHTMLForm = document.getElementById(`${window.form_state.id}-form`);
            var nextHTMLForm = document.getElementById(`${formId}-form`);
            if (currentHTMLForm === null || nextHTMLForm === null) {
                throw Error("From does not exist");
            }
            currentHTMLForm.toggleAttribute("data-selected");
            nextHTMLForm.toggleAttribute("data-selected");
            currentHTMLForm.reset();

            var currentHTMLButton = document.getElementById(`${window.form_state.id}-button`);
            var nextHTMLButton = document.getElementById(`${formId}-button`);
            if (currentHTMLButton === null || nextHTMLForm === null) {
                throw Error("Form Button does not exist");
            }
            currentHTMLButton?.toggleAttribute("data-selected");
            nextHTMLButton?.toggleAttribute("data-selected");


            if (formField !== "") {
                var nextHTMLField = document.getElementById(formField);
                if (nextHTMLField !== null) {
                    nextHTMLField.selected = true;
                }
                if (window.form_state.field !== "") {
                    var currentHTMLField = document.getElementById(window.form_state.filed);
                    if (currentHTMLField !== null) {
                        currentHTMLField.selected = false;
                    }
                }
            }

            window.form_state.id = formId;
            window.form_state.field = formField;
        }
    }
}


//ham button change the close state
HTML_ham.addEventListener("click", changeIsClose);

//All li change the close state
for (const HTML_li of HTML_nav.lastElementChild.children) {
    HTML_li.addEventListener("click", changeIsClose);
}

html_cotiza_buttons.addEventListener("click", cotizaButtonsToggleCotizaForm);
html_coberturas_buttons.addEventListener("click", coberturasButtonsToggleCotizaForm);

const {
    default_data,
    forms
} = require("../data/form.data.js");
const html_form = require("./html-form.js"); 

let html_forms = "";
let html_buttons = "";

function button({name, id, display}) {
    return /*html*/`
        <button
            id="${id}-button"
            class="nombre-producto"
            type="button"
            data-value="${id}"
            ${(
                display !== undefined
                ? "data-selected"
                : ""
            )}
        >
            <h4 class="fs-text text-bold">${name}</h4>
        </button>
    `;
}

forms.forEach(function (form_data) {
    html_forms = String.prototype.concat.call(
        html_forms,
        html_form({
            data: form_data?.rows,
            default_data: (
                form_data?.default !== undefined
                ? default_data
                : undefined
            ),
            display: form_data?.display,
            id: form_data?.id,
            whatsapp: true,
            name: form_data?.name
        })
    );

    html_buttons = String.prototype.concat.call(
        html_buttons,
        button({
            id: form_data?.id,
            display: form_data?.display,
            name: form_data?.name
        })
    );
});

module.exports = function ({
    url = ".",
}) {
    return /*html*/`
<section id="cotiza" class="cotiza section-padding flex-columns">
    <div class="head flex-r-change align-c justify-c">
        <div class="img">
            <img
                src="${url}media/cotiza-icon.svg"
                srcset="${url}media/cotiza-icon.svg"
                loading="lazy"
                alt="cotiza-icon"
            />
        </div>
        <div class="title">
            <h2 class="fs-title c-secondary">Cotizá</h2>
            <p class="fs-text">Obtené una atención más rápida y eficiente</p>
            <p class="fs-text">Mandame un mensaje con la información necesaria para tu seguro</p>
        </div>
    </div>
    <div id="cotiza-formularios" class="body">
        <div class="flex-row flex-wrap justify-sa"> 
            <div id="cotiza-buttons" class="btns flex-row flex-wrap justify-sa">
                ${html_buttons}
            </div>
        </div>
        <div id="forms" class="forms flex-row align-s justify-c">
            ${html_forms}
        </div>
    </div>
</section>`;
};

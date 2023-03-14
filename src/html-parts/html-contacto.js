const html_form = require("./html-form.js");
const svg_whatsapp = require("../svg-icons/svg-whatsapp.js");

const contact_data = [
    [
        {
            value: "Nombres y apellidos",
            name: "nombre",
            type: "text",
            required: "default",
        },
        {
            value: "Email",
            name: "email",
            type: "email",
            required: "Email invalido",
        }
    ],
    [
        {
            value: "Mensaje",
            name: "mensaje",
            type: "textarea",
            required: "default",
        }
    ]
]

module.exports = function () {
    return /*html*/`
<section id="contacto" class="contacto section-padding flex-column">
    <div class="head text-center">
        <h3 class="fs-text-l c-primary">Cualquier duda o consulta que tengas no dudes en contactarte</h3>
    </div>
    <div class="info flex-r-change">
        <div class="item">
            <a
                class="text fs-text-s w-api c-white flex-row align-c" 
                href="https://api.whatsapp.com/send/?phone=5493512876508&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                ${svg_whatsapp}
                <span>+54 9 351 287-6508</span>
            </a>
            <a
                class="text fs-text-s w-desk c-white flex-row align-c" 
                href="https://web.whatsapp.com/send/?phone=5493512876508&app_absent=0" 
                target="_blank" 
                rel="noopener noreferrer"
            >
                ${svg_whatsapp}
                <span>+54 9 351 287-6508</span>
            </a>
        </div>
        <div class="item">
            <a class="text fs-text-s c-white flex-row align-c" href="mailto:agustina.seguros.gordillo@gmail.com">
                <svg class="bi bi-envelope" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z"/>
                </svg>
                <span>agustina.seguros.gordillo@gmail.com</span>
            </a>
        </div>
    </div>
    <div class="flex-column align-c justify-c">
        ${html_form({
            data: contact_data,
            display: true,
            id: "contacto",
            name: "Contacto"
        })}
    </div>
</section>`;
}

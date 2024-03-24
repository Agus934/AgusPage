const html = require("./html-parts/html.js");
const html_header = require("./html-parts/html-header.js");
const html_main = require("./html-parts/html-main.js");
const html_footer = require("./html-parts/html-footer.js");
const html_modals = require("./html-parts/html-modals.js");
const html_not_found = require("./html-parts/html-not-found.js");
const html_inicio = require("./html-parts/html-inicio.js");
const html_sobre_mi = require("./html-parts/html-sobre-mi.js");
const html_coberturas = require("./html-parts/html-coberturas.js");
const html_cotiza = require("./html-parts/html-cotiza.js");
const html_contacto = require("./html-parts/html-contacto.js");
const html_form = require("./html-parts/html-form.js");

/*-
html_index: string -> string
*/
function html_index(main_url) {
    return html({
        body: String.prototype.concat.call(
            html_header({nav: true, url: main_url}),
            html_main(String.prototype.concat.call(
                html_inicio(),
                html_sobre_mi(),
                html_coberturas({url: main_url}),
                html_cotiza({
                    url: main_url
                }),
                html_contacto()
            )),
            html_footer({
                url: main_url,
                whatsapp: true
            }),
            html_modals()
        ),
        title: "Agustina Gordillo Seguros",
        script_links: [
            {
                src: "index.js",
                module: true
            },
            {
                src: "form.js",
                module: true
            }
        ],
        style_links: "index.style.css",
        url: main_url
    });
}

/*-
html_404: string -> string
*/
function html_404(main_url) {
    return  html({
        style: /*css*/`
            .not-found {
                height: 80vh;
            }
            .not-found .message {
                max-width: 500px;
            }
        `, 
        body: String.prototype.concat.call(
            html_header({url: main_url}),
            html_not_found(),
            html_footer({
                url: main_url,
                whatsapp: false
            })
        ),
        title: "Agustina Gordillo Seguros",
        url: main_url
    });
}

function html_route({
    url,
    path,
    title,
    form_data,
    default_data
}) {
    return html({
        body: String.prototype.concat.call(
            html_header({url}),
            html_main(
                /*html*/`
                    <div class="route section-padding-half flex-column">
                        <div class="flex-row align-c justify-c">
                            <h1 class="fs-title">
                                ${form_data.name}
                            </h1>
                        </div>
                        <div id="forms" class="forms flex-row align-c justify-c">
                            ${html_form({
                                data: form_data?.rows,
                                default_data,
                                display: true,
                                id: form_data?.id,
                                whatsapp: true,
                                name: form_data?.name
                            })}
                        </div>
                    </div>
                    <div class="bar"></div>`
            ),
            html_footer({
                url,
                whatsapp: false
            })
        ),
        url,
        path,
        title: title,
        script_links: {
            src: "form.js",
            modal: true
        },
        style: /*css*/`
            body {
                background-color: var(--secondary-color);
            }
            .route {
                width: 100%;
                background-color: var(--white-color);
                border-left: 8px solid var(--secondary-color);
                border-right: 8px solid var(--secondary-color);
                outline: 10px solid var(--secondary-color);
                outline-offset: -4px;
                padding: 10px;
                min-height: 1000px;
                position: relative;
                overflow: hidden;
            }
            .route::before {
                content: "";
                width: 120%;
                height: 8rem;
                position: absolute;
                left: 0;
                top: 0;
                background: url(media/cot-wave1.svg);
                background-position-y: top;
                background-repeat: repeat-x;
            }
            .route::after {
                content: "";
                width: 120%;
                height: 8rem;
                position: absolute;
                left: 0;
                bottom: 0;
                background: url(media/cot-wave2.svg);
                background-position-y: bottom;
                background-repeat: repeat-x;
            }
            .route>div {
                positio: relative;
                z-index: 1;
            }
            .route .form,
            .route h1 {
                background-color: var(--white-color-op);
                border-radius: 5px;
            }

            .route h1 {
                color: var(--secondary-color);
                padding: 10px 30px;
            }

            .bar {
                width: 100%;
                height: 30px;
                background-color: var(--secondary-color);
            }
            @media screen and (min-width:2080px) {
                .route {
                    background-size: 50%, 50%;
                    background-repeat: repeat-x;
                }
            }
        `,
    })
}

module.exports = {
    html_404,
    html_index,
    html_route
};

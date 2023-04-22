const coberturas_data = require("../data/coberturas.data.js");
const svg_check = require("../svg-icons/svg-check");

const PRODUCTS = Object.keys(coberturas_data);

let products_elements = "";

PRODUCTS.forEach(function (key) {
    const product = coberturas_data[key];
    let elements = "";
    if (product.description.length > 0) {
        product.description.forEach(function (text) {
            elements += /*html*/`
                <div class="element flex-row align-s">
                    <div>
                        ${svg_check}
                    </div>
                    <span class="fs-text">${text}</span>
                </div>
            `;
        });
    }

    products_elements += /*html*/`
        <section
            class="product flex-column justify-sb"
        >
            <a
                id="product-${key}"
                href="#cotiza-formularios"
                class="title flex-row align-c"
                data-value=${product.form}
                ${(
                    product.form === "otros"
                    ? `data-field="otros-${key}"`
                    : ""
                )}
            >
                ${product.svg}
                <span class="fs-text text-bold c-secondary">
                    ${product.name}
                </span>
            </a>
            <div class="description">
                ${elements}
            </div>
        </section>
    `;
});

module.exports = function ({
    url
}) {
    return /*html*/`
<section
    id="coberturas"
    class="coberturas flex-column align-c section-padding-half"
>
    <div class="head flex-row align-c justify-c">
        <div class="text flex-column align-c">
            <h2 class="fs-title text-center c-secondary">
                Conocé mis Coberturas
            </h2>
            <img
                src="${url}media/triunfo-logo.png"
                srcset="${url}media/triunfo-logo.png"
                loading="lazy"
                alt="triunfo seguros"
            />
        </div>
        <div class="img flex-row flex-wrap align-c justify-c">
            <img
                src="${url}media/coberturas-icon.svg"
                srcset="${url}media/coberturas-icon.svg"
                loading="lazy"
                alt="coberturas-icon"
            />
        </div>
    </div>
    <div id="coberturas-buttons" class="body flex-row flex-wrap align-c justify-c">
        ${products_elements}
    </div>
</section>`;
};
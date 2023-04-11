const vsg_inicio = require("../svg-icons/svg-inicio.js");

module.exports = function () {
    return /*html*/`
<section class="inicio flex-r-change justify-c align-c">
    <div class="text flex-column justify-c">
        <h1 class="fs-generalTitle c-secondary">Contratá tu seguro ideal</h1>
        <p class="fs-generalSubtitle c-secondary">Asesoramiento las 24 horas</p>
    </div>
    <div class="img flex-column align-c justify-c">
        ${vsg_inicio}
    </div>
</section>`;
};

module.exports = function () {
    return /*html*/`
<section id="sobre-mi" class="sobre-mi section-padding flex-row">
    <div class="photo">
        <img
            src="./media/sobre-mi.webp"
            srcset="./media/sobre-mi.webp"
            loading="lazy"
            alt="sobre-mi"
        />
    </div>
    <div id="sobre-mi-text" class="text flex-column flex-grow-1">
        <div class="titles flex-column">
            <h2 class="fs-title c-secondary">¡Hola!</h2>
            <h3 class="fs-subtitle c-secondary">Soy Agustina Gordillo</h3>
            <p class="fs-text-l">Productora Asesora de Seguros</p>
        </div>
        <div class="flex-column">
            <p class="fs-text">Les doy la bienvenida a este espacio donde obtendrán un asesoramiento integral en materia de seguros.</p>
            <p class="fs-text">Soy de Córdoba, Argentina profesional matriculada a nivel nacional desde la Asociación APAS Córdoba.</p>
            <p class="fs-text">Me define el compromiso y la responsabilidad hacia mis clientes, ya que el seguro no se trata solo de contratarlo si no que estés siempre acompañado durante la vigencia de la póliza y estar tranquilo en el resguardo de tus bienes.</p>
        </div>
    </div>
</section>`;
};
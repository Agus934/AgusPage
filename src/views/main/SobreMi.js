import sobreMiPhoto from "../../img/sobre-mi.webp";
import "./SobreMi.scss";

export default function SobreMi() {
  return (
    <section id="sobre-mi" className="sobre-mi section-padding flex-column">
      <div className="sobre-mi-container flex-r-change flex-grow-1 ">
        <div className="sobre-mi-photo">
          <img src={sobreMiPhoto}
            srcSet={sobreMiPhoto}
            loading="lazy"
            alt="sobre-mi"
          />
        </div>
        <div className="sobre-mi-text flex-column flex-grow-1 ">
          <div className="sobre-mi-text_titles flex-column">
            <h2 className="fs-title c-secondary">¡Hola!</h2>
            <h3 className="fs-subtitle c-secondary">Soy Agustina Gordillo</h3>
            <p className="fs-text-l">Productora Asesora de Seguros</p>
          </div>
          <div className="sobre-mi-text_content  flex-column">
            <p className="fs-text">Les doy la bienvenida a este espacio donde obtendrán un asesoramiento integral en materia de seguros.</p>
            <p className="fs-text">Soy de Córdoba, Argentina profesional matriculada a nivel nacional desde la Asociación APAS Córdoba.</p>
            <p className="fs-text">Me define el compromiso y la responsabilidad hacia mis clientes, ya que el seguro no se trata solo de contratarlo si no que estés siempre acompañado durante la vigencia de la póliza y estar tranquilo en el resguardo de tus bienes.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
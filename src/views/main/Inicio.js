import "./Inicio.scss";
import inicioImg from "../../img/inicio.svg";

export default function Inicio() {
  return (
    <section id="inicio" className="inicio flex-r-change">
        <div className="inicio-text flex-column align-c">
          <div className="flex-column">
            <h1 className="fs-generalTitle c-secondary">Contratá tu seguro ideal</h1>
            <p className="fs-generalSubtitle c-secondary">Asesoramiento las 24 horas</p>
          </div>
        </div>
        <div className="inicio-img flex-column">
          <div className="img-container">
            <img src={inicioImg} 
              srcSet={inicioImg}  
              loading="lazy" 
              alt="inicio-logo" 
            />
          </div>
        </div>
    </section>
  );
}
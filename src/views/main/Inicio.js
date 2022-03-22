import "./Inicio.scss";
import inicioImg from "../../img/inicio.svg";

export default function Inicio() {
  return (
    <section id="inicio" className="inicio flex-r-change">
      <div className="leftColumn flex-column">
        <div className="inicio-img">
          <img src={inicioImg} 
            srcSet={inicioImg}  
            loading="lazy" 
            alt="inicio-logo" 
          />
        </div>
      </div>
      <div className="rightColumn flex-column">
        <h1 className="inicio-title">Contratá tu seguro ideal</h1>
        <p className="inicio-subtitle">Asesoramiento las 24 horas</p>
      </div>
    </section>
  );
}
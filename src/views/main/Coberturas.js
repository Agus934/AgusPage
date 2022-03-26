import CoberturasContent from "./coberturas/CoberturasContent.js";

import triunfoImg from "../../img/triunfo-logo.png";

import "./Coberturas.scss";


export default function Coberturas() {
  return (
    <section id="coberturas" className="coberturas flex-column section-padding-half">
      <div className="coberturas-title flex-column align-c justify-c">
        <h2 className="fs-title text-center c-secondary">Conocé mis Coberturas</h2>
      </div>
      <div className="coberturas-promotions flex-row flex-wrap align-c justify-c">
          <img src={triunfoImg} 
            srcSet={triunfoImg}
            loading="lazy" 
            alt="triunfo seguros" 
          />
      </div>
      <CoberturasContent />
    </section>
  );
}
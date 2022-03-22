//import Data from "./Coberturas.data.json";

import triunfoImg from "../../img/triunfo-logo.png";
import coberturasIcon from "../../img/coberturas-icon.svg";

import "./Coberturas.scss";

export default function Coberturas() {

  return (
    <section id="coberturas" className="coberturas flex-column section-padding-half">
      <div>
        <div className="coberturas-title">
          <div className="flex-r-change"> 
            <div className="coberturas-title-text">
              <h2 className="fs-title">Conocé mis Coberturas</h2>
              <div className="coberturas-title-text-img flex-row align-c">
                <img src={triunfoImg} 
                  srcSet={triunfoImg}
                  loading="lazy" 
                  alt="triunfo seguros" 
                />
              </div>
            </div>
            <div className="coberturas-title-img">
              <img src={coberturasIcon}
                srcSet={coberturasIcon}
                loading="lazy" 
                alt="coberturas-icon"
              />
            </div>
          </div>
        </div>
        <div className="coberturas-content">

        </div>
      </div>
    </section>
  );
}
import {memo} from "react";
import ssnImg from "../../img/ssn-img.png";

import "./Footer.scss";

export default memo(function Footer(props) {
  return (
    <footer>
      {props.whatsapp && 
        <div className="whatsApp">
          <a className="w-api whatsApp-item" 
            href="https://api.whatsapp.com/send/?phone=5493512876508&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="item-icon bi bi-whatsapp"></i>
          </a>
          <a className="w-desk whatsApp-item" 
            href="https://web.whatsapp.com/send/?phone=5493512876508&app_absent=0" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            <i className="item-icon bi bi-whatsapp"></i>
          </a>
        </div>
      }
      <div className="footer">
        <div className="footer-body">
          <div className="media">
              <a href="https://www.instagram.com/agustinagordilloseguros/" target="_blank" rel="noopener noreferrer">
                <i className="media-icon bi bi-instagram"></i>
              </a>
              <a href="https://www.facebook.com/people/Agustina-Gordillo/100073349076168/" target="_blank" rel="noopener noreferrer">
                <i className="media-icon bi bi-facebook"></i>
              </a>
          </div>
          <div className="a-r">
              <span>&copy; 2022 Agustina Gordillo</span>
          </div>
          <div className="creator">
            <span>
              create by <a href="https://www.instagram.com/axarisar/" target="_blank" rel="noopener noreferrer">
                Axel Ariel Saravia
              </a>
            </span>
          </div>
        </div>
        <div className="footer-ssn flex-r-change">
          <div className="footer-ssn_section matricula flex-column align-c justify-c">
            <span>N° de matricula en SSN</span>
            <span>99199</span>
          </div>
          <div className="footer-ssn_intersection"></div>
          <div className="footer-ssn_section atencion-al-asegurado flex-column align-c justify-c">
            <span>Atención al asegurado</span>
            <a href="tel:0800-666-8400" target="_blank" rel="noopener noreferrer">0800-666-8400</a>
          </div>
          <div className="footer-ssn_intersection"></div>
          <div className="footer-ssn_section flex-column align-c justify-c">
              <a href="https://www.argentina.gob.ar/superintendencia-de-seguros" target="_blank" rel="noopener noreferrer">https://www.argentina.gob.ar/ssn</a>
          </div>
          <div className="footer-ssn_intersection"></div>
          <div className="footer-ssn_section ssn-img flex-column align-c justify-c">
            <img  src={ssnImg} 
              srcSet={ssnImg}
              loading="lazy" 
              alt="Superintendencia de  seguros de la Nacion"
            />
          </div>
        </div>
      </div>
    </footer>
  );
});
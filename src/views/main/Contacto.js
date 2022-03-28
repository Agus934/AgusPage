import "./Contacto.scss";
import Form from "../Form/Form.js"


const formData = {
    "Contacto": {
      "rows": [
        { 
          "Nombres": {
            "placeholder": "Nombre",
            "name": "nombre",
            "type": "text",
            "required": "default",
            "label": false
          },
          "Email": {
            "placeholder": "Email",
            "name": "email",
            "type": "email",
            "required": "Email invalido",
            "label": false
          }
        }, {
          "Comentarios": {
            "placeholder": "Mensaje",
            "name": "mensaje",
            "type": "textarea",
            "required": false,
            "label": false
          }
        }
      ]
    }
}


export default function Contacto() {
  return (
    <section id="contacto" className="contacto section-padding flex-column">
      <div className="contacto-header text-center">
        <h3 className="fs-text-l c-primary">Cualquier duda o consulta que tengas no dudes en contactarte</h3>
      </div>
      <div className="contacto-info flex-r-change">
        <div className="item-info">
          <i className="item-icon bi bi-whatsapp"></i>
          <a className="item-text fs-text-s w-api c-white" href="https://api.whatsapp.com/send/?phone=5493512876508&app_absent=0" target="_blank" rel="noopener noreferrer">+54 9 351 287-6508</a>
          <a className="item-text fs-text-s w-desk c-white" href="https://web.whatsapp.com/send/?phone=5493512876508&app_absent=0" target="_blank" rel="noopener noreferrer">+54 9 351 287-6508</a>
        </div>
        <div className="item-icon item-info">
          <i className="item-icon bi bi-envelope"></i>
          <a className="item-text fs-text-s c-white" href="mailto:agustina.seguros.gordillo@gmail.com">agustina.seguros.gordillo@gmail.com</a>
        </div>
      </div>
      <div className="flex-column align-c justify-c">                           
          <Form className="contacto" name="Contacto" formData={formData} whatsapp={false}/>
      </div>
    </section>
  );
}
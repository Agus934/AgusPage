import "./Contacto.scss";

export default function Contacto() {
  return (
    <section id="contacto" className="contacto section-padding flex-column">
      <div className="contacto-header text-center">
        <h3 className="fs-text-l">Cualquier duda o consulta que tengas no dudes en contactarte</h3>
      </div>
      <div className="contacto-info flex-r-change">
        <div className="item-info">
          <i className="item-icon bi bi-whatsapp"></i>
          <a className="item-text fs-text w-api" href="https://api.whatsapp.com/send/?phone=5493512876508&app_absent=0" target="_blank" rel="noopener noreferrer">+54 9 351 287-6508</a>
          <a className="item-text fs-text w-desk" href="https://web.whatsapp.com/send/?phone=5493512876508&app_absent=0" target="_blank" rel="noopener noreferrer">+54 9 351 287-6508</a>
        </div>
        <div className="item-icon item-info">
          <i className="item-icon bi bi-envelope"></i>
          <a className="item-text fs-text" href="mailto:agustina.seguros.gordillo@gmail.com">agustina.seguros.gordillo@gmail.com</a>
        </div>
      </div>
      <div className="flex-column align-c justify-c">                           
        <form id="contacto-form" className="contacto-form" >
          <div className="form-container">
            <div className="flex-r-change">
              <div className="form-input">
                <input type="text" 
                  className="form-control fm_el fs-text-s" 
                  title="escriba su nombre" 
                  name="nombre" 
                  placeholder="Nombre"
                />
                <div className="invalid-feedback">Valor requerido</div>
              </div>
              <div className="form-input">
                <input type="email"
                  className="form-control fm_el fs-text-s"
                  title="escriba su email"
                  name="email"
                  placeholder="Email"
                />
                <div className="invalid-feedback">Valor requerido</div>
              </div>
            </div>
            <div className="form-input">
              <textarea className="form-control fm_tx fs-text-s" 
                name="consulta" 
                placeholder="Mensaje"
              />
              <div className="invalid-feedback">Valor requerido</div>
            </div>
            <div className="form-input flex-column align-c justify-c">
              <button className="fm_btn fs-text-s" name="submit" type="submit">Enviar Consulta</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
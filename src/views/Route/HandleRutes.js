import Header from "../header/Header.js";
import Footer from "../footer/Footer.js";
import Form from "../Form/Form.js";
import DataForm from "../Form/form.data.json";

import "./HandleRutes.scss";


export const formNames = ( () => {
  let k = Object.keys(DataForm);
  return k.filter(n => !DataForm[n].notFormatter)
})();

export function NoPage() {
  return (
    <> 
      <Header />
      <main>
        <div className="route section-padding flex-column">
          <div  id="message" className="message flex-column align-c">
            <h2 className="fs-title">Error: 404</h2>
            <h1 className="fs-subtitle">Page Not Found</h1>
            <p className="fs-text text-center">The specified file was not found on this website. Please check the URL for mistakes and try again.</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
export default function RouteElement(props) {
  return (
    <>
      <Header />
      <main>
        <div className="route section-padding-half flex-column">
          <div className="flex-row align-c justify-c">
            <h1 className="fs-title">{DataForm[props.formName].name}</h1>
          </div>
          <div id="cotiza-forms" className="create-forms">
            <Form className="cotiza" name={props.formName} formData={DataForm} whatsapp/>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
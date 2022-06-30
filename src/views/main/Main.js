import { useState } from "react";

import Inicio from "./Inicio"
import Coberturas from "./Coberturas"
import SobreMi from "./SobreMi";
import Cotiza, {formNames} from "./Cotiza";
import Contacto from "./Contacto";

import FormContext from "../CotizaFormsStore";

export default function Main() {
  const [formName, setFormName] = useState({
    name: formNames[0],
    sub: ""
  });
  return (
    <main>
      <Inicio />
      <SobreMi />
      <FormContext.Provider value={{formName, setFormName}}>
        <Coberturas />
        <Cotiza />
      </FormContext.Provider>
      <Contacto />
    </main>
  );
} 
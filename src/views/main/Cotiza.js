import {useEffect, useState} from "react";
import Form from "../Form/Form.js";

import DataForm from "../Form/form.data.json";

import cotizaIcon from "../../img/cotiza-icon.svg"

import "./Cotiza.scss";

const formNames = ( () => {
  let k = Object.keys(DataForm);
  return k.filter(n => !DataForm[n].notFormatter)
})();

const Placeholders = () => {
  return (
    <div className="placeholder-container flex-column align-c justify-c" aria-hidden="true">
      <div className="ph-body placeholder-glow">
        <span className="placeholder"></span>
      </div>
      <div className="ph-body placeholder-glow">
        <span className="placeholder ph-text"></span>
        <span className="placeholder ph-full"></span>
      </div>
      <div className="ph-body placeholder-glow">
        <span className="placeholder ph-text"></span>
        <span className="placeholder ph-full"></span>
      </div>
      <div className="ph-body placeholder-glow">
        <span className="placeholder ph-text"></span>
        <span className="placeholder ph-full"></span>
      </div>
      <div className="ph-body placeholder-glow">
        <span className="placeholder ph-text"></span>
        <span className="placeholder ph-full"></span>
      </div>
      <div className="ph-body placeholder-glow">
        <span className="placeholder ph-text"></span>
        <span className="placeholder ph-full"></span>
      </div>
      <div className="ph-body placeholder-glow">
        <span className="placeholder ph-text"></span>
        <span className="placeholder ph-full"></span>
      </div>
      <div className="ph-body placeholder-glow">
        <span className="placeholder ph-text"></span>
        <span className="placeholder ph-full"></span>
      </div>
    </div>
  );
}

function CotizaButton(props) {
  const className = props.selected ? "select" : "";
  return (
    <button type="button"
      id={"cotiza-" + props.name}
      className={"nombre-producto " + className}
      onClick={props.handleClick}
      value={props.name}
    >
      <h4 className="fs-text">{props.name}</h4>
    </button>
  );
}


function CreateCotizaBody(props) {
  const [formClick, setFormClick] = useState(formNames[0]);
  const [animation, setAnimation] = useState("");

  const handleClick = (e) => {
    setAnimation("animation");
    setFormClick(e.currentTarget.value);
  }

  useEffect(() => {
    setTimeout(() => setAnimation(""), 500);
  },[animation]);

  return (
    <>
      <div className="cotiza-btns flex-row flex-wrap justify-sa">
        {props.formNames.map(name => (
          <CotizaButton key={name + "-button"} selected={name === formClick? true : false} name={name} handleClick={handleClick}/>
        ))}  
      </div>
      <div id="cotiza-forms" className="cotiza-forms">
        {animation !== "animation"
          ? <Form className="cotiza" name={formClick} formData={props.data} whatsapp/>
          : <Placeholders />
        }
      </div>
    </>
  );
}

export default function Cotiza() {
  return (
    <section id="cotiza" className="cotiza section-padding flex-columns">
      <div className="cotiza-title flex-r-change align-c justify-c">
        <div className="cotiza-title-img">
          <img src={cotizaIcon}
            srcSet={cotizaIcon}
            loading="lazy" 
            alt="cotiza-icon"
          />
        </div>
        <div className="cotiza-title-text">
          <h2 className="fs-title">Cotizá</h2>
          <p className="fs-text">Obtené una atención más rápida y eficiente</p>
          <p className="fs-text">Mandame un mensaje con la información necesaria para tu seguro</p>
        </div>
      </div>
      <div id="cotiza-body" className="cotiza-body">
        <CreateCotizaBody formNames={formNames} data={DataForm}/>
      </div>
    </section>
  );
}
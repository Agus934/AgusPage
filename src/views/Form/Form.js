import {useState, useRef, createContext, memo, useContext, useEffect} from "react";
import Modal from "./Modal.js";
import createSendMessage from "./createSendMessage.js";
import * as Redux from 'redux';

import FormContext from "../main/CotizaFormsStore.js";
import isRequired, {isSomeRequired} from "./verifies";

import "./Form.scss";

/****************
* GLOBAL STATES
****************/
/* CONTEXT */
const Submit = createContext();

/* REDUX */
const requiresReducer = (state = true, action) => {
  switch (action.type) {
    case 'requires/push': 
      return [...state, action.value];
    case 'requires/clear':
      return [];
    default: 
      return state;
  }
}
const requiresStore = Redux.createStore(requiresReducer);

const requiresPush = (val) => {
  requiresStore.dispatch({type: "requires/push", value: val});
} 
const requiresClear = () => {
  requiresStore.dispatch({type: "requires/clear"});
}
const getRequires = () => requiresStore.getState();


/************************
* FORM DEFAULT COMPONENTS
*************************/

/* TEXTAREA */
const Textarea = memo(function(props)  {
  const className = props.className || "";
  return <textarea name={props.name} className={"fs-text-s form-control fm_tx" + className}  placeholder={props.placeholder} />
});

/* SELECT */
const Select = memo(function(props)  {
  const selectValue = props.options.filter(el => el.selected !== undefined);
  const [value, setValue] = useState(selectValue[0].value);
  const className = props.className || "";
  
  const {formName} = useContext(FormContext);
  useEffect(()=> {
    setValue(formName.sub);
  }, [formName.sub]);

  const handleChange = (e) => { setValue(e.target.value) }

  return (
    <select value={value}
      onChange={handleChange}
      name={props.name} 
      className={"fs-text-s form-control" + className}  
      placeholder={props.placeholder}
    >
      {props.options.map(opt => (
        <option key={opt.text} className="fs-text-s" value={opt.value}>{opt.text}</option>
      ))}
    </select>
  );
});


/* INPUT */
const Input = memo(function(props)  {
  const [required, setRequired] = useState(false);
  const [input, setInput] = useState("");

  const submit = useContext(Submit);

  const inputHandler = (e) => { setInput(e.target.value); }

  useEffect(function  () {
    if (submit.press) {
      const bool = isRequired(props.name, input, setRequired, props.min);
      requiresPush(bool);
    }
  },[submit.press]);

  useEffect(function  () {
    if (submit.send) {
      setInput("");
    }
  },[submit.send]);

  const className = "fs-text-s form-control" + (props.className || "");
  
  return (
    <input 
      name={props.name} 
      type={props.type}
      className={required? className + " is-invalid" : className}  
      placeholder={props.placeholder} 
      min={props.min}
      max={props.max}
      value={input}
      onChange={inputHandler}
    />
  );
});

/********************
* GENERATE COMPONENT
********************/

/* COLUMNS */
const Cols = memo(function Cols(props) {
  const cols = props.cols
  const colsNames = Object.keys(cols);
 
  return (
    <>
    {colsNames.map(colName => (
      <div key={colName}  className="form-input flex-c align-c justify-c">
        {cols[colName].label &&
          <label className="fs-text-s fm_lb">{colName + ":"}</label>}
        {cols[colName].type === "textarea"
          ? <Textarea name={cols[colName].name} placeholder={cols[colName].placeholder}/>
          : cols[colName].type === "select"
          ? <Select name={cols[colName].name} options={cols[colName].option ? cols[colName].option : []}/>
          : <Input 
            type={cols[colName].type}
            name={cols[colName].name}
            placeholder={cols[colName].placeholder}
            min={cols[colName].min}
            max={cols[colName].max}
          />
        }
        {cols[colName].required && 
          <div className="fs-text-s invalid-feedback">
            {cols[colName].required === 'default' 
              ? "Valor requerido"
              : cols[colName].required
            }
          </div>
        }
        {cols[colName].info && 
          <div className="input-info">
            <span className="fs-text-s">
              <strong className="fs-text-s">Info: </strong>
              {cols[colName].info}
            </span>
          </div>
        }
      </div>
    ))}
    </>
  );
});

/* ROWS */
const Row = memo(function Row(props) {
  return (
    <>
      {props.rows.map((cols, i) => (
        <div key={"row-" + i} className="flex-r-change">
          <Cols cols={cols}/>
        </div>
      ))}
    </>
  );
});

/* FORM BUTTONS */
const SubmitButton = memo(function(props) {
  return (
    <button name="submit" 
      onClick={props.handleSubmit} 
      type="submit" 
      className="fs-text-s c-secondary fm_btn"
    >Enviar por email</button>
  );
});

const WhatsappButton = memo(function(props) {
  return (
    <button type="button" onClick={props.handleWhatsapp}>
      <a className="fm_btn fs-text-s c-secondary w-api" href="./#cotiza-form" rel="noopener noreferrer">Enviar por WhatsApp</a>
      <a className="fm_btn fs-text-s c-secondary w-desk" href="./#cotiza-form" rel="noopener noreferrer">Enviar por WhatsApp</a>
    </button>
  );
});


/* FORM */

export default memo(function Form(props) {
  const [submit, setSubmit] = useState({
    press: false,
    send: false, 
  });
  const [modalStatus, setModalStatus] = useState("close");

  const form = useRef();
  
  const createRequires = async () => {
    requiresClear()
    await setSubmit(prev => ({...prev, press:true}));
    await setSubmit(prev => ({...prev, press:false}));
  } 

  const clearInputs = async () => {
    await setSubmit(prev => ({...prev, send:true}));
    await setSubmit(prev => ({...prev, send:false}));
  }

  const handleSubmit  = async (e) => {
    e.preventDefault();

    await createRequires();

    if (!isSomeRequired(getRequires())){
      setModalStatus("loading");

      fetch("https://formsubmit.co/ajax/axel.a.sar.97@gmail.com", {
        method: "POST",
        headers: { 
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(createSendMessage(form.current, true))
      }) 
      .then(response => response.json())
      .then(data => {
        if (data.success === 'true') setModalStatus("success");
        else Promise.reject(data);
      })
      .catch(() => setModalStatus("error"));
      
      form.current.reset();
      await clearInputs();
    }
  } 
  const handleWhatsapp = async (e) => {
    await createRequires();
    let matches = false;
    let href = "";

    if (e.target.matches('.w-api')) { 
      href = 'https://api.whatsapp.com/send/';
      matches = true;
    } else if (e.target.matches('.w-desk')) {
      href = 'https://web.whatsapp.com/send/';
      matches = true;
    }

    if (matches) {
      if (!isSomeRequired(getRequires())) {         
        e.target.target = '_blank';
        e.target.href = href
        e.target.search = `?phone=5493512876508&text=${createSendMessage(form.current, false)}&app_absent=0`;
        
        form.current.reset();
        await clearInputs();

        setTimeout( () => {
          e.target.href = "./#cotiza-form";
          e.target.target = "";
        }, 500);
      }
    }
  } 
  
  const name = props.name;
  const formData = props.formData;
  const imports = formData[name].import;


  return (
    <>
      <form ref={form} id={name} className={props.className + "-form flex-column align-c"}>
        <Submit.Provider value={submit}>
          <div className="form-container flex-column form-sub">
            <Row rows={formData[name].rows}/>
            {imports && <Row rows={formData[imports].rows} />}
            <div className="form-input flex-row flex-wrap align-c justify-c">
              <SubmitButton handleSubmit={handleSubmit}/>
              {props.whatsapp &&  <WhatsappButton handleWhatsapp={handleWhatsapp}/> }
            </div>
          </div>
        </Submit.Provider>
      </form>
      <Modal status={modalStatus} statusChange={setModalStatus}/>
    </>
  );
});
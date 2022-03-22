import React, {useState} from "react";
import {Textarea, Select, Option, Input} from "./FormInputs.js"


function Cols(props) {
  const cols = props.cols
  const colsNames = Object.keys(cols);
  return (
    <>
    {colsNames.map(colName => (
        <div className="form-input flex-c align-c justify-c">
        <React.Fragment key={colName} >
          <label className="fs-text-s fm_lb">{colName + ":"}</label>
          {cols[colName].type === "textarea"
            ? <Textarea name={cols[colName].name} placeholder={cols[colName].placeholder}/>
            : cols[colName].type === "select"
            ? <Select>
                {cols[colName].option && cols[colName].option.map(opt => (
                  <Option key={opt.text} value={opt.value} selected={opt.selected} text={opt.text}/>
                ))}
              </Select>
            : <Input 
              type={cols[colName].type}
              name={cols[colName].name}
              placeholder={cols[colName].placeholder}
              min={cols[colName].min}
              max={cols[colName].max}
              send={props.send}
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
        </React.Fragment>
      </div>
    ))}
    </>
  );
}

function Row(props) {
  return (
    <>
      {props.rows.map((cols, i) => (
        <div key={"row-" + i} className="flex-r-change">
          <Cols cols={cols} send={props.send}/>
        </div>
      ))}
    </>
  );
}

function FormButtons(props) {
  const handleSubmit = (e) => {
    e.preventDefault();
  }
  
  return (
    <div className="form-input flex-r-change align-c justify-c">
      <button name="submit" onClick={handleSubmit} type="submit" className="fs-text-s fm_btn">Enviar por email</button>
      <div style={{width: "10px", height: "10px"}}/>
      <button type="button">
        <a className="fm_btn fs-text-s w-api" href={props.href} rel="noopener noreferrer">Enviar por WhatsApp</a>
        <a className="fm_btn fs-text-s w-desk" href={props.href} rel="noopener noreferrer">Enviar por WhatsApp</a>
      </button>
    </div>
  );
}

export default function Form(props) {
  const [send, setSend] = useState({value: false, requiredValues: []})
  const [href, setHref] = useState("./#");

  const name = props.name;
  const formData = props.formData;
  const imports = formData[name].import;

  return (
    <form id={name} className="cotiza-form flex-column align-c">
      <div className="form-container flex-column form-sub">
        <Row rows={formData[name].rows}/>
        {imports && <Row send={send} rows={formData[imports].rows}/>}
        <FormButtons href={href} send={send}/>
      </div>
    </form>
  );
}
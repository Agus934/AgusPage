import React from "react";


export const Textarea = React.memo(function(props)  {
  const className = props.className || "";
  return <textarea name={props.name} className={"fs-text-s form-control fm_tx" + className}  placeholder={props.placeholder} />
});

export const Select = React.memo(function(props)  {
  const className = props.className || "";
  return (
    <select name={props.name} className={"fs-text-s form-control fm_tx" + className}  placeholder={props.placeholder}>
      {props.children}
    </select>
  );
});

export const Option = React.memo(function(props)  {

  return (
    <>
      { props.selected 
        ? <option className="fs-text-s" value={props.value} selected="true">{props.text}</option>
        : <option className="fs-text-s" value={props.value}>{props.text}</option>
      }
    </>
  )
})

export const Input = React.memo(function(props)  {
  const className = props.className || "";
  return (
    <input 
      name={props.name} 
      type={props.type}
      className={"fs-text-s form-control fm_tx" + className}  
      placeholder={props.placeholder} 
      min={props.min}
      max={props.max}
    />
  );
});



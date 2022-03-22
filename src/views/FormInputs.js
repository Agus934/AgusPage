import {memo, useState} from "react";
import Modal from "./Modal.js";

//TEXTAREA
export const Textarea = memo(function(props)  {
  const className = props.className || "";
  return <textarea name={props.name} className={"fs-text-s form-control fm_tx" + className}  placeholder={props.placeholder} />
});
//SELECT
export const Select = memo(function(props)  {
  const className = props.className || "";
  return (
    <select name={props.name} className={"fs-text-s form-control" + className}  placeholder={props.placeholder}>
      {props.children}
    </select>
  );
});
//OPTION
export const Option = memo(function(props)  {
  return (
    <>
      { props.selected 
        ? <option className="fs-text-s" value={props.value} selected="true">{props.text}</option>
        : <option className="fs-text-s" value={props.value}>{props.text}</option>
      }
    </>
  )
})

const generalInput = (input, setRequired) => {
  if (input === "") {
    setRequired(true);
  } else {
    setRequired(false);
  }
}

const dniInput = (input, setRequired) => {
  if (/^\d{6,8}$/.test(input)) {
    setRequired(false);
  } else {
    setRequired(true);
  }
}

const telInput = (input, setRequired) => {
  const reg1 = /^11[ -]?\d{8}$/;
  const reg2 = /^(?:220|221|223|230|236|237|249|260|261|263|264|266|280|291|294|297|298|299|336|341|342|343|345|348|351|353|358|362|364|370|376|379|380|381|383|385|387|388)[ -]?\d{7}$/;
  const reg3 = /^(?:2202|2221|2223|2224|2225|2226|2227|2229|2241|2242|2243|2244|2245|2246|2252|2254|2255|2257|2261|2262|2264|2265|2266|2267|2268|2271|2272|2273|2274|2281|2283|2284|2285|2286|2291|2292|2296|2297|2302|2314|2316|2317|2320|2323|2324|2325|2326|2331|2333|2334|2335|2336|2337|2338|2342|2343|2344|2345|2346|2352|2353|2354|2355|2356|2357|2358|2392|2393|2394|2395|2396|2473|2474|2475|2477|2478|2622|2624|2625|2626|2646|2647|2648|2651|2655|2656|2657|2658|2901|2902|2903|2920|2921|2922|2923|2924|2925|2926|2927|2928|2929|2931|2932|2933|2934|2935|2936|2940|2942|2945|2946|2948|2952|2953|2954|2962|2963|2964|2966|2972|2982|2983|3327|3329|3382|3385|3387|3388|3400|3401|3402|3404|3405|3406|3407|3408|3409|3435|3436|3437|3438|3442|3444|3445|3446|3447|3454|3455|3456|3458|3460|3462|3463|3464|3465|3466|3467|3468|3469|3471|3472|3476|3482|3483|3487|3489|3491|3492|3493|3496|3497|3498|3521|3522|3524|3525|3532|3533|3537|3541|3542|3543|3544|3546|3547|3548|3549|3562|3563|3564|3571|3572|3573|3574|3575|3576|3582|3583|3584|3585|3711|3715|3716|3718|3721|3725|3731|3734|3735|3741|3743|3751|3754|3755|3756|3757|3758|3772|3773|3774|3775|3777|3781|3782|3786|3821|3825|3826|3827|3832|3835|3837|3838|3841|3843|3844|3845|3846|3854|3855|3856|3857|3858|3861|3862|3863|3865|3867|3868|3869|3873|3876|3877|3878|3885|3886|3887|3888|3891|3892|3894)[ -]?\d{6}$/;
  const bool = (
    reg1.test(input) 
    || reg2.test(input) 
    || reg3.test(input) 
  );
  
  if (!bool) {
    setRequired(true);
  } else {
    setRequired(false);
  }
}


const codigoPostalInput = (input, setRequired) => {
  if (/^[a-zA-Z]?\d{4}$/.test(input)) {
    setRequired(false);
  } else {
    setRequired(true);
  }
} 

const emailInput = (input, setRequired) => {
  let reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!reg.test(input)) { 
    setRequired(true);
  } else {
    setRequired(false);
  }
}

const anoInput = (input, setRequired, min) => {
  let minYear = min;
  const maxYear = (new Date()).getFullYear();

  if (minYear < input.value || input.value > maxYear) {
    setRequired(true);
  } else {
    setRequired(false);
  }
}

const isRequired = (name, input, setRequired, min) => {
  switch (name) {
    case "dni": 
      return dniInput(input, setRequired);
    case "tel": 
      return telInput(input, setRequired);
    case "codigo_postal":
      return codigoPostalInput(input, setRequired);
    case "email":
      return emailInput(input, setRequired);
    case "año":
      return anoInput(input, setRequired, min);
    default: 
      return generalInput(input, setRequired);
  } 
};

//INPUT
export const Input = memo(function(props)  {
  const [required, setRequired] = useState(false);
  const [input, setInput] = useState("");
  
  if (props.send?.value) {
    isRequired(props.name, input, setRequired, props.min);
    props.send.requiredValues(prev => ({
      ...prev,
      requiredValues: [...prev.requiredValues, required]
    }));
  }

  const handler = (e) => {
    if (required) isRequired(props.name, e.target.value, setRequired, props.min);
    setInput(e.target.value);
  }
  
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
      onChange={handler}
    />
  );
});



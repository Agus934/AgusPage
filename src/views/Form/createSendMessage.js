export default function createSendMessage(form, forEmail) {
  
  let product = (form.id === "Otros" ? form?.seguro?.value : form.id + "");

  if (forEmail) {
    let obj = {};
    for (let i = 0; i < form.length-1; i++) {
      obj[form[i].name] =  form[i].value;
    }
    if (form.id === 'Contacto') obj._subject = `Consulta por parte de ${window.location.href}:`;
    else obj._subject = `Cotizar seguro de ${product}, por parte de ${form.nombre.value} ${form.apellido.value}`;
    
    obj._captcha = true;
    obj._template = 'table';
    return obj;
  } else {
    let str = 'Hola,%20me%20comunico%20para%20consultarle%20la%20siguiente%20cotización%0a%0a';
    str += `*_Asunto:*%20Cotizar%20seguro%20de%20${product}%0a`;
    str += `*De:*%20${form.nombre.value}%20${form.apellido.value}%0a%0a`;
    for (let i = 0; i < form.length-1; i++) {
      str += `*${form[i].name}:*%20${form[i].value}%0a`;
    }
    return str;
  }
}

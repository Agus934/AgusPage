import { useState } from "react"; 
import coberturasData from "./Coberturas.data.json"

import images from "./images.js";

import "./Productos.scss"


function ProductosInfo(props) {
  const data = props.data.data;
  const name = props.data.name;
  
  return (
    <>
      <div className="title">
        <h3 className="text-center">
          <strong className="fs-text-xl">{name}</strong>
        </h3>
      </div>
      <div style={{height: "30px"}}></div>
      <div>
        <div>
          <h3 className="fs-text">Cubre: </h3>
          <div className="cubre">
            {data.description.map((text, i) => (
              <p key={"id-" + i} className="fs-text-s">
                <i className="fs-text-s bi bi-check-square"></i>
                {" "+text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ProductosButtons(props) {
  const data = props.data;
  const dataName = Object.keys(data);

  return (
    <div className="prod-img-container flex-c-change flex-wrap">
      {dataName.map(name => {
        const prodData = data[name]; 
        return (
          <button key={"icon-" + prodData.img} type="button" className="prod-button" data-name={name} data-position={props.position} onClick={props.handleClick}>
            <img className="prod-img" 
              src={images[prodData.img]} 
              srcSet={images[prodData.img]} 
              alt={prodData.alt} 
              title={name}
              loading="lazy"
            />
          </button>
        )})
      }
    </div>
  );
}


export default function Productos() {
  const data = coberturasData.Seguros; 

  const [product, setProduct] = useState({
    name: "Autos",
    data: data[0]["Autos"]
  });

  const handleClick = (e) => { 
    const name = e.currentTarget.dataset.name;
    const position = e.currentTarget.dataset.position;

    setProduct({
      name: name,
      data: data[position][name]
    });
  }


  return (
    <div className="productos flex-r-change">
      <div id="seguros" className="prod-seccion flex-column">
        <div className="prod-title flex-column align-c justify-c">
          <h3 className="fs-text-xxl">Seguros</h3>
        </div>
        <div className="prod-body flex-r-change">
          <ProductosButtons data={data[0]} position={0} handleClick={handleClick}/>
          <div className="prod-info flex-column justify-c">
            <ProductosInfo data={product}/>
          </div>
          <ProductosButtons data={data[1]} position={1} handleClick={handleClick}/>
        </div>
      </div>
    </div>
  );
}
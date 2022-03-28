import { useContext, memo } from 'react';

import FormContext from '../CotizaFormsStore.js';

import images from "./images.js";

import "./Card.scss";

export default memo(function Card(props) {
  const data = props.data;
  const { setFormName } = useContext(FormContext);

  const handleClick = () => {
    setFormName({name: data.value, sub:(data.sub_value ? data.sub_value : "") })
  }

  return (
    <div className="card flex-row align-c ">
      <div className="card-img">
        <img
          src={images[data.img]} 
          srcSet={images[data.img]}
          alt={"Seguro de " + props.name}
          loading="lazy"
        />
      </div>
      <div className="card-body">
        <div className="card-title flex-row justify-sb align-c">
          <h4 className="fs-text-l text-bold">{props.name}</h4>
          <button type="button" className='cotiza-btn'>
            <a href="./#cotiza-body" onClick={handleClick}>
              <span className="fs-text c-secondary">Cotizá</span>
            </a>
          </button>
        </div>
        <p className="fs-text">Cubrimos:</p>
        <ul className="list-group list-group-flush">
          {data.description.length > 0 
            ? data.description.map((text, i) => {
              return (
                <li key={data.alt + "-text-" + i} className="list-group-item">
                  <i className="bi bi-check-square"></i>
                  <span className="fs-text">{text}</span>
                </li>
              );
            })
            : null
          }
        </ul>
      </div>
    </div>
  );
});

import {memo} from "react";
import ReactDOM  from "react-dom";

import "./Modal.scss"; 

const Loading = () => (
  <>
    <div className="modal_icon spinner-border">
      <span className="visually-hidden">Loading...</span>
    </div>
    <span className="fs-text"> Enviando...</span>
  </>
);


const Success = (props) => (
  <>
    <button type="button" onClick={props.handleClick}>
      <i className="modal_delete bi bi-x"></i> 
    </button>
    <i className="modal_icon bi bi-check-circle"></i>
    <span className="fs-text">Mensaje Enviado</span>
  </>
);
const Error = (props) => (
  <>
    <button type="button" onClick={props.handleClick}>
      <i className="modal_delete bi bi-x"></i> 
    </button>
    <i className="modal_icon bi bi-exclamation-triangle"></i>
    <span className="fs-text">Lo siento 😔</span>
    <span className="fs-text-s">Ha ocurrio un error al enviar el email!!!</span>
  </>
);

const Modal = (props) => {
  const handleClick = () => {
    props.statusChange("close");
  }
  return ReactDOM.createPortal(
    <>
     { props.status !== "close" &&
      <div className="modal flex-column align-c justify-c">
        <div className="modal-container flex-columns">
          <div id="modal-body" className="modal_body flex-column align-c justify-c">
            {props.status === "loading" 
              ? <Loading />
              : props.status === "error"
              ? <Error handleClick={handleClick}/>
              : props.status === "success"
              ? <Success handleClick={handleClick} />
              : null
            }
          </div>
        </div>
      </div>
     }
    </>,
    document.getElementById('modal')
  );
}

export default memo(Modal);
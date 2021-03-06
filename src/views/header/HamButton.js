import {memo} from "react";

import "./HamButton.scss";

export default memo(function HamButton({menu, clickHandle}) {
  return (
    <button type="button" onClick={clickHandle} > 
      { menu 
        ? (
          <div className='menu'>
            <i className="bi bi-list"></i>
          </div>
        )
        : (
          <div className="cancel">
            <i className="bi bi-x"></i>
          </div>
        )
      }
    </button>
  ); 
});
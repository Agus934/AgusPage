import { useState, memo } from "react";
import HamButton from "./HamButton";

import logo from "../../img/logo.svg";
import "./Header.scss";



export default memo(function Header(props) {
  const [menu, setMenu] = useState(true);
  const clickHandle = () => {
    setMenu(state => !state); 
  }

  return (
    <header className="header flex-row align-c justify-sb">
      <a className="icon-brand" href="./">
         <img src={logo} loading="lazy" alt="logo" srcSet={logo} />
      </a>
      {props.nav 
        //navigation
        ? (
          <>
            <div className='ham-btn'>
              <HamButton menu={menu} clickHandle={clickHandle}/>
            </div>
            <nav id="nav" className={!menu ? "nav-container flex-r-change" : "nav-container flex-r-change hidden"}>
              <ul className="nav-cont flex-r-change">
                <li className="nav-el">
                  <a href="#inicio" className="nav-link smoothScroll fs-nav" onClick={clickHandle}>Inicio</a>
                </li>
                <li className="nav-el">
                  <a href="#sobre-mi" className="nav-link smoothScroll fs-nav" onClick={clickHandle}>Sobre Mí</a>
                </li>
                <li className="nav-el">
                  <a href="#coberturas" className="nav-link smoothScroll fs-nav" onClick={clickHandle}>Coberturas</a>
                </li>
                <li className="nav-el">
                  <a href="#cotiza" className="nav-link smoothScroll fs-nav" onClick={clickHandle}>Cotizá</a>
                </li>
                <li className="nav-el">
                  <a href="#contacto" className="nav-link smoothScroll fs-nav" onClick={clickHandle}>Contacto</a>
                </li>
              </ul>
            </nav>
          </>
        )
        //go main page
        : (
          <div id="inicioButton" className="inicioButton flex-column nav-el">
              <a href="./" className="goToInicio nav-link fs-nav">Inicio</a>
          </div>
        )
      }
    </header>
  );
});
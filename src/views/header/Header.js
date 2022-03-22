import { useState } from "react";
import HamButton from "./HamButton";

import logo from "../../img/logo.svg";
import "./Header.scss";



export default function Header() {
  const [menu, setMenu] = useState(true);
  const clickHandle = () => {
    setMenu(state => !state); 
  }

  return (
    <header className="header flex-row align-c justify-sb">
      <a className="icon-brand" href="./">
         <img src={logo} loading="lazy" alt="logo" srcSet={logo} />
      </a>
      <div className='ham-btn'>
        <HamButton menu={menu} clickHandle={clickHandle}/>
      </div>
      <nav id="nav" className={!menu ? "navbar flex-r-change" : "navbar flex-r-change hidden"}>
        <ul className="nav-cont flex-r-change">
          <li className="nav-item">
            <a href="#inicio" className="nav-link smoothScroll" onClick={clickHandle}>Inicio</a>
          </li>
          <li className="nav-item">
            <a href="#coberturas" className="nav-link smoothScroll" onClick={clickHandle}>Coberturas</a>
          </li>
          <li className="nav-item">
            <a href="#sobre-mi" className="nav-link smoothScroll" onClick={clickHandle}>Sobre Mí</a>
          </li>
          <li className="nav-item">
            <a href="#cotiza" className="nav-link smoothScroll" onClick={clickHandle}>Cotizá</a>
          </li>
          <li className="nav-item">
            <a href="#contacto" className="nav-link smoothScroll" onClick={clickHandle}>Contacto</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
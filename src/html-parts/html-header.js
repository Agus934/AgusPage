const svg_logo = require("../svg-icons/svg-logo.js");
const svg_x = require("../svg-icons/svg-x.js");

module.exports = function ({
    nav = false,
    url
}) {
    return /*html*/`
<header id="header" class="header flex-row align-c justify-sb">
    <a class="icon-brand flex-row justify-c" href="${url}">
        ${svg_logo}
    </a>
    ${( !nav
        ? ""
        :/*html*/`
        <button id="ham-btn" type="button" class="ham-btn flex-row justify-c align-c"> 
            <div id="ham-menu" class="flex-row justify-c">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                </svg>
            </div>
            <div id="ham-close" class="flex-row justify-c display-none">
                ${svg_x}
            </div>
        </button>
        <nav id="nav" class="nav flex-r-change hidden">
            <ul class="flex-r-change justify-sa">
                <li class="item">
                    <a href="#inicio" class="link smoothScroll fs-nav">Inicio</a>
                </li>
                <li class="item">
                    <a href="#sobre-mi" class="link smoothScroll fs-nav">Sobre Mí</a>
                </li>
                <li class="item">
                    <a href="#coberturas" class="link smoothScroll fs-nav">Coberturas</a>
                </li>
                <li class="item">
                    <a href="#cotiza" class="link smoothScroll fs-nav">Cotizá</a>
                </li>
                <li class="item">
                    <a href="#contacto" class="link smoothScroll fs-nav">Contacto</a>
                </li>
            </ul>
        </nav>`
    )}
</header>`;
};
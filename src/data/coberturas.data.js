module.exports = {
    autos: {
        name: "Autos",
        form: "autos",
        description: ["Responsabilidad civil contra terceros.", "Robo y/o hurto.", "Incendio."],
        svg: /*html*/`
            <svg version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <style type="text/css">.st0{fill:none;stroke:#232652;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>
                <circle class="st0" cx="7" cy="23" r="3"/><circle class="st0" cx="23" cy="23" r="3"/>
                <line class="st0" x1="28" x2="30" y1="19" y2="19"/>
                <line class="st0" x1="4" x2="24" y1="16" y2="16"/>
                <line class="st0" x1="13" x2="10" y1="10" y2="16"/>
                <path class="st0" d="M26,23h4c0.6,0,1-0.4,1-1v-2c0-2.2-1.8-4-4-4h-3l-3.8-4.6c-0.8-0.9-1.9-1.4-3.1-1.4H9.5c-1.5,0-2.9,0.9-3.6,2.2  L4,16H3c-1.1,0-2,0.9-2,2v4c0,0.6,0.4,1,1,1h2"/>
                <line class="st0" x1="10" x2="20" y1="23" y2="23"/>
            </svg>`
    },
    motos: {
        name: "Motos",
        form: "motos",
        description: ["Responsabilidad civil contra terceros.", "Robo y/o hurto.", "Incendio."],
        svg: /*html*/`
            <svg version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <style type="text/css">.st0{fill:none;stroke:#232652;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>
                <path class="st0" d="M9,10l-3.8,9.2C4.6,20.5,5.6,22,7,22h24l0-0.2c-0.6-4.4-4.3-7.8-8.8-7.8H19v5h-6.7C11,19,10,18,10,16.7V10H9z"/>
                <path class="st0" d="M28,14H18v0c0-1.7,1.3-3,3-3h4C26.7,11,28,12.3,28,14L28,14z"/>
                <path class="st0" d="M7,11H5V7h2c1.1,0,2,0.9,2,2v0C9,10.1,8.1,11,7,11z"/>
                <line class="st0" x1="12" x2="9" y1="9" y2="9"/>
                <path class="st0" d="M9,22c0,2.2-1.8,4-4,4s-4-1.8-4-4s1.8-4,4-4"/>
                <path class="st0" d="M29,22c0,2.2-1.8,4-4,4s-4-1.8-4-4"/>
                <line class="st0" x1="26" x2="30.1" y1="19" y2="19"/>
            </svg>`
    },
    bicicletas: {
        name: "Bicicletas",
        form: "bicicletas",
        description: ["Responsabilidad civil contra terceros.", "Robo.", "Incendio."],
        svg: /*html*/`
            <svg version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <style type="text/css">.st0{fill:none;stroke:#232652;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>
                <polyline class="st0" points="18,7 21,7 24.6,21.7 26,23 "/>
                <circle class="st0" cx="26" cy="23" r="5"/>
                <circle class="st0" cx="6" cy="23" r="5"/>
                <path class="st0" d="M6,23c1,0,9,0,9,0l7-9H10L6,23z"/>
                <path class="st0" d="M15,23l-4.6-8.5C9.6,13,9.8,11.2,11,10l0,0H7"/>
            </svg>`
    },
    monopatin: {
        name: "Monopatín",
        form: "monopatin",
        description: ["Responsabilidad civil contra terceros.", "Robo.", "Incendio."],
        svg: /*html*/`
            <svg version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <style type="text/css">.st0{fill:none;stroke:#232652;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>
                <polyline class="st0" points="21,5 24,5 28,25 "/>
                <circle class="st0" cx="28" cy="25" r="3"/>
                <circle class="st0" cx="4" cy="25" r="3"/>
                <path class="st0" d="M4,19c3.3,0,6,2.7,6,6"/>
                <polyline class="st0" points="26,17 21,25 4,25"/>
            </svg>`
    },
    hogar: {
        name: "Hogar",
        form: "hogar",
        description: ["Daños por agua/incendio.", "Robo.", "Cristales."],
        svg: /*html*/`
            <svg version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <style type="text/css">.st0{fill:none;stroke:#232652;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>
                <polyline class="st0" points="13.3,11.9 16,9 23.3,17 28,17 16,4 4,17 8,17 8,28 24,28 24,20 "/>
            </svg>`,
    },
    "integral-de-comercio": {
        name: "Integral de comercio",
        form: "otros", 
        description: ["Incendio.", "Robo.", "Cristales.", "Carteles y/o letreros.", "Equipos electronicos."],
        svg: /*html*/`
            <svg version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <style type="text/css">.st0{fill:none;stroke:#232652;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}.st3{fill:none;}</style>
                <polyline class="st0" points="27,17 27,28 5,28 5,17"/>
                <line class="st0" x1="13" x2="13" y1="17" y2="28"/>
                <polygon class="st0" points="28,12 4,12 7,5 25,5 "/>
                <path class="st0" d="M16,18L16,18c-2.2,0-4-1.8-4-4v-2h8v2C20,16.2,18.2,18,16,18z"/>
                <path class="st0" d="M8,18L8,18c-2.2,0-4-1.8-4-4v-2h8v2C12,16.2,10.2,18,8,18z"/>
                <path class="st0" d="M24,18L24,18c-2.2,0-4-1.8-4-4v-2h8v2C28,16.2,26.2,18,24,18z"/>
                <line class="st0" x1="10" x2="10" y1="23" y2="23"/>
                <rect class="st3" height="680" width="536" x="-432" y="-576"/>
            </svg>`
    },
    vida: {
        name: "Vida",
        form: "otros",
        description: ["Vida más.", "Vida más express.", "Vida más simple."],
        svg: /*html*/`
            <svg version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <style type="text/css">.st0{fill:none;stroke:#232652;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>
                <polyline class="st0" points="14,10 16,10 18,8 20,12 22,7 24,10"/>
                <path class="st0" d="M3,25l2.6-4.2c1.5-2.3,4-3.8,6.8-3.8H19v0c0,2.2-1.8,4-4,4h-2"/>
                <path class="st0" d="M15,21h8l1.2-1.6c1.1-1.5,2.9-2.4,4.8-2.4h0l-2.7,4.8c-1.4,2.6-4.2,4.2-7.1,4.2h0c-4.7,0-9.3,1.4-13.2,4l0,0"/>
                <path class="st0" d="M16.1,17l-4.4-4.7l-1.2-1.3c-2-2.1-2-5.4,0-7.5l0,0c2-2.1,5.3-2.1,7.3,0l1,1c0.1,0.1,0.3,0.1,0.4,0l1-1  c2-2.1,5.3-2.1,7.3,0l0,0c2,2.1,2,5.4,0,7.5l-1.2,1.3L22,16.7l-2.8,2.9"/>
            </svg>`
    },
    caucion: {
        name: "Caución",
        form: "otros",
        description: ["Garantia de alquilerers.", "Garantia de obras."],
        svg: /*html*/`
            <svg version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <style type="text/css">.st0{fill:none;stroke:#232652;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>
                <path class="st0" d="M26.5,3c0.2,0,0.3,0,0.5,0c2.6,0.3,3.9,3.4,2.4,5.6l-9.8,14.7c-1.5,2.2-0.2,5.3,2.4,5.6c0.2,0,0.3,0,0.5,0  c2.2,0,4-1.8,4-4H20"/>
                <line class="st0" x1="26" x2="9.5" y1="3" y2="3"/>
                <path class="st0" d="M11.3,10.3l-8.7,13C1.2,25.5,2.4,28.7,5,29c0.2,0,0.3,0,0.5,0H22"/>
                <path class="st0" d="M9,3C6.8,3,5,4.8,5,7c0,0.5,0.2,1,0.4,1.4c0.6,1,1.8,1.6,3,1.6H24c-1,0-3.1-2.8-0.9-5.5C23.8,3.6,24.9,3,26,3  c2.2,0,4,1.8,4,4"/>
                <line class="st0" x1="13" x2="18" y1="15" y2="15"/>
                <line class="st0" x1="11" x2="14" y1="18" y2="18"/>
            </svg>`
    },
    "accidentes-personales": {
        name: "Accidentes personales",
        form: "otros",
        description: ["Muerte por accidente.", "Incapacidad total y/o parcial permanente por accidente.", "Adicional asistencia médica farmacéutica."],
        svg: /*html*/`
            <svg version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <style type="text/css">.st0{fill:none;stroke:#232652;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}.st1{fill:none;stroke:#232652;stroke-width:2;stroke-linejoin:round;stroke-miterlimit:10;}</style>
                <line class="st0" x1="8" x2="24" y1="12" y2="12"/>
                <path class="st0" d="M13.5,8.1l-1.2-4.2l0,0c2.3-1.2,5.1-1.2,7.4,0l0,0l-1.2,4.2"/>
                <path class="st0" d="M19.5,4.9c2,1.2,3.3,3.4,3.3,5.9V12"/>
                <path class="st0" d="M9.2,12v-1.2c0-2.5,1.3-4.7,3.3-5.9"/>
                <path class="st1" d="M21.6,23.4c-1.8-0.5-3.1-2.3-3.1-4.4c1.3-0.8,2.1-2.3,2.4-4c-2.2,0-4.1-1.2-5.1-3H11v2c0,2.1,0.9,4,2.5,5v0  c0,2.1-1.3,3.9-3.2,4.4C8.1,24,6.5,26,6,28.4C6,28.7,6.2,29,6.5,29h19.1c0.3,0,0.5-0.3,0.4-0.6C25.5,25.9,23.8,24,21.6,23.4z"/>
            </svg>`
    },
    "praxis-medica": {
        name: "Praxis médica",
        form: "otros",
        description: ["Responsabilidad civil contractual o extracontractual.", "Defensa penal.", "Seguro de vida hasta $10.000."],
        svg: /*html*/`
            <svg version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <style type="text/css">.st0{fill:none;stroke:#232652;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>
                <path class="st0" d="M25,13L25,13c-5.9,1.3-12.1,1.3-18,0l0,0l1.8-7.3l0,0c4.6-2.2,9.8-2.2,14.4,0l0,0L25,13z"/>
                <path class="st0" d="M23.2,16.8c0.6-0.7,1.2-1,1.8-0.8c0.9,0.4,1.2,2,0.7,3.6c-0.5,1.6-1.7,2.7-2.6,2.3c0,0-0.1,0-0.1-0.1  c-0.8,3.5-3.6,6.1-7,6.1s-6.3-2.6-7-6.1c0,0-0.1,0.1-0.1,0.1c-0.9,0.4-2.1-0.7-2.6-2.3C5.7,18,6,16.4,7,16c0.6-0.2,1.3,0.1,1.8,0.8"/>
                <line class="st0" x1="16" x2="16" y1="7" y2="11"/>
                <line class="st0" x1="14" x2="18" y1="9" y2="9"/>
            </svg>`
    },
    "fuerzas-especiales": {
        name: "Fuerzas especiales",
        form: "otros",
        description: ["Vida.", "Proteccion familiar.", "Accidentes personales.","Robo de arma y chaleco."],
        svg: /*html*/`
            <svg version="1.1" viewBox="0 0 32 32" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                <style type="text/css">.st0{fill:none;stroke:#232652;stroke-width:2;stroke-linecap:round;stroke-linejoin:round;stroke-miterlimit:10;}</style>
                <path class="st0" d="M24.1,13H7.9c-1.2,0-2.3-0.6-3-1.6L4,10l12-6l12,6l-0.9,1.4C26.4,12.4,25.3,13,24.1,13z"/>
                <path class="st0" d="M8.8,17.8c-0.6-0.7-1.2-1-1.8-0.8c-0.9,0.4-1.2,2-0.7,3.6c0.5,1.6,1.7,2.7,2.6,2.3c0,0,0.1,0,0.1-0.1  c0.8,3.5,3.6,6.1,7,6.1s6.3-2.6,7-6.1c0,0,0.1,0.1,0.1,0.1c0.9,0.4,2.1-0.7,2.6-2.3C26.3,19,26,17.4,25,17c-0.6-0.2-1.3,0.1-1.8,0.8  "/>
                <path class="st0" d="M21.8,18H10.2C8.5,18,7,16.5,7,14.8V13h18v1.8C25,16.5,23.5,18,21.8,18z"/>
            </svg>`
    }
};
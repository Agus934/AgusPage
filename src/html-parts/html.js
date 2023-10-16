module.exports = function ({
    title,
    url = "",
    path = "",
    script_links,
    style_links,
    style,
    body = ""
}) {
    return /*html*/`
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta 
        name="description" 
        content="Obtené una atención rápida y eficiente, con un asesoramiento integral en materia de seguros."
    />
    <meta 
        name="keywords" 
        content="seguros, agustinagordilloseguros, agustina gordillo, argentina, cordoba, autos, motos, monopatin, hogar, vida, bicicletas, integral de comercio, caucion, accidentes personales, praxis medica, fuerzas especiales, promotora de seguros"
    />
    <meta name="theme-color" content="#fcfcfc"/>
    <meta name="color-scheme" content="normal"/>
    <meta name="author" content="Axel Ariel Saravia"/>
    <meta name="creator" content="axarisar"/> 
    <meta name="ranting" content="general"/>

    <!-- Robots -->
    <meta name="robots" content="index, follow"/>
    <meta name="googlebot" content="index, follow"/>

    <!-- MANIFEST -->
    <link rel="manifest" href="${url}manifest.json"/>

    <meta name="canonical" href="${url}"/>
    <link
        rel="preload"
        href="${url}fonts/SourceSansPro-Regular.ttf"
        as="font"
        type="font/ttf"
        crossorigin
    />
    <link rel="preload" href="${url}media/Wave-Line.svg" as="image"/>
    <!--  SOCIAL MEDIA meta tags -->
    <meta property="og:title" content="${title}"/>
    <meta property="og:description" content="Asesoramiento integral en seguros"/>
    <meta property="og:type" content="profile"/>
    <meta property="og:url" content="${url}${path}">
    <meta property="og:image" content="${url}logo192.png"/>
    <meta property="og:image:secure_url" content="${url}logo192.png"/>
    <meta property="og:image:alt" content="Logo AGS"/>
    <meta name="twitter:card" content="summary_large_image/">

    <!--  Title and Icon-->
    <title>${title}</title>
    <link rel="icon" href="${url}media/favicon.ico"/>
    <link rel="apple-touch-icon" href="${url}media/logo192.png"/>
    ${
        Array.isArray(script_links)
        ? script_links.reduce(function(acc, link) {
            return String.prototype.concat.call(
                acc,
                `<script ${link?.module !==  undefined ? "type=\"module\"" : ""} src="${url}${link.src}"></script>`
            );
        }, "")
        : (
            typeof script_links === "object"
            ? `<script ${script_links?.module !==  undefined ? "type=\"module\"" : ""} src="${url}${script_links.src}"></script>`
            : ""
        )
    }
    <link rel="stylesheet" href="${url}main.style.css"/>
    ${
        Array.isArray(style_links)
        ? style_links.reduce(function (acc, link) {
            return String.prototype.concat.call(
                acc,
                `<link rel="stylesheet" href="${url}${link}"/>`
            )
        }, "")
        : (
            typeof style_links === "string"
            ? `<link rel="stylesheet" href="${url}${style_links}"/>`
            : ""
        )
    }
    ${
        typeof style !== "string"
        ? ""
        : `<style>${style}</style>`
    }
</head>
<body id="inicio">
${body}
</body>
</html>`;
};

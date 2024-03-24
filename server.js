import * as fs from "node:fs";
import * as path from "node:path";

const PORT = 3333;

const DIR = `${import.meta.dir}/dist`;

const RES_OPTS = {status: 404};
const STATSYNC_OPTS = {bigint: false, throwIfNoEntry: false};

const ResponseBad = new Response("File not found", RES_OPTS);

const Url = new URL("a:0.a");

Bun.serve({
    port: PORT,
    fetch(req) {
        console.info("New request URL:", req.url);

        Url.href = req.url
        let reqPath = Url.pathname;
        console.info(req.method, reqPath);

        if (reqPath === "/") {
            reqPath = "/index.html";
        } else if (
            reqPath === "/autos"
            || reqPath === "/motos"
            || reqPath === "/bicicletas"
            || reqPath === "/monopatin"
            || reqPath === "/hogar"
            || reqPath === "/otros"
        ) {
            reqPath += "/index.html";
        }

        var extension = path.extname(reqPath);
        if (extension.length === 0) {
            console.warn("The request path is bad:", reqPath);
            return ResponseBad;
        }

        var basePath = "";
        var stat;
        basePath = path.join(DIR, reqPath);
console.info(basePath)
        try {
            stat = fs.statSync(basePath, STATSYNC_OPTS);
        } catch {
            console.error("Error in statSync");
            return ResponseBad;
        };

        if (stat !== undefined && stat.isFile()) {
            console.info("Request path exist. Sending:", reqPath);
            return new Response(Bun.file(basePath));
        } else {
            console.warn(`WARNING: No such file or directory: ${basePath}`);
        }
        return ResponseBad;
    },
});
console.info(`Server listening on http://127.0.0.1:${PORT}`);

window.modal_state = Object.seal({
    modal: undefined,
});

function templateToString(_, ...args) {
    return args.join("");
}

/*-
modal_container_click :: (MouseEvent) -> undefined */
function modal_container_click(e) {
    if (e.target.id === "modal") {
        const modal_container = e.target;
        const modal = document.getElementById(`${window.modal_state.modal}-modal`);
        modal.classList.add("display-none");
        modal_container.classList.add("display-none");
        window.modal_state.modal = undefined;
    }
}

/*-
setModalStatus :: ("error" | "loading" | "success") -> undefined */
function setModalStatus(string) {
    const current_key_modal = window.modal_state.modal;
    const modal = document.getElementById(`${string}-modal`);
    const modal_container = document.getElementById("modal");
    const current_modal = (
        current_key_modal === undefined
        ? undefined
        : document.getElementById(`${current_key_modal}-modal`)
    );

    modal_container.classList.remove("display-none");
    modal?.classList?.toggle("display-none");
    current_modal?.classList?.toggle("display-none");
    window.modal_state.modal = string;

    if (string !== "loading") {
        modal_container.addEventListener("click", modal_container_click, {once: true});
    }
}

/*-
createSendMessage :: (HTMLFormElement, "email" | "whatsapp") -> string */
function createSendMessage(form, type) {
    const product = (
        form.id === "otros-form"
        ? form?.seguro?.value
        : String(form.dataset.name)
    );
    if (type === "email") {
        const obj = Object.fromEntries((new FormData(form)).entries());
        obj._subject = (
            form.id === 'Contacto'
            ? `Consulta por parte de ${window.location.href}:`
            : `Cotizar seguro de ${product}, por parte de ${form.nombre.value} ${form.apellido.value}`
        );
        obj._captcha = true;
        obj._template = 'table';
        return JSON.stringify(obj);
    } else if (type === "whatsapp") {
        let str = "Hola,%20me%20comunico%20para%20consultarle%20la%20siguiente%20cotización%0a%0a";
        str += `*_Asunto:*%20Cotizar%20seguro%20de%20${product}%0a`;
        str += `*De:*%20${form.nombre.value}%20${form.apellido.value}%0a%0a`;

        for (const element of (new FormData(form)).entries()) {
            str += `*${element[0]}:*%20${element[1]}%0a`;
        }

        return str;
    }
}

//ASSERT FUNCTIONS
/*-
isEmpty :: (string) -> boolean */
function isEmpty(string) {
    return string === "";
}

const digits = "0123456789";
/*-
isDNIOk :: (string) -> boolean */
function isDNIOk(string) {
    const length = string.length;
    if (length >= 6 && length <= 8) {
        for (let i = 0; i < length; i += 1) {
            if (!digits.includes(string[i])) {
                return false;
            }
        }
        return true;
    } else {
        return false;
    }
}


const isTelOkRegExp1 = /^11[ -]?\d{8}$/;
const isTelOkRegExp2 = /^(?:220|221|223|230|236|237|249|260|261|263|264|266|280|291|294|297|298|299|336|341|342|343|345|348|351|353|358|362|364|370|376|379|380|381|383|385|387|388)[ -]?\d{7}$/;
const isTelOkRegExp3 = /^(?:2202|2221|2223|2224|2225|2226|2227|2229|2241|2242|2243|2244|2245|2246|2252|2254|2255|2257|2261|2262|2264|2265|2266|2267|2268|2271|2272|2273|2274|2281|2283|2284|2285|2286|2291|2292|2296|2297|2302|2314|2316|2317|2320|2323|2324|2325|2326|2331|2333|2334|2335|2336|2337|2338|2342|2343|2344|2345|2346|2352|2353|2354|2355|2356|2357|2358|2392|2393|2394|2395|2396|2473|2474|2475|2477|2478|2622|2624|2625|2626|2646|2647|2648|2651|2655|2656|2657|2658|2901|2902|2903|2920|2921|2922|2923|2924|2925|2926|2927|2928|2929|2931|2932|2933|2934|2935|2936|2940|2942|2945|2946|2948|2952|2953|2954|2962|2963|2964|2966|2972|2982|2983|3327|3329|3382|3385|3387|3388|3400|3401|3402|3404|3405|3406|3407|3408|3409|3435|3436|3437|3438|3442|3444|3445|3446|3447|3454|3455|3456|3458|3460|3462|3463|3464|3465|3466|3467|3468|3469|3471|3472|3476|3482|3483|3487|3489|3491|3492|3493|3496|3497|3498|3521|3522|3524|3525|3532|3533|3537|3541|3542|3543|3544|3546|3547|3548|3549|3562|3563|3564|3571|3572|3573|3574|3575|3576|3582|3583|3584|3585|3711|3715|3716|3718|3721|3725|3731|3734|3735|3741|3743|3751|3754|3755|3756|3757|3758|3772|3773|3774|3775|3777|3781|3782|3786|3821|3825|3826|3827|3832|3835|3837|3838|3841|3843|3844|3845|3846|3854|3855|3856|3857|3858|3861|3862|3863|3865|3867|3868|3869|3873|3876|3877|3878|3885|3886|3887|3888|3891|3892|3894)[ -]?\d{6}$/;
/*-
isTelOk :: (string) -> boolean */
function isTelOk(string) {
    return (
        isTelOkRegExp1.test(string) 
        || isTelOkRegExp2.test(string) 
        || isTelOkRegExp3.test(string) 
    );
}

const isCodigoPostalOkRegExp = /^[a-zA-Z]?\d{4}$/;
/*-
isCodigoPostalOk :: (string) -> boolean */
function isCodigoPostalOk(string) {
    return isCodigoPostalOkRegExp.test(string);
} 
const isEmailOkRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
/*-
isEmailOk :: (string) -> boolean */
function isEmailOk(string) {
    return isEmailOkRegExp.test(string);
}

//EVENTS FUNCIONS

/*
setItemToValid :: (HTMLDivElement) -> undefined */
function setItemToValid(input) {
    const item = input.parentElement.parentElement.parentElement;
    item.classList.remove("is-invalid");
    input.oninput = null;
}

/*-
DNI_oninput :: (Event) -> undefined */
function DNI_oninput(e) {
    const input = e.target;
    if (isDNIOk(input.value)) {
        setItemToValid(input);
    }
}

/*-
tel_oninput :: (Event) -> undefined */
function tel_oninput(e) {
    const input = e.target;
    if (isTelOk(input.value)) {
        setItemToValid(input);
    }
}

/*-
codigoPostal_oninput :: (Event) -> undefined */
function codigoPostal_oninput(e) {
    const input = e.target;
    if (isCodigoPostalOk(input.value)) {
        setItemToValid(input);
    }
}

/*-
email_oninput :: (Event) -> undefined */
function email_oninput(e) {
    const input = e.target;
    if (isEmailOk(input.value)) {
        setItemToValid(input);
    }
}

/*-
empty_oninput :: (Event) -> undefined */
function empty_oninput(e) {
    const input = e.target;
    if (!isEmpty(input.value)) {
        setItemToValid(input);
    }
}

/*-
isRequired :: (HTMLInputElement) -> boolean */
function isRequired(input) {
    if (
        input.name === "dni"
        && !isDNIOk(input.value)
    ) {
        input.oninput = DNI_oninput;
        return true;
    } else if (
        input.name === "tel" 
        && !isTelOk(input.value)
    ) {
        input.oninput = tel_oninput;
        return true;
    } else if (
        input.name === "codigo_postal" 
        && !isCodigoPostalOk(input.value)
    ) {
        input.oninput = codigoPostal_oninput;
        return true;
    } else if (
        input.name === "email"
        && !isEmailOk(input.value)
    ) {
        input.oninput = email_oninput;
        return true;
    } else if (isEmpty(input.value)) {
        input.oninput = empty_oninput;
        return true;
    } else {
        return false;
    }
}

function canSend(form) {
    const required = form.querySelectorAll(".left_p");
    let send = true; 
    for (const item of required) {
        const required_input = item.querySelector(".input");
        if (isRequired(required_input)) {
            if (send) {
                send = false;
            }
            item.classList.add("is-invalid");
        }
    }
    return send;
}

function fetchResponseAObject(response) {
    return response.json();
}

function fetchError(err) {
    console.warn(err);
    setModalStatus("error");
}

function fetchSuccess(data) {
    if (data.success === "true") {
        setModalStatus("success");
        return;
    } else {
        return Promise.reject(data);
    }
}
const FETCH_URL = "https://formsubmit.co/ajax/agustina.seguros.gordillo@gmail.com";

const FETCH_OPTIONS = {
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
    },
    body: ""
}

/*-
handleSubmit :: (SubmitEvent) -> undefined */
function handleSubmit(e) {
    const form = e.currentTarget.form;
    if (canSend(form)) {
        setModalStatus("loading");
        FETCH_OPTIONS.body = createSendMessage(form, "email");
        (
            fetch(FETCH_URL, FETCH_OPTIONS)
            .then(fetchResponseAObject)
            .then(fetchSuccess)
            .catch(fetchError)
        )
       form.reset();
    }
}

/*-
handleAPIWhatsapp :: (MouseEvent) -> undefined */
function handleAPIWhatsapp(e) {
    const form = e.currentTarget.form;
    if (canSend(form)) {
        const message = createSendMessage(form, "whatsapp");
        const url = `https://api.whatsapp.com/send/?phone=5493512876508&text=${message}&app_absent=0`;
        form.reset();
        window.open(url, "_blank", "noopener,noreferrer");
    }
}

/*-
handleDESKWhatsapp :: (MouseEvent) -> undefined */
function handleDESKWhatsapp(e) {
    const form = e.currentTarget.form;
    if (canSend(form)) {
        const message = createSendMessage(form, "whatsapp");
        const url = `https://web.whatsapp.com/send/?phone=5493512876508&text=${message}&app_absent=0`;
        form.reset();
        window.open(url, "_blank", "noopener,noreferrer");
    }
}




document.querySelectorAll(".form").forEach(function (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        e.stopPropagation();
    });
    form.submit.addEventListener("click", handleSubmit);
});

document.querySelectorAll(".form .w-api").forEach(function (button) {
    button.addEventListener("click", handleAPIWhatsapp);
});

document.querySelectorAll(".form .w-desk").forEach(function (button) {
    button.addEventListener("click", handleDESKWhatsapp);
});

document.querySelectorAll(".delete").forEach(function (button) {
    button.addEventListener("click", function (e) {
        const modal = e.currentTarget.parentElement;
        const modal_container = document.getElementById("modal");
        modal.classList.add("display-none");
        modal_container.classList.add("display-none");
        window.modal_state.modal = undefined;
    });
})
(()=>{function e(e){if("modal"===e.target.id){const t=e.target;document.getElementById(`${window.modal_state.modal}-modal`).classList.add("display-none"),t.classList.add("display-none"),window.modal_state.modal=void 0}}function t(t){const n=window.modal_state.modal,o=document.getElementById(`${t}-modal`),a=document.getElementById("modal"),i=void 0===n?void 0:document.getElementById(`${n}-modal`);a.classList.remove("display-none"),o?.classList?.toggle("display-none"),i?.classList?.toggle("display-none"),window.modal_state.modal=t,"loading"!==t&&a.addEventListener("click",e,{once:!0})}function n(e,t){const n="otros-form"===e.id?e?.seguro?.value:String(e.dataset.name);if("email"===t){const t=Object.fromEntries(new FormData(e).entries());return t._subject="Contacto"===e.id?`Consulta por parte de ${window.location.href}:`:`Cotizar seguro de ${n}, por parte de ${e.nombre.value} ${e.apellido.value}`,t._captcha=!0,t._template="table",t}if("whatsapp"===t){let t="Hola,%20me%20comunico%20para%20consultarle%20la%20siguiente%20cotización%0a%0a";return t+=`*_Asunto:*%20Cotizar%20seguro%20de%20${n}%0a`,t+=`*De:*%20${e.nombre.value}%20${e.apellido.value}%0a%0a`,[...new FormData(e).entries()].forEach((function(e){t+=`*${e[0]}:*%20${e[1]}%0a`})),t}}function o(e){return""===e}function a(e){return/^\d{6,8}$/.test(e)}function i(e){return/^11[ -]?\d{8}$/.test(e)||/^(?:220|221|223|230|236|237|249|260|261|263|264|266|280|291|294|297|298|299|336|341|342|343|345|348|351|353|358|362|364|370|376|379|380|381|383|385|387|388)[ -]?\d{7}$/.test(e)||/^(?:2202|2221|2223|2224|2225|2226|2227|2229|2241|2242|2243|2244|2245|2246|2252|2254|2255|2257|2261|2262|2264|2265|2266|2267|2268|2271|2272|2273|2274|2281|2283|2284|2285|2286|2291|2292|2296|2297|2302|2314|2316|2317|2320|2323|2324|2325|2326|2331|2333|2334|2335|2336|2337|2338|2342|2343|2344|2345|2346|2352|2353|2354|2355|2356|2357|2358|2392|2393|2394|2395|2396|2473|2474|2475|2477|2478|2622|2624|2625|2626|2646|2647|2648|2651|2655|2656|2657|2658|2901|2902|2903|2920|2921|2922|2923|2924|2925|2926|2927|2928|2929|2931|2932|2933|2934|2935|2936|2940|2942|2945|2946|2948|2952|2953|2954|2962|2963|2964|2966|2972|2982|2983|3327|3329|3382|3385|3387|3388|3400|3401|3402|3404|3405|3406|3407|3408|3409|3435|3436|3437|3438|3442|3444|3445|3446|3447|3454|3455|3456|3458|3460|3462|3463|3464|3465|3466|3467|3468|3469|3471|3472|3476|3482|3483|3487|3489|3491|3492|3493|3496|3497|3498|3521|3522|3524|3525|3532|3533|3537|3541|3542|3543|3544|3546|3547|3548|3549|3562|3563|3564|3571|3572|3573|3574|3575|3576|3582|3583|3584|3585|3711|3715|3716|3718|3721|3725|3731|3734|3735|3741|3743|3751|3754|3755|3756|3757|3758|3772|3773|3774|3775|3777|3781|3782|3786|3821|3825|3826|3827|3832|3835|3837|3838|3841|3843|3844|3845|3846|3854|3855|3856|3857|3858|3861|3862|3863|3865|3867|3868|3869|3873|3876|3877|3878|3885|3886|3887|3888|3891|3892|3894)[ -]?\d{6}$/.test(e)}function l(e){return/^[a-zA-Z]?\d{4}$/.test(e)}function r(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)}function s(e){const t=e.target;a(t.value)&&(t.parentElement.parentElement.parentElement.classList.remove("is-invalid"),t.oninput=null)}function c(e){const t=e.target;i(t.value)&&(t.parentElement.parentElement.parentElement.classList.remove("is-invalid"),t.oninput=null)}function d(e){const t=e.target;l(t.value)&&(t.parentElement.parentElement.parentElement.classList.remove("is-invalid"),t.oninput=null)}function u(e){const t=e.target;r(t.value)&&(t.parentElement.parentElement.parentElement.classList.remove("is-invalid"),t.oninput=null)}function m(e){const t=e.target;o(t.value)||(t.parentElement.parentElement.parentElement.classList.remove("is-invalid"),t.oninput=null)}function p(e){const t=e.querySelectorAll(".left_p");let n=!0;return t.forEach((function(e,t){var p;("dni"!==(p=e.querySelector(".input")).name||a(p.value)?"tel"!==p.name||i(p.value)?"codigo_postal"!==p.name||l(p.value)?"email"!==p.name||r(p.value)?o(p.value)&&(p.oninput=m,1):(p.oninput=u,1):(p.oninput=d,1):(p.oninput=c,1):(p.oninput=s,1))&&(n&&(n=!1),e.classList.add("is-invalid"))})),n}function f(e){const o=e.currentTarget.form;p(o)&&(t("success"),fetch("https://formsubmit.co/ajax/agustina.seguros.gordillo@gmail.com",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},body:JSON.stringify(n(o,"email"))}).then((function(e){return e.json()})).then((function(e){return"true"===e.success?void t("success"):Promise.reject(e)})).catch((function(){t("error")})),o.reset())}function v(e){const t=e.currentTarget.form;if(p(t)){const e=`https://api.whatsapp.com/send/?phone=5493512876508&text=${n(t,"whatsapp")}&app_absent=0`;t.reset(),window.open(e,"_blank","noopener,noreferrer")}}function E(e){const t=e.currentTarget.form;if(p(t)){const e=`https://web.whatsapp.com/send/?phone=5493512876508&text=${n(t,"whatsapp")}&app_absent=0`;t.reset(),window.open(e,"_blank","noopener,noreferrer")}}window.modal_state=Object.seal({modal:void 0}),document.querySelectorAll(".form").forEach((function(e){e.addEventListener("submit",(function(e){e.preventDefault(),e.stopPropagation()})),e.submit.addEventListener("click",f)})),document.querySelectorAll(".form .w-api").forEach((function(e){e.addEventListener("click",v)})),document.querySelectorAll(".form .w-desk").forEach((function(e){e.addEventListener("click",E)})),document.querySelectorAll(".delete").forEach((function(e){e.addEventListener("click",(function(e){const t=e.currentTarget.parentElement,n=document.getElementById("modal");t.classList.add("display-none"),n.classList.add("display-none"),window.modal_state.modal=void 0}))}))})();
//# sourceMappingURL=form.js.map
/*-
Form_rows :: Array<Array<Form_>>
*/
/*-
Form_data :: {
    ...Form_rows,
    id: string,
    default: true | undefined
    display: true | undefined
    name: string,
}
*/
/*-
options_ :: 
    Array<{
        text: string,
        value: string
    }> 
    | { 
        to: number,
        from: number 
    }
    | undefined
*/
/*-
Form_ :: {
    max: string | undefined,
    min: string | undefined,
    name: string
    info: string | undefined,
    value: string,
    placeholder: string | undefined,
    type: string | undefined,
    required: string | undefined,
    select: string | number | undefined,
    options: options_
}
*/

/*-
html_textarea :: (Form_) -> string
*/
function html_textarea(el) {
    return /*html*/`
        <textarea 
            name=${el?.name}
            class="input fm_tx"
            ${(
                el?.placeholder !== undefined
                ? `placeholder="${el?.placeholder}"`
                : ""
            )}
        ></textarea>
    `;
}
/*-
html_options :: (options_, string | number | undefined) -> string
*/
function html_options(options, select) {
    if (Array.isArray(options)) {
        return options.reduce(function r(acc, option) {
           return String.prototype.concat.call(
                acc,
                /*html*/`
                <option
                    class="fs-text-s"
                    value="${option?.value}"
                    ${(
                        option?.id !== undefined
                            ? `id="${option.id}"`
                        : ""
                    )}
                    ${(
                        select === option?.value
                        ? "selected"
                        : ""    
                    )}
                >
                    ${option?.text}
                </option>`
            )
        },"");
    } else {
        let html_options = "";
        let {from, to} = options;
        while (from <= to) {
            html_options = String.prototype.concat.call(
                /*html*/`
                <option
                    class="fs-text-s"
                    value="${from}"
                    ${(
                        select === from
                        ? "selected"
                        : ""    
                    )}
                >
                    ${from}
                </option>`,
                html_options
            )
            from += 1;
        }
        return html_options;
    }
}

/*-
html_select :: (Form_) -> string
*/
function html_select(el) {
    return /*html*/`
        <select
            ${
                el?.id !== undefined 
                ? `id="${el?.id}-select"`
                : ""
            }
            class="input"
            name=${el?.name} 
        >
            ${html_options(el?.options, el?.select)}
        </select>
    `;
}

/*-
html_input :: (Form_) -> string
*/
function html_input(el) {
    return /*html*/`
        <input
            class="input"
            name="${el?.name}"
            type="${el?.type}"
            ${(
                el?.placeholder !== undefined
                ? `placeholder="${el?.placeholder}"`
                : ""
            )}
            ${el?.require !== undefined ? "data-validity=true" : ""}
            ${(
                el?.min !== undefined
                ? `min="${el?.min}"`
                : ""
            )}
            ${(
                el?.max !== undefined
                ? `max="${el?.max}"`
                : ""
            )}
        />
    `;
}

/*-
html_required :: (string) -> string
*/
function html_required(text) {
    return /*html*/`
        <div class="fs-text-s text">
            ${(
                text === "default"
                ? "Valor requerido"
                : text
            )}
        </div>
    `;
}

/*-
html_submit :: () -> string
*/
function html_submit() {
    return /*html*/`
        <button 
            class="button"
            name="submit"
            type="submit" 
        >
            <span class="fs-text-s text-bold">Enviar por email</span>
        </button>
    `;
}

/*-
html_whatsappButton :: () -> string
*/
function html_whatsappButton() {
    return /*html*/`
        <button type="button" class="button w-api">
            <span class="fs-text-s text-bold">Enviar por WhatsApp</span>
        </button>
        <button type="button" class="button w-desk">
            <span class="fs-text-s text-bold">Enviar por WhatsApp</span>
        </button>
    `;
}

/*-
html_column :: (Form_) -> string
*/
function html_column(col) {
    const required = col?.required !== undefined;
    const html_type = (
        col?.type === "textarea"
        ? html_textarea(col)
        : (
            col?.type === "select"
            ? html_select(col)
            : html_input(col)
        )
    ); 
    return /*html*/`
        <div class="item flex-c align-c justify-c ${
            required
            ? "left_p"
            : ""
        }">
            <label>
                <fieldset>
                    <legend class="fs-text-s text-bold">
                        ${col?.value}
                    </legend>
                    ${html_type}
                </fieldset>
            </label>
            ${(
                required
                ? html_required(col?.required)
                : ""
            )}
            ${(
                col?.info !== undefined
                ? /*html*/`
                    <div class="info">
                        <span class="fs-text-s">
                            <strong class="fs-text-s">Info:</strong>
                            ${col?.info}
                        </span>
                    </div>
                `
                : ""
            )}
        </div>
    `;
}

/*-
html_columns :: (Array<Form_>) -> string
*/
function html_columns(column_arr) {
    return column_arr.reduce(function r(acc, col) {
        return String.prototype.concat.call(
            acc,
            html_column(col)
        );
    },"");
}


function html_row(row) {
    return /*html*/`
        <div class="row flex-r-change">
            ${html_columns(row)}
        </div>
    `;
}

/*-
html_rows :: (Form_rows) -> string
*/
function html_rows(rows_arr) {
    return (
        Array.isArray(rows_arr)
        ? rows_arr.reduce(function r(acc, row) {
            return String.prototype.concat.call(
                acc,
                html_row(row)
            );
        }, "")
        : ""
    )
}

/*-
() :: ({
    id: string,
    data: Form_rows,
    default_data: Form_rows,
    display: true | undefined,
    whatsapp: true | undefined,
    name: string
}) -> string
*/
module.exports = function ({
    id,
    data,
    default_data,
    display,
    whatsapp,
    name
}) {
    return /*html*/`
        <form
            id="${id}-form"
            class="form flex-column align-c"
            data-name="${name}"
            ${(
                display !== undefined
                ? "data-selected"
                : ""
            )}
        >
            ${html_rows(data)}
            ${(
                default_data !== undefined
                ? html_rows(default_data)
                : ""
            )}
            <div class="item flex-row flex-wrap align-c justify-c">
                ${html_submit()}
                ${(
                    whatsapp !== undefined
                    ? html_whatsappButton()
                    : ""
                )}
            </div>
        </form>
    `;
}

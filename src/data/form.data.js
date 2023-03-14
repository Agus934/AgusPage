module.exports = {
    default_data: [
        [
            {
                name: "nombre",
                placeholder: "ej: Agustina",
                required: "default",
                type: "text",
                value: "Nombres"
            },
            {
                name: "apellido",
                placeholder: "ej: Gordillo",
                required: "default",
                type: "text",
                value: "Apellidos"
            }
        ],
        [
            {
                name: "dni",
                placeholder: "ej: 32898900",
                required: "default",
                type: "tel",
                value: "DNI"
            },
            {
                name: "codigo_postal",
                placeholder: "ej: 1401",
                required: "default",
                type: "text",
                value: "Codigo Postal"
            }
        ],
        [
            {
                name: "tel",
                placeholder: "ej: 351 0040352",
                required: "Teléfono invalido. Sólo se acepta el código de area más el número",
                type: "tel",
                value: "Teléfono"
            },
            {
                name: "email",
                placeholder: "ej: mi.email@gmail.com",
                required: "Email invalido",
                type: "email",
                value: "Email"
            }
        ],
        [
            {
                name: "comentario",
                placeholder: "Aqui puede agregar algo más de información si lo necesita",
                type: "textarea",
                value: "Comentarios"
            }
        ]
    ],
    forms: [
        {
            default: true,
            display: true,
            id: "autos",
            name: "Autos",
            rows: [
                [
                    {
                        info: "está especificada como MARCA en la Cédula de Identificación de los Automotores",
                        name: "marca",
                        placeholder: "ej: CHEVROLET",
                        required: "default",
                        type: "text",
                        value: "Marca"
                    },
                    {
                        name: "año",
                        type: "select",
                        value: "Año",
                        options: {
                            to: Number(new Date().getFullYear()),
                            from: 1986
                        }
                    }
                ], [
                    {
                        value: "Modelo",
                        placeholder: "ej: CORSA CLASSIC 1.6 5P LS",
                        name: "modelo",
                        type: "text",
                        required: "default",
                        info: "está especificada como MODELO en la Cédula de Identificación de los Automotores"
                    },
                    {
                        value: "GNC",
                        name: "gnc",
                        type: "select",
                        options: [
                            {
                                text: "NO",
                                value: "NO",
                            },
                            {
                                text: "SI",
                                value: "SI"
                            }
                        ]
                    }
                ]
            ]
        },
        {
            default: true,
            id: "motos",
            name: "Motos",
            rows: [
                [
                    {
                        value: "Marca",
                        placeholder: "ej: YAMAHA",
                        name: "marca",
                        type: "text",
                        required: "default",
                        info: "está especificada como MARCA en la Cédula de Identificación de los Motovehículos"
                    },
                    {
                        value: "Año",
                        name: "año",
                        type: "select",
                        options: {
                            to: Number(new Date().getFullYear()),
                            from: 1986
                        }
                    },
                    {
                        value: "Modelo",
                        placeholder: "ej: 700 MT 07 TRACER",
                        name: "modelo",
                        type: "text",
                        required: "default",
                        info: "está especificada como MODELO en la Cédula de Identificación de los Motovehículos"
                    }
                ]
            ]
        },
        {
            default: true,
            id: "bicicletas",
            name: "Bicicletas",
            rows: [
                [
                    {
                        value: "Marca",
                        placeholder: "ej: RALEIGH",
                        name: "marca",
                        type: "text",
                        required: "default"
                    },
                    {
                        value: "Año",
                        name: "año",
                        type: "select",
                        options: {
                            to: Number(new Date().getFullYear()),
                            from: 2016
                        }
                        
                    }
                ],
                [
                    {
                        value: "Versión",
                        placeholder: "ej: Mojave 2.0 R29",
                        name: "version",
                        type: "text",
                        required: "default"
                    },
                    {
                        value: "Rodado",
                        name: "rodado",
                        type: "select",
                        select: 29,
                        options: {
                            to: 32,
                            from: 12
                        }
                    }
                ],
                [
                    {
                        value: "Material del Cuadro",
                        placeholder: "ej: ALUMINIO",
                        name: "cuadro",
                        type: "text",
                        required: "default"
                    },
                    {
                        value: "Color",
                        placeholder: "ej: Negro con Naranja",
                        name: "color",
                        type: "text",
                        required: "default"
                    }
                ]
            ]
        },
        {
            default: true,
            id: "monopatin",
            name: "Monopatín",
            rows: [
                [
                    {
                        value: "Marca",
                        placeholder: "ej: SCOOTER",
                        name: "marca",
                        type: "text",
                        required: "default"
                    },
                    {
                        value: "Año",
                        name: "año",
                        type: "select",
                        options: {
                            to: Number(new Date().getFullYear()),
                            from: 2016
                        }
                    }
                ],
                [
                    {
                        value: "Tipo",
                        name: "tipo",
                        type: "select",
                        options: [
                            {
                                text: "a batería",
                                value: "a batería",
                            },
                            {
                                text: "eléctrico",
                                value: "eléctrico"
                            }
                        ]
                    },
                    {
                        value: "Color",
                        placeholder: "ej: Negro",
                        name: "color",
                        type: "text",
                        required: "default"
                    }
                ]
            ]
        },
        {
            default: true,
            id: "hogar",
            name: "Hogar",
            rows: [
                [
                    {
                        value: "Metros cuadraros",
                        placeholder: "ej: 80",
                        name: "metros_cuadrados",
                        type: "number",
                        min: 1,
                        required: "default"
                    },
                    {
                        value: "Material de construcción",
                        placeholder: "ej: Ladrillo visto",
                        name: "material_de_construcción",
                        type: "text",
                        required: "default"
                    }
                ]
            ]
        },
        {
            default: true,
            id: "otros",
            name: "Otros",
            rows: [
                [
                    {
                        id: "otros",
                        value: "Seguro",
                        name: "seguro",
                        type: "select",
                        required: "default",
                        select: "Vida",
                        options: [
                            {
                                text: "Vida",
                                value: "Vida",
                            },
                            {
                                text: "Integral de comercio",
                                value: "Integral de comercio"
                            },
                            {
                                text: "Caución",
                                value: "Caución"
                            },
                            {
                                text: "Accidentes personales",
                                value: "Accidentes personales"
                            },
                            {
                                text: "Praxis médica",
                                value: "Praxis médica"
                            },
                            {
                                text: "Fuerzas especiales",
                                value: "Fuerzas especiales"
                            }
                        ]
                    }
                ]
            ],
        }
    ]
}

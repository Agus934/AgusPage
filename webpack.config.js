const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

const {
    default_data,
    forms
} = require("./src/data/form.data.js");
const {
    html_index,
    html_404,
    html_route
} = require("./src/html_build.js");


const RESOLVE_PATH = `${__dirname}/dist`;

module.exports = function (env) {
    const isProduction = env.production;

    const main_url = (
        isProduction
        ? "./"
        : "./"
    );

    const html_routes = forms.map(function (form) {
        return new HtmlWebpackPlugin({
            filename: `${form?.id}/index.html`,
            templateContent: html_route({
                url: isProduction ? main_url: "../",
                path: form?.id,
                title: `Formulario de ${form?.name} - Agustina Gordillo Seguros`,
                form_data: form,
                default_data
            }),
            inject: false
        });
    });

    return ({
        mode: (
            isProduction
            ? "production"
            : "development"
        ),
        entry: {
            "main.style": "./src/css/main.style.css",
            "index.style": "./src/css/index.style.css",
            index: "./src/js/index.js",
            form: "./src/js/form.js"
        },
        plugins: [
            new MiniCssExtractPlugin({
                filename: '[name].css'
            }),
            ...html_routes,
            new HtmlWebpackPlugin({
                filename: "404.html",
                templateContent: html_404(main_url),
                inject: false
            }),
            new HtmlWebpackPlugin({
                filename: "index.html",
                templateContent: html_index(main_url),
                inject: false
            })
        ],
        output: {
            clean: true,
        },
        optimization: {
            minimizer: [
                `...`,
                new CssMinimizerPlugin(),
             ],
            splitChunks: {
                cacheGroups: {
                    mainStyles: {
                        type: "css/mini-extract",
                        name: "main.style",
                        chunks: (chunk) => {
                            return chunk.name === "main.style";
                        },
                        enforce: true,
                    },
                    indexStyles: {
                        type: "css/mini-extract",
                        name: "index.style",
                        chunks: (chunk) => {
                            return chunk.name === "index.style";
                        },
                        enforce: true,
                    }
                }
            }
        },
        devtool: "source-map",
        module: {
            rules: [
                {
                    test: /\.css$/i,
                    use: [
                        MiniCssExtractPlugin.loader, 
                        {
                            loader: "css-loader",
                            options: {
                                url: false
                            }
                        },
                        "postcss-loader"
                    ],
                },
            ],
        },
    });
}
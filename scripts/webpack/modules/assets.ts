// Core
import HtmlWebpackPlugin from 'html-webpack-plugin';
import {Configuration} from 'webpack';
// Constants
import { STATIC_DIRECTORY, APP_NAME } from '../constants';

export const connectHtml = (): Configuration => ({
    plugins: [
        // Каждый плагин — это конструктор
        new HtmlWebpackPlugin({
            template: `${STATIC_DIRECTORY}/template.html`,
            title:    APP_NAME,
            favicon:  `${STATIC_DIRECTORY}/favicon.ico`,
        }),
    ],
});

export const loadImages = (IS_DEVELOPMENT:boolean): Configuration => {
   
    if(IS_DEVELOPMENT)
    {
       return loadImagesDev();
    }
    else return loadImagesProd();
};


export const loadImagesDev = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use:  [
                    'file-loader',
                    {
                        loader:  'image-webpack-loader',
                        // Disable optimizations
                        options: {
                            bypassOnDebug: true,
                            disable:       true,
                        },
                    },
                ],
            },
        ],
    },
});

export const loadImagesProd = (): Configuration => ({
    module: {
        rules: [
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use:  [
                    'file-loader',
                    {
                        loader:  'image-webpack-loader',
                        // https://github.com/tcoopman/image-webpack-loader
                        // options and links
                        options: {
                            mozjpeg: {
                                progressive: true,
                                quality:     65,
                            },
                            // optipng.enabled: false will disable optipng
                            optipng: {
                                enabled: false,
                            },
                            pngquant: {
                                quality: [ 0.65, 0.90 ],
                                speed:   4,
                            },
                            gifsicle: {
                                interlaced: false,
                            },
                            // the webp option will enable WEBP
                            webp: {
                                quality: 75,
                            },
                        },
                    },
                ],
            },
        ],
    },
});

export const loadSvg = () => ({
    module: {
        rules: [
            {
                test:   /\.svg$/,
                issuer: {
                    test: /\.js$/,
                },
                use: [
                    '@svgr/webpack',
                    {
                        loader:  'file-loader',
                        options: {
                            name: 'images/[name].[hash:5].[ext]',
                        },
                    },
                ],
            },
            {
                test:   /\.svg$/,
                issuer: {
                    test: /\.css$/,
                },
                use: [
                    {
                        loader:  'file-loader',
                        options: {
                            // limit: 0,
                            name: 'images/[name].[hash:5].[ext]',
                        },
                    },
                ],
            },
        ],
    },
});

export const loadFonts = () => ({
    module: {
        rules: [
            {
                test: /\.(woff|woff2|ttf|eot|otf)$/,
                use:  [
                    {
                        loader:  'file-loader',
                        options: {
                            name: 'fonts/[name].[hash:5].[ext]',
                        },
                    },
                ],
            },
        ],
    },
});

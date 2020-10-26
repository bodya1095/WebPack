// Core
import {
    DefinePlugin,
    ProvidePlugin,
    HotModuleReplacementPlugin,
    Configuration,
} from 'webpack';
import WebpackBar from 'webpackbar';
import FriendlyErrorsWebpackPlugin from 'friendly-errors-webpack-plugin';
import {CleanWebpackPlugin} from 'clean-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';


export const connectBuildProgressIndicator = ():Configuration => ({
    plugins: [ new WebpackBar() ],
});

export const connectFriendlyErrors = ():Configuration => ({
    plugins: [ new FriendlyErrorsWebpackPlugin() ],
});

export const connectHMR = ():Configuration => ({
    plugins: [ new HotModuleReplacementPlugin() ],
});

export const cleanDirectories = ():Configuration => ({
    plugins: [
        new CleanWebpackPlugin({
            verbose: true,
            }),
    ],
});

export const connectBundleAnalyzer = () => ({
    plugins: [
        new BundleAnalyzerPlugin({
            analyzerMode:      'disabled',
            openAnalyzer:      false,
            generateStatsFile: true,
        }),
    ],
});

export const defineEnvVariables = () => {
    const { NODE_ENV } = process.env;

    return {
        plugins: [
            new DefinePlugin({
                __API_URI__: 'https:....',
                __ENV__:     JSON.stringify(NODE_ENV),
                __DEV__:     NODE_ENV === 'development',
                __STAGE__:   NODE_ENV === 'stage',
                __PROD__:    NODE_ENV === 'production',
            }),
        ],
    };
};

export const provideGlobals = () => ({
    plugins: [
        new ProvidePlugin({
            React: 'react',
        }),
    ],
});


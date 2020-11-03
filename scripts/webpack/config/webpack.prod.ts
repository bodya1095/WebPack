// Core
import merge from 'webpack-merge';

// Configurations
import { getCommonConfig } from './webpack.common';


// Modules
import * as modules from '../modules';
// import webpack from 'webpack';

export const getProdConfig = () => {
    return merge(
        getCommonConfig(),
        {
            mode:    'none', // none to remove bundle chunk size warning
            devtool: false,
        },
        modules.loadImagesProd(),
        modules.loadProdCss(),
        modules.cleanDirectories(),
        // modules.filterLodashModules(),
        modules.filterMomentLocales(),
        modules.connectBuildProgressIndicator(),
        modules.optimizeBuild(),
        modules.connectBundleAnalyzer(),
        modules.generateServiceWorker(),
        // modules.generateManifest(),
    );
};

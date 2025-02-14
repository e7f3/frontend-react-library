import { WebpackPluginInstance } from "webpack";
import path from 'path';

/**
 * SharedPathPlugin for the webpack compiler. This plugin listens to the
 * `beforeResolve` hook of the `normalModuleFactory` and modifies the `request` path
 * for modules that start with 'shared/'.
 *
 * If the module request starts with 'shared/' and the issuer path matches the pattern
 * for a package within 'frontend-react-library/packages/(core|ui|build)', it resolves
 * the request to the corresponding shared directory within the matched package.
 */
export const SharedPathPlugin: WebpackPluginInstance = {
    apply(compiler) {
        compiler.hooks.normalModuleFactory.tap('SharedPathPlugin', factory => {
            factory.hooks.beforeResolve.tap('SharedPathPlugin', resolveData => {
                if (!resolveData.request.startsWith('shared/')) {
                    return;
                }

                const issuer = resolveData.contextInfo.issuer;
                if (!issuer) return;

                const packageMatches = issuer.match(/frontend-react-library\/packages\/(core|ui|build)/);
                if (!packageMatches) return;

                const packageName = packageMatches[1];
                resolveData.request = path.resolve(
                    process.cwd(),
                    `frontend-react-library/packages/${packageName}/shared`,
                    resolveData.request.substring('shared/'.length)
                );
            });
        });
    }
};
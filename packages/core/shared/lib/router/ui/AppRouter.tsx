import { Loader } from '@e7f3/ui/shared/components/Loader/Loader';
import {
    memo,
    Suspense,
    useCallback 
} from 'react';
import {
    Route,
    Routes 
} from 'react-router-dom';

import { RequireAuth } from './RequireAuth';
import { RouteLink } from './RouteLink';
import {
    AppRouteConfig,
    AppRouteProps 
} from '../model/router.model';

const CRUMB = { crumb: RouteLink };

export interface AppRouterProps {
    /**
     * Route config
     */
    config: AppRouteConfig
}

/**
 * Main application router
 *
 * @prop {AppRouteConfig} config - route config
 *
 * @example
 * const routeConfig: AppRouteConfig = {
 *     routeConfig: {
 *         '/': {
 *             name: 'Main',
 *             element: <Main />,
 *         },
 *         '/about': {
 *             name: 'About',
 *             element: <About />,
 *         },
 *     },
 *     defaultPath: '/',
 * };
 *
 * @returns {JSX.Element}
 */
export const AppRouter = memo<AppRouterProps>(({ config }) => {
    const {
        routeConfig,
        defaultPath,
    } = config;

    const renderWithWrapper = useCallback((route: AppRouteProps) => {
        const {
            path,
            element,
            authOnly = false,
            // name 
        } = route;
        const content = <Suspense fallback={<Loader />}>{element}</Suspense>;
        const wrapper = authOnly ? <RequireAuth defaultPath={defaultPath}>{content}</RequireAuth> : content;

        return (
            <Route
                key={path}
                path={path}
                element={wrapper}
                handle={CRUMB}
            />
        );
    }, [ defaultPath ]);

    return (
        <Suspense fallback={<Loader />}>
            <Routes>{Object.values(routeConfig).map(renderWithWrapper)}</Routes>
        </Suspense>
    );
});

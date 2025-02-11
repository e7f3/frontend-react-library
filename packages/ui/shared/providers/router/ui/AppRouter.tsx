import {
    memo,
    Suspense,
    useCallback 
} from 'react';
import {
    Route,
    Routes 
} from 'react-router-dom';

import { Loader } from 'shared/components/Loader/Loader';
import {
    AppRouteConfig,
    AppRouteProps 
} from 'shared/config/router/model/router.model';

import { RequireAuth } from './RequireAuth';
import { RouteLink } from './RouteLink';

const CRUMB = { crumb: RouteLink };

export interface AppRouterProps {
    config: AppRouteConfig
}

/**
 * AppRouter
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

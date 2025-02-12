import { RouteProps } from 'react-router-dom';

export type AppRouteProps = RouteProps & {
    /**
     * Route is available only for authorized users
     */
    authOnly?: boolean
    /**
     * Route name
     */
    name: string
};

export type AppRouteConfig = {
    /**
     * Route config
     */
    routeConfig: Record<string, AppRouteProps>,
    /**
     * Default path
     */
    defaultPath: string,
};

import { memo, Suspense, useCallback } from 'react';
import { Route, Routes } from 'react-router-dom';
import { RequireAuth } from './RequireAuth.js';
import { RouteLink } from './RouteLink.js';
import { AppRouteConfig, AppRouteProps } from '../model/router.model.js';

const CRUMB = {
  crumb: RouteLink,
};

export interface AppRouterProps {
  /** 
   * Route config
   */
  config: AppRouteConfig;
  /** 
   * Loader component to show during suspense
   */
  LoaderComponent?: React.ComponentType;
}

/**
 * Main application router
 *
 * @prop {AppRouteConfig} config - route config
 * @prop {React.ComponentType} LoaderComponent - loader component to show during suspense
 *
 * @example
 * const routeConfig: AppRouteConfig = {
 *   routeConfig: {
 *     '/': {
 *       name: 'Main',
 *       element: <Main />,
 *     },
 *     '/about': {
 *       name: 'About',
 *       element: <About />,
 *     },
 *   },
 *   defaultPath: '/',
 * };
 *
 * @returns {JSX.Element}
 */
export const AppRouter = memo<AppRouterProps>(({
  config,
  LoaderComponent: Loader = () => <div>Loading...</div>
}) => {
  const { routeConfig, defaultPath, } = config;

  const renderWithWrapper = useCallback((route: AppRouteProps) => {
    const {
      path,
      element,
      authOnly = false,
      // name
    } = route;

    const content = (
      <Suspense fallback={<Loader />}>
        {element}
      </Suspense>
    );

    const wrapper = authOnly
      ? (
        <RequireAuth defaultPath={defaultPath}>
          {content}
        </RequireAuth>
      )
      : content;

    return (
      <Route
        key={path}
        path={path}
        element={wrapper}
        handle={CRUMB}
      />
    );
  }, [defaultPath, Loader]);

  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        {Object.values(routeConfig).map(renderWithWrapper)}
      </Routes>
    </Suspense>
  );
});

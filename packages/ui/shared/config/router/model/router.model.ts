import { RouteProps } from 'react-router-dom'

export type AppRouteProps = RouteProps & {
    authOnly?: boolean
    name: string
}

export type AppRouteConfig = {
    routeConfig: Record<string, AppRouteProps>,
    defaultPath: string,
}

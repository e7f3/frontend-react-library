import { AppRouteProps } from "shared/config/router/model/router.model"

export interface Crumb {
    path: string
    title: string
}

/**
 * Splits a route path into an array of crumbs
 * @param route - route
 * @returns an array of crumbs
 */
export const generateCrumbs = (route: AppRouteProps): Crumb[] => {
    const { path } = route
    const crumbs: Crumb[] =
    path
        ?.split('/')
        .filter(Boolean)
        .reduce((accumulator, current, index, array) => {
            const crumb: Crumb = {
                path: `/${array.slice(0, index + 1).join('/')}`,
                title: 'test',
            }
            return [...accumulator, crumb]
        }, [] as Crumb[]) || []

    return crumbs
}

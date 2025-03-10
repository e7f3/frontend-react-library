import { AppRouteProps } from '../../model/router.model';

export interface Crumb {
    path: string
    title: string
}

/**
 * Generates breadcrumbs based on the given route's path.
 *
 * Takes a route object and returns an array of breadcrumb objects.
 * Each breadcrumb object contains a path and a title.
 * The path is the path of the current breadcrumb and the title is simply "test".
 * The breadcrumbs are generated by splitting the given route's path by '/' and
 * then reducing the resulting array.
 * Each breadcrumb is then created by joining the array elements up to the current index
 * and prefixing it with '/'.
 * The final array of breadcrumbs is then returned.
 *
 * @param route - route object
 * @returns array of breadcrumb objects
 */
export const generateCrumbs = (route: AppRouteProps): Crumb[] => {
    const {
        path, name, 
    } = route;
    const crumbs: Crumb[] = (
        path
            ?.split('/')
            .filter(Boolean)
            .reduce((accumulator, current, index, array) => {
                const crumb: Crumb = {
                    path: `/${array.slice(0, index + 1).join('/')}`,
                    title: 'test', // Set title to route name for the last segment
                };
                return [ ...accumulator, crumb ];
            }, [] as Crumb[]) || []
    );
    return crumbs;
};

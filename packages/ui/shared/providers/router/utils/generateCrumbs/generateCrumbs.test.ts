import { AppRouteProps } from 'shared/config/router/model/router.model';

import { generateCrumbs } from './generateCrumbs';

describe('generateCrumbs', () => {
    it('should generate correct crumbs for a simple path', () => {
        const route: AppRouteProps = {
            path: '/users/profile',
            name: 'User profile', 
        };
  
        const result = generateCrumbs(route);
  
        expect(result).toEqual([
            {
                path: '/users',
                title: 'test',
            },
            {
                path: '/users/profile',
                title: 'test',
            },
        ]);
    });
  
    it('should generate correct crumbs for a path with multiple segments', () => {
        const route: AppRouteProps = {
            path: '/users/settings/privacy',
            name: 'Privacy settings',
        };
  
        const result = generateCrumbs(route);
  
        expect(result).toEqual([
            {
                path: '/users',
                title: 'test',
            },
            {
                path: '/users/settings',
                title: 'test',
            },
            {
                path: '/users/settings/privacy',
                title: 'test',
            },
        ]);
    });
  
    it('should handle root path correctly', () => {
        const route: AppRouteProps = {
            path: '/',
            name: 'Main',
        };
  
        const result = generateCrumbs(route);
  
        expect(result).toEqual([]);
    });
  
    it('should handle empty path correctly', () => {
        const route: AppRouteProps = {
            path: '',
            name: 'Root',
        };
  
        const result = generateCrumbs(route);
  
        expect(result).toEqual([]);
    });
  
    it('should handle path with trailing slash correctly', () => {
        const route: AppRouteProps = {
            path: '/users/profile/',
            name: 'User profile',
        };
  
        const result = generateCrumbs(route);
  
        expect(result).toEqual([
            {
                path: '/users',
                title: 'test',
            },
            {
                path: '/users/profile',
                title: 'test',
            },
        ]);
    });
  
    it('should handle undefined path correctly', () => {
        const route: AppRouteProps = {
            path: undefined,
            name: '',
        };
  
        const result = generateCrumbs(route);
  
        expect(result).toEqual([]);
    });
});
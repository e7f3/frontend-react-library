import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import {
    GenericStateSchema,
    StoreProvider 
} from 'shared/lib/store/StoreProvider';

import { FeatureState } from '../../StoreProvider/config/stateSchema.model';

export interface ComponentRenderOptions<
    TRequired extends Record<string, FeatureState<unknown>>,
    TOptional extends Record<string, FeatureState<unknown>> = {}
> {
    /**
   * URL to emulate for the component
   */
    route?: string
    /**
   * Initial state of the store
   */
    initialState?: DeepPartial<GenericStateSchema<TRequired, TOptional>>
}

/**
 * Renders a component with a test store
 *
 * @param component - a React component to be rendered
 * @param options - options for rendering
 * @returns result of the @testing-library/react render function
 */
export function componentRender<
    TRequired extends Record<string, FeatureState<unknown>>,
    TOptional extends Record<string, FeatureState<unknown>> = {}
>(
    component: ReactNode,
    options: ComponentRenderOptions<TRequired, TOptional> = {}
) {
    const {
        route = '/', initialState, 
    } = options;
    return render(
        <MemoryRouter initialEntries={[ route ]}>
            <StoreProvider initialState={initialState as GenericStateSchema<TRequired, TOptional>}>
                {component}
            </StoreProvider>
        </MemoryRouter>
    );
}

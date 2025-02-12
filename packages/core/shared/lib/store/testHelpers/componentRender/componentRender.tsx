import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import {
    StateSchema,
    StoreProvider 
} from 'shared/lib/store/StoreProvider';

export interface ComponentRenderOptions<TState extends object> {
    /**
   * URL to emulate for the component
   */
    route?: string
    /**
   * Initial state of the store
   */
    initialState?: DeepPartial<StateSchema<TState>>
}

/**
 * Renders a component with a test store
 *
 * @param component - a React component to be rendered
 * @param options - options for rendering
 * @returns result of the @testing-library/react render function
 */
export function componentRender<TState extends object>(
    component: ReactNode,
    options: ComponentRenderOptions<TState> = {}
) {
    const {
        route = '/', initialState, 
    } = options;
    return render(
        <MemoryRouter initialEntries={[ route ]}>
            <StoreProvider initialState={initialState as StateSchema<TState>}>
                {component}
            </StoreProvider>
        </MemoryRouter>
    );
}

import { render } from '@testing-library/react';
import { ReactNode } from 'react';
import { MemoryRouter } from 'react-router-dom';

import { createApi } from 'shared/api/api';
import {
    // GenericStateSchema,
    StoreProvider,
    OptionalState,
    RequiredState 
} from 'shared/lib/store/StoreProvider';


export interface ComponentRenderOptions<
    TState extends {}
> {
    /**
   * URL to emulate for the component
   */
    route?: string
    /**
   * Initial state of the store
   */
    initialState?: DeepPartial<TState>
}

/**
 * Renders a component with a test store
 *
 * @param component - a React component to be rendered
 * @param options - options for rendering
 * @returns result of the @testing-library/react render function
 */
export function componentRender<
    TState extends {}
>(
    component: ReactNode,
    options: ComponentRenderOptions<TState> = {}
) {
    const {
        route = '/', initialState, 
    } = options;

    const api = createApi();

    return render(
        <MemoryRouter initialEntries={[ route ]}>
            <StoreProvider api={api} initialState={initialState as TState}>
                {component}
            </StoreProvider>
        </MemoryRouter>
    );
}

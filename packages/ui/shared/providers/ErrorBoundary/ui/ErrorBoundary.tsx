import React, {
    ErrorInfo,
    ReactNode,
    Suspense,
    FC,
    PropsWithChildren
} from 'react';

interface ErrorBoundaryProps extends PropsWithChildren {
    /**
     * Fallback UI
     */
    FallbackComponent: FC,
}

interface ErrorBoundaryState {
    /**
     * Error flag
     */
    hasError: boolean
}

/**
 * Error boundary component,
 * catching errors from its children and rendering a fallback UI when necessary.
 * 
 * @param props - The properties for the ErrorBoundary component.
 * @param props.children - The child components that will be wrapped by the error boundary.
 * @param props.FallbackComponent - The fallback UI to be rendered when an error occurs.
 * 
 * @returns The child components wrapped by the error boundary, or the fallback UI if an error occurs.
 */
class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.

        console.error(error);
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
        console.error(error, errorInfo);
    }

    render() {
        const { hasError } = this.state;
        const {
            children,
            FallbackComponent,
        } = this.props;
        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback="">
                    <FallbackComponent />
                </Suspense>
            );
        }
        return children;
    }
}

export default ErrorBoundary;

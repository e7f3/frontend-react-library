import React, {
    ErrorInfo,
    ReactNode,
    Suspense 
} from 'react'

interface ErrorBoundaryProps {
    /**
   * Default return - application
   */
    children: ReactNode,
    /**
     * Error placeholder component
     */
    PlaceholderComponent: ReactNode,
}

interface ErrorBoundaryState {
    /**
   * Error flag
   */
    hasError: boolean
}

class ErrorBoundary extends React.Component<
    ErrorBoundaryProps,
    ErrorBoundaryState
> {
    constructor(props: ErrorBoundaryProps) {
        super(props)
        this.state = { hasError: false }
    }

    static getDerivedStateFromError(error: Error) {
    // Update state so the next render will show the fallback UI.

        console.error(error)
        return { hasError: true }
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    // You can also log the error to an error reporting service
        console.error(error, errorInfo)
    }

    render() {
        const { hasError } = this.state
        const {
            children,
            PlaceholderComponent,
        } = this.props
        if (hasError) {
            // You can render any custom fallback UI
            return (
                <Suspense fallback=''>
                    <PlaceholderComponent />
                </Suspense>
            )
        }
        return children
    }
}

export default ErrorBoundary

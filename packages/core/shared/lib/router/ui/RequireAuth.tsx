import {
    FC,
    PropsWithChildren 
} from 'react';
import {
    Navigate,
    useLocation 
} from 'react-router-dom';

interface RequireAuthProps extends PropsWithChildren {
    /**
     * The path to navigate to if the user is not authenticated.
     */
    defaultPath?: string
    /**
     * A boolean indicating whether the user is authenticated.
     */
    isAuth?: boolean
}

/**
 * A component that checks for user authentication and conditionally renders its children.
 * 
 * @param props - The properties for the RequireAuth component.
 * @param props.children - The child components to be rendered if the user is authenticated.
 * @param props.defaultPath - The path to navigate to if the user is not authenticated.
 * @param props.isAuth - A boolean indicating whether the user is authenticated.
 * 
 * @returns The child components if the user is authenticated, otherwise navigates to the default path.
 */
export const RequireAuth: FC<RequireAuthProps> = (props) => {
    const {
        children,
        defaultPath = '/',
        isAuth,
    } = props;
    const location = useLocation();

    if (!isAuth) {
        return <Navigate to={defaultPath} state={{ from: location }} replace />;
    }

    return children;
};

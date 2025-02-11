import {
    FC,
    PropsWithChildren 
} from 'react';
import {
    Navigate,
    useLocation 
} from 'react-router-dom';

interface RequireAuthProps extends PropsWithChildren {
    defaultPath?: string
    isAuth?: boolean
}

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

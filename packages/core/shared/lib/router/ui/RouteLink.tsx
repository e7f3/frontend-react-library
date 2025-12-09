import { AppLink } from '@e7f3/ui';
import {
    FC,
    ReactNode 
} from 'react';


export interface RouteLinkProps {
    data: ReactNode,
}

export const RouteLink: FC<RouteLinkProps> = ({ data }) => {
    return <AppLink to="/">{data}</AppLink>;
};
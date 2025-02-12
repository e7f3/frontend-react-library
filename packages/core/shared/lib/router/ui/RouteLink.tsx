import {
    FC,
    ReactNode 
} from 'react';

import { AppLink } from '@library/ui/shared/components/AppLink/AppLink';

export interface RouteLinkProps {
    data: ReactNode,
}

export const RouteLink: FC<RouteLinkProps> = ({ data }) => {
    return <AppLink to="/">{data}</AppLink>;
};
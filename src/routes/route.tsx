import React from 'react';
import {
  RouteProps,
  Route as RouteComponent,
  Redirect,
} from 'react-router-dom';

import { useAuth } from '../hooks/auth';

interface ReactRouterProps extends RouteProps {
  isPrivate?: boolean;
  component: React.ComponentType;
}
const Route: React.FC<ReactRouterProps> = ({
  isPrivate = false,
  component: Component,
  ...rest
}) => {
  const { customer } = useAuth();

  return (
    <RouteComponent
      {...rest}
      render={({ location }) =>
        isPrivate === !!customer ? (
          <Component />
        ) : (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/productlist',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export default Route;

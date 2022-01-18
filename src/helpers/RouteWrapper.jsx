import React from 'react'
import { Route } from 'react-router-dom';
import { Layout } from '../layout';

export function RouteWrapper({
    component: Component, 
    ...rest
  }) {
    return (
      <Route {...rest} render={(props) =>
        <Layout {...props}>
          <Component {...props} />
        </Layout>
      } />
    );
  }

import React from 'react';

import { Container } from '@material-ui/core';

const withLoading = <P extends object>(Component: React.ComponentType<P>) =>
  class WithLoading extends React.Component<P> {
    render() {
      return <Container maxWidth="lg"> <Component {...this.props as P} /> </Container>;
    }
  };

export default withLoading;
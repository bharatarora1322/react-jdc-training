import React from 'react';
import Content from '../components/Contents';

export default props => {
  const { setTitle } = props;
  return <Content text="Welcome to /about" setTitle={setTitle} />;
};

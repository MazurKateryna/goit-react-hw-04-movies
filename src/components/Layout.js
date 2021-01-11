import React from 'react';
import AppBar from './AppBar';

function Layout({ children }) {
  return (
    <>
      <AppBar />
      <hr />
      {children}
      <hr />
    </>
  );
}

// const Layout = ({ children }) => <>{children}</>;

export default Layout;
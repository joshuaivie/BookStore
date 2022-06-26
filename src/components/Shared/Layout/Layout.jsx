import React from 'react';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';
import Header from './Header';

function Layout() {
  return (
    <div className="app-layout">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Book Store</title>
        <meta
          name="description"
          content="A react application built to help you catalouge your books"
        />
      </Helmet>
      <Header />
      <div className="layout-1"><Outlet /></div>
    </div>
  );
}

export default Layout;

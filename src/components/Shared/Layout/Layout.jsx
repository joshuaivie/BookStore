import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from './Header';

function Layout({ children }) {
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
      <Router>
        <Header />
        <div className="layout-1">{children}</div>
      </Router>
    </div>
  );
}

export default Layout;

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

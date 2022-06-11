import React from 'react';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <nav className="main-nav">
      <ul>
        <li>
          <Link to="/">Books</Link>
        </li>
        <li>
          <Link to="/categories">Categories</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;

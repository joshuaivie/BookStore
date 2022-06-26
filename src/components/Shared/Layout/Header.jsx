import React from 'react';
import NavBar from './Nav';
import ProfileImage from '../../../images/profile.svg';

function Header() {
  return (
    <header className="header">
      <div className="sub-head">
        <div className="logo">Bookstore CMS</div>
        <NavBar />
      </div>
      <div className="user-profile">
        <img src={ProfileImage} alt="profile" width="30px" />
      </div>

    </header>
  );
}

export default Header;

import React from 'react';
import NavBar from './Nav';
import ProfileImage from '../../../images/profile.svg';

function Header() {
  return (
    <div className="header">
      <div>
        <div className="logo">Bookstore CMS</div>
        <NavBar />
      </div>
      <div className="user-profile">
        <img src={ProfileImage} alt="profile" width="50px" />
      </div>

    </div>
  );
}

export default Header;

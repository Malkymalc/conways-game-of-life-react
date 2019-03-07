import React from 'react';
import '../styles/header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Header = (props) => {


  return (
    <header className="header">
      <div
        class="menu"
        role="button"
        aria-label="menu"
      >
        <FontAwesomeIcon icon="bars" />
      </div>
      <div
        class="header_title"
        role="title"
        aria-label="title"
      >
        <span>Game of Life</span>
      </div>
      <div
        class="about"
        role="button"
        aria-label="about"
      >
        <FontAwesomeIcon icon="question" />
      </div>
    </header>
  );
}

export default Header;

import React from "react";
import { Link } from "react-router-dom";

const Header = props => {
  return (
    <nav>
      <div class="nav-wrapper">
        <Link to="/" class="center brand-logo">
          BIT PERSON
        </Link>
        <ul class="right hide-on-med-and-down">
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;

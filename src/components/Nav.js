import React from 'react';
import './Nav.css';
import {Link} from 'react-router-dom';

function Nav() {
  return (
    <div className="App">
      <nav>
        <h3>Logo</h3>
        <ul className="nav-links">
          <Link className="link-style" to="/about">
            <li>About</li>
          </Link>
          <Link className="link-style" to="/shop">
            <li>Shop</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;

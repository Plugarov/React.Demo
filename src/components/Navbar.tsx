import React from 'react';
import { NavLink } from 'react-router-dom'

export const Navbar: React.FunctionComponent = () => (
    <nav>
        <div className="nav-wrapper green lighten-3 px1">
            <a href="/" className="brand-logo">React + TypeScript</a>
            <ul className="right hide-on-med-and-down">
              <li>
                  <NavLink to="/">Main</NavLink>
              </li>
              <li>
                  <NavLink to="/about">About</NavLink>
              </li>
            </ul>
        </div>
    </nav>
);

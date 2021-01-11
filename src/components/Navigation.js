import React from 'react';
import { NavLink } from 'react-router-dom';
import routes from '../routes';

function Navigation() {
  return (
    <ul className="Navigation-list">
      <li>
        <NavLink
          exact
          to={routes.home}
          className="Navigation-link"
          activeClassName="Navigation-link-active"
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          // exact  // activeClassName будет действовать по четкому совпадению для /movies
          to={routes.movies}
          className="Navigation-link"
          activeClassName="Navigation-link-active"
        >
          Movies
        </NavLink>
      </li>
    </ul>
  );
}

export default Navigation;
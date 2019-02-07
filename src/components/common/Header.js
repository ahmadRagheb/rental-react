import React from 'react';
import PropTypes from 'prop-types';
import {NavLink} from 'react-router-dom';
import LoadingDots from './LoadingDots';

const Header = ({loading}) => {
  const activeStyle = { color: 'blue' };
  return (
    <nav>
      <NavLink  to="/" activeStyle={activeStyle} exact>Rent Monk</NavLink>
      <NavLink to="/sell" activeStyle={activeStyle} exact>Sell</NavLink>
      <NavLink to="/rental" activeStyle={activeStyle} exact>Rental</NavLink>
      <NavLink to="/commercial" activeStyle={activeStyle} exact>Commercial</NavLink>
      <NavLink to="/property-management" activeStyle={activeStyle} exact>Property Management</NavLink>
      <NavLink to="/off-plan-reports" activeStyle={activeStyle} exact>Off Plan Reports</NavLink>
      <NavLink to="/book-free-valuation" activeStyle={activeStyle} exact>Book Free Valuation</NavLink>
      <NavLink to="/login" activeStyle={activeStyle} exact>Log in</NavLink>
      {" / "}
      <NavLink to="/Register" activeStyle={activeStyle} exact>Register</NavLink>
      {/*{" | "}*/}
      {/*/!*<NavLink to="/courses" activeStyle={activeStyle}>Courses</NavLink>*!/*/}
      {/*/!*{" | "}*!/*/}
      {/*/!*<NavLink to="/about" activeStyle={activeStyle}>About</NavLink>*!/*/}
      {loading && <LoadingDots interval={100} dots={20}/>}
    </nav>
  );
};

Header.propTypes = {
  loading: PropTypes.bool.issRequired
};

export default Header;

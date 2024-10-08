import { NavLink } from 'react-router-dom';

export const Footer = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/impressum">Impressum</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
      </ul>
    </>
  );
};

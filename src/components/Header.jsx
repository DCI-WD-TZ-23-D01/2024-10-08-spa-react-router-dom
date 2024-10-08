import { NavLink } from 'react-router-dom';

export const Header = () => {
  return (
    <>
      <ul>
        <li>
          <NavLink to="/">Go to Home</NavLink>
        </li>
        <li>
          <NavLink to="/dashboard">Go to Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/blog">Go to Blog</NavLink>
        </li>
      </ul>
    </>
  );
};

import { NavLink } from 'react-router-dom';

export const Home = () => {
  return (
    <>
      <h1>Home</h1>
      <NavLink to="/dashboard">Go to Dashboard</NavLink>
    </>
  );
};

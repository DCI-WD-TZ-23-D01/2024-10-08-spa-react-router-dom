import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <main>
      <Link to="/dashboard">Dashboard</Link>
      <h1>Home</h1>
    </main>
  );
};
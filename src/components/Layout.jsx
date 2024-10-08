export const Layout = () => {
  return (
    <>
      <header>
        <nav>
          <h1>Nelloversum</h1>
          <ul>
            <li>
              <a href="/">/Home</a>
            </li>
            <li>
              <a href="/Dashboard">Dashboard</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <Outlet />{' '}
      </main>
      <footer>
        <p>&copy; 2024 - My Website:Nelloversum. All rights reserved</p>
      </footer>
    </>
  );
};

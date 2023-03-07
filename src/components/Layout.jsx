import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <header>
        <h1>Custom Hooks</h1>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default Layout;

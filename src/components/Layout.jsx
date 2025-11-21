import { Outlet } from "react-router-dom";
import NavBar from "./NavBar.jsx";

export default function Layout() {
  return (
    <div className="rec-app">
      <NavBar />
      <main className="rec-main" role="main">
        <Outlet />
      </main>
    </div>
  );
}

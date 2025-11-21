import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice.js";

export default function NavBar() {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <nav className="rec-navbar" aria-label="Hoofd navigatie">
      <div className="rec-logo" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <img 
          src="/img/RealEstate.png" 
          alt="RealEstateCare logo" 
          style={{ height: "36px" }}
        />
        <span 
          style={{ 
            fontSize: "1.3rem", 
            fontWeight: "600", 
            color: "#ffffff",
            letterSpacing: "0.5px"
          }}
        >
          RealEstateCare
        </span>
      </div>

      <ul className="rec-nav-links">
        <li><NavLink to="/open-inspections">Openstaande inspecties</NavLink></li>
        <li><NavLink to="/completed-inspections">Uitgevoerde inspecties</NavLink></li>
        <li><NavLink to="/settings">Instellingen</NavLink></li>
        <li><NavLink to="/knowledge-base">Kennisbank</NavLink></li>
      </ul>

      <button className="rec-button-secondary" onClick={handleLogout}>
        Log uit
      </button>
    </nav>
  );
}

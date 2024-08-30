import { Link } from "react-router-dom";
// import "../../CSS/Navbar.css";

export function NavigationLinks({ children }) {
  return (
    <div className="nav-list-container">
      <ul className="nav-list">
        <li className="nav-link">
          <Link to="/">Popular</Link>{" "}
        </li>
        <li className="nav-link">
          <Link to="/top-rated">Top Rated</Link>
        </li>
        <li className="nav-link">
          <Link to="/upcoming">Upcomming</Link>
        </li>
      </ul>
      {children}
    </div>
  );
}

import { SearchBar } from "./SearchBar";
import { Logo } from "./Logo";
import { NavigationLinks } from "./NavigationLinks";
import "../../CSS/Navbar.css";

export function NavBar() {
  return (
    <nav>
      <div className="nav-container">
        <Logo />
        <NavigationLinks>
          <SearchBar />
        </NavigationLinks>
      </div>
    </nav>
  );
}

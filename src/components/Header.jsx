import { Link, NavLink } from "react-router-dom";
import logo from "../assets/images/logo.svg";
import { Button } from "./ui/Button";
import { cn } from "../lib/utils";

const NavItem = ({ to, children }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      cn(
        "text-[20px] font-medium text-black-text hover:text-green-logo transition-colors font-poppins",
        isActive && "text-green-logo font-bold"
      )
    }
  >
    {children}
  </NavLink>
);

export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white-background h-[80px] flex items-center justify-center">
      <div className="w-full max-w-[1300px] flex items-center justify-between px-4 md:px-0">
        <Link to="/" className="flex items-center gap-[5px]">
          <img src={logo} alt="BiON logo" className="h-10 w-auto" />
          <span className="font-poppins text-[30px] font-bold text-green-logo leading-normal">
            BiON
          </span>
        </Link>
        <nav className="hidden items-center gap-[40px] md:flex">
          <NavItem to="/species">Species</NavItem>
          <NavItem to="/hotspots">Hotspots</NavItem>
          <NavItem to="/community">Community</NavItem>
          <NavItem to="/about">About</NavItem>
        </nav>
        <div className="flex items-center gap-4">
          <Button variant="outline" size="lg">
            Sign In
          </Button>
        </div>
      </div>
    </header>
  );
}

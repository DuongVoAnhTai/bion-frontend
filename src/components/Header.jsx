import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/images/logo.svg";
import { cn } from "../lib/utils";
import { Button } from "./ui/Button";
import { useAuth } from "../context/AuthContext";

const NavItem = ({ to, children, onClick }) => (
  <NavLink
    to={to}
    onClick={onClick}
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

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, openLoginModal, logout } = useAuth();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white-background1 h-20 flex items-center justify-center px-4 md:px-8 xl:px-[156px]">
      <div className="w-full flex items-center justify-between">
        <Link to="/" className="flex items-center gap-[5px]">
          <img src={logo} alt="BiON logo" className="h-8 w-auto md:h10" />
          <span className="font-poppins text-2xl md:text-logo font-bold text-green-logo">
            BiON
          </span>
        </Link>
        <nav className="hidden items-center gap-10 xl:flex">
          <NavItem to="/species">Species</NavItem>
          <NavItem to="/hotspots">Hotspots</NavItem>
          <NavItem to="/community">Community</NavItem>
          <NavItem to="/about">About</NavItem>
        </nav>
        <div className="flex items-center">
          {isAuthenticated ? (
            // Nếu đã Đăng nhập: Hiện Avatar hoặc nút Profile/Logout
            <div className="flex items-center gap-4 animate-in fade-in duration-300">
              <Link to="/profile" className="group flex items-center gap-2">
                <div className="h-10 w-10 rounded-full border-2 border-green-logo overflow-hidden">
                  <img
                    src="/src/assets/images/avatar-2.png"
                    alt="User"
                    className="h-full w-full object-cover"
                  />
                </div>
                <span className="hidden xl:block font-medium text-black-text group-hover:text-green-logo">
                  Thang Nguyen
                </span>
              </Link>

              <button
                onClick={logout}
                className="hidden xl:block text-sm text-gray hover:text-red-500 transition-colors"
              >
                Sign out
              </button>
            </div>
          ) : (
            // Nếu chưa Đăng nhập: Hiện nút Sign In để mở Modal
            <div className="hidden xl:block">
              <Button variant="outline" size="lg" onClick={openLoginModal}>
                Sign In
              </Button>
            </div>
          )}

          <button
            className="xl:hidden p-2 text-black-text"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-white-background1 border-t border-gray-border p-4 shadow-lg xl:hidden flex flex-col gap-4 items-start animate-in slide-in-from-top-5">
          <NavItem to="/species" onClick={() => setIsMenuOpen(false)}>
            Species
          </NavItem>
          <NavItem to="/hotspots" onClick={() => setIsMenuOpen(false)}>
            Hotspots
          </NavItem>
          <NavItem to="/community" onClick={() => setIsMenuOpen(false)}>
            Community
          </NavItem>
          <NavItem to="/about" onClick={() => setIsMenuOpen(false)}>
            About
          </NavItem>
          {!isAuthenticated ? (
            <Button
              variant="outline"
              size="sm"
              className="w-full mt-2"
              onClick={() => {
                setIsMenuOpen(false); // Đóng menu mobile trước
                openLoginModal(); // Mở modal login sau
              }}
            >
              Sign In
            </Button>
          ) : (
            <button
              onClick={logout}
              className="text-sm text-gray hover:text-red-500 transition-colors"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </header>
  );
}

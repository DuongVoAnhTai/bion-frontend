import { Link, NavLink } from "react-router-dom";
import GlobalSearch from "../components/GlobalSearch";

const NavItem = ({ to, label }) => (
  <NavLink
    to={to}
    className={({ isActive }) =>
      `px-3 py-1.5 rounded-full text-sm font-medium transition ${
        isActive
          ? "bg-primary-500 text-white shadow-card"
          : "text-slate-200 hover:bg-slate-800 hover:text-white"
      }`
    }
  >
    {label}
  </NavLink>
);

const AppShell = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-950 to-slate-900">
      {/* HEADER */}
      <header className="border-b border-slate-800 bg-slate-950/70 backdrop-blur">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center gap-4">
          {/* Logo + brand */}
          <Link to="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-primary-500 flex items-center justify-center text-white font-bold">
              B
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-semibold text-slate-50">BiON</span>
              <span className="text-xs text-slate-400">
                Biodiversity Intelligence Online Network
              </span>
            </div>
          </Link>

          {/* Global search center */}
          <div className="flex-1 flex justify-center">
            <GlobalSearch />
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-2">
            <NavItem to="/species" label="Explore Species" />
            <NavItem to="/hotspots" label="Hotspots" />
            <NavItem to="/contribute" label="Contribute" />
          </nav>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-1">
        <div className="mx-auto max-w-6xl px-4 py-6">{children}</div>
      </main>

      {/* FOOTER */}
      <footer className="border-t border-slate-800 py-4">
        <div className="mx-auto max-w-6xl px-4 text-xs text-slate-500 flex justify-between">
          <span>© {new Date().getFullYear()} WANEE / BiON</span>
          <span>
            Experience Nature · Support Conservation · Empower Communities
          </span>
        </div>
      </footer>
    </div>
  );
};

export default AppShell;

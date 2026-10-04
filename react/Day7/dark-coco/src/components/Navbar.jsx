import { NavLink } from "react-router-dom";

function Navbar() {
  const navStyle = ({ isActive }) =>
    isActive
      ? "text-[#D99A5B] font-bold border-b-2 border-[#D99A5B] pb-1"
      : "text-[#F5E6D3] hover:text-[#D99A5B] transition duration-300";

  return (
    <nav className="bg-[#3E2115] text-[#F5E6D3] sticky top-0 z-50 shadow-lg">

      <div className="max-w-7xl mx-auto px-6 lg:px-10 h-20 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2"
        >
          <span className="text-3xl">🍫</span>

          <div>
            <h2 className="text-xl font-bold tracking-wide">
              DARK COCOA
            </h2>

            <p className="text-xs text-[#D99A5B] tracking-widest">
              PURE • RICH • NATURAL
            </p>
          </div>
        </NavLink>

        {/* Menu */}
        <div className="flex items-center gap-8 text-sm font-medium">

          <NavLink to="/" className={navStyle}>
            Home
          </NavLink>

          <NavLink to="/services" className={navStyle}>
            Benefits
          </NavLink>

          <NavLink to="/about" className={navStyle}>
            About
          </NavLink>

          <NavLink to="/contact" className={navStyle}>
            Contact
          </NavLink>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;
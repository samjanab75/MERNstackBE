import { Link, NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-[#180820]/95 backdrop-blur-md border-b border-[#71317f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="h-18 flex items-center justify-between">

          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div
              className="w-10 h-10 rounded-xl
              bg-linear-to-br from-[#6d1b7b] to-[#b13fc4]
              flex items-center justify-center
              shadow-lg shadow-purple-950/50"
            >
              <span className="text-xl">⚛️</span>
            </div>

            <div>
              <h1 className="text-white font-bold text-lg">
                ReactLab
              </h1>

              <p className="text-[#c99bd5] text-xs hidden sm:block">
                Interactive State Dashboard
              </p>
            </div>
          </Link>

          {/* Navigation */}
          <div className="flex items-center gap-2 sm:gap-5">

            <NavLink
              to="/"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-[#6d1b7b] text-white"
                    : "text-[#cda5d6] hover:bg-[#32123f] hover:text-white"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/practice"
              className={({ isActive }) =>
                `px-3 py-2 rounded-lg text-sm transition ${
                  isActive
                    ? "bg-[#8e2ca0] text-white"
                    : "text-[#cda5d6] hover:bg-[#32123f] hover:text-white"
                }`
              }
            >
              Practice
            </NavLink>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;


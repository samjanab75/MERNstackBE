import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#2a9d8f]/20 bg-[#f4e9d8]/95 backdrop-blur">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}

        <Link
          to="/"
          className="text-2xl font-bold text-[#063b4c]"
        >
          Future<span className="text-[#f4c430]">Balance</span>
        </Link>


        {/* Navigation */}

        <nav className="hidden items-center gap-8 md:flex">

          <Link
            to="/"
            className="font-medium text-[#063b4c] transition hover:text-[#0e7490]"
          >
            Future & AI
          </Link>

          <Link
            to="/jobs"
            className="font-medium text-[#063b4c] transition hover:text-[#0e7490]"
          >
            Jobs & IT
          </Link>

          <Link
            to="/balance"
            className="font-medium text-[#063b4c] transition hover:text-[#0e7490]"
          >
            Future Balance
          </Link>

        </nav>

      </div>

    </header>
  );
}

export default Navbar;
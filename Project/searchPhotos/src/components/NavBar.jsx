import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="bg-(--c2) border-b border-white/10">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-4 sm:gap-0 justify-between items-center px-6 py-4">
        <Link to='/' className="text-xl sm:text-2xl font-semibold tracking-wide">
          Media Search
        </Link>

        <nav className="flex gap-3">
          <Link
            to="/"
            className="text-sm sm:text-base font-medium bg-(--c4) text-(--c1) px-4 py-2 rounded-md hover:bg-gray-200 transition active:scale-95"
          >
            Search
          </Link>

          <Link
            to="/collection"
            className="text-sm sm:text-base font-medium bg-(--c4) text-(--c1) px-4 py-2 rounded-md hover:bg-gray-200 transition active:scale-95"
          >
            Collection
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default NavBar;

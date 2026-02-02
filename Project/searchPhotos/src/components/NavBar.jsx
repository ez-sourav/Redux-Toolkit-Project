import { Link, useLocation } from "react-router-dom";
import { Search, Bookmark } from "lucide-react";

const NavBar = () => {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 bg-slate-950/95 backdrop-blur-md border-b border-white/10 shadow-lg shadow-slate-950/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <Link
            to="/"
            className="group flex items-center gap-2 text-xl sm:text-2xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors duration-200"
          >
            <span className="bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent group-hover:from-blue-300 group-hover:to-purple-300 transition-all duration-200">
              Media
            </span>
            <span className="text-white/90 group-hover:text-white transition-colors duration-200">
              Search
            </span>
          </Link>

          <nav className="flex items-center gap-2 sm:gap-3">
            <Link
              to="/"
              className={`
                group relative flex items-center gap-2 
                px-3 sm:px-5 py-2 sm:py-2.5 
                text-sm sm:text-base font-medium
                rounded-lg sm:rounded-xl
                transition-all duration-200
                ${
                  isActive("/")
                    ? "bg-blue-500 text-white shadow-lg shadow-blue-500/30"
                    : "bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
                }
                active:scale-95
              `}
            >
              <Search className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Search</span>

              {isActive("/") && (
                <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-blue-400/20 animate-pulse" />
              )}
            </Link>

            <Link
              to="/collection"
              className={`
                group relative flex items-center gap-2 
                px-3 sm:px-5 py-2 sm:py-2.5 
                text-sm sm:text-base font-medium
                rounded-lg sm:rounded-xl
                transition-all duration-200
                ${
                  isActive("/collection")
                    ? "bg-purple-500 text-white shadow-lg shadow-purple-500/30"
                    : "bg-white/10 text-white/80 hover:bg-white/15 hover:text-white"
                }
                active:scale-95
              `}
            >
              <Bookmark className="w-4 h-4 sm:w-5 sm:h-5" />
              <span className="hidden xs:inline">Collection</span>

              {isActive("/collection") && (
                <span className="absolute inset-0 rounded-lg sm:rounded-xl bg-purple-400/20 animate-pulse" />
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;

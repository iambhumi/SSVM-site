// src/components/Navbar.jsx
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const navItems = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  {
    label: "Achievements",
    dropdown: [
      { label: "Students' Achievements", path: "/student-achievements" },
    ],
  },
  { label: "Facility", path: "/facility" },
  { label: "Faculty", path: "/faculty" },
  {
    label: "Media / Bulletin",
    dropdown: [
      { label: "Events", path: "/events" },
      { label: "Notices", path: "/notices" },
      { label: "Announcements", path: "/announcements" },
    ],
  },
  { label: "Contact Us", path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => { setMenuOpen(false); setActiveDropdown(null); };
  const isActive = (path) => location.pathname === path;

  return (
    <>
      <nav
        className="w-full sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled
            ? "linear-gradient(135deg, #5a0000 0%, #8B0000 100%)"
            : "linear-gradient(135deg, #6b0000 0%, #8B0000 60%, #a00000 100%)",
          boxShadow: scrolled
            ? "0 4px 24px rgba(0,0,0,0.35)"
            : "0 2px 12px rgba(0,0,0,0.2)",
        }}
      >
        {/* Top golden accent line */}
        <div className="w-full h-0.5 bg-gradient-to-r from-yellow-600 via-yellow-400 to-yellow-600" />

        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-[72px]">

          {/* ── LOGO ── */}
          <Link to="/" onClick={closeAll} className="flex items-center gap-3 group flex-shrink-0">
            <div className="relative">
              <div className="w-12 h-12 rounded-full border-2 border-yellow-400 overflow-hidden
                              shadow-lg group-hover:border-yellow-300 transition-all duration-200
                              group-hover:scale-105">
                <img
                  src="/Logo.jpeg"
                  alt="School Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Glow ring on hover */}
              <div className="absolute inset-0 rounded-full border-2 border-yellow-400/0
                              group-hover:border-yellow-400/40 group-hover:scale-110
                              transition-all duration-300" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="text-yellow-400 font-bold text-base tracking-wide"
                    style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର
              </span>
              <span className="text-white/80 text-xs tracking-[0.15em] uppercase font-medium">
                Sarada Vidya Mandir
              </span>
            </div>
          </Link>

          {/* ── DESKTOP NAV ── */}
          <ul className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.dropdown ? (
                  <>
                    <button
                      className={`flex items-center gap-1 px-3 py-2 rounded-lg text-sm font-semibold
                                  transition-all duration-200 whitespace-nowrap
                                  ${activeDropdown === item.label
                                    ? "bg-yellow-400 text-red-900"
                                    : "text-white/90 hover:bg-white/10 hover:text-yellow-300"
                                  }`}
                    >
                      {item.label}
                      <svg className={`w-3 h-3 transition-transform duration-200
                                      ${activeDropdown === item.label ? "rotate-180" : ""}`}
                           fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd" />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    {activeDropdown === item.label && (
                      <ul className="absolute top-full left-0 mt-1 bg-white rounded-xl shadow-2xl
                                     border border-gray-100 overflow-hidden min-w-[200px] z-50
                                     animate-in fade-in slide-in-from-top-2 duration-150">
                        {item.dropdown.map((sub) => (
                          <li key={sub.label}>
                            <Link
                              to={sub.path}
                              onClick={closeAll}
                              className="flex items-center gap-2 px-4 py-3 text-sm font-semibold
                                         text-gray-700 hover:bg-red-50 hover:text-red-900
                                         transition-all duration-150 border-b border-gray-50
                                         last:border-0 hover:pl-5"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-yellow-500 flex-shrink-0" />
                              {sub.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeAll}
                    className={`relative px-3 py-2 rounded-lg text-sm font-semibold
                                transition-all duration-200 whitespace-nowrap block
                                ${isActive(item.path)
                                  ? "bg-yellow-400 text-red-900"
                                  : "text-white/90 hover:bg-white/10 hover:text-yellow-300"
                                }`}
                  >
                    {item.label}
                    {/* Active underline dot */}
                    {isActive(item.path) && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2
                                       w-1 h-1 bg-yellow-400 rounded-full" />
                    )}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          {/* ── HAMBURGER (mobile) ── */}
          <button
            className="lg:hidden flex flex-col gap-1.5 p-2 rounded-lg
                       hover:bg-white/10 transition-all duration-200 group"
            onClick={() => { setMenuOpen(!menuOpen); setActiveDropdown(null); }}
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300
                              ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300
                              ${menuOpen ? "opacity-0 scale-x-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white rounded-full transition-all duration-300
                              ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* ── MOBILE MENU ── */}
        {menuOpen && (
          <div
            className="lg:hidden border-t border-white/10"
            style={{ background: "linear-gradient(180deg, #7a0000 0%, #5a0000 100%)" }}
          >
            {navItems.map((item) => (
              <div key={item.label}>
                {item.dropdown ? (
                  <>
                    <button
                      onClick={() =>
                        setActiveDropdown(activeDropdown === item.label ? null : item.label)
                      }
                      className="w-full flex items-center justify-between px-6 py-3.5
                                 text-white/90 font-semibold text-sm border-b border-white/5
                                 hover:bg-white/5 transition-all"
                    >
                      {item.label}
                      <svg className={`w-4 h-4 transition-transform duration-200
                                      ${activeDropdown === item.label ? "rotate-180" : ""}`}
                           fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd"
                              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                              clipRule="evenodd" />
                      </svg>
                    </button>
                    {activeDropdown === item.label && item.dropdown.map((sub) => (
                      <Link
                        key={sub.label}
                        to={sub.path}
                        onClick={closeAll}
                        className="flex items-center gap-3 px-10 py-3 text-yellow-300
                                   text-sm font-medium bg-black/20 border-b border-white/5
                                   hover:text-yellow-400 transition-colors"
                      >
                        <span className="w-1 h-1 rounded-full bg-yellow-400" />
                        {sub.label}
                      </Link>
                    ))}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    onClick={closeAll}
                    className={`flex items-center px-6 py-3.5 text-sm font-semibold
                                border-b border-white/5 transition-all
                                ${isActive(item.path)
                                  ? "text-yellow-400 bg-white/10 border-l-2 border-l-yellow-400"
                                  : "text-white/90 hover:bg-white/5 hover:text-yellow-300"
                                }`}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>

      {/* Mobile backdrop */}
      {menuOpen && (
        <div
          className="fixed inset-0 top-[73px] bg-black/50 z-40 lg:hidden"
          onClick={closeAll}
        />
      )}
    </>
  );
}
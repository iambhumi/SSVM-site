// Clean, adapted Navbar using waterbottle styles for React Router
import { useEffect, useState } from "react";
import { createPortal } from 'react-dom';
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/student-achievements", label: "Achievements" },
  { path: "/facility", label: "Facility" },
  { path: "/faculty", label: "Faculty" },
  { path: "/events", label: "Media/Bulletin" },
  { path: "/contact", label: "Contact us" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (menuOpen && typeof window !== 'undefined') {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => document.body.classList.remove('overflow-hidden');
  }, [menuOpen]);

  const handleNavClick = () => setMenuOpen(false);

  const normalizePath = (p) => {
    if (!p) return "/";
    try {
      return p.replace(/\/?$/g, "") || "/";
    } catch {
      return p;
    }
  };

  return (
    <nav className="fixed left-0 top-2 z-50 w-full translate-x-0 border-b border-[#e5e7eb] md:top-3">
      <div className={`animate-navbarReveal px-4 transition-all duration-300 sm:px-6 lg:px-8 bg-[#980000] bg-opacity-95`}>
        <div className="relative z-60 flex h-16 items-center justify-between md:h-14 md:justify-center lg:h-16">
          <Link to="/" className="flex items-center gap-0 md:absolute md:left-10">
            <div className="ml-1 flex h-15 w-15 items-center justify-center md:ml-4">
              <img src="/Logo.jpeg" alt="Logo" className="h-8 w-8 rounded-full object-contain md:h-10 md:w-10" style={{ display: "block" }} />
            </div>
            <div className="flex flex-col leading-tight ml-3 items-start">
              <span className={`font-bold text-xl md:text-sm tracking-wide transition-colors duration-300 text-yellow-400`} style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର
              </span>
              <span className={`text-[9px] md:text-[15px] tracking-[0.12em] uppercase font-medium transition-colors duration-300 text-white/80`}>
                Sarada Vidya Mandir
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-4 pl-20 md:flex md:ml-24">
            {navLinks.map((link) => {
              const isActive = pathname === link.path || (link.path === "/" && pathname === "/");
              return (
                  <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`group relative px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] transition-colors duration-300 text-[#f6efe2] hover:text-[#facc15]`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-1 right-1 h-0.5 rounded transition-all duration-500 ease-in-out ${isActive ? "bg-[#facc15]" : "bg-[#facc15]"} ${isActive ? "w-[calc(100%-0.5rem)] opacity-100" : "w-0 opacity-0 group-hover:w-[calc(100%-0.5rem)] group-hover:opacity-70"}`}
                    style={{ transitionProperty: "width, opacity" }}
                  />
                </Link>
              );
            })}
          </div>

          <button
            className={`inline-flex items-center gap-2 border px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 md:hidden bg-[#2b0a14] text-[#f6efe2] border-[#f6efe2]/35`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className="relative h-4 w-4 shrink-0">
              <span className={`absolute left-0 top-1/2 block h-0.5 w-4 -translate-y-1.5 rounded transition-all duration-300 bg-[#f6efe2] ${menuOpen ? "translate-y-0 rotate-45" : ""}`}></span>
              <span className={`absolute left-0 top-1/2 block h-0.5 w-4 rounded transition-all duration-300 bg-[#f6efe2] ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`absolute left-0 top-1/2 block h-0.5 w-4 translate-y-1.5 rounded transition-all duration-300 bg-[#f6efe2] ${menuOpen ? "translate-y-0 -rotate-45" : ""}`}></span>
            </span>
          </button>
        </div>
      </div>

      {menuOpen && createPortal(
        <div className="fixed inset-0 z-40 bg-black/30 backdrop-blur-md md:hidden" onClick={() => setMenuOpen(false)} aria-label="Close menu overlay" />,
        document.body
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-1/2 max-w-sm transform transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ boxShadow: menuOpen ? "rgba(0,0,0,0.12) -4px 0px 24px" : undefined }}
        aria-hidden={!menuOpen}
      >
        <div className={`flex h-full flex-col  bg-[#2b0a14] p-4`}>
          <div className="flex items-center gap-2 pb-4 justify-end">
            <button className={`bg-[#f6efe2] px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#2b0a14]`} onClick={() => setMenuOpen(false)} aria-label="Close menu">Close</button>
          </div>

          <div className="mt-3 grid flex-1 grid-cols-1 gap-2"> 
                {navLinks.map((link) => {
                  const isActive = normalizePath(pathname) === normalizePath(link.path);
                  return (
                    <Link key={link.path} to={link.path} onClick={handleNavClick} className={`relative rounded px-2 py-2 text-left text-xs font-medium uppercase tracking-[0.06em] transition-all duration-300 ${isActive ? 'bg-[#facc15] text-white' : 'bg-[#f6efe2] text-[#2b0a14] hover:bg-[#facc15] hover:text-white transform transition-transform duration-150 hover:scale-105'}`}>
                      {link.label}
                    </Link>
                  );
                })}
          </div>
        </div>
      </div>
    </nav>
  );
}
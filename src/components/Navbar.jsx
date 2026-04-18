// Clean, adapted Navbar using waterbottle styles for React Router
import { useEffect, useState, useRef } from "react";
import { createPortal } from 'react-dom';
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { path: "/", label: "Home" },
  { path: "/about", label: "About" },
  { path: "/achievements", label: "Achievements" },
  { path: "/facility", label: "Facility" },
  { path: "/faculty", label: "Faculty" },
  { path: "/media", label: "Media/Bulletin" },
  { path: "/contact", label: "Contact us" },
];

const achievementsSub = [
  { path: "/student-achievements", label: "Student Achievements" },
];

const mediaSub = [
  { path: "/events", label: "Events" },
  { path: "/media/notices", label: "Notices" },
  { path: "/media/announcements", label: "Announcements" },
];

export default function Navbar() {
  const { pathname } = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [achDropdownOpen, setAchDropdownOpen] = useState(false);
  const [mobileAchOpen, setMobileAchOpen] = useState(false);
  const [mediaDropdownOpen, setMediaDropdownOpen] = useState(false);
  const [mobileMediaOpen, setMobileMediaOpen] = useState(false);
  const achCloseTimer = useRef(null);
  const mediaCloseTimer = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (achCloseTimer.current) clearTimeout(achCloseTimer.current);
      if (mediaCloseTimer.current) clearTimeout(mediaCloseTimer.current);
    };
  }, []);

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
    } catch (e) {
      return p;
    }
  };

  return (
    <nav className="fixed left-0 top-2 z-50 w-full translate-x-0 border-b border-[#f6efe2] md:top-3">
      <div className={`animate-navbarReveal px-4 transition-all duration-300 sm:px-6 lg:px-8 ${scrolled ? 'bg-[#980000] bg-opacity-95' : 'bg-transparent'}`}>
        <div className="relative z-60 flex h-16 items-center justify-between md:h-14 md:justify-center lg:h-16">
          <Link to="/" className="flex items-center gap-0 md:absolute md:left-10">
            <div className="ml-1 flex h-15 w-15 items-center justify-center text-[#f6efe2] md:ml-4">
              <img src="/Logo.jpeg" alt="Logo" className="h-8 w-8 rounded-full object-contain md:h-10 md:w-10" style={{ display: "block" }} />
            </div>
            <div className="flex flex-col leading-tight ml-3 items-start">
              <span className="text-yellow-400 font-bold text-xl md:text-sm tracking-wide" style={{ fontFamily: "'Noto Sans Odia', sans-serif" }}>
                ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର
              </span>
              <span className="text-white/80 text-[9px] md:text-[15px] tracking-[0.12em] uppercase font-medium">
                Sarada Vidya Mandir
              </span>
            </div>
          </Link>

          <div className="hidden items-center gap-4 pl-20 md:flex md:ml-24">
            {navLinks.map((link) => {
              const isActive = normalizePath(pathname) === normalizePath(link.path);
              if (link.path === "/achievements") {
                return (
                  <div key={link.path} className="relative" onMouseEnter={() => { if (achCloseTimer.current) { clearTimeout(achCloseTimer.current); achCloseTimer.current = null; } setAchDropdownOpen(true); }} onMouseLeave={() => { if (achCloseTimer.current) clearTimeout(achCloseTimer.current); achCloseTimer.current = setTimeout(() => setAchDropdownOpen(false), 180); }}>
                    <Link
                      to={link.path}
                      onClick={handleNavClick}
                      className={`group relative flex items-center gap-1 px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] transition-colors duration-300 ${scrolled ? "text-[#f6efe2] hover:text-[#facc15]" : "text-[#f6efe2] hover:text-[#f2c56f]"}`}
                    >
                      {link.label}
                      <svg className="ml-2 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
                      <span
                        className={`absolute bottom-1 left-1 right-1 h-0.5 rounded transition-all duration-500 ease-in-out ${isActive ? "bg-[#facc15]" : (scrolled ? "bg-[#d4a64a]" : "bg-[#f2c56f]")} ${isActive ? "w-[calc(100%-0.5rem)] opacity-100" : "w-0 opacity-0 group-hover:w-[calc(100%-0.5rem)] group-hover:opacity-70"} group-hover:bg-[#facc15]`}
                        style={{ transitionProperty: "width, opacity" }}
                      />
                    </Link>

                    <div className={`absolute left-0 top-full mt-1 z-50 w-44 rounded ${achDropdownOpen ? "block" : "hidden"}`} onMouseEnter={() => { if (achCloseTimer.current) { clearTimeout(achCloseTimer.current); achCloseTimer.current = null; } setAchDropdownOpen(true); }} onMouseLeave={() => { if (achCloseTimer.current) clearTimeout(achCloseTimer.current); achCloseTimer.current = setTimeout(() => setAchDropdownOpen(false), 180); }}>
                      <div className="bg-[#ffffff] rounded shadow-lg py-2">
                        {achievementsSub.map((s) => (
                          <Link key={s.path} to={s.path} onClick={handleNavClick} className="block px-4 py-2 text-xs text-[#3a1117]">
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }
              if (link.path === "/media") {
                return (
                  <div key={link.path} className="relative" onMouseEnter={() => { if (mediaCloseTimer.current) { clearTimeout(mediaCloseTimer.current); mediaCloseTimer.current = null; } setMediaDropdownOpen(true); }} onMouseLeave={() => { if (mediaCloseTimer.current) clearTimeout(mediaCloseTimer.current); mediaCloseTimer.current = setTimeout(() => setMediaDropdownOpen(false), 180); }}>
                    <Link
                      to={link.path}
                      onClick={handleNavClick}
                      className={`group relative flex items-center gap-1 px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] transition-colors duration-300 ${scrolled ? "text-[#f6efe2] hover:text-[#d4a64a]" : "text-[#f6efe2] hover:text-[#f2c56f]"}`}
                    >
                      {link.label}
                      <svg className="ml-2 h-4 w-4 md:h-5 md:w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true"><path d="M5.23 7.21a.75.75 0 011.06.02L10 10.939l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"/></svg>
                      <span
                        className={`absolute bottom-1 left-1 right-1 h-0.5 rounded transition-all duration-500 ease-in-out ${isActive ? "bg-[#facc15]" : (scrolled ? "bg-[#d4a64a]" : "bg-[#f2c56f]")} ${isActive ? "w-[calc(100%-0.5rem)] opacity-100" : "w-0 opacity-0 group-hover:w-[calc(100%-0.5rem)] group-hover:opacity-70"} group-hover:bg-[#facc15]`}
                        style={{ transitionProperty: "width, opacity" }}
                      />
                    </Link>

                    <div className={`absolute left-0 top-full mt-1 z-50 w-44 rounded ${mediaDropdownOpen ? "block" : "hidden"}`} onMouseEnter={() => { if (mediaCloseTimer.current) { clearTimeout(mediaCloseTimer.current); mediaCloseTimer.current = null; } setMediaDropdownOpen(true); }} onMouseLeave={() => { if (mediaCloseTimer.current) clearTimeout(mediaCloseTimer.current); mediaCloseTimer.current = setTimeout(() => setMediaDropdownOpen(false), 180); }}>
                      <div className="bg-[#ffffff] rounded shadow-lg py-2">
                        {mediaSub.map((s) => (
                          <Link key={s.path} to={s.path} onClick={handleNavClick} className="block px-4 py-2 text-sm text-[#3a1117] hover:bg-[#f3f1ef]">
                            {s.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                  <Link
                  key={link.path}
                  to={link.path}
                  onClick={handleNavClick}
                  className={`group relative px-2 py-1 text-xs font-medium uppercase tracking-[0.06em] transition-colors duration-300 ${scrolled ? "text-[#f6efe2] hover:text-[#d4a64a]" : "text-[#f6efe2] hover:text-[#f2c56f]"}`}
                >
                  {link.label}
                  <span
                    className={`absolute bottom-1 left-1 right-1 h-0.5 rounded transition-all duration-500 ease-in-out ${isActive ? "bg-[#facc15]" : (scrolled ? "bg-[#d4a64a]" : "bg-[#f2c56f]")} ${isActive ? "w-[calc(100%-0.5rem)] opacity-100" : "w-0 opacity-0 group-hover:w-[calc(100%-0.5rem)] group-hover:opacity-70"} group-hover:bg-[#facc15]`}
                    style={{ transitionProperty: "width, opacity" }}
                  />
                </Link>
              );
            })}
          </div>

          <button
            className={`inline-flex items-center gap-2 border border-[#f6efe2]/35 px-2 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all duration-300 md:hidden ${scrolled ? "bg-[#2b0a14] text-[#f6efe2]" : "bg-[#f6efe2] text-[#2b0a14]"}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <span>{menuOpen ? "Close" : "Menu"}</span>
            <span className="relative h-4 w-4 shrink-0">
              <span className={`absolute left-0 top-1/2 block h-0.5 w-4 -translate-y-1.5 rounded transition-all duration-300 ${scrolled ? "bg-[#f6efe2]" : "bg-[#2b0a14]"} ${menuOpen ? "translate-y-0 rotate-45" : ""}`}></span>
              <span className={`absolute left-0 top-1/2 block h-0.5 w-4 rounded transition-all duration-300 ${scrolled ? "bg-[#f6efe2]" : "bg-[#2b0a14]"} ${menuOpen ? "opacity-0" : "opacity-100"}`}></span>
              <span className={`absolute left-0 top-1/2 block h-0.5 w-4 translate-y-1.5 rounded transition-all duration-300 ${scrolled ? "bg-[#f6efe2]" : "bg-[#2b0a14]"} ${menuOpen ? "translate-y-0 -rotate-45" : ""}`}></span>
            </span>
          </button>
        </div>
      </div>

      {menuOpen && createPortal(
        <div className="fixed inset-0 z-40 bg-black/40 backdrop-blur-md md:hidden" onClick={() => setMenuOpen(false)} aria-label="Close menu overlay" />,
        document.body
      )}

      <div
        className={`fixed right-0 top-0 z-50 h-full w-1/2 max-w-xs transform transition-transform duration-300 md:hidden ${menuOpen ? "translate-x-0" : "translate-x-full"}`}
        style={{ boxShadow: menuOpen ? "rgba(0,0,0,0.12) -4px 0px 24px" : undefined }}
        aria-hidden={!menuOpen}
      >
        <div className={`flex h-full flex-col border-l border-[#f6efe2]/15 bg-[#2b0a14] p-4`}>
          <div className="flex items-center justify-between pb-4">
            <div>
              <div className={`font-serif text-xl text-[#f6efe2]`}>Quick navigation</div>
              <div className={`mt-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#d4a64a]`}>Mobile menu</div>
            </div>
            <button className={`ml-2  bg-[#f6efe2] px-2 py-1 text-xs font-bold uppercase tracking-wider text-[#2b0a14]`} onClick={() => setMenuOpen(false)} aria-label="Close menu">Close</button>
          </div>

          <div className="mt-4 grid flex-1 grid-cols-1 gap-1">
                    {navLinks.map((link) => {
                  const isActive = normalizePath(pathname) === normalizePath(link.path);

                  if (link.path === "/achievements") {
                    return (
                      <div key={link.path}>
                        <button onClick={() => setMobileAchOpen(!mobileAchOpen)} className={`w-full flex items-center justify-between relative rounded px-2 py-2 text-left text-xs font-medium uppercase tracking-[0.06em] transition-all duration-300 bg-[#f6efe2] text-[#2b0a14] hover:bg-[#d4a64a]`}>
                          <span>{link.label}</span>
                          <span className="ml-2 text-lg md:text-xl font-bold">{mobileAchOpen ? '−' : '+'}</span>
                        </button>
                        {mobileAchOpen && (
                          <div className="mt-1 space-y-1">
                            {achievementsSub.map((s) => (
                              <Link
                                key={s.path}
                                to={s.path}
                                onClick={() => { handleNavClick(); setMobileAchOpen(false); }}
                                className={`ml-4 block rounded px-2 py-2 text-left text-xs font-medium uppercase tracking-[0.06em] transition-all duration-300 ${normalizePath(pathname) === normalizePath(s.path) ? 'bg-[#d4a64a] text-white' : 'bg-[#f6efe2] text-[#2b0a14] hover:bg-[#d4a64a]'}`}
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  if (link.path === "/media") {
                    return (
                      <div key={link.path}>
                        <button onClick={() => setMobileMediaOpen(!mobileMediaOpen)} className={`w-full flex items-center justify-between relative rounded px-2 py-2 text-left text-xs font-medium uppercase tracking-[0.06em] transition-all duration-300 bg-[#f6efe2] text-[#2b0a14] hover:bg-[#d4a64a]`}>
                          <span>{link.label}</span>
                          <span className="ml-2 text-lg md:text-xl font-bold">{mobileMediaOpen ? '−' : '+'}</span>
                        </button>
                        {mobileMediaOpen && (
                          <div className="mt-1 space-y-1">
                            {mediaSub.map((s) => (
                              <Link
                                key={s.path}
                                to={s.path}
                                onClick={() => { handleNavClick(); setMobileMediaOpen(false); }}
                                className={`ml-4 block rounded px-2 py-2 text-left text-xs font-medium uppercase tracking-[0.06em] transition-all duration-300 ${normalizePath(pathname) === normalizePath(s.path) ? 'bg-[#d4a64a] text-white' : 'bg-[#f6efe2] text-[#2b0a14] hover:bg-[#d4a64a]'}`}
                              >
                                {s.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    );
                  }

                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      onClick={handleNavClick}
                      className={`relative rounded px-2 py-2 text-left text-xs font-medium uppercase tracking-[0.06em] transition-all duration-300 ${isActive ? 'bg-[#d4a64a] text-white' : 'bg-[#f6efe2] text-[#2b0a14] hover:bg-[#d4a64a] hover:text-[#2b0a14]'}`}
                    >
                      {link.label}
                      <span className={`hidden md:block absolute bottom-1 left-1 right-1 h-0.5 rounded transition-all duration-500 ease-in-out bg-[#d4a64a] ${isActive ? "w-[calc(100%-0.5rem)] opacity-100" : "w-0 opacity-0 group-hover:w-[calc(100%-0.5rem)] group-hover:opacity-70"}`} style={{ transitionProperty: "width, opacity" }} />
                    </Link>
                  );
                })}
          </div>
        </div>
      </div>
    </nav>
  );
}
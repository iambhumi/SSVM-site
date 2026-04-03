// src/components/Navbar.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const navItems = [
  { label: "Home", path: "/" },
  {
    label: "About", path: "/about",
   
  },
  {
    label: "Academics / Scholastic",
    dropdown: [
      { label: "State Board – Curriculum", path: "/curriculum" },
    ],
  },
  {
    label: "Achievements",
    dropdown: [
      { label: "Students' Achievements", path: "/student-achievements" },
      { label: "School's Achievements", path: "/school-achievements" },
    ],
  },
  { label: "Facility", path: "/facility" },
  { label: "Faculty", path: "/faculty" },
  { label: "Student Alumni", path: "/alumni" },
  {
    label: "Media / Bulletin Board",
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

  return (
    <nav className="bg-red-900 w-full shadow-md">
      <div className="max-w-11xl mx-auto px-10 flex items-center justify-between h-20">
      {/* Logo + School Name */}
      <div className="navbar-brand">
        <img src="/Logo.jpeg" alt="School Logo" className="logo" />
        <div className="school-name">
          <span className="name-odia">ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର</span>
          <span className="name-english">Sarada Vidya Mandir</span>
        </div>
      </div>

      {/* Hamburger */}
      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
        ☰
      </button>

      {/* Nav Links */}
      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <li
            key={item.label}
            className="nav-item"
            onMouseEnter={() => setActiveDropdown(item.label)}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            {item.dropdown ? (
              <>
                <span className="nav-link dropdown-trigger">
                  {item.label} ▾
                </span>
                {activeDropdown === item.label && (
                  <ul className="dropdown">
                    {item.dropdown.map((sub) => (
                      <li key={sub.label}>
                        <Link to={sub.path}>{sub.label}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </>
            ) : (
              <Link to={item.path} className="nav-link">
                {item.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
      </div>
    </nav>
  );
}

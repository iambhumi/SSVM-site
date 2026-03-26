// src/components/Footer.jsx
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Home", path: "/" },
  { label: "About the School", path: "/about" },
  { label: "Vision & Mission", path: "/vision-mission" },
  { label: "Principal's Message", path: "/principal-message" },
  { label: "Facilities", path: "/facilities" },
  { label: "Faculty", path: "/faculty" },
];

const academicLinks = [
  { label: "State Board Curriculum", path: "/curriculum" },
  { label: "Students' Achievements", path: "/student-achievements" },
  { label: "School's Achievements", path: "/school-achievements" },
  { label: "Student Alumni", path: "/alumni" },
  { label: "Events", path: "/events" },
  { label: "Photo Album", path: "/photo-album" },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">

      {/* ── TOP BANNER STRIP ── */}
      <div
        className="w-full py-6 px-6 flex flex-col md:flex-row items-center
                   justify-between gap-4"
        style={{ backgroundColor: "#8B0000" }}
      >
        <div className="flex items-center gap-4">
          <img
            src="/Logo.jpeg"
            alt="School Logo"
            className="w-14 h-14 rounded-full border-2 border-yellow-400
                       object-cover"
          />
          <div>
            <p className="text-yellow-400 font-bold text-lg leading-tight">
              ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର
            </p>
            <p className="text-white text-sm tracking-widest uppercase">
              Sarada Vidya Mandir
            </p>
          </div>
        </div>
        <p className="text-yellow-200 italic text-sm text-center md:text-right">
          "ज्ञानं परमं बलम् — Knowledge is the Ultimate Power"
        </p>
      </div>

      {/* ── MAIN FOOTER COLUMNS ── */}
      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1
                      sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Column 1 — About */}
        <div>
          <h4 className="text-yellow-400 font-bold text-base uppercase
                         tracking-widest mb-5 border-b border-yellow-400/30 pb-2">
            About Us
          </h4>
          <p className="text-gray-400 text-sm leading-relaxed">
            Sarada Vidya Mandir is a trusted Odia-medium school in Bhadrak,
            Odisha dedicated to nurturing students with quality education,
            cultural values and holistic development since its establishment.
          </p>
          {/* Social Icons */}
          <div className="flex gap-3 mt-5">
            <a href="#" aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-yellow-400
                         hover:text-red-900 flex items-center justify-center
                         text-sm transition-all duration-200">
              f
            </a>
            <a href="#" aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-yellow-400
                         hover:text-red-900 flex items-center justify-center
                         text-sm transition-all duration-200">
              ▶
            </a>
            <a href="#" aria-label="WhatsApp"
              className="w-9 h-9 rounded-full bg-white/10 hover:bg-yellow-400
                         hover:text-red-900 flex items-center justify-center
                         text-sm transition-all duration-200">
              💬
            </a>
          </div>
        </div>

        {/* Column 2 — Quick Links */}
        <div>
          <h4 className="text-yellow-400 font-bold text-base uppercase
                         tracking-widest mb-5 border-b border-yellow-400/30 pb-2">
            Quick Links
          </h4>
          <ul className="space-y-2">
            {quickLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-yellow-400 text-sm
                             transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-yellow-600 text-xs">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 — Academics & Media */}
        <div>
          <h4 className="text-yellow-400 font-bold text-base uppercase
                         tracking-widest mb-5 border-b border-yellow-400/30 pb-2">
            Academics & Media
          </h4>
          <ul className="space-y-2">
            {academicLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.path}
                  className="text-gray-400 hover:text-yellow-400 text-sm
                             transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="text-yellow-600 text-xs">›</span>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 — Contact Info */}
        <div>
          <h4 className="text-yellow-400 font-bold text-base uppercase
                         tracking-widest mb-5 border-b border-yellow-400/30 pb-2">
            Contact Us
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <span className="text-yellow-400 text-base mt-0.5">📍</span>
              <span>
                SARADA VIDYAMANDIR ,<br />
                AT/PO :BHANDARIPOKHARI <br />
                P.S.: BHANDARIPOKHARI <br/>
                DIST :BHADRAK <br/>
                ODISHA <br/>
                PIN :756120   
              </span>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400 text-base">📞</span>
              <a href="tel:+91XXXXXXXXXX"
                className="hover:text-yellow-400 transition-colors duration-200">
                +91 XXXXX XXXXX
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400 text-base">✉️</span>
              <a href="mailto:info@saradavidyamandir.in"
                className="hover:text-yellow-400 transition-colors duration-200 break-all">
                info@saradavidyamandir.in
              </a>
            </li>
            <li className="flex items-center gap-3">
              <span className="text-yellow-400 text-base">⏰</span>
              <span>Mon – Sat: 8:00 AM – 2:00 PM</span>
            </li>
          </ul>
        </div>
      </div>

      {/* ── BOTTOM COPYRIGHT BAR ── */}
      <div className="border-t border-white/10 py-5 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row
                        items-center justify-between gap-2 text-xs text-gray-500">
          <p>
            © 2026 Sarada Vidya Mandir, Bhadrak. All Rights Reserved.
          </p>
          <p>
            Designed & Developed by{" "}
            <span className="text-yellow-400 font-semibold">SwiftRise</span>
          </p>
        </div>
      </div>

    </footer>
  );
}

// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { ArrowUp } from "@phosphor-icons/react";

const quickLinks = [
  { label: "Home",                path: "/"                  },
  { label: "About the School",    path: "/about"             },
  
  { label: "Facilities",          path: "/facilities"        },
  { label: "Faculty",             path: "/faculty"           },
];

const academicLinks = [
  { label: "State Board Curriculum", path: "/curriculum"           },
  { label: "Students' Achievements", path: "/student-achievements" },
  
  { label: "Events",                 path: "/events"               },
];

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <>
      {/* ── STATIC BANNER ABOVE FOOTER ── */}
      <div
        className="w-full py-8 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #6b0000 0%, #8B0000 50%, #b30000 100%)",
        }}
      >
        {/* Subtle dot overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <p className="relative z-10 text-yellow-400 text-xl md:text-3xl font-bold tracking-wide">
          ଜ୍ଞାନ ହିଁ ପରମ ଶକ୍ତି
        </p>
        <p className="relative z-10 text-white/70 text-sm italic mt-1">
          — Knowledge is the Ultimate Power
        </p>
      </div>

      {/* ── MAIN FOOTER ── */}
      <footer className="bg-gray-900 text-gray-300 relative">

        {/* Scroll to Top Button */}
        <button
          onClick={scrollToTop}
          className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10
                     bg-yellow-400 hover:bg-yellow-300 text-red-900 rounded-full
                     flex items-center justify-center shadow-lg
                     hover:scale-110 transition-all duration-200 z-20"
          aria-label="Go to top"
        >
          <ArrowUp size={20} weight="bold" />
        </button>

        {/* ── 4 COLUMNS ── */}
        <div className="max-w-6xl mx-auto px-6 pt-14 pb-10 grid grid-cols-1
                        sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Col 1 — Logo */}
          <div className="flex flex-col items-center text-center gap-4">
          <Link 
            to="/"
            className="flex flex-col items-center gap-3 group"
            aria-label="Go to Home"
            style={{ position: "relative", zIndex: 10 }}
          >
            <img
              src="/Logo.jpeg"
              alt="Sarada Vidya Mandir Logo"
              className="w-24 h-24 rounded-full border-4 border-yellow-400
                         object-cover shadow-lg group-hover:scale-105
                 transition-transform duration-200"
            />
            <div>
              <p className="text-yellow-400 font-bold text-lg leading-tight">
                ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର
              </p>
              <p className="text-white text-xs tracking-widest uppercase mt-1">
                Sarada Vidya Mandir
              </p>
              <p className="text-gray-500 text-xs mt-2">Bhadrak, Odisha</p>
            </div>
          </Link>
            {/* Social Icons */}
            <div className="flex gap-3">
            </div>
          </div>

          {/* Col 2 — Quick Links */}
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

          {/* Col 3 — Academics & Media */}
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

          {/* Col 4 — Contact */}
          <div>
            <h4 className="text-yellow-400 font-bold text-base uppercase
                           tracking-widest mb-5 border-b border-yellow-400/30 pb-2">
              Contact Us
            </h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <span className="text-yellow-400 mt-0.5">📍</span>
                <span>
              
                  SARADA VIDYAMANDIR <br />
                  AT/PO :BHANDARIPOKHARI <br/>
                  DIST :BHADRAK <br/>
                  ODISHA <br/>
                  PIN :756120<br/>
                </span>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400">📞</span>
                <a
                  href="tel:8895713070, 9556740283, 7847955317"
                  className="hover:text-yellow-400 transition-colors duration-200"
                >
                  +91 8895713070, +91 9556740283, +91 7847955317
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400">✉️</span>
                <a
                  href="saradavidyamandir@gmail.com"
                  className="hover:text-yellow-400 transition-colors duration-200
                             break-all text-xs"
                >
                  saradavidyamandir@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <span className="text-yellow-400">⏰</span>
                <span>Mon – Sat: 10:00 AM – 4:00 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ── COPYRIGHT BAR ── */}
        
<p className="text-gray-400 text-xs mt-1 text-center">
  © {new Date().getFullYear()} All rights reserved by{" "}
  <a href="https://swiftrise.in" target="_blank" rel="noopener noreferrer"
     className="text-yellow-400 hover:text-yellow-300 underline underline-offset-2 transition-colors duration-150">
    SwiftRise
  </a>
</p>

      </footer>
    </>
  );
}
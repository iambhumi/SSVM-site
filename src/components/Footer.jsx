// src/components/Footer.jsx
import { Link } from "react-router-dom";
import { EnvelopeSimple, MapPin, Phone } from "@phosphor-icons/react";

const quickLinks = [
  { label: "Home",                path: "/"                  },
  { label: "About the School",    path: "/about"             },
  
  { label: "Facility",          path: "/facility"        },
  { label: "Faculty",             path: "/faculty"           },
];

const academicLinks = [
  { label: "Students' Achievements", path: "/student-achievements" },
  
  { label: "Events",                 path: "/events"               },
  {label : "Rules & Regulations", path: "/school-rules"         },
];


export default function Footer() {
  const ScrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

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
          
        ଆଦର୍ଶ ଓ ନୈତିକ ଶିକ୍ଷାର ମନ୍ଦିର
        </p>
        <p className="relative z-10 text-white/70 text-sm italic mt-1">
          - A temple of ideal and moral education 
        </p>
      </div>

      {/* ── MAIN FOOTER ── */}
      <footer className="bg-gray-900 text-gray-300 relative">

        

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
            {/* Right side — Rules & Regulations link */}
  
          </div>

          
        {/* Col 4 — Contact Us */}
<div>
  <h4 className="text-yellow-400 font-bold text-base uppercase
                 tracking-widest mb-5 border-b border-yellow-400/30 pb-2
                 font-sans">
    Contact Us
  </h4>
  <ul className="space-y-4 font-sans">

    {/* Address */}
    <li className="flex items-start gap-3">
      <MapPin size={18} weight="bold" className="text-white mt-0.5" aria-hidden="true" />
      <span className="text-gray-400 text-sm leading-relaxed tracking-normal">
        Sarada Vidya Mandir<br />
        AT/PO: Bhandaripokhari<br />
        Dist: Bhadrak, Odisha<br />
        PIN: 756120
      </span>
    </li>

    {/* Phone */}
    <li className="flex items-start gap-3">
      <Phone size={18} weight="bold" className="text-white-400 mt-0.5" aria-hidden="true" />
      <div className="flex flex-col gap-1">
        <a href="tel:+918895713070"
           className="text-gray-400 hover:text-yellow-400 text-sm
                      tracking-normal transition-colors duration-200">
          +91 88957 13070
        </a>
        <a href="tel:+919556740283"
           className="text-gray-400 hover:text-yellow-400 text-sm
                      tracking-normal transition-colors duration-200">
          +91 95567 40283
        </a>
        <a href="tel:+917847955317"
           className="text-gray-400 hover:text-yellow-400 text-sm
                      tracking-normal transition-colors duration-200">
          +91 78479 55317
        </a>
      </div>
    </li>

    {/* Email */}
    <li className="flex items-start gap-3">
      <EnvelopeSimple size={18} weight="bold" className="text-white-400 mt-0.5" aria-hidden="true" />
      <a
        href="mailto:saradavidyamandir@gmail.com"
        className="text-gray-400 hover:text-yellow-400 text-sm
                   tracking-normal transition-colors duration-200 break-all"
      >
        saradavidyamandir@gmail.com
      </a>
    </li>

   

  </ul>
</div>
        </div>

        {/* ── COPYRIGHT BAR ── */}
<hr className="border-gray-700 my-4" />
<div className="flex flex-col sm:flex-row items-center justify-between
                gap-2 px-6 pb-6 text-xs text-gray-400">

  {/* Left side — copyright */}
  <p>
    © {new Date().getFullYear()} All rights reserved by{" "}
    <a
      href="https://swiftrise.in"
      target="_blank"
      rel="noopener noreferrer"
      className="text-yellow-400 hover:text-yellow-300 underline
                 underline-offset-2 transition-colors duration-150"
    >
      SwiftRise Solution Pvt.Ltd.
    </a>
  </p>

  

</div>

        
      </footer>
    </>
  );
}
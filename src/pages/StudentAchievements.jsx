// src/pages/StudentAchievements.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import { Medal, Star, Trophy, ArrowRight } from "@phosphor-icons/react";

const years = [
  {
    label:   "2021 – 22",
    short:   "2122",
    banner:  "/21-22.jpeg",
    toppers: "14 Students",
    pass:    "97%",
    highest: "93.7%",
  },
  {
    label:   "2022 – 23",
    short:   "2223",
    banner:  "/22-23.jpeg",
    toppers: "12 Students",
    pass:    "98%",
    highest: "97%",
  },
  {
    label:   "2023 – 24",
    short:   "2324",
    banner:  "/23-24.jpeg",
    toppers: "10 Students",
    pass:    "95%",
    highest: "94.75%",
  },
];

const milestones = [
  { Icon: Trophy, value: "3+",    label: "Years of Excellence"        },
  { Icon: Medal,  value: "98%",   label: "Best Pass Rate"             },
  { Icon: Star,   value: "50+",   label: "Matric Toppers Featured"    },
  { Icon: Medal,  value: "100%",  label: "Class 5 Scholarship Result" },
];

export default function StudentAchievements() {
  const [active, setActive] = useState(0);

  return (
    <div className="w-full font-sans">

      {/* ── PAGE HERO ── */}
      <section
        className="w-full py-16 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #6b0000 0%, #8B0000 60%, #b30000 100%)",
        }}
      >
        {/* Dot overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 max-w-2xl mx-auto">
          <p className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-2">
            ଶୈକ୍ଷିକ ସଫଳତା
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-3">
            Students Achievements
          </h1>
          <div className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mb-4" />
          <p className="text-red-200 text-sm md:text-base">
            Celebrating the academic excellence of our Matric toppers
            across the years — their hard work, our pride.
          </p>
        </div>
      </section>

      {/* ── STATS STRIP ── */}
      <section className="bg-yellow-400 py-8 px-4">
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {milestones.map((m) => (
            <div
              key={m.label}
              className="flex flex-col items-center gap-1
                         hover:scale-105 transition-transform duration-200"
            >
              <m.Icon size={34} weight="duotone" color="#7f1d1d" />
              <p className="text-red-900 text-2xl font-extrabold">{m.value}</p>
              <p className="text-red-800 text-xs font-medium">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── YEAR TABS + BANNER ── */}
      <section className="bg-gray-50 py-14 px-4">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-center text-red-900 text-2xl md:text-3xl font-bold mb-2">
            Matric Toppers — Year Wise
          </h2>
          <p className="text-center text-gray-500 text-sm mb-8">
            Select an academic year to view the topper board
          </p>

          {/* Year Tabs */}
          <div className="flex justify-center gap-3 flex-wrap mb-8">
            {years.map((y, i) => (
              <button
                key={y.short}
                onClick={() => setActive(i)}
                className={`px-6 py-2 rounded-full text-sm font-semibold
                            border-2 transition-all duration-200
                            ${active === i
                              ? "bg-red-900 border-red-900 text-yellow-400 scale-105 shadow-md"
                              : "bg-white border-red-200 text-red-800 hover:border-red-800"
                            }`}
              >
                {y.label}
              </button>
            ))}
          </div>

          {/* Quick stats for selected year */}
          <div className="flex justify-center gap-4 flex-wrap mb-6">
            <span className="bg-red-50 border border-red-100 text-red-800
                             text-xs font-semibold px-4 py-1 rounded-full">
              🏅 Toppers Featured: {years[active].toppers}
            </span>
            <span className="bg-yellow-50 border border-yellow-200 text-yellow-800
                             text-xs font-semibold px-4 py-1 rounded-full">
              📊 Pass Rate: {years[active].pass}
            </span>
            <span className="bg-green-50 border border-green-100 text-green-800
                             text-xs font-semibold px-4 py-1 rounded-full">
              ⭐ Highest Score: {years[active].highest}
            </span>
          </div>

          {/* Banner Image */}
          <div className="bg-white rounded-2xl shadow-md border border-gray-100
                          overflow-hidden transition-all duration-300">

            {/* Year label bar */}
            <div
              className="w-full py-3 px-6 flex items-center justify-between"
              style={{ backgroundColor: "#8B0000" }}
            >
              <p className="text-yellow-400 font-bold text-sm">
                Academic Year: {years[active].label}
              </p>
              <p className="text-white/70 text-xs">
                Sarada Vidya Mandir, Bhadrakm
              </p>
            </div>

            {/* Actual banner */}
            <img
              src={years[active].banner}
              alt={`Matric Toppers ${years[active].label}`}
              className="w-full object-contain"
              style={{ maxHeight: "80vh" }}
            />
          </div>

          {/* Note */}
          <p className="text-center text-gray-400 text-xs mt-4 italic">
            * Students shown are A-1 grade achievers in Matric (Class 10) Board Examinations
          </p>
        </div>
      </section>

      {/* ── BOTTOM CTA ── */}
      <section className="bg-white py-12 px-6 text-center border-t border-gray-100">
        <h3 className="text-red-900 font-bold text-xl mb-2">
          Proud of Our Students!
        </h3>
        <p className="text-gray-500 text-sm mb-6 max-w-md mx-auto">
          These achievements reflect the dedication of our students,
          parents and teachers working together as one family.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            to="/school-achievements"
            className="inline-flex items-center gap-2 bg-red-900 text-yellow-400
                       font-semibold py-2 px-6 rounded-full hover:bg-red-800
                       transition-all duration-200"
          >
            View School Achievements
            <ArrowRight size={16} weight="bold" />
          </Link>
          <Link
            to="/photo-album"
            className="inline-flex items-center gap-2 border-2 border-red-900
                       text-red-900 font-semibold py-2 px-6 rounded-full
                       hover:bg-red-900 hover:text-yellow-400
                       transition-all duration-200"
          >
            Photo Album
            <ArrowRight size={16} weight="bold" />
          </Link>
        </div>
      </section>

    </div>
  );
}
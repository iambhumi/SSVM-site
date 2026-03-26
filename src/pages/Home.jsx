// src/pages/Home.jsx
import { Link } from "react-router-dom";

const notices = [
  "📢 Admissions open for 2026-27 session",
  "🏆 Our student cleared NMMS Scholarship 2025",
  "📅 Annual Day celebration on 5th April 2026",
  "📋 Class 10 Board Exam results declared — 98% pass rate!",
  "🎨 Art & Culture fest on 10th April 2026",
];

const stats = [
  { label: "Years of Excellence", value: "30+", icon: "🏛️" },
  { label: "Students Enrolled", value: "1200+", icon: "👩‍🎓" },
  { label: "Qualified Faculty", value: "45+", icon: "👨‍🏫" },
  { label: "Alumni Across India", value: "5000+", icon: "🌍" },
];

const quickLinks = [
  { label: "Notices", path: "/notices", icon: "📋", desc: "Latest circulars & updates" },
  { label: "Photo Album", path: "/photo-album", icon: "🖼️", desc: "Events & moments gallery" },
  { label: "Faculty", path: "/faculty", icon: "👨‍🏫", desc: "Meet our teachers" },
  { label: "Contact Us", path: "/contact", icon: "📞", desc: "Get in touch with us" },
];

const features = [
  {
    icon: "📚",
    title: "Quality Education",
    desc: "State Board curriculum enriched with NCERT books, AI & Robotics from early grades.",
  },
  {
    icon: "🏅",
    title: "Award-Winning Students",
    desc: "Consistent top performers in NMMS, NTSE and district-level competitions.",
  },
  {
    icon: "🎭",
    title: "Cultural Activities",
    desc: "Annual cultural fests, sports meets, debates and art exhibitions.",
  },
  {
    icon: "🌱",
    title: "Value-Based Learning",
    desc: "Grounded in Indian values and Odia culture with modern educational practices.",
  },
  {
    icon: "💻",
    title: "Smart Classrooms",
    desc: "Technology-enabled classrooms for interactive and engaging learning.",
  },
  {
    icon: "🤝",
    title: "Parent Engagement",
    desc: "Regular PTMs, notices and open communication between school and parents.",
  },
];

const latestEvents = [
  {
    date: "05 Apr",
    title: "Annual Day Celebration",
    desc: "Cultural performances, prize distribution & more.",
  },
  {
    date: "10 Apr",
    title: "Art & Culture Fest",
    desc: "Showcasing student talent in art, music and dance.",
  },
  {
    date: "20 Apr",
    title: "Parent-Teacher Meeting",
    desc: "Semester 2 PTM for all classes — 9AM to 1PM.",
  },
];

export default function Home() {
  return (
    <div className="w-full font-sans">

      {/* ── HERO SECTION ── */}
      <section
        className="relative w-full min-h-screen flex flex-col
                   items-center justify-center text-center"
        style={{
          background: "linear-gradient(135deg, #6b0000 0%, #8B0000 50%, #b30000 100%)",
        }}
      >
        {/* Subtle dot pattern overlay */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "30px 30px",
          }}
        />

        <div className="relative z-10 px-6 flex flex-col items-center gap-5
                        max-w-3xl mx-auto">
          {/* Logo */}
          <img
            src="/Logo.jpeg"
            alt="Sarada Vidya Mandir Logo"
            className="w-32 h-32 rounded-full border-4 border-yellow-400
                       object-cover object-center shadow-2xl"
          />

          {/* Odia Name */}
          <h1 className="text-yellow-400 text-3xl md:text-5xl font-bold
                         tracking-wide drop-shadow-lg leading-snug">
            ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର
          </h1>

          {/* English Name */}
          <h2 className="text-white text-xl md:text-3xl font-semibold
                         tracking-widest uppercase">
            Sarada Vidya Mandir
          </h2>

          {/* Divider */}
          <div className="w-24 h-1 bg-yellow-400 rounded-full" />

          {/* Location + affiliation */}
          <p className="text-gray-300 text-sm md:text-base tracking-wide">
            📍 Bhadrak, Odisha &nbsp;|&nbsp; Odia Medium School
            &nbsp;|&nbsp; Est. 1995
          </p>

          {/* Tagline */}
          <p className="text-yellow-200 italic text-base md:text-xl mt-1
                        font-medium">
            "ज्ञानं परमं बलम् — Knowledge is the Ultimate Power"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <Link
              to="/notices"
              className="bg-yellow-400 text-red-900 font-bold py-3 px-8
                         rounded-full hover:bg-yellow-300 transition-all
                         shadow-lg text-sm md:text-base hover:scale-105
                         duration-200"
            >
              📋 View Notices
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white font-semibold
                         py-3 px-8 rounded-full hover:bg-white
                         hover:text-red-900 transition-all text-sm
                         md:text-base duration-200 hover:scale-105"
            >
              Know More →
            </Link>
          </div>
        </div>

        {/* Scroll down indicator */}
        <div className="absolute bottom-8 flex flex-col items-center
                        gap-1 text-yellow-300 opacity-70">
          <p className="text-xs tracking-widest uppercase">Scroll Down</p>
          <span className="text-xl animate-bounce">↓</span>
        </div>
      </section>

      {/* ── MARQUEE NOTICE BAR ── */}
      <div className="bg-red-800 text-yellow-300 py-2 overflow-hidden
                      whitespace-nowrap text-sm font-medium">
        <div className="animate-marquee inline-block">
          {notices.map((n, i) => (
            <span key={i} className="mx-10">
              {n}
            </span>
          ))}
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <section className="bg-yellow-400 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4
                        gap-6 text-center">
          {stats.map((s) => (
            <div
              key={s.label}
              className="flex flex-col items-center gap-1
                         hover:scale-105 transition-transform duration-200"
            >
              <span className="text-4xl">{s.icon}</span>
              <p className="text-red-900 text-3xl font-extrabold">{s.value}</p>
              <p className="text-red-800 text-sm font-medium">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── PRINCIPAL MESSAGE ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row
                        items-center gap-10">
          <div className="flex-shrink-0 flex flex-col items-center gap-3">
            <div
              className="w-40 h-40 rounded-full border-4 border-red-800
                          bg-gray-100 flex items-center justify-center
                          text-6xl shadow-lg overflow-hidden"
            >
              {/* Replace with <img src="/principal.jpg" ... /> when photo available */}
              👩‍🏫
            </div>
            <p className="text-red-900 font-bold text-base">Principal Name</p>
            <p className="text-gray-500 text-xs">
              Sarada Vidya Mandir, Bhadrak
            </p>
          </div>

          <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-800
                          shadow-sm">
            <h3 className="text-red-900 text-2xl font-bold mb-4">
              🌸 Principal's Message
            </h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base
                          italic">
              "Welcome to Sarada Vidya Mandir — a place where young minds are
              nurtured with values, knowledge, and our rich Odia culture. We
              believe every child is unique and our mission is to empower each
              student to reach their highest potential through quality
              education rooted in our traditions."
            </p>
            <Link
              to="/principal-message"
              className="inline-block mt-5 text-red-800 font-semibold
                         text-sm hover:underline"
            >
              Read Full Message →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-red-900 text-3xl font-bold mb-2">
            Why Choose Us
          </h2>
          <p className="text-center text-gray-500 text-sm mb-10">
            Building tomorrow's leaders with values rooted in Odisha's culture
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-white rounded-xl p-6 shadow-sm border
                           border-gray-100 hover:shadow-md hover:border-red-300
                           transition-all duration-200 hover:-translate-y-1"
              >
                <span className="text-4xl">{f.icon}</span>
                <h4 className="text-red-900 font-bold mt-3 mb-2 text-base">
                  {f.title}
                </h4>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── UPCOMING EVENTS ── */}
      <section className="bg-red-900 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-yellow-400 text-3xl font-bold mb-2">
            Upcoming Events
          </h2>
          <p className="text-center text-red-200 text-sm mb-10">
            Stay up to date with school activities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestEvents.map((e) => (
              <div
                key={e.title}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border
                           border-white/20 hover:bg-white/20 transition-all
                           duration-200"
              >
                <div
                  className="inline-block bg-yellow-400 text-red-900
                               font-bold text-sm px-3 py-1 rounded-full mb-4"
                >
                  📅 {e.date}
                </div>
                <h4 className="text-white font-bold text-base mb-2">
                  {e.title}
                </h4>
                <p className="text-red-200 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link
              to="/events"
              className="inline-block border-2 border-yellow-400 text-yellow-400
                         font-semibold py-2 px-8 rounded-full hover:bg-yellow-400
                         hover:text-red-900 transition-all duration-200"
            >
              View All Events →
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="bg-white py-14 px-6">
        <h2 className="text-center text-red-900 text-3xl font-bold mb-2">
          Quick Access
        </h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          Everything you need, just one click away
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickLinks.map((ql) => (
            <Link
              key={ql.label}
              to={ql.path}
              className="flex flex-col items-center bg-gray-50 border
                         border-gray-200 rounded-2xl py-7 px-4 shadow-sm
                         hover:shadow-md hover:border-red-800
                         hover:-translate-y-1 transition-all duration-200
                         text-center"
            >
              <span className="text-4xl mb-3">{ql.icon}</span>
              <span className="text-red-900 font-bold text-sm">{ql.label}</span>
              <span className="text-gray-400 text-xs mt-1">{ql.desc}</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}

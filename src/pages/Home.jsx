// src/pages/Home.jsx
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// ── Slideshow images (place in public/images/)
const slides = [
  {
    image: "/School1.jpeg",
    caption: "Welcome to Sarada Vidya Mandir",
    sub: "Nurturing Minds, Building Futures",
  },
  {
    image: "/School2.jpeg",
    caption: "Excellence in Education",
    sub: "Quality Odia-medium learning since 2002",
  },
  {
    image: "/School3.jpg",
    caption: "Celebrating Culture & Talent",
    sub: "Annual fests, arts and co-curricular activities",
  },
  {
    image: "/School4.jpg",
    caption: "Sports & Fitness",
    sub: "Holistic development beyond the classroom",
  },
  {
    image: "/School5.jpg",
    caption: "Values & Discipline",
    sub: "Rooted in Indian tradition and Odia heritage",
  },
];

const notices = [
  "📢 Admissions open for 2026-27 session",
  "🏆 Our student cleared NMMS Scholarship 2025",
  "📅 Annual Day celebration on 5th April 2026",
  "📋 Class 10 Board Exam — 98% pass rate!",
  "🎨 Art & Culture Fest on 10th April 2026",
];

const stats = [
  { label: "Years of Excellence", value: "20+", icon: "🏛️" },
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
  { icon: "📚", title: "Quality Education", desc: "State Board curriculum enriched with NCERT books, AI & Robotics from early grades." },
  { icon: "🏅", title: "Award-Winning Students", desc: "Consistent top performers in NMMS, NTSE and district-level competitions." },
  { icon: "🎭", title: "Cultural Activities", desc: "Annual cultural fests, sports meets, debates and art exhibitions." },
  { icon: "🌱", title: "Value-Based Learning", desc: "Grounded in Indian values and Odia culture with modern educational practices." },
  { icon: "🤝", title: "Parent Engagement", desc: "Regular PTMs, notices and open communication between school and parents." },
];

const latestEvents = [
  { date: "05 Apr", title: "Annual Day Celebration", desc: "Cultural performances, prize distribution & more." },
  { date: "10 Apr", title: "Art & Culture Fest", desc: "Showcasing student talent in art, music and dance." },
  { date: "20 Apr", title: "Parent-Teacher Meeting", desc: "Semester 2 PTM for all classes — 9AM to 1PM." },
];

export default function Home() {
  const [current, setCurrent] = useState(0);

  // Auto-advance every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index) => setCurrent(index);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  const next = () => setCurrent((prev) => (prev + 1) % slides.length);

  return (
    <div className="w-full font-sans">

      {/* ── HERO SLIDESHOW ── */}
      <section className="relative w-full min-h-screen overflow-hidden">

        {/* Slides */}
        {slides.map((slide, i) => (
          <div
            key={i}
            className="absolute inset-0 transition-opacity duration-1000 ease-in-out"
            style={{
              opacity: i === current ? 1 : 0,
              zIndex: i === current ? 1 : 0,
              backgroundImage: `url(${slide.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              // Fallback gradient if image not loaded
              backgroundColor: "#8B0000",
            }}
          >
            {/* Dark overlay with maroon tint — blends with your theme */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(80,0,0,0.55) 0%, rgba(40,0,0,0.75) 100%)",
              }}
            />
          </div>
        ))}

        {/* Content on top of slides */}
        <div className="relative z-10 flex flex-col items-center justify-center
                        min-h-screen text-center px-6 gap-5 max-w-3xl mx-auto">

          {/* Logo */}
          <img
            src="/Logo.jpeg"
            alt="Sarada Vidya Mandir Logo"
            className="w-28 h-28 rounded-full border-4 border-yellow-400
                       object-cover shadow-2xl"
          />

          {/* Odia Name */}
          <h1 className="text-yellow-400 text-3xl md:text-5xl font-bold
                         tracking-wide drop-shadow-lg">
            ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର
          </h1>

          {/* English Name */}
          <h2 className="text-white text-xl md:text-3xl font-semibold
                         tracking-widest uppercase">
            Sarada Vidya Mandir
          </h2>

          <div className="w-24 h-1 bg-yellow-400 rounded-full" />

          {/* Dynamic slide caption */}
          <div className="transition-all duration-700">
            <p className="text-yellow-200 text-lg md:text-2xl font-semibold italic">
              "{slides[current].caption}"
            </p>
            <p className="text-gray-300 text-sm md:text-base mt-1">
              {slides[current].sub}
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-2 justify-center">
            <Link
              to="/notices"
              className="bg-yellow-400 text-red-900 font-bold py-3 px-8
                         rounded-full hover:bg-yellow-300 hover:scale-105
                         transition-all duration-200 shadow-lg text-sm md:text-base"
            >
              📋 View Notices
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white font-semibold
                         py-3 px-8 rounded-full hover:bg-white hover:text-red-900
                         hover:scale-105 transition-all duration-200 text-sm md:text-base"
            >
              Know More →
            </Link>
          </div>
        </div>

        {/* ← → Arrow Controls */}
        <button
          onClick={prev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20
                     bg-black/40 hover:bg-yellow-400 text-white
                     hover:text-red-900 w-10 h-10 rounded-full text-xl
                     transition-all duration-200 flex items-center justify-center"
        >
          ‹
        </button>
        <button
          onClick={next}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20
                     bg-black/40 hover:bg-yellow-400 text-white
                     hover:text-red-900 w-10 h-10 rounded-full text-xl
                     transition-all duration-200 flex items-center justify-center"
        >
          ›
        </button>

        {/* Dot indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20
                        flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current
                  ? "bg-yellow-400 scale-125"
                  : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── MARQUEE NOTICE BAR ── */}
      <div className="bg-red-800 text-yellow-300 py-2 overflow-hidden
                      whitespace-nowrap text-sm font-medium">
        <div className="animate-marquee inline-block">
          {notices.map((n, i) => (
            <span key={i} className="mx-10">{n}</span>
          ))}
        </div>
      </div>

      {/* ── STATS BAR ── */}
      <section className="bg-yellow-400 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4
                        gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}
              className="flex flex-col items-center gap-1
                         hover:scale-105 transition-transform duration-200">
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
            <div className="w-40 h-40 rounded-full border-4 border-red-800
                            bg-gray-100 flex items-center justify-center
                            text-6xl shadow-lg overflow-hidden">
              👩‍🏫
            </div>
            <p className="text-red-900 font-bold text-base">Principal Name</p>
            <p className="text-gray-500 text-xs">Sarada Vidya Mandir, Bhadrak</p>
          </div>
          <div className="bg-red-50 rounded-2xl p-8 border-l-4 border-red-800 shadow-sm">
            <h3 className="text-red-900 text-2xl font-bold mb-4"> Principal's Message</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base italic">
              "Welcome to Sarada Vidya Mandir — a place where young minds are
              nurtured with values, knowledge, and our rich Odia culture. We
              believe every child is unique and our mission is to empower each
              student to reach their highest potential through quality
              education rooted in our traditions."
            </p>
            <Link to="/principal-message"
              className="inline-block mt-5 text-red-800 font-semibold
                         text-sm hover:underline">
              Read Full Message →
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      

      {/* ── UPCOMING EVENTS ── */}
      <section className="bg-red-900 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-center text-yellow-400 text-3xl font-bold mb-2">Upcoming Events</h2>
          <p className="text-center text-red-200 text-sm mb-10">
            Stay up to date with school activities
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {latestEvents.map((e) => (
              <div key={e.title}
                className="bg-white/10 backdrop-blur rounded-xl p-6 border
                           border-white/20 hover:bg-white/20 transition-all duration-200">
                <div className="inline-block bg-yellow-400 text-red-900
                                font-bold text-sm px-3 py-1 rounded-full mb-4">
                  📅 {e.date}
                </div>
                <h4 className="text-white font-bold text-base mb-2">{e.title}</h4>
                <p className="text-red-200 text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link to="/events"
              className="inline-block border-2 border-yellow-400 text-yellow-400
                         font-semibold py-2 px-8 rounded-full hover:bg-yellow-400
                         hover:text-red-900 transition-all duration-200">
              View All Events →
            </Link>
          </div>
        </div>
      </section>

      {/* ── QUICK LINKS ── */}
      <section className="bg-white py-14 px-15">
        <h2 className="text-center text-red-900 text-3xl font-bold mb-2">Quick Access</h2>
        <p className="text-center text-gray-500 text-sm mb-10">
          Everything you need, just one click away
        </p>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickLinks.map((ql) => (
            <Link key={ql.label} to={ql.path}
              className="flex flex-col items-center bg-gray-50 border
                         border-gray-200 rounded-2xl py-7 px-4 shadow-sm
                         hover:shadow-md hover:border-red-800 hover:-translate-y-1
                         transition-all duration-200 text-center">
              <span className="text-4xl mb-3">{ql.icon}</span>
              <span className="text-red-900 font-bold text-m">{ql.label}</span>
              <span className="text-gray-400 text-m mt-1">{ql.desc}</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}

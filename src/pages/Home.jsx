import { Link } from "react-router-dom";

const notices = [
  "📢 Admissions open for 2026-27 session",
  "🏆 Our student Priya Das clears NMMS Scholarship",
  "📅 Annual Day celebration on 5th April 2026",
  "📋 Class 10 Board Exam results declared — 98% pass rate!",
];

const stats = [
  { label: "Years of Excellence", value: "30+" },
  { label: "Students Enrolled", value: "1200+" },
  { label: "Qualified Faculty", value: "45+" },
  { label: "Alumni Across India", value: "5000+" },
];

const quickLinks = [
  { label: "Admission Process", path: "/admission-process", icon: "🎓" },
  { label: "Notice Board", path: "/notices", icon: "📋" },
  { label: "Photo Album", path: "/photo-album", icon: "🖼️" },
  { label: "Contact Us", path: "/contact", icon: "📞" },
];

export default function Home() {
  return (
    <div className="w-full font-sans">

      {/* HERO SECTION */}
      <section
        className="relative w-full min-h-screen flex flex-col
                   items-center justify-center text-center"
        style={{ backgroundColor: "#8B0000" }}
      >
        <div className="relative z-10 px-6 flex flex-col items-center gap-5">

          {/* Logo placeholder */}
          <div className="w-28 h-28 rounded-full border-4 border-yellow-400
                          bg-yellow-100 flex items-center justify-center
                          text-4xl shadow-xl">
            🏫
          </div>

          {/* Odia Name */}
          <h1 className="text-yellow-400 text-3xl md:text-5xl font-bold
                         tracking-wide drop-shadow-lg">
            ସରସ୍ୱତୀ ଶିଶୁ ବିଦ୍ୟା ମନ୍ଦିର
          </h1>

          {/* English Name */}
          <h2 className="text-white text-xl md:text-3xl font-semibold
                         tracking-widest uppercase">
            Saraswati Sishu Vidya Mandir
          </h2>

          {/* Location */}
          <p className="text-gray-300 text-sm md:text-base tracking-wide">
            📍 Rourkela, Odisha &nbsp;|&nbsp; Odia Medium School
          </p>

          {/* Tagline */}
          <p className="text-yellow-200 italic text-base md:text-lg mt-1">
            "ज्ञानं परमं बलम् — Knowledge is the Ultimate Power"
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-4 justify-center">
            <Link
              to="/notices"
              className="bg-yellow-400 text-red-900 font-bold py-3 px-8
                         rounded-full hover:bg-yellow-300 transition shadow-lg
                         text-sm md:text-base"
            >
              View Notices →
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white font-semibold
                         py-3 px-8 rounded-full hover:bg-white hover:text-red-900
                         transition text-sm md:text-base"
            >
              Know More
            </Link>
          </div>
        </div>
      </section>

      {/* MARQUEE NOTICE BAR */}
      <div className="bg-red-800 text-yellow-300 py-2 overflow-hidden
                      whitespace-nowrap text-sm font-medium">
        <div className="animate-marquee inline-block">
          {notices.map((n, i) => (
            <span key={i} className="mx-10">{n}</span>
          ))}
        </div>
      </div>

      {/* STATS BAR */}
      <section className="bg-yellow-400 py-8 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4
                        gap-6 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-red-900 text-3xl font-extrabold">{s.value}</p>
              <p className="text-red-800 text-sm font-medium mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* PRINCIPAL MESSAGE */}
      <section className="bg-white py-14 px-6">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row
                        items-center gap-10">
          <div className="w-36 h-36 rounded-full border-4 border-red-800
                          bg-gray-200 flex items-center justify-center
                          text-5xl shadow-md flex-shrink-0">
            👩‍🏫
          </div>
          <div>
            <h3 className="text-red-900 text-2xl font-bold mb-3">
              Principal's Welcome
            </h3>
            <p className="text-gray-600 leading-relaxed text-sm md:text-base">
              "Welcome to Saraswati Sishu Vidya Mandir — a place where young
              minds are nurtured with values, knowledge, and culture. We believe
              every child is unique and our mission is to empower each student
              to reach their highest potential through quality Odia-medium
              education."
            </p>
            <p className="mt-4 text-red-800 font-semibold">
              — Principal Name,{" "}
              <span className="font-normal text-gray-500">
                Saraswati Sishu Vidya Mandir, Rourkela
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* QUICK LINKS */}
      <section className="bg-gray-50 py-12 px-6">
        <h3 className="text-center text-red-900 text-2xl font-bold mb-8">
          Quick Access
        </h3>
        <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickLinks.map((ql) => (
            <Link
              key={ql.label}
              to={ql.path}
              className="flex flex-col items-center bg-white border
                         border-gray-200 rounded-xl py-6 px-4 shadow-sm
                         hover:shadow-md hover:border-red-800 transition
                         text-center"
            >
              <span className="text-4xl mb-3">{ql.icon}</span>
              <span className="text-red-900 font-semibold text-sm">
                {ql.label}
              </span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}

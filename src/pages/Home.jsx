import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Notepad,
  Images,
  ChalkboardTeacher,
  Phone,
  Student,
  Trophy,
  Scales,
  Books,
  Globe,
  Bell,
  CalendarDots,
  Leaf,
  Desktop,
  UsersThree,
  Handshake,
} from "@phosphor-icons/react";

const slides = [
  { image: "/School1.jpeg", caption: "Welcome to Sarada Vidya Mandir",   sub: "Nurturing Minds, Building Futures"                    },
  { image: "/School2.jpeg", caption: "Excellence in Education",           sub: "Quality Odia-medium learning since 1995"              },
  { image: "/events/events3.jpeg", caption: "Celebrating Culture & Talent",      sub: "Annual fests, arts and co-curricular activities"      },
  { image: "/Play1.jpeg", caption: "Sports & Fitness",                  sub: "Holistic development beyond the classroom"            },
];

const notices = [
  "Admissions open for 2026-27 session",
  "Our student cleared NMMS Scholarship 2025",
  "Annual Day celebration on 5th April 2026",
  "Class 10 Board Exam — 98% pass rate!",
  "Art & Culture Fest on 10th April 2026",
];



const quickLinks = [
  
  { label: "Photo Album", path: "/events", Icon: Images,            desc: "Events & moments gallery"   },
  { label: "Faculty",     path: "/faculty",     Icon: ChalkboardTeacher, desc: "Meet our teachers"          },
  { label: "Contact Us",  path: "/contact",     Icon: Phone,             desc: "Get in touch with us"       },
];

// ── REPLACE features array at top of file ──
const features = [
  {
    Icon: Books,
    odiaTitle: "ଗୁଣାତ୍ମକ ଶିକ୍ଷା",
    odiaDesc:  "NCERT ପୁସ୍ତକ ଓ ଆଧୁନିକ ଶିକ୍ଷା ପଦ୍ଧତି ସହ ରାଜ୍ୟ ବୋର୍ଡ ପାଠ୍ୟକ୍ରମ।",
    engTitle:  "Quality Education",
    engDesc:   "State Board curriculum enriched with NCERT books and modern teaching methods.",
  },
  {
    Icon: Trophy,
    odiaTitle: "ପୁରସ୍କୃତ ଛାତ୍ରଛାତ୍ରୀ",
    odiaDesc:  "NMMS, NTSE ଓ ଜିଲ୍ଲାସ୍ତରୀୟ ପ୍ରତିଯୋଗିତାରେ ସ୍ଥିର ଶ୍ରେଷ୍ଠ ପ୍ରଦର୍ଶନ।",
    engTitle:  "Award-Winning Students",
    engDesc:   "Consistent top performers in NMMS, NTSE and district-level competitions.",
  },
  {
    Icon: CalendarDots,
    odiaTitle: "ସାଂସ୍କୃତିକ ଅନୁଷ୍ଠାନ",
    odiaDesc:  "ବାର୍ଷିକ ଉତ୍ସବ, କ୍ରୀଡ଼ା ଉତ୍ସବ, ବାଦ-ବିବାଦ ଓ ଚିତ୍ର ପ୍ରଦର୍ଶନୀ।",
    engTitle:  "Cultural Activities",
    engDesc:   "Annual cultural fests, sports meets, debates and art exhibitions.",
  },
  {
    Icon: Leaf,
    odiaTitle: "ମୂଲ୍ୟ ଆଧାରିତ ଶିକ୍ଷା",
    odiaDesc:  "ଆଧୁନିକ ଶୈକ୍ଷିକ ଅଭ୍ୟାସ ସହ ଭାରତୀୟ ମୂଲ୍ୟବୋଧ ଓ ଓଡ଼ିଆ ସଂସ୍କୃତି ଉପରେ ଆଧାରିତ।",
    engTitle:  "Value-Based Learning",
    engDesc:   "Grounded in Indian values and Odia culture with modern educational practices.",
  },
  {
    Icon: Desktop,
    odiaTitle: "ସ୍ମାର୍ଟ ଶ୍ରେଣୀ କକ୍ଷ",
    odiaDesc:  "ପ୍ରଯୁକ୍ତି ସଶକ୍ତ ଶ୍ରେଣୀ କକ୍ଷ ଯାହା ଶିକ୍ଷାକୁ ଅଧିକ ଆକର୍ଷଣୀୟ କରେ।",
    engTitle:  "Smart Classrooms",
    engDesc:   "Technology-enabled classrooms for interactive and engaging learning.",
  },
  {
    Icon: Handshake,
    odiaTitle: "ଅଭିଭାବକ ସଂଯୋଗ",
    odiaDesc:  "ନିୟମିତ ଅଭିଭାବକ-ଶିକ୍ଷକ ସଭା ଓ ବିଦ୍ୟାଳୟ ଓ ଅଭିଭାବକ ମଧ୍ୟରେ ଖୋଲା ଯୋଗାଯୋଗ।",
    engTitle:  "Parent Engagement",
    engDesc:   "Regular PTMs, notices and open communication between school and parents.",
  },
];

const latestEvents = [
  { date: "05 Apr", title: "Annual Day Celebration", desc: "Cultural performances, prize distribution & more."      },
  { date: "10 Apr", title: "Art & Culture Fest",     desc: "Showcasing student talent in art, music and dance."     },
  { date: "20 Apr", title: "Parent-Teacher Meeting", desc: "Semester 2 PTM for all classes — 9AM to 1PM."          },
];

function FeatureCard({ feature }) {
  const [showEng, setShowEng] = useState(false);
  const { Icon, odiaTitle, odiaDesc, engTitle, engDesc } = feature;

  return (
    <div
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100
                 hover:shadow-md hover:border-red-200 transition-all
                 duration-200 hover:-translate-y-1"
    >
      {/* Clicking the icon toggles language */}
      <button
        onClick={() => setShowEng((v) => !v)}
        title={showEng ? "ଓଡ଼ିଆ ଦେଖନ୍ତୁ" : "See in English"}
        className="focus:outline-none group"
        aria-label="Toggle language"
      >
        <Icon
          size={40}
          weight="duotone"
          color="#8B0000"
          className="group-hover:scale-110 transition-transform duration-200"
        />
      </button>

      <h4 className="text-red-900 font-bold mt-4 mb-2 text-base">
        {showEng ? engTitle : odiaTitle}
      </h4>
      <p className="text-gray-500 text-sm leading-relaxed">
        {showEng ? engDesc : odiaDesc}
      </p>

      {/* Hint pill */}
      <p className="text-gray-300 text-xs mt-3 italic">
        {showEng ? "← ଓଡ଼ିଆ" : "English →"} (click icon)
      </p>
    </div>
  );
}
export default function Home() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goTo   = (i) => setCurrent(i);
  const goPrev = () => setCurrent((p) => (p - 1 + slides.length) % slides.length);
  const goNext = () => setCurrent((p) => (p + 1) % slides.length);

  return (
    <div className="w-full font-sans">

      {/* ── HERO SLIDESHOW ── */}
      <section className="relative w-full min-h-screen overflow-hidden">
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
              backgroundColor: "#8B0000",
            }}
          >
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to bottom, rgba(80,0,0,0.55) 0%, rgba(40,0,0,0.80) 100%)",
              }}
            />
          </div>
        ))}

        <div className="relative z-10 flex flex-col items-center justify-center
                        min-h-screen text-center px-6 gap-5 max-w-3xl mx-auto">
          <img
            src="/Logo.jpeg"
            alt="Sarada Vidya Mandir Logo"
            className="w-28 h-28 rounded-full border-4 border-yellow-400
                       object-cover object-center shadow-2xl"
          />
          <h1 className="text-yellow-400 text-4xl md:text-4xl font-bold
                         tracking-wide drop-shadow-lg">
            ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର
          </h1>
          <h2 className="text-white text-lg md:text-2xl font-semibold
                         tracking-widest uppercase">
            Sarada Vidya Mandir
          </h2>
          <div className="w-24 h-1 bg-yellow-400 rounded-full" />
          <p className="text-gray-300 text-sm md:text-base tracking-wide">
            📍 Bhadrak, Odisha &nbsp;|&nbsp; Odia Medium School &nbsp;|&nbsp; Est. 2002
          </p>
          <div className="transition-all duration-700">
            <p className="text-yellow-200 text-lg md:text-2xl font-semibold italic">
              "{slides[current].caption}"
            </p>
            <p className="text-gray-300 text-sm md:text-base mt-1">
              {slides[current].sub}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 mt-2 justify-center">
            <Link
              to="/notices"
              className="bg-yellow-400 text-red-900 font-bold py-3 px-8 rounded-full
                         hover:bg-yellow-300 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              View Notices
            </Link>
            <Link
              to="/about"
              className="border-2 border-white text-white font-semibold py-3 px-8
                         rounded-full hover:bg-white hover:text-red-900
                         hover:scale-105 transition-all duration-200"
            >
              Know More →
            </Link>
          </div>
        </div>

        <button
          onClick={goPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-black/40
                     hover:bg-yellow-400 text-white hover:text-red-900 w-10 h-10
                     rounded-full text-xl transition-all flex items-center justify-center"
        >‹</button>
        <button
          onClick={goNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-black/40
                     hover:bg-yellow-400 text-white hover:text-red-900 w-10 h-10
                     rounded-full text-xl transition-all flex items-center justify-center"
        >›</button>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                i === current ? "bg-yellow-400 scale-125" : "bg-white/50 hover:bg-white"
              }`}
            />
          ))}
        </div>
      </section>

      {/* ── MARQUEE ── */}
      <div className="bg-red-800 text-yellow-300 py-2 overflow-hidden
                      whitespace-nowrap text-sm font-medium">
        <div className="animate-marquee inline-block">
          {notices.map((n, i) => (
            <span key={i} className="mx-10 inline-flex items-center gap-2">
              <Bell size={13} weight="fill" />
              {n}
            </span>
          ))}
        </div>
      </div>

      {/* ── LEADERSHIP MESSAGE SECTION ── */}
<section className="bg-white py-16 px-6">
  <div className="max-w-5xl mx-auto">

    {/* Heading */}
    <div className="text-center mb-12">
      <p className="text-yellow-600 font-semibold tracking-widest uppercase text-xs mb-2">
        ନେତୃତ୍ୱ
      </p>
      <h2 className="text-red-900 text-3xl font-bold">From Our Leadership</h2>
      <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mt-3" />
    </div>

    {/* Two cards side by side */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

      {/* ── President Card ── */}
      <div className="bg-red-50 rounded-2xl p-7 border border-red-100 shadow-sm
                      hover:shadow-md transition-all duration-200 flex flex-col gap-5">
        {/* Photo + Name */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4
                          border-red-900 shadow-md flex-shrink-0">
            <img
              src="/faculty/Praasident ,Chakradhara pradhan.jpeg" 
              alt="Chakudhara Pradhan"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <p className="text-xs text-yellow-700 font-bold uppercase tracking-widest mb-1">
              ସଭାପତି
            </p>
            <h3 className="text-red-900 font-bold text-base leading-tight">
              ଚକୁଧର ପ୍ରଧାନ
            </h3>
            <p className="text-gray-500 text-xs mt-0.5">
              Chakudhara Pradhan
            </p>
            <p className="text-gray-400 text-xs">
              President, Managing Committee
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-yellow-400 via-red-200 to-transparent" />

        {/* Message heading */}
        <p className="text-red-800 font-bold text-sm tracking-wide">
          ସଭାପତିଙ୍କ କଲମରୁ
        </p>

        {/* Message excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed">
          <b>ଶାରଦା ବିଦ୍ୟାମନ୍ଦିର; ଶିକ୍ଷା କ୍ଷେତ୍ରରେ ଏକ ପରିବର୍ତ୍ତନର ସୁର। ଆଦର୍ଶ ଓ ନୈତିକ
          ଶିକ୍ଷାର ମନ୍ଦିର, ଏ ଅନୁଷ୍ଠାନ। ଏହାର ଗୁରୁମା, ଗୁରୁଜୀମାନେ ଡାଲିମପ୍ରାପ୍ତ,
          ଛାତ୍ରବତ୍ସଳ, ସମାୟାନୁବର୍ତ୍ତୀ ତଥା ଶିକ୍ଷାମନଷ୍କ।</b>
        </p>

        {/* Signature */}
        <div className="mt-auto pt-3 border-t border-red-100">
          <p className="text-red-900 font-bold text-sm">ଚକୁଧର ପ୍ରଧାନ</p>
          <p className="text-gray-400 text-xs"><b>ସଭାପତି, ଶାରଦା ବିଦ୍ୟାମନ୍ଦିର ପରିଚାଳନା କମିଟି</b></p>
        </div>
      </div>

      {/* ── Principal Card ── */}
      <div className="bg-red-50 rounded-2xl p-7 border border-red-100 shadow-sm
                      hover:shadow-md transition-all duration-200 flex flex-col gap-5">
        {/* Photo + Name */}
        <div className="flex items-center gap-4">
          <div className="w-20 h-20 rounded-full overflow-hidden border-4
                          border-red-900 shadow-md flex-shrink-0">
            <img
              src="/faculty/SaratChandraMohapatraPrincipal.jpeg"
              alt="Sarat Chandra Mahapatra"
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <p className="text-xs text-yellow-700 font-bold uppercase tracking-widest mb-1">
              ପ୍ରଧାନ ଗୁରୁଜୀ
            </p>
            <h3 className="text-red-900 font-bold text-base leading-tight">
              ଶାରତ ଚନ୍ଦ୍ର ମହାପାତ୍ର
            </h3>
            <p className="text-gray-500 text-xs mt-0.5">
              Sarat Chandra Mahapatra
            </p>
            <p className="text-gray-400 text-xs">
              Head Teacher, Sarada Vidya Mandir
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-yellow-400 via-red-200 to-transparent" />

        {/* Message heading */}
        <p className="text-red-800 font-bold text-sm tracking-wide">
          ମୋ ପିଲାମାନଙ୍କୁ ପଦେ
        </p>

        {/* Message excerpt */}
        <p className="text-gray-600 text-sm leading-relaxed">
          <b>ଶାରଦା ବିଦ୍ୟାମନ୍ଦିରର ପରିସରକୁ ସ୍ୱାଗତ। ଏହା ତୁମ ଘରଠୁ ଦୂର ଆଉ ଏକ ଘର।
          ତୁମ ଗୁରୁମା ଓ ଗୁରୁଜୀ ବାପା ମା'ଙ୍କର ବିକଳ୍ପ। ଏହି ପରିସରରେ ସୁଶୃଙ୍ଖଳତା
          ରକ୍ଷା କରିବା ତୁମର ପ୍ରଥମ ଓ ପ୍ରଧାନ କର୍ତ୍ତବ୍ୟ।</b>
        </p>

        {/* Signature */}
        <div className="mt-auto pt-3 border-t border-red-100">
          <p className="text-red-900 font-bold text-sm">ଶାରତ ଚନ୍ଦ୍ର ମହାପାତ୍ର</p>
          <p className="text-gray-400 text-xs"><b>ପ୍ରଧାନ ଗୁରୁଜୀ, ଶାରଦା ବିଦ୍ୟାମନ୍ଦିର</b></p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* ── WHY CHOOSE US ── */}
      
      {/* ── WHY CHOOSE US ── */}
<section className="bg-gray-50 py-16 px-6">
  <div className="max-w-5xl mx-auto">
    <h2 className="text-center text-red-900 text-3xl font-bold mb-2">
      ଆମକୁ କାହିଁ ବାଛିବେ
    </h2>
    <p className="text-center text-gray-500 text-sm mb-2">
      Why Choose Us
    </p>
    <p className="text-center text-gray-400 text-xs mb-10 italic">
      (ଆଇକନ୍ ଉପରେ କ୍ଲିକ୍ କଲେ ଇଂରାଜୀ ଦେଖିବେ)
    </p>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {features.map((f) => (
        <FeatureCard key={f.odiaTitle} feature={f} />
      ))}
    </div>
  </div>
</section>

      {/* ── EVENTS ── */}
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
                           border-white/20 hover:bg-white/20 transition-all duration-200"
              >
                <div className="inline-flex items-center gap-2 bg-yellow-400
                                text-red-900 font-bold text-sm px-3 py-1
                                rounded-full mb-4">
                  <CalendarDots size={14} weight="fill" />
                  {e.date}
                </div>
                <h4 className="text-white font-bold text-base mb-2">{e.title}</h4>
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
        <div className="max-w-3xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {quickLinks.map((ql) => (
            <Link
              key={ql.label}
              to={ql.path}
              className="flex flex-col items-center bg-gray-50 border border-gray-200
                         rounded-2xl py-7 px-4 shadow-sm hover:shadow-md
                         hover:border-red-800 hover:-translate-y-1
                         transition-all duration-200 text-center"
            >
              <ql.Icon size={40} weight="duotone" color="#8B0000" className="mb-3" />
              <span className="text-red-900 font-bold text-sm">{ql.label}</span>
              <span className="text-gray-400 text-xs mt-1">{ql.desc}</span>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
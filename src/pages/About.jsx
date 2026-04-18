// src/pages/About.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {Target, Eye, BookOpenText } from "@phosphor-icons/react";

// ── PRINCIPAL MESSAGE DATA ──
const principalMessage = {
  odia: {
    label: "ପ୍ରଧାନ ଶିକ୍ଷକଙ୍କ ବାର୍ତ୍ତା",
    subtitle: "Principal's Message",
    message: [
      "ପ୍ରିୟ ଛାତ୍ରଛାତ୍ରୀ, ଅଭିଭାବକ ଓ ହିତୈଷୀ ମାନଙ୍କ ପ୍ରତି,",
      "ନୂଆ ଶିକ୍ଷାବର୍ଷ ଆରମ୍ଭ ସମୟରେ ମୁଁ ସମସ୍ତ ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ମୋ ଆଶୀର୍ବାଦ ଓ ଶୁଭେଚ୍ଛା ଜଣାଉଛି। ଆଶା କରୁଛି ଏ ବର୍ଷ ଆପଣମାନେ ନିଜ ଲକ୍ଷ୍ୟ ହାସଲ କରିବାପାଇଁ ଆହୁରି ଅଧିକ ପରିଶ୍ରମ କରିବେ।",
      "ମାନବ ଜୀବନରେ ଶିକ୍ଷା ଅତ୍ୟନ୍ତ ଗୁରୁତ୍ୱପୂର୍ଣ୍ଣ। ଏହା ଆମକୁ ମୂଲ୍ୟବୋଧ, ଜ୍ଞାନ ଓ ଶୃଙ୍ଖଳା ଶିଖାଏ। ଆମ ବିଦ୍ୟାଳୟରେ ଶିକ୍ଷାର ସହ ନୈତିକ ମୂଲ୍ୟବୋଧ, ଶୃଙ୍ଖଳା ଓ ଉତ୍ସର୍ଗ ଉପରେ ବିଶେଷ ଗୁରୁତ୍ୱ ଦିଆଯାଏ।",
      "ଛାତ୍ରଛାତ୍ରୀମାନେ ନିଜ ଶିକ୍ଷକଙ୍କୁ ସମ୍ମାନ ଦିଅନ୍ତୁ ଓ ନିଷ୍ଠାର ସହ ନିଜ ଦାୟିତ୍ୱ ପୂର୍ଣ୍ଣ କରନ୍ତୁ। ବିଶ୍ୱାସ ଅଛି ଯେ ଆପଣ ଏହି ଅନୁଷ୍ଠାନରେ ଉତ୍ତମ ଶିକ୍ଷା ଲାଭ କରିବେ ଏବଂ ଜୀବନରେ ସଫଳ ହୋଇ ଜାତିର ଅଗ୍ରଗତିରେ ଅବଦାନ ରଖିବେ।",
      "— ଶରତ ଚନ୍ଦ୍ର ମହାପାତ୍ର",
    ],
    name: "ଶରତ ଚନ୍ଦ୍ର ମହାପାତ୍ର",
    designation: "ପ୍ରଧାନ ଶିକ୍ଷକ, ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର",
  },
  english: {
    label: "Principal's Message",
    subtitle: "ପ୍ରଧାନ ଶିକ୍ଷକଙ୍କ ସନ୍ଦେଶ",
    message: [
      "Dear Students, Parents, and Well-wishers,",
      "At the beginning of the new academic year, I extend my blessings and best wishes to all the students. I hope that this year you will work harder to achieve your goals.",
      "Education is extremely important in human life. It teaches us values, knowledge, and discipline. In our school, along with education, special emphasis is given to moral values, discipline, and dedication.",
      "Students should respect their teachers and fulfill their responsibilities with sincerity. I believe that you will receive a good education in this institution and contribute to the progress of the nation.",
      "— Sarat Chandra Mohapatra",
    ],
    name: "Sarat Chandra Mohapatra",
    designation: "Principal, Sarada Vidya Mandir",
  },
};

// ── VISION DATA ──
const visionData = {
  odia: {
    title: "ଆମ ଦୃଷ୍ଟିଭଙ୍ଗୀ",
    body: "ଓଡ଼ିଶାର ଏକ ଅଗ୍ରଣୀ ଶିକ୍ଷା ଅନୁଷ୍ଠାନ ହୋଇ ପ୍ରତ୍ୟେକ ଶିଶୁକୁ ଗୁଣାତ୍ମକ ଶିକ୍ଷା, ଦୃଢ଼ ନୈତିକ ମୂଲ୍ୟବୋଧ ଓ ସାଂସ୍କୃତିକ ଗୌରବ ଦ୍ୱାରା ଆତ୍ମବିଶ୍ୱାସୀ, ଦୟାଶୀଳ ଓ ସମ୍ପ୍ରଦାୟ ପ୍ରତି ଦାୟୀ ମଣିଷ ଭାବେ ଗଢ଼ିବା।",
    points: [
      "ପ୍ରତ୍ୟେକ ଛାତ୍ରଛାତ୍ରୀଙ୍କ ସର୍ବାଙ୍ଗୀଣ ବିକାଶ",
      "ଓଡ଼ିଆ ସଂସ୍କୃତି ଓ ଐତିହ୍ୟ ସଂରକ୍ଷଣ",
      "ଭବିଷ୍ୟତ ନେତୃତ୍ୱ ନିର୍ମାଣ",
    ],
  },
  english: {
    title: "Our Vision",
    body: "To be a leading institution in Odisha that nurtures every child with quality education, strong moral values and cultural pride — creating confident, compassionate and capable individuals who contribute positively to society.",
    points: [
      "Holistic development of every student",
      "Preserving Odia culture & heritage",
      "Building future-ready leaders",
    ],
  },
};

// ── MISSION DATA ──
const missionData = {
  odia: {
    title: "ଆମ ଉଦ୍ଦେଶ୍ୟ",
    body: "ସବୁ ପୃଷ୍ଠଭୂମିର ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ସହଜଲଭ୍ୟ, ଉଚ୍ଚ-ଗୁଣମାନ ସମ୍ପନ୍ନ ଓଡ଼ିଆ-ମାଧ୍ୟମ ଶିକ୍ଷା ଦ୍ୱାରା ଶୈକ୍ଷିକ ଉତ୍କର୍ଷ, ଶୃଙ୍ଖଳା, ସୃଜନଶୀଳତା ଓ ମୂଲ୍ୟ ଆଧାରିତ ଶିଖ୍ ଯୋଗ କରି ସଶକ୍ତ କରିବା।",
    points: [
      "ପ୍ରତ୍ୟେକ ଶିଶୁ ପାଇଁ ଗୁଣାତ୍ମକ ଶିକ୍ଷା",
      "ସୁରକ୍ଷିତ ଓ ଅନ୍ତର୍ଭୁକ୍ତ ଶିକ୍ଷା ପରିବେଶ",
      "ଅଭିଭାବକ ଓ ସମ୍ପ୍ରଦାୟ ସହ ଅଂଶୀଦାରିତ୍ୱ",
    ],
  },
  english: {
    title: "Our Mission",
    body: "To provide accessible, high-quality Odia-medium education that empowers students from all backgrounds — combining academic excellence with discipline, creativity and values-based learning.",
    points: [
      "Quality education for every child",
      "Safe, inclusive learning environment",
      "Partnership with parents & community",
    ],
  },
};

export default function About() {
  // ✅ Odia is default for principal message
  const [lang, setLang] = useState("odia");

  // ✅ Each card has its own independent language state, Odia default
  const [visionLang,  setVisionLang]  = useState("odia");
  const [missionLang, setMissionLang] = useState("odia");

  const msg     = principalMessage[lang];
  const vision  = visionData[visionLang];
  const mission = missionData[missionLang];

  return (
    <div className="w-full font-sans page-enter">

      {/* ── HERO ── */}
      <section
        className="w-full py-16 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #6b0000 0%, #8B0000 60%, #b30000 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10">
          <p className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-2">
            ଆମ ବିଦ୍ୟାଳୟ
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-3">
            About Us
          </h1>
          <div className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mb-4" />
          <p className="text-red-200 text-sm md:text-base max-w-xl mx-auto">
            ଆମ ଇତିହାସ, ଆମ ଦୃଷ୍ଟିଭଙ୍ଗୀ, ଆମ ମୂଲ୍ୟବୋଧ ଏବଂ ସେହି ମଣିଷମାନଙ୍କୁ ଜାଣନ୍ତୁ
  ଯେଉଁମାନେ ଶାରଦା ବିଦ୍ୟାମନ୍ଦିରକୁ ପ୍ରତ୍ୟେକ ଛାତ୍ରଛାତ୍ରୀର ଦ୍ୱିତୀୟ ଘର ବନାଇଛନ୍ତି।.
          </p>
        </div>
      </section>

      {/* ── ABOUT THE SCHOOL ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10">

            {/* Left — Logo + Info Card */}
            <div className="flex-shrink-0 flex flex-col items-center gap-4
                            bg-red-50 rounded-2xl p-8 border border-red-100
                            shadow-sm w-full md:w-72">
              <img
                src="/Logo.jpeg"
                alt="School Logo"
                className="w-28 h-28 rounded-full border-4 border-red-800
                           object-cover shadow-md"
              />
              <div className="text-center">
                <p className="text-yellow-600 font-bold text-lg">
                  ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର
                </p>
                <p className="text-red-900 font-semibold text-sm tracking-widest
                              uppercase mt-1">
                  Sarada Vidya Mandir
                </p>
              </div>
              <div className="w-full border-t border-red-200 pt-4 space-y-2
                              text-sm text-gray-600">
                <p><span className="font-semibold text-red-900">📍 Location:</span> Bhadrak, Odisha</p>
                <p><span className="font-semibold text-red-900">📅 Est.:</span> 2002</p>
                <p><span className="font-semibold text-red-900">📚 Medium:</span> Odia Medium</p>
                <p><span className="font-semibold text-red-900">🏫 Board:</span> BSE Odisha</p>
                <p><span className="font-semibold text-red-900">👩‍🎓 Classes:</span> I to X</p>
              </div>
            </div>

            {/* Right — Description */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                
                <h2 className="text-red-900 text-2xl md:text-3xl font-bold">
                  About the School
                </h2>
              </div>
              <h3 className="text-red-900 font-bold text-xl mb-4 border-b-2
               border-yellow-400 pb-2 inline-block">
  ବିଦ୍ୟାଳୟ ବିଷୟରେ
</h3>

<div className="space-y-4 text-gray-700 text-sm leading-relaxed">
    <p>
      ଶାରଦା ବିଦ୍ୟାମନ୍ଦିର ଓଡ଼ିଶାର ଭଦ୍ରକ ଜିଲ୍ଲାରେ ଅବସ୍ଥିତ ଏକ ବିଶ୍ୱାସ୍ତ ଓଡ଼ିଆ ମାଧ୍ୟମ
      ବିଦ୍ୟାଳୟ, ଯାହା ଭାରତୀୟ ମୂଲ୍ୟବୋଧ ଓ ଓଡ଼ିଶାର ସମୃଦ୍ଧ ସାଂସ୍କୃତିକ ଐତିହ୍ୟ ଉପରେ
      ଆଧାର କରି ଗୁଣାତ୍ମକ ଶିକ୍ଷା ପ୍ରଦାନ ପ୍ରତି ସମର୍ପିତ।
    </p>
    <p>
      ୨୦୦୨ ମସିହାରେ ପ୍ରତିଷ୍ଠିତ ଏ ବିଦ୍ୟାଳୟ ଏବେ ସ୍ଥାନୀୟ ସମ୍ପ୍ରଦାୟର ଏକ ଆଧାରସ୍ତମ୍ଭ
      ହୋଇ ଉଠିଛି। BSE ଓଡ଼ିଶା ପାଠ୍ୟକ୍ରମ ଅନୁସରଣ କରି ପ୍ରଥମ ଶ୍ରେଣୀଠାରୁ ଦଶମ ଶ୍ରେଣୀ
      ପର୍ଯ୍ୟନ୍ତ ପ୍ରତି ବର୍ଷ ଶହ ଶହ ଛାତ୍ରଛାତ୍ରୀ ଏଠାରେ ଶିକ୍ଷା ଲାଭ କରୁଛନ୍ତି।
    </p>
    <p>
      ଆମ ଶିକ୍ଷା ଶୁଧୁ ପୁସ୍ତକ ମଧ୍ୟରେ ସୀମିତ ନୁହେଁ। ପ୍ରତ୍ୟେକ ଶିଶୁର ଶୈକ୍ଷିକ,
      ଶାରୀରିକ, ସାଂସ୍କୃତିକ ଓ ନୈତିକ ସର୍ବାଙ୍ଗୀଣ ବିକାଶ ଉପରେ ଗୁରୁତ୍ୱ ଦେଇ ତାଙ୍କୁ
      ଭବିଷ୍ୟତର ଦାୟୀ ନାଗରିକ ଭାବେ ଗଢ଼ି ତୋଳୁ।
        </p>
    <p>
    ଦକ୍ଷ ଶିକ୍ଷକ ମଣ୍ଡଳୀ, ଆଧୁନିକ ସ୍ମାର୍ଟ ଶ୍ରେଣୀ ଗୃହ, ସୁରକ୍ଷିତ ପରିବହନ,
    ସୁ-ସଜ୍ଜିତ ପୁସ୍ତକାଳୟ ଓ ନିୟମିତ ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ ସହ ଶାରଦା ବିଦ୍ୟାମନ୍ଦିର
    ପ୍ରତ୍ୟେକ ଶିଶୁ ପ୍ରତି ଏକ ଉଷ୍ଣ, ଶୃଙ୍ଖଳିତ ଓ ଅନୁପ୍ରେରଣାଦାୟକ ଶୈକ୍ଷିକ ପରିବେଶ ଦେଇଥାଏ।
          </p>
      </div>
    </div>
  </div>
</div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-200 to-transparent" />

      {/* ── VISION & MISSION ── */}
      <section className="bg-gray-50 py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-600 text-sm uppercase tracking-widest
                          font-semibold mb-2">
              ଆମ ଲକ୍ଷ୍ୟ
            </p>
            <h2 className="text-red-900 text-2xl md:text-3xl font-bold">
              Vision & Mission
            </h2>
            <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mt-3" />
            {/* ✅ Helper hint */}
            <p className="text-gray-400 text-xs mt-3 italic">
              Click the icon on each card to toggle language
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* ── VISION CARD ── */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                            hover:shadow-md hover:border-red-200 transition-all
                            duration-200 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">

                <div
                onClick={() => setVisionLang(visionLang === "odia" ? "english" : "odia")}
                className="... your existing card classNames ... cursor-pointer"
               >
              
              <Eye size={40} weight="duotone" color="#8B0000" />
              
              </div>

                <div>
                  <h3 className="text-red-900 text-xl font-bold">{vision.title}</h3>
                  {/* Language pill */}
                  <p className="text-gray-300 text-xs mt-3 italic">
                  {visionLang === "odia" ? "Click card for English →" : "← କ୍ଲିକ୍ କରନ୍ତୁ"}
                  </p>
                </div>
              </div>

              <div className="w-12 h-1 bg-yellow-400 rounded-full mb-5" />
              <p className="text-gray-600 text-sm leading-relaxed">
                {vision.body}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                {vision.points.map((v) => (
                  <li key={v} className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold mt-0.5">›</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>

            {/* ── MISSION CARD ── */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                            hover:shadow-md hover:border-red-200 transition-all
                            duration-200 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">

                {/* ✅ Clickable icon toggles mission language */}
                <div
                onClick={() => setMissionLang(missionLang === "odia" ? "english" : "odia")}
                className="... your existing card classNames ... cursor-pointer"
                    > 
                <Target size={40} weight="duotone" color="#8B0000" />
                  
                </div>

                <div>
                  <h3 className="text-red-900 text-xl font-bold">{mission.title}</h3>
                  {/* Language pill */}
                  <p className="text-gray-300 text-xs mt-3 italic">
                  {missionLang === "odia" ? "Click card for English →" : "← କ୍ଲିକ୍ କରନ୍ତୁ"}
                  </p>
                </div>
              </div>

              <div className="w-12 h-1 bg-yellow-400 rounded-full mb-5" />
              <p className="text-gray-600 text-sm leading-relaxed">
                {mission.body}
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                {mission.points.map((m) => (
                  <li key={m} className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold mt-0.5">›</span>
                    {m}
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* ── DIVIDER ── */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-200 to-transparent" />

      {/* ── PRINCIPAL'S MESSAGE ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">

          {/* Header + Toggle */}
          <div className="text-center mb-10">
            <p className="text-yellow-600 text-sm uppercase tracking-widest
                          font-semibold mb-2">
              {msg.subtitle}
            </p>
            <h2 className="text-red-900 text-2xl md:text-3xl font-bold">
              {msg.label}
            </h2>
            <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mt-3 mb-5" />

            {/* ✅ Toggle — Odia is left (active by default) */}
            <div className="inline-flex rounded-full border-2 border-red-900 overflow-hidden">
              <button
                onClick={() => setLang("odia")}
                className={`px-6 py-2 text-sm font-bold transition-all duration-200 ${
                  lang === "odia"
                    ? "bg-red-900 text-white"
                    : "bg-white text-red-900 hover:bg-red-50"
                }`}
              >
                ଓଡ଼ିଆ
              </button>
              <button
                onClick={() => setLang("english")}
                className={`px-6 py-2 text-sm font-bold transition-all duration-200 ${
                  lang === "english"
                    ? "bg-red-900 text-white"
                    : "bg-white text-red-900 hover:bg-red-50"
                }`}
              >
                English
              </button>
            </div>
          </div>

          {/* Card */}
          <div className="flex flex-col md:flex-row items-start gap-10
                          bg-red-50 rounded-2xl p-8 border border-red-100 shadow-sm">

            {/* Principal Photo */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <div className="w-36 h-36 rounded-full border-4 border-red-800
                              shadow-lg overflow-hidden bg-gray-100">
                <img
                  src="/faculty/SaratChandraMohapatraPrincipal.jpeg"
                  alt="Principal"
                  className="w-full h-full object-cover object-top"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentNode.innerHTML =
                      `<div class="w-full h-full flex items-center
                        justify-center bg-red-100 text-5xl">👩‍🏫</div>`;
                  }}
                />
              </div>
              <p className="text-red-900 font-bold text-sm text-center">
                {msg.name}
              </p>
              <p className="text-gray-500 text-xs text-center">
                {msg.designation}
              </p>
            </div>

            {/* Message */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <BookOpenText size={28} weight="duotone" color="#8B0000" />
                <h3 className="text-red-900 font-bold text-xl">
                  {lang === "odia"
                    ? "ପ୍ରଧାନ ଶିକ୍ଷକଙ୍କ ଅଭିମତ"
                    : "A Word from Our Principal"}
                </h3>
              </div>

              

              <div className="space-y-3 text-gray-700 text-sm md:text-base leading-relaxed">
                {msg.message.map((para, i) => (
                  <p
                    key={i}
                    className={
                      i === 0 || i === msg.message.length - 1
                        ? "font-semibold text-red-800"
                        : "italic"
                    }
                  >
                    {para}
                  </p>
                ))}
              </div>

              <div className="mt-6 w-16 h-1 rounded-full bg-yellow-400" />
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
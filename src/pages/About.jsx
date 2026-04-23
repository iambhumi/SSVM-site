// src/pages/About.jsx
import { useState } from "react";
import { Link } from "react-router-dom";
import {Target, Eye, BookOpenText, Quotes } from "@phosphor-icons/react";


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

const leaders = [
  {
    id: "chairman",
    image: "/faculty/SaratChandraMohapatraPrincipal.jpeg",
    roleEng: "Chairman",
    roleOdia: "ଅଧ୍ୟକ୍ଷ",
    name: "ଶରତ ଚନ୍ଦ୍ର ମହାପାତ୍ର",
    nameEng: "Sarat Chandra Mohapatra",
    qual: "M.Com., LLB., B.Ed.",
    tag: "Chairman, ଶାରଦା ବିଦ୍ୟାମନ୍ଦିର",
    messageOdia: [
      "ଶାରଦା ବିଦ୍ୟାମନ୍ଦିରର ପରିସରକୁ ସ୍ଵାଗତ। ଏହା ତୁମ ଘରଠୁଁ ଦୂର ଆଉ ଏକ ଘର। ତୁମ ଗୁରୁମା ଓ ଗୁରୁଜୀ ବାପା ମା'ଙ୍କର ବିକଳ୍ପ।",
      "ଏହି ପରିସରର ସ୍ଵଚ୍ଛତା ରକ୍ଷା କରିବା ତୁମର ପ୍ରଥମ ଓ ପ୍ରଧାନ କର୍ତ୍ତବ୍ୟ। ଏହାର ଯଶ ଓ କୀର୍ତ୍ତିକୁ ଅକ୍ଷୁର୍ଣ ରଖ୍ ସୁନାଗରିକ ହୋଇ ବାହାରିଲେ ଦେଶ ଓ ଦଶର ଉନ୍ନତି ହେବ।",
      "ନିୟମରେ ବନ୍ଧା ହୋଇ ପରିବାରକୁ ନିଜର କରି ପାରିଲେ ତୁମର ଉନ୍ନତି ସୁନିଶ୍ଚିତ। ମହାପ୍ରଭୁ ଜଗନ୍ନାଥ ତୁମ ସମସ୍ତଙ୍କର ମଙ୍ଗଳ ବିଧାନ କରନ୍ତୁ।",
    ],
    messageEng: [
      "Welcome to Sarada Vidya Mandir — a second home, far from yours. Your teachers here are your second parents.",
      "Keeping this campus clean is your first and foremost duty. Be a good citizen, and the nation will prosper.",
      "Stay disciplined, embrace this family as your own, and success is assured. May Lord Jagannath bless you all.",
    ],
  },
  {
    id: "president",
    image: "/faculty/Praasident ,Chakradhara pradhan.jpeg",
    roleEng: "President, Managing Committee",
    roleOdia: "ସଭାପତି, ପରିଚାଳନା କମିଟି",
    name: "ଚକ୍ରଧର ପ୍ରଧାନ",
    nameEng: "Chakradhara Pradhan",
    qual: "",
    tag: "President, Managing Committee",
    messageOdia: [
      "ଶାରଦା ବିଦ୍ୟାମନ୍ଦିର — ଶିକ୍ଷା କ୍ଷେତ୍ରରେ ଏକ ପରିବର୍ତ୍ତନର ସ୍ୱର। ଆଦର୍ଶ ଓ ନୈତିକ ଶିକ୍ଷାର ମନ୍ଦିର, ଏ ଅନୁଷ୍ଠାନ।",
      "ଏହାର ଗୁରୁମା, ଗୁରୁଜୀମାନେ ତାଲିମପ୍ରାପ୍ତ, ଛାତ୍ରବତ୍ସଳ, ସମୟାନୁବର୍ତ୍ତୀ ତଥା ଶିକ୍ଷାମନସ୍କ। ବିଭିନ୍ନ ପ୍ରତିଯୋଗିତାରେ 'ଶାରଦା'ର ବିଦ୍ୟାର୍ଥୀ ଜିଲ୍ଲାରେ ଆଗୁଆ।",
      "ମ୍ୟାଟ୍ରିକ ଫଳ ଖୁବ୍ ସନ୍ତୋଷଜନକ — ଶତପ୍ରତିଶତ ସଫଳତା ଏହାର ରେକର୍ଡ଼। ମଣିଷ ତିଆରି କାରଖାନା ହେଉଛି ଶାରଦା ବିଦ୍ୟାମନ୍ଦିର। ମୁଁ ଏ ଅନୁଷ୍ଠାନ ପ୍ରତି ଗର୍ବିତ।",
    ],
    messageEng: [
      "Sarada Vidya Mandir is a voice of change in education — a true temple of ideal and moral learning.",
      "Our teachers are trained, student-centric and dedicated. Sarada students consistently lead in district-level competitions.",
      "Our Matric results are outstanding — with a record of 100% pass rate. I am proud to serve this institution.",
    ],
  },
];
function LeaderCard({ leader }) {
  const [showEng, setShowEng] = useState(false);
  const messages = showEng ? leader.messageEng : leader.messageOdia;

  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden border border-gray-100 flex flex-col">
      <div className="bg-[#8B0000] h-2 w-full" />
      <div className="flex flex-col md:flex-row gap-6 p-6 flex-grow">
        {/* Photo */}
        <div className="flex flex-col items-center gap-3 md:w-44 shrink-0">
          <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-[#8B0000] shadow-md">
            {leader.image ? (
              <img src= {leader.image} alt={leader.nameEng} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-[#f6efe2] flex items-center justify-center text-[#8B0000] text-4xl font-bold">
                {leader.nameEng.charAt(0)}
              </div>
            )}
          </div>
          <div className="text-center">
            <p className="font-bold text-[#8B0000] text-sm leading-tight">{leader.nameEng}</p>
            <p className="text-gray-500 text-xs mt-0.5">{leader.tag}</p>
            {leader.qual && (
              <span className="inline-block mt-1 text-xs bg-[#f6efe2] text-[#8B0000] border border-[#8B0000]/20 rounded-full px-2 py-0.5">
                {leader.qual}
              </span>
            )}
          </div>
        </div>
        {/* Message */}
        <div className="flex-grow flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Quotes size={22} weight="fill" className="text-[#facc15]" />
              <span className="text-xs font-semibold uppercase tracking-widest text-[#8B0000]">
                {showEng ? "Message" : "ବାର୍ତ୍ତା"}
              </span>
            </div>
            <div className="space-y-2">
              {messages.map((para, i) => (
                <p key={i} className="text-gray-700 text-sm leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
          <div className="flex items-center justify-between mt-4 pt-3 border-t border-gray-100">
            <div>
              <p className="font-bold text-[#8B0000] text-sm">{leader.name}</p>
              <p className="text-gray-500 text-xs">{showEng ? leader.roleEng : leader.roleOdia}</p>
            </div>
            <button
              onClick={() => setShowEng(!showEng)}
              className="text-xs font-semibold px-3 py-1.5 rounded-full border border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white transition-all duration-200"
            >
              {showEng ? "← ଓଡ଼ିଆ" : "English →"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function About() {
  // ✅ Odia is default for principal message
  

  // ✅ Each card has its own independent language state, Odia default
  const [visionLang,  setVisionLang]  = useState("odia");
  const [missionLang, setMissionLang] = useState("odia");

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
      {/* ── CHAIRMAN & PRESIDENT MESSAGE ── */}
<section className="bg-[#fdf8f2] py-12 px-4">
  <div className="max-w-5xl mx-auto">
    <div className="text-center mb-8">
      <p className="text-[#facc15] text-xs font-semibold uppercase tracking-widest mb-1">ନେତୃତ୍ୱ</p>
      <h2 className="text-2xl font-bold text-[#8B0000]">Chairman & President's Message</h2>
      <div className="w-12 h-1 bg-[#facc15] mx-auto mt-2 rounded" />
    </div>
    <div className="grid md:grid-cols-2 gap-6">
      {leaders.map((leader) => (
        <LeaderCard key={leader.id} leader={leader} />
      ))}
    </div>
  </div>
</section>

    </div>
  );
}
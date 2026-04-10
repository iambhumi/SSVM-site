// src/pages/About.jsx
import { useState } from "react"; // ✅ ADD THIS
import { Link } from "react-router-dom";
import { Buildings, Target, Eye, BookOpenText } from "@phosphor-icons/react";


const principalMessage = {
  english: {
    label: "Principal's Message",
    subtitle: "ପ୍ରଧାନ ଶିକ୍ଷକଙ୍କ ସନ୍ଦେଶ",
    message: [
      "At the beginning of the new academic year, I extend my blessings and best wishes to all the students.",
      " I hope that this year you will work harder to achieve your goals. Education is extremely important in human life. It teaches us values, knowledge, and discipline.",

      "In our school, along with education, special emphasis is given to moral values, discipline, and dedication. Students should respect their teachers and fulfill their responsibilities with sincerity.",

      "I believe that you will receive a good education in this institution. May you achieve success in your life and contribute to the progress of the nation.",

    " Wishing you success in your future.",
     
      "— Sarat Chandra Mohapatra, Sarada Vidya Mandir",
    ],
    name: "Sarat Chandra Mohapatra",
    designation: "Principal, Sarada Vidya Mandir",
  },
  odia: {
    label: "ପ୍ରଧାନ ଶିକ୍ଷକଙ୍କ ବାର୍ତ୍ତା",
    subtitle: "Principal's Message",
    message: [
      
      "ନୂତନ ଶିକ୍ଷାବର୍ଷର ଆରମ୍ଭରେ ମୁଁ ସମସ୍ତ ଛାତ୍ରଛାତ୍ରୀଙ୍କୁ ଆଶୀର୍ବାଦ ଓ ଶୁଭେଚ୍ଛା ଜଣାଉଛି । ",
      "ଏହି ବର୍ଷ ଆପଣମାନେ ନିଜ ଲକ୍ଷ୍ୟ ପ୍ରାପ୍ତି ପାଇଁ ଅଧିକ ପରିଶ୍ରମ କରିବେ ବୋଲି ଆଶା କରୁଛି । ଶିକ୍ଷା ମାନବଜୀବନରେ ଅତ୍ୟନ୍ତ ଆବଶ୍ୟକ । ଏହା ଆମକୁ ନୀତି, ଜ୍ଞାନ ଓ ଶିଷ୍ଟାଚାର ଶିଖାଏ ।",

      "ଆମ ବିଦ୍ୟାଳୟରେ ଶିକ୍ଷା ସହିତ ନୈତିକ ମୂଲ୍ୟବୋଧ, ଶୃଙ୍ଖଳା ଓ ନିଷ୍ଠାକୁ ବିଶେଷ ଗୁରୁତ୍ୱ ଦିଆଯାଏ । ଛାତ୍ରଛାତ୍ରୀମାନେ ନିଜ ଗୁରୁଜନଙ୍କ ପ୍ରତି ସମ୍ମାନ ଦେବା ସହିତ ନିଜ ଦାୟିତ୍ୱକୁ ନିଷ୍ଠାର ସହିତ ପାଳନ କରିବା ଉଚିତ ।",

      "ଏହି ବିଦ୍ୟାଳୟରେ ଆପଣମାନେ ଭଲ ଶିକ୍ଷା ପାଇବେ ବୋଲି ମୋର ଆଶା ଅଛି । ଆପଣମାନେ ନିଜ ଜୀବନରେ ସଫଳତା ଲାଭ କରିବେ ଓ ଦେଶର ଉତ୍କର୍ଷରେ ଅବଦାନ ରଖିବେ ।",
      "— ପ୍ରଧାନ ଶିକ୍ଷକଙ୍କ ନାମ, ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର",
    ],
    name: "ପ୍ରଧାନ ଶିକ୍ଷକଙ୍କ ନାମ",
    designation: "ପ୍ରଧାନ ଶିକ୍ଷକ, ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର",
  },
};

export default function About() {
  const [lang, setLang] = useState("english"); // ✅ ADD THIS
  const msg = principalMessage[lang];           // ✅ ADD THIS

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
            Know our story, our vision, our values — and the people
            who make Sarada Vidya Mandir a second home for every student.
          </p>
        </div>
      </section>

      {/* ── ABOUT THE SCHOOL ── UNCHANGED */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-10">
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
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <Buildings size={36} weight="duotone" color="#8B0000" />
                <h2 className="text-red-900 text-2xl md:text-3xl font-bold">
                  About the School
                </h2>
              </div>
              <div className="w-16 h-1 bg-yellow-400 rounded-full mb-6" />
              <div className="space-y-4 text-gray-600 text-sm md:text-base leading-relaxed">
                <p>
                  Sarada Vidya Mandir is a trusted Odia-medium school located in
                  Bhadrak, Odisha, dedicated to providing quality education rooted
                  in Indian values and the rich cultural heritage of Odisha.
                </p>
                <p>
                  Established in 2002, the school has grown to become a cornerstone
                  of the local community nurturing hundreds of students each year
                  from Class I through Class X under the Board of Secondary Education
                  (BSE) Odisha curriculum.
                </p>
                <p>
                  Our approach goes beyond textbooks. We focus on the all-round
                  development of every child academically, physically, culturally
                  and morally preparing them to become responsible citizens of
                  tomorrow.
                </p>
                <p>
                  With dedicated faculty, modern smart classrooms, safe
                  transportation, a well-stocked library and regular cultural
                  activities, Sarada Vidya Mandir offers a warm, disciplined and
                  inspiring environment for every learner.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── DIVIDER ── UNCHANGED */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-200 to-transparent" />

      {/* ── VISION & MISSION ── UNCHANGED */}
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
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                            hover:shadow-md hover:border-red-200 transition-all
                            duration-200 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                  <Eye size={28} weight="duotone" color="#8B0000" />
                </div>
                <h3 className="text-red-900 text-xl font-bold">Our Vision</h3>
              </div>
              <div className="w-12 h-1 bg-yellow-400 rounded-full mb-5" />
              <p className="text-gray-600 text-sm leading-relaxed">
                To be a leading institution in Odisha that nurtures every child
                with quality education, strong moral values and cultural pride
                creating confident, compassionate and capable individuals who
                contribute positively to society.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                {[
                  "Holistic development of every student",
                  "Preserving Odia culture & heritage",
                  "Building future-ready leaders",
                ].map((v) => (
                  <li key={v} className="flex items-start gap-2">
                    <span className="text-yellow-500 font-bold mt-0.5">›</span>
                    {v}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                            hover:shadow-md hover:border-red-200 transition-all
                            duration-200 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center justify-center">
                  <Target size={28} weight="duotone" color="#8B0000" />
                </div>
                <h3 className="text-red-900 text-xl font-bold">Our Mission</h3>
              </div>
              <div className="w-12 h-1 bg-yellow-400 rounded-full mb-5" />
              <p className="text-gray-600 text-sm leading-relaxed">
                To provide accessible, high-quality Odia-medium education that
                empowers students from all backgrounds combining academic
                excellence with discipline, creativity and values-based learning.
              </p>
              <ul className="mt-4 space-y-2 text-sm text-gray-500">
                {[
                  "Quality education for every child",
                  "Safe, inclusive learning environment",
                  "Partnership with parents & community",
                ].map((m) => (
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

      {/* ── DIVIDER ── UNCHANGED */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-200 to-transparent" />

      {/* ── PRINCIPAL'S MESSAGE ── ✅ FULLY REPLACED */}
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

            {/* Language Toggle */}
            <div className="inline-flex rounded-full border-2 border-red-900 overflow-hidden">
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
                  src="/Principal.jpeg"
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
                  {lang === "english"
                    ? "A Word from Our Principal"
                    : "ପ୍ରଧାନ ଶିକ୍ଷକଙ୍କ ଅଭିମତ"}
                </h3>
              </div>

              <p className="text-4xl text-red-300 font-serif leading-none select-none mb-2">
                "
              </p>

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
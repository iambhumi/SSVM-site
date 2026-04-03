// src/pages/About.jsx
import { Link } from "react-router-dom";
import { Buildings, Target, Eye, BookOpenText } from "@phosphor-icons/react";

export default function About() {
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
                  of the local community — nurturing hundreds of students each year
                  from Class I through Class X under the Board of Secondary Education
                  (BSE) Odisha curriculum.
                </p>
                <p>
                  Our approach goes beyond textbooks. We focus on the all-round
                  development of every child — academically, physically, culturally
                  and morally — preparing them to become responsible citizens of
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
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Vision */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                            hover:shadow-md hover:border-red-200 transition-all
                            duration-200 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center
                                justify-center">
                  <Eye size={28} weight="duotone" color="#8B0000" />
                </div>
                <h3 className="text-red-900 text-xl font-bold">Our Vision</h3>
              </div>
              <div className="w-12 h-1 bg-yellow-400 rounded-full mb-5" />
              <p className="text-gray-600 text-sm leading-relaxed">
                To be a leading institution in Odisha that nurtures every child
                with quality education, strong moral values and cultural pride —
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

            {/* Mission */}
            <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100
                            hover:shadow-md hover:border-red-200 transition-all
                            duration-200 hover:-translate-y-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center
                                justify-center">
                  <Target size={28} weight="duotone" color="#8B0000" />
                </div>
                <h3 className="text-red-900 text-xl font-bold">Our Mission</h3>
              </div>
              <div className="w-12 h-1 bg-yellow-400 rounded-full mb-5" />
              <p className="text-gray-600 text-sm leading-relaxed">
                To provide accessible, high-quality Odia-medium education that
                empowers students from all backgrounds — combining academic
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

      {/* ── DIVIDER ── */}
      <div className="w-full h-1 bg-gradient-to-r from-transparent via-red-200 to-transparent" />

      {/* ── PRINCIPAL'S MESSAGE ── */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-yellow-600 text-sm uppercase tracking-widest
                          font-semibold mb-2">
              ପ୍ରଧାନ ଶିକ୍ଷକଙ୍କ ସନ୍ଦେଶ
            </p>
            <h2 className="text-red-900 text-2xl md:text-3xl font-bold">
              Principal's Message
            </h2>
            <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mt-3" />
          </div>

          <div className="flex flex-col md:flex-row items-start gap-10
                          bg-red-50 rounded-2xl p-8 border border-red-100 shadow-sm">

            {/* Principal Photo */}
            <div className="flex-shrink-0 flex flex-col items-center gap-3">
              <div className="w-36 h-36 rounded-full border-4 border-red-800
                              bg-gray-100 flex items-center justify-center
                              text-5xl shadow-lg overflow-hidden">
                👩‍🏫
              </div>
              <p className="text-red-900 font-bold text-sm text-center">
                Principal Name
              </p>
              <p className="text-gray-500 text-xs text-center">
                Sarada Vidya Mandir<br />Bhadrak, Odisha
              </p>
            </div>

            {/* Message Content */}
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                <BookOpenText size={28} weight="duotone" color="#8B0000" />
                <h3 className="text-red-900 font-bold text-xl">
                  A Word from Our Principal
                </h3>
              </div>
              <div className="space-y-4 text-gray-700 text-sm md:text-base
                              leading-relaxed">
                <p className="text-2xl text-red-800 font-bold leading-none">"</p>
                <p className="italic">
                  Welcome to Sarada Vidya Mandir — a place where young minds
                  are nurtured with values, knowledge and our rich Odia culture.
                  We believe every child is unique and capable of achieving
                  greatness when given the right environment and guidance.
                </p>
                <p className="italic">
                  Our dedicated team of teachers works tirelessly to ensure
                  that each student not only excels academically but also grows
                  as a responsible, compassionate individual rooted in the
                  traditions of our great state of Odisha.
                </p>
                <p className="italic">
                  I warmly invite all parents and students to be a part of our
                  school family and together, let us build a brighter future
                  for our children.
                </p>
                <p className="text-red-800 font-semibold mt-4">
                  — Principal Name, Sarada Vidya Mandir
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
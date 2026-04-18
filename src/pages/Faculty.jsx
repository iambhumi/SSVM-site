// src/pages/Faculty.jsx
import { useState } from "react";

const teachingStaff = [
  {id: 0, name:  "Chakradhara Pradhan",        qualification: "President", photo: "Praasident ,Chakradhara pradhan.jpeg"},
  { id: 1,  name: "Sarat Chandra Mohapatra",  qualification: " Principal, M.A, B.Ed",        level: "I – VIII", photo: "SaratChandraMohapatraPrincipal.jpeg" },
  { id: 2,  name: "Nirmal Kumar Senapati",     qualification: "I.A",             level: "I – V",    photo: "Nirmal kumar senapati.jpeg" },
  { id: 3,  name: "Susmita Swain",             qualification: "M.A, B.Ed",       level: "I – VIII", photo: "Susmita swain.jpeg" },
  { id: 4,  name: "Sujata Padhi",              qualification: "B.A, D.EL.ED",    level: "I – V",    photo: "Sujata padhi.jpeg" },
  { id: 5,  name: "Ajaya Kumar Rout",          qualification: "B.A, D.EL.ED",    level: "I – VIII", photo: "Ajaya kumar rout.jpeg" },
  { id: 6,  name: "Sushanta Kumar Senapati",   qualification: "M.A, B.SC, B.Ed", level: "I – VIII", photo: "sushanta kumar senapati.jpeg" },
  { id: 7,  name: "Snehalata Mohanty",         qualification: "B.A, D.EL.ED",    level: "I – V",    photo: "Snehalata Mohanty.jpeg" },
  { id: 8,  name: "Kunjalata Senapati",        qualification: "B.A, D.EL.ED",    level: "I – VIII", photo: "Kunjalata senapati.jpeg" },
  { id: 9,  name: "Dillip Kumar Jena",         qualification: "M.A, D.EL.ED",    level: "I – VIII", photo: "Dillip kumar jena.jpeg" },
  { id: 10, name: "Nityananda Senapati",       qualification: "B.A, B.Ed",       level: "I – VIII", photo: "Nityananda senapati.jpeg" },
  { id: 11, name: "Sudesna Patra",             qualification: "B.A, D.EL.ED",    level: "I – V",    photo: "sudesna patra.jpeg" },
  { id: 12, name: "Pravati Bahalia",           qualification: "B.A, B.Ed",       level: "I – VIII", photo: "pravati bahalia.jpeg" },
  { id: 13, name: "Keshab Chandra Sethi",      qualification: "B.A, D.EL.ED",    level: "I – VIII", photo: "keshab chandra sethi.jpeg" },
  { id: 14, name: "Kabitarani Tripathy",       qualification: "B.A, D.EL.ED",    level: "I – V",    photo: "Kabitarani Tripathy.jpeg" },
  { id: 15, name: "Gangadhar Palata",          qualification: "B.A, B.Ed",       level: "I – VIII", photo: "Gangadhar palata.jpeg" },
  { id: 16, name: "Arpita Nayak",              qualification: "B.SC",            level: "I – V",    photo: "Arpita nayak.jpeg" },
  { id: 17, name: "Prajnaparamita Barik",      qualification: "B.A, B.Ed",       level: "I – VIII", photo: "Prajnaparamita barik.jpeg"},
  { id: 18, name: "Nimai Charan Behera",       qualification: "B.SC, B.Ed",      level: "I – V",    photo: "Nimai charan behera.jpeg" },
  { id: 19, name: "Labanyabati Sahoo",         qualification: "B.A",             level: "I – V",    photo: "Labanyabati sahoo.jpeg" },
  { id: 20, name: "Prakash Chandra Sahoo",     qualification: "B.A, B.Ed",       level: "I – VIII", photo: "Prakash chandra sahoo.jpeg" },
  { id: 21, name: "Rinarani Panda",            qualification: "I.A",             level: "I – V",    photo: "Rinarani panda.jpeg" },
  { id: 22, name: "Rasmita Behera",            qualification: "I.A",             level: "I – V",    photo: "Rasmita behera.jpeg" },
  { id: 23, name: "Harapriya Panigrahi",       qualification: "B.A",             level: "I – V",    photo: "Harapriya panigrahi.jpeg" },
  { id: 24, name: "Madhusmita Rout",           qualification: "B.A",             level: "I – V",    photo: "Madhusmita Rout.jpeg" },
  { id: 25, name: "Pritirekha Boitai",         qualification: "B.A",             level: "I – V",    photo: "Priterekha boitai.jpeg" },
  { id: 26, name: "Diptimayee Jena",           qualification: "B.SC",            level: "I – V",    photo: "Diptimayee jena.jpeg" },
  { id: 27, name: "Sikha Rout",                qualification: "B.A",             level: "I – V",    photo: "sikha rout.jpeg"},
  { id: 28, name: "Biswaprava Palei",          qualification: "B.A, B.Ed",       level: "I – VIII", photo: "Biswaprava Palei.jpeg" },
  { id: 29, name: "Satyalipika Sahoo",         qualification: "B.SC, B.Ed",      level: "I – VIII", photo: "satyalipika sahoo.jpeg" },
  { id: 30, name: "Pratimalata Jena",          qualification: "B.SC",            level: "I – V",    photo: "Pratimalata jena.jpeg" },
  { id: 31, name: "Banya Panda",               qualification: "B.A, B.Ed",       level: "I – VIII", photo: "Banya panda.jpeg" },
];

const nonTeachingStaff = [
  { id: 1, name: "Malati Lata Barik",   role: "Non-Teaching Staff", photo: "MalatiLata.jpeg" },
  { id: 2, name: "Susanta Kumar Panda", role: "Non-Teaching Staff", photo: "" },
  { id: 3, name: "Basanta Jena",        role: "Non-Teaching Staff", photo: "BasantaLata Jena.jpeg" },
  { id: 4, name: "Mamakalpita Rout",    role: "Non-Teaching Staff", photo: "Mamakalpita.jpeg" },
];

// Generates initials avatar with consistent color per name
function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((n) => n[0])
    .join("");
}

const avatarColors = [
  "bg-red-800", "bg-red-700", "bg-yellow-700",
  "bg-red-900", "bg-amber-800", "bg-rose-800",
];

function getAvatarColor(id) {
  return avatarColors[id % avatarColors.length];
}

function FacultyCard({ person, showRole = false }) {
  const [imgError, setImgError] = useState(false);
  const photoSrc = person.photo
    ? `/faculty/${person.photo}`
    : null;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100
                    hover:shadow-md hover:-translate-y-1 transition-all duration-200
                    flex flex-col items-center p-5 text-center gap-3">

      {/* Photo or Avatar */}
      <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-red-900 shadow flex-shrink-0">
        {photoSrc && !imgError ? (
          <img
            src={photoSrc}
            alt={person.name}
            className="w-full h-full object-cover object-top"
            onError={() => setImgError(true)}
          />
        ) : (
          <div
            className={`w-full h-full flex items-center justify-center
                        ${getAvatarColor(person.id)} text-white text-2xl font-bold`}
          >
            {getInitials(person.name)}
          </div>
        )}
      </div>

      {/* Info */}
      <div>
        <h3 className="font-bold text-gray-900 text-sm leading-tight">
          {person.name}
        </h3>

        {person.qualification && (
          <p className="text-red-800 text-xs font-semibold mt-1">
            {person.qualification}
          </p>
        )}

        {showRole && (
          <p className="text-gray-500 text-xs mt-2">{person.role}</p>
        )}
      </div>
    </div>
  );
}

export default function Faculty() {
  const [filter, setFilter] = useState("all");

  const filtered =
    filter === "all"
      ? teachingStaff
      : teachingStaff.filter((t) =>
          filter === "i-viii"
            ? t.level === "I – VIII"
            : t.level === "I – V"
        );

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ── HERO BANNER ── */}
      <section
        className="w-full py-14 px-6 text-center"
        style={{
          background:
            "linear-gradient(135deg, #6b0000 0%, #8B0000 60%, #b30000 100%)",
        }}
      >
        <p className="text-yellow-400 font-semibold tracking-widest uppercase text-sm mb-2">
          ଆମ ଶିକ୍ଷକ ମଣ୍ଡଳୀ
        </p>
        <h1 className="text-3xl md:text-5xl font-bold text-white">
          Our Faculty
        </h1>
        <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mt-4" />
        <p className="text-white/70 mt-4 text-sm max-w-xl mx-auto">
          Dedicated educators shaping the future of every student at
          Sarada Vidya Mandir.
        </p>

        {/* Stats */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {[
            { label: "Teaching Staff",     value: "31" },
            { label: "Non-Teaching Staff", value: "4"  },
            { label: "Classes Covered",    value: "I–VIII" },
          ].map((s) => (
            <div key={s.label} className="text-center">
              <p className="text-yellow-400 text-3xl font-bold">{s.value}</p>
              <p className="text-white/70 text-xs mt-1">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── TEACHING STAFF ── */}
      <section className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between
                        gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-red-900">Teaching Staff</h2>
            <p className="text-gray-500 text-sm mt-1">
              2026–27 · Sarada Vidya Mandir
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="inline-flex rounded-full border-2 border-red-900 overflow-hidden">
            {[
              { key: "all",    label: "All"       },
              { key: "i-viii", label: "Class I–VIII" },
              { key: "i-v",    label: "Class I–V"    },
            ].map((f) => (
              <button
                key={f.key}
                onClick={() => setFilter(f.key)}
                className={`px-4 py-2 text-xs font-bold transition-all duration-200 ${
                  filter === f.key
                    ? "bg-red-900 text-white"
                    : "bg-white text-red-900 hover:bg-red-50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4
                        lg:grid-cols-5 xl:grid-cols-6 gap-4">
          {filtered.map((teacher) => (
            <FacultyCard key={teacher.id} person={teacher} />
          ))}
        </div>
      </section>

      {/* ── NON-TEACHING STAFF ── */}
      <section className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-red-900">
              Non-Teaching Staff
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Support staff keeping the school running smoothly
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl">
            {nonTeachingStaff.map((person) => (
              <FacultyCard key={person.id} person={person} showRole />
            ))}
          </div>
        </div>
      </section>

    

    </main>
  );
} 
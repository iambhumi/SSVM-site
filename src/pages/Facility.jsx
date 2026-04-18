// src/pages/Facilities.jsx

const facilities = [
  {
    title: "Transportation",
    image: "/Facilities.jpeg", // your existing photo
    desc: "We provide safe and reliable school bus and van services covering major areas of Rourkela for the daily commute of our students.",
  },
  {
    title: "Spacious Classrooms",
    icon: "",
    image: "",
    desc: "Well-ventilated, naturally lit classrooms designed to create a focused and comfortable learning environment for all students.",
  },
  {
    title: "Library",
    image: "",
    desc: "A well-stocked library with Odia, Hindi and English books, encouraging reading habits and self-learning among students.",
  },
  {
    title: "Playground",
    image: "/Play1.jpeg",
    desc: "A spacious playground for physical activities, sports and outdoor games that promote health and teamwork.",
  },
  
 
  {
    title: "First Aid & Health",
    image: "",
    desc: "Basic first aid facility available on campus. Health checkup drives are conducted periodically for all students.",
  },
];

export default function Facilities() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-red-900 mb-3">
          Our Facilities
        </h1>
        <p className="text-gray-500 text-sm md:text-base max-w-xl mx-auto">
          We provide a safe, nurturing and well-equipped environment to support
          every student's growth — academically, physically and emotionally.
        </p>
        <div className="w-20 h-1 bg-yellow-400 mx-auto mt-4 rounded-full" />
      </div>

      {/* Facilities Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {facilities.map((f) => (
          <div
            key={f.title}
            className="bg-white rounded-2xl shadow-sm border border-gray-100
                       hover:shadow-md hover:-translate-y-1 transition-all
                       duration-200 overflow-hidden"
          >
            {/* Image or Icon Fallback */}
            {f.image ? (
              <img
                src={f.image}
                alt={f.title}
                className="w-full h-48 object-cover"
              />
            ) : (
              <div className="w-full h-48 bg-red-50 flex items-center
                              justify-center">
                <span className="text-red-900 font-bold text-xl">Coming Soon</span>
              </div>
            )}

            {/* Card Content */}
            <div className="p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-2xl">{f.icon}</span>
                <h3 className="text-red-900 font-bold text-base">{f.title}</h3>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

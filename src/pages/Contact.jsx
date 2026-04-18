// src/pages/Contact.jsx
import {
  Phone, Envelope, MapPin, Clock,
  WhatsappLogo, FacebookLogo, YoutubeLogo,
} from "@phosphor-icons/react";

const contactCards = [
  {
    Icon:  Phone,
    label: "Phone",
    value: " +91 8895713070, +91 9556740283, +91 784795531",
    sub:   "Mon – Sat, 10AM to 4PM",
    href:  "tel :  +91 8895713070, +91 9556740283, +91 7847955317",
  },
  {
    Icon:  Envelope,
    label: "Email",
    value: "saradavidyamandir@gmail.com",
    sub:   "We reply within 24 hours",
    href:  "mailto:saradavidyamandir@gmail.com",
  },
  {
    Icon:  MapPin,
    label: "Location",
    value: "Sarada Vidya Mandir",
    sub:   "Bhadrak, Odisha — 756120",
    href:  "https://maps.google.com",
  },
  
];

export default function Contact() {

  return (
    <div className="w-full font-sans">

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
            ଯୋଗାଯୋଗ କରନ୍ତୁ
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-3">
            Contact Us
          </h1>
          <div className="w-20 h-1 bg-yellow-400 rounded-full mx-auto mb-4" />
          <p className="text-red-200 text-sm md:text-base max-w-xl mx-auto">
            Have a question or want to know more about admissions?
            We're here to help — reach out anytime.
          </p>
        </div>
      </section>

      {/* ── CONTACT CARDS STRIP ── */}
      <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {contactCards.map((c) => (
            <div
              key={c.label}
              className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100
                         hover:shadow-md hover:border-red-200 hover:-translate-y-1
                         transition-all duration-200 flex flex-col items-center
                         text-center gap-2"
            >
              <div className="w-12 h-12 rounded-xl bg-red-50 flex items-center
                              justify-center">
                <c.Icon size={26} weight="duotone" color="#8B0000" />
              </div>
              <p className="text-gray-400 text-xs uppercase tracking-widest font-semibold">
                {c.label}
              </p>
              {c.href ? (
                <a
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="text-red-900 font-bold text-sm hover:text-red-700
                             transition-colors leading-tight"
                >
                  {c.value}
                </a>
              ) : (
                <p className="text-red-900 font-bold text-sm leading-tight">
                  {c.value}
                </p>
              )}
              <p className="text-gray-400 text-xs">{c.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── MAIN SPLIT SECTION ── */}
      <section className="bg-white py-14 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* LEFT — Info Panel */}
          <div className="flex flex-col justify-between gap-8">

            {/* Heading */}
            <div>
              <h2 className="text-red-900 text-2xl md:text-3xl font-bold mb-3">
                Get in touch with <br />
                <span className="text-yellow-500">Sarada Vidya Mandir</span>
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Whether it's about admissions, fees, events or general queries —
                our office team is always available to assist parents and students.
              </p>
            </div>

            {/* Detailed Info */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl
                              border border-red-100">
                <div className="w-10 h-10 rounded-lg bg-red-900 flex items-center
                                justify-center flex-shrink-0">
                  <MapPin size={20} weight="fill" color="#facc15" />
                </div>
                <div>
                  <p className="text-red-900 font-bold text-sm">School Address</p>
                  <p className="text-gray-600 text-sm mt-0.5">
                    Sarada Vidya Mandir, BhandariPokhari, Bhadrak<br />
                    Odisha — 756210, India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl
                              border border-red-100">
                <div className="w-10 h-10 rounded-lg bg-red-900 flex items-center
                                justify-center flex-shrink-0">
                  <Phone size={20} weight="fill" color="#facc15" />
                </div>
                <div>
                  <p className="text-red-900 font-bold text-sm">Phone </p>
                  <a
                    href="tel: +91 8895713070, +91 9556740283, +91 7847955317"
                    className="text-gray-600 text-sm hover:text-red-800
                               transition-colors mt-0.5 block"
                  >
                     +91 8895713070, +91 9556740283, +91 7847955317
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl
                              border border-red-100">
                <div className="w-10 h-10 rounded-lg bg-red-900 flex items-center
                                justify-center flex-shrink-0">
                  <Envelope size={20} weight="fill" color="#facc15" />
                </div>
                <div>
                  <p className="text-red-900 font-bold text-sm">Email Address</p>
                  <a
                    href="mailto:info@saradavidyamandir.in"
                    className="text-gray-600 text-sm hover:text-red-800
                               transition-colors mt-0.5 block break-all"
                  >
                    saradavidyamandir@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <p className="text-gray-400 text-xs uppercase tracking-widest
                            font-semibold mb-3">
              
              </p>
              <div className="flex gap-3">

              </div>
            </div>
          </div>

          {/* RIGHT — Map */}
          <div className="bg-gray-50 rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <iframe
              title="School Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4095.148669349596!2d86.3734249637676!3d20.96033193182618!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a1bf97fd0f2cf3f%3A0x96d8dd8ec929993b!2sSarada%20Vidya%20Mandir.!5e0!3m2!1sen!2sin!4v1775153473964!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>



    </div>
  );
}
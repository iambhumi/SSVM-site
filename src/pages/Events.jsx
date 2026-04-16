// src/pages/Events.jsx
import { useState, useEffect, useRef } from "react";
import { X, ArrowLeft, ArrowRight, Images, CalendarBlank } from "@phosphor-icons/react";


const annualFunctionPhotos = [
  { id: 1, src: "/events/events1.jpeg", caption: "ପ୍ରାର୍ଥନା ସଭା · ଶିକ୍ଷକ ପ୍ରଶିକ୍ଷଣ · ପ୍ରତିଭା ପ୍ରଦର୍ଶନ" },
  { id: 2, src: "/events/events2.jpeg", caption: "Annual Function Highlights"                            },
  { id: 3, src: "/events/events3.jpeg", caption: "ମାତୃ ପିତୃ ପୂଜନ · ପୁରସ୍କୃତ ବିଦ୍ୟାର୍ଥୀ · କ୍ରୀଡ଼ାଜ୍ୟୋତି"  },
  { id: 4, src: "/events/events4.jpeg", caption: "ସ୍ୱାଧୀନତା ଦିବସ · ଆଧ୍ୟାତ୍ମିକ ଶିବିର · ସାଂସ୍କୃତିକ ଅନୁଷ୍ଠାନ" },
  { id: 5, src: "/events/events5.jpeg", caption: "ବାର୍ଷିକ ଉତ୍ସବ — ପୁସ୍ତକ ବିମୋଚନ ଅନୁଷ୍ଠାନ"             },
  { id: 6, src: "/events/events6.jpeg", caption: "ଦୈନନ୍ଦିନୀ — ବିଦ୍ୟାଳୟ ବାର୍ଷିକ ସ୍ମୃତି ୨୦୨୫–୨୬"          },
];

// ── Animate on scroll hook ──
function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  return [ref, visible];
}

// ── Single photo card ──
function PhotoCard({ photo, index, onClick, featured = false }) {
  const [ref, visible] = useScrollReveal(0.1);
  const [loaded, setLoaded]   = useState(false);
  const [error, setError]     = useState(false);

  return (
    <div
      ref={ref}
      onClick={() => onClick(index)}
      className={`group relative overflow-hidden rounded-2xl cursor-pointer
                  bg-gray-100 shadow-md
                  hover:shadow-2xl hover:-translate-y-1
                  transition-all duration-300
                  ${featured ? "aspect-[4/3]" : "aspect-square"}`}
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.5s ease ${index * 80}ms,
                     transform 0.5s ease ${index * 80}ms,
                     box-shadow 0.3s ease`,
      }}
    >
      {/* Shimmer skeleton while loading */}
      {!loaded && !error && (
        <div className="absolute inset-0 bg-gradient-to-r
                        from-gray-200 via-gray-100 to-gray-200
                        animate-pulse" />
      )}

      {/* Fallback if image missing */}
      {error && (
        <div className="absolute inset-0 flex flex-col items-center
                        justify-center bg-gray-100 gap-2">
          <Images size={32} color="#9ca3af" />
          <p className="text-gray-400 text-xs text-center px-4">{photo.caption}</p>
        </div>
      )}

      {!error && (
        <img
          src={photo.src}
          alt={photo.caption}
          onLoad={() => setLoaded(true)}
          onError={() => { setError(true); setLoaded(true); }}
          className={`w-full h-full object-cover transition-transform
                      duration-500 group-hover:scale-105
                      ${loaded ? "opacity-100" : "opacity-0"}`}
        />
      )}

      {/* Hover overlay */}
      {!error && (
        <div className="absolute inset-0 bg-gradient-to-t from-black/70
                        via-transparent to-transparent
                        opacity-0 group-hover:opacity-100
                        transition-opacity duration-300
                        flex items-end p-4">
          <p className="text-white text-sm font-semibold translate-y-2
                        group-hover:translate-y-0 transition-transform duration-300">
            {photo.caption}
          </p>
        </div>
      )}

      {/* Zoom icon */}
      {!error && (
        <div className="absolute top-3 right-3 w-8 h-8 rounded-full
                        bg-white/20 backdrop-blur-sm flex items-center
                        justify-center opacity-0 group-hover:opacity-100
                        transition-opacity duration-300">
          <Images size={14} color="white" />
        </div>
      )}
    </div>
  );
}

// ── Lightbox ──
function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape")     onClose();
      if (e.key === "ArrowLeft")  onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose, onPrev, onNext]);

  const photo = photos[index];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center
                 bg-black/90 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full mx-4 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
        />
        <div className="text-center mt-3">
          <p className="text-white/80 text-sm">{photo.caption}</p>
          <p className="text-white/40 text-xs mt-1">
            {index + 1} / {photos.length}
          </p>
        </div>

        <button
          onClick={onPrev}
          className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-14
                     w-10 h-10 rounded-full bg-white/10 hover:bg-white/25
                     flex items-center justify-center transition-all duration-200"
        >
          <ArrowLeft size={20} color="white" />
        </button>
        <button
          onClick={onNext}
          className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-14
                     w-10 h-10 rounded-full bg-white/10 hover:bg-white/25
                     flex items-center justify-center transition-all duration-200"
        >
          <ArrowRight size={20} color="white" />
        </button>

        <button
          onClick={onClose}
          className="absolute -top-12 right-0 w-10 h-10 rounded-full
                     bg-white/10 hover:bg-white/25
                     flex items-center justify-center transition-all duration-200"
        >
          <X size={20} color="white" />
        </button>
      </div>
    </div>
  );
}

export default function Events() {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [heroRef, heroVisible]            = useScrollReveal(0.1);

  const openLightbox  = (i) => setLightboxIndex(i);
  const closeLightbox = ()  => setLightboxIndex(null);
  const prevPhoto     = ()  => setLightboxIndex((i) => (i - 1 + annualFunctionPhotos.length) % annualFunctionPhotos.length);
  const nextPhoto     = ()  => setLightboxIndex((i) => (i + 1) % annualFunctionPhotos.length);

  return (
    <main className="min-h-screen bg-gray-50">

      {/* ── HERO BANNER ── */}
      <section
        className="w-full py-14 px-6 text-center relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #6b0000 0%, #8B0000 60%, #b30000 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10">
          <p className="text-yellow-400 text-sm uppercase tracking-widest font-semibold mb-2">
            ଆମ ଉତ୍ସବ
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-3">
            Events & Media
          </h1>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-4" />
          <p className="text-red-200 text-sm max-w-xl mx-auto">
            Celebrating milestones, talent and the spirit of Sarada Vidya Mandir.
          </p>
        </div>
      </section>

      {/* ── ANNUAL FUNCTION HEADER ── */}
      <section className="max-w-5xl mx-auto px-4 pt-14 pb-4">
        <div
          ref={heroRef}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4
                     transition-all duration-700"
          style={{
            opacity:   heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(24px)",
          }}
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CalendarBlank size={18} color="#8B0000" weight="duotone" />
              <span className="text-red-800 text-xs font-bold uppercase tracking-widest">
                2025 – 26
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-red-900">
              Annual Function
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              Felicitation, prize distribution and celebration of achievement.
            </p>
          </div>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                           bg-yellow-100 border border-yellow-300
                           text-yellow-800 text-xs font-bold self-start sm:self-auto">
            <Images size={14} />
            {annualFunctionPhotos.length} Photos
          </span>
        </div>
        <div className="mt-5 w-full h-px bg-gradient-to-r
                        from-yellow-400 via-yellow-200 to-transparent" />
      </section>

      {/* ── PHOTO GALLERY GRID ── */}
<section className="max-w-6xl mx-auto px-4 py-8">

  {/* 6-photo layout: 2 featured on top row, 4 in bottom grid */}
  <div className="flex flex-col gap-4">

    {/* Row 1 — 2 large featured photos */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {annualFunctionPhotos.slice(0, 2).map((photo, i) => (
        <PhotoCard key={photo.id} photo={photo} index={i} onClick={openLightbox} featured />
      ))}
    </div>

    {/* Row 2 — 4 thumbnails */}
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {annualFunctionPhotos.slice(2).map((photo, i) => (
        <PhotoCard key={photo.id} photo={photo} index={i + 2} onClick={openLightbox} />
      ))}
    </div>

  </div>

  

</section>

      {/* ── LIGHTBOX ── */}
      {lightboxIndex !== null && (
        <Lightbox
          photos={annualFunctionPhotos}
          index={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevPhoto}
          onNext={nextPhoto}
        />
      )}

      {/* ── ANIMATION KEYFRAMES ── */}
      <style>{`
        @keyframes fadeIn  { from { opacity: 0; }                       to { opacity: 1; }           }
        @keyframes scaleIn { from { opacity: 0; transform: scale(0.92);} to { opacity: 1; transform: scale(1); } }
        .animate-fadeIn  { animation: fadeIn  0.25s ease forwards; }
        .animate-scaleIn { animation: scaleIn 0.3s  ease forwards; }
      `}</style>

    </main>
  );
}
// src/pages/Events.jsx
import { useState, useEffect, useRef } from "react";
import { X, ArrowLeft, ArrowRight, Play, Images, CalendarBlank } from "@phosphor-icons/react";

// ─── REPLACE THESE with your actual image paths once you have them ───
const annualFunctionPhotos = [
  { id: 1,  src: "/events/af-1.jpg",  caption: "Opening Ceremony"           },
  { id: 2,  src: "/events/af-2.jpg",  caption: "Cultural Dance Performance" },
  { id: 3,  src: "/events/af-3.jpg",  caption: "Prize Distribution"         },
  { id: 4,  src: "/events/af-4.jpg",  caption: "Students on Stage"          },
  { id: 5,  src: "/events/af-5.jpg",  caption: "Chief Guest Address"        },
  { id: 6,  src: "/events/af-6.jpg",  caption: "School Choir"               },
  { id: 7,  src: "/events/af-7.jpg",  caption: "Fancy Dress Competition"    },
  { id: 8,  src: "/events/af-8.jpg",  caption: "Sports Award Ceremony"      },
  { id: 9,  src: "/events/af-9.jpg",  caption: "Group Photograph"           },
  { id: 10, src: "/events/af-10.jpg", caption: "Teachers' Felicitation"     },
  { id: 11, src: "/events/af-11.jpg", caption: "Annual Report Reading"      },
  { id: 12, src: "/events/af-12.jpg", caption: "Vote of Thanks"             },
];

// ─── REPLACE with actual YouTube video ID ───
const YOUTUBE_VIDEO_ID = "YOUR_VIDEO_ID_HERE";

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
function PhotoCard({ photo, index, onClick }) {
  const [ref, visible] = useScrollReveal(0.1);
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      ref={ref}
      onClick={() => onClick(index)}
      className="group relative overflow-hidden rounded-xl cursor-pointer
                 bg-gray-100 aspect-square shadow-sm
                 hover:shadow-xl hover:-translate-y-1
                 transition-all duration-300"
      style={{
        opacity:    visible ? 1 : 0,
        transform:  visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.5s ease ${index * 60}ms,
                     transform 0.5s ease ${index * 60}ms,
                     box-shadow 0.3s ease,
                     translate 0.3s ease`,
      }}
    >
      {/* Shimmer skeleton while loading */}
      {!loaded && (
        <div className="absolute inset-0 bg-gradient-to-r
                        from-gray-200 via-gray-100 to-gray-200
                        animate-pulse" />
      )}

      <img
        src={photo.src}
        alt={photo.caption}
        onLoad={() => setLoaded(true)}
        className={`w-full h-full object-cover transition-transform
                    duration-500 group-hover:scale-105
                    ${loaded ? "opacity-100" : "opacity-0"}`}
      />

      {/* Hover overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70
                      via-transparent to-transparent
                      opacity-0 group-hover:opacity-100
                      transition-opacity duration-300
                      flex items-end p-3">
        <p className="text-white text-xs font-semibold translate-y-2
                      group-hover:translate-y-0 transition-transform duration-300">
          {photo.caption}
        </p>
      </div>

      {/* Zoom icon */}
      <div className="absolute top-2 right-2 w-8 h-8 rounded-full
                      bg-white/20 backdrop-blur-sm flex items-center
                      justify-center opacity-0 group-hover:opacity-100
                      transition-opacity duration-300">
        <Images size={14} color="white" />
      </div>
    </div>
  );
}

// ── Lightbox ──
function Lightbox({ photos, index, onClose, onPrev, onNext }) {
  // Close on Escape, navigate on arrow keys
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
      {/* Card — stop propagation so clicks inside don't close */}
      <div
        className="relative max-w-4xl w-full mx-4 animate-scaleIn"
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={photo.src}
          alt={photo.caption}
          className="w-full max-h-[80vh] object-contain rounded-xl shadow-2xl"
        />

        {/* Caption */}
        <div className="text-center mt-3">
          <p className="text-white/80 text-sm">{photo.caption}</p>
          <p className="text-white/40 text-xs mt-1">
            {index + 1} / {photos.length}
          </p>
        </div>

        {/* Navigation */}
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

        {/* Close */}
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
  const [videoPlaying,  setVideoPlaying]  = useState(false);
  const [heroRef, heroVisible]            = useScrollReveal(0.1);
  const [videoRef, videoVisible]          = useScrollReveal(0.2);

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
        {/* Dot pattern */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10">
          <p className="text-yellow-400 text-sm uppercase tracking-widest
                        font-semibold mb-2">
            ଆମ ଉତ୍ସବ
          </p>
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-3">
            Events
          </h1>
          <div className="w-16 h-1 bg-yellow-400 rounded-full mx-auto mb-4" />
          <p className="text-red-200 text-sm max-w-xl mx-auto">
            Celebrating milestones, talent and the spirit of Sarada Vidya Mandir.
          </p>
        </div>
      </section>

      {/* ── ANNUAL FUNCTION HEADER ── */}
      <section className="max-w-6xl mx-auto px-4 pt-14 pb-4">
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
              <span className="text-red-800 text-xs font-bold uppercase
                               tracking-widest">
                2025 – 26
              </span>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-red-900">
              Annual Function
            </h2>
            <p className="text-gray-500 text-sm mt-1">
              A celebration of talent, culture and achievement.
            </p>
          </div>

          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full
                           bg-yellow-100 border border-yellow-300
                           text-yellow-800 text-xs font-bold">
            <Images size={14} />
            {annualFunctionPhotos.length} Photos
          </span>
        </div>

        {/* Gold divider */}
        <div className="mt-5 w-full h-px bg-gradient-to-r
                        from-yellow-400 via-yellow-200 to-transparent" />
      </section>

      {/* ── PHOTO GALLERY GRID ── */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {annualFunctionPhotos.map((photo, i) => (
            <PhotoCard
              key={photo.id}
              photo={photo}
              index={i}
              onClick={openLightbox}
            />
          ))}
        </div>
      </section>

      {/* ── VIDEO SECTION ── */}
      <section className="max-w-4xl mx-auto px-4 pb-16">
        <div
          ref={videoRef}
          className="transition-all duration-700"
          style={{
            opacity:   videoVisible ? 1 : 0,
            transform: videoVisible ? "translateY(0)" : "translateY(32px)",
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 mb-5">
            <div className="w-10 h-10 rounded-full bg-red-900 flex items-center
                            justify-center flex-shrink-0">
              <Play size={16} color="white" weight="fill" />
            </div>
            <div>
              <h3 className="text-red-900 font-bold text-lg">
                Full Event Video
              </h3>
              <p className="text-gray-500 text-xs">
                Annual Function 2025–26 · Sarada Vidya Mandir
              </p>
            </div>
          </div>

          {/* Video embed */}
          <div className="relative w-full aspect-video rounded-2xl overflow-hidden
                          shadow-xl border-4 border-red-900/10 bg-gray-900">

            {!videoPlaying ? (
              /* Thumbnail + play button */
              <div
                className="absolute inset-0 flex items-center justify-center
                           cursor-pointer group"
                onClick={() => setVideoPlaying(true)}
              >
                {/* YouTube thumbnail */}
                <img
                  src={`https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/maxresdefault.jpg`}
                  alt="Annual Function Video"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    e.target.src = `https://img.youtube.com/vi/${YOUTUBE_VIDEO_ID}/hqdefault.jpg`;
                  }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40
                                group-hover:bg-black/30 transition-colors duration-300" />

                {/* Play button */}
                <div className="absolute w-20 h-20 rounded-full bg-red-900
                                flex items-center justify-center shadow-2xl
                                group-hover:scale-110 group-hover:bg-red-700
                                transition-all duration-300 z-10">
                  <Play size={32} color="white" weight="fill" className="ml-1" />
                </div>

                {/* Label */}
                <div className="absolute bottom-4 left-4 text-white z-10">
                  <p className="font-bold text-sm drop-shadow">
                    Annual Function 2025–26
                  </p>
                  <p className="text-white/70 text-xs">
                    Click to play
                  </p>
                </div>
              </div>
            ) : (
              /* Actual YouTube embed — autoplay on click */
              <iframe
                src={`https://www.youtube.com/embed/${YOUTUBE_VIDEO_ID}?autoplay=1&rel=0`}
                title="Annual Function 2025-26"
                className="w-full h-full"
                allow="accelerometer; autoplay; clipboard-write;
                       encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            )}
          </div>

          {/* Note if no YouTube ID yet */}
          {YOUTUBE_VIDEO_ID === "YOUR_VIDEO_ID_HERE" && (
            <div className="mt-3 flex items-start gap-2 text-xs text-amber-700
                            bg-amber-50 border border-amber-200 rounded-xl px-4 py-3">
              <span>⚠️</span>
              <p>
                Replace <code className="bg-amber-100 px-1 rounded">YOUR_VIDEO_ID_HERE</code> with
                the actual YouTube video ID once the client uploads the video.
              </p>
            </div>
          )}
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
        @keyframes fadeIn {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes scaleIn {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
        .animate-fadeIn  { animation: fadeIn  0.25s ease forwards; }
        .animate-scaleIn { animation: scaleIn 0.3s ease forwards; }
      `}</style>

    </main>
  );
}
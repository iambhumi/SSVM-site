import { useState,useEffect } from "react";

export default function LandingPopup() {
  
  const [visible, setVisible] = useState(false);
  const [page, setPage] = useState(1);

  useEffect(() => {
    // Small delay so the page renders first, then popup appears
    const timer = setTimeout(() => {
      setVisible(true);
    }, 800); // 0.8s delay — adjust as you like

    return () => clearTimeout(timer);
  }, []); // ← empty array = runs fresh on every page load/refresh

  if (!visible) return null;

  const handleClose = () => {
    sessionStorage.setItem("splashSeen", "true");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center p-4">
      <div className="relative w-full max-w-lg max-h-[90vh] flex flex-col bg-white rounded-2xl overflow-hidden shadow-2xl">

        {/* Header */}
        <div className="bg-[#8B0000] px-4 py-3 flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <img src="/Logo.jpeg" alt="Logo" className="w-7 h-7 object-contain" />
            <span className="text-white text-sm font-bold">ଶାରଦା ବିଦ୍ୟା ମନ୍ଦିର</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-white/60 text-xs">{page} / 2</span>
            <button
              onClick={handleClose}
              className="text-white/80 hover:text-white text-xl font-bold leading-none"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>

        {/* Brochure Image */}
        <div className="overflow-y-auto flex-grow">
          <img
            src={page === 1 ? "/land2.jpeg" : "/land1.jpeg"}
            alt={`Brochure page ${page}`}
            className="w-full h-auto block"
          />
        </div>

        {/* Footer nav */}
        <div className="bg-white border-t border-gray-100 px-4 py-3 flex items-center justify-between shrink-0">
          <button
            onClick={() => setPage(1)}
            disabled={page === 1}
            className={`text-sm font-semibold px-4 py-1.5 rounded-full border transition-all duration-200
              ${page === 1
                ? "border-gray-200 text-gray-300 cursor-not-allowed"
                : "border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white"}`}
          >
            ← Previous
          </button>

          {/* Dot indicators */}
          <div className="flex gap-2">
            {[1, 2].map((p) => (
              <button
                key={p}
                onClick={() => setPage(p)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${
                  page === p ? "bg-[#8B0000] scale-125" : "bg-gray-300"
                }`}
              />
            ))}
          </div>

          {page < 2 ? (
            <button
              onClick={() => setPage(2)}
              className="text-sm font-semibold px-4 py-1.5 rounded-full border border-[#8B0000] text-[#8B0000] hover:bg-[#8B0000] hover:text-white transition-all duration-200"
            >
              Next →
            </button>
          ) : (
            <button
              onClick={handleClose}
              className="text-sm font-semibold px-4 py-1.5 rounded-full bg-[#8B0000] text-white hover:bg-[#6b0000] transition-all duration-200"
            >
              Enter Site →
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
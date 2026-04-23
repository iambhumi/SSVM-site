import { Link } from "react-router-dom";

export default function SchoolRules() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ── PAGE HERO ── */}
      <section className="bg-[#8B0000] text-white py-12 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 bg-[radial-gradient(circle,_#fff_1px,_transparent_1px)] bg-[size:24px_24px]" />
        <div className="relative z-10 max-w-3xl mx-auto">
          <p className="text-[#facc15] text-xs font-semibold uppercase tracking-widest mb-2">
            ଶାରଦା ବିଦ୍ୟାମନ୍ଦିର
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-3">ନିୟମ ଓ ବିଧି</h1>
          <div className="w-14 h-1 bg-[#facc15] mx-auto rounded mb-3" />
          <p className="text-white/70 text-sm">Rules & Regulations</p>
        </div>
      </section>

      {/* ── CONTENT ── */}
      <div className="max-w-4xl mx-auto px-4 py-10 space-y-10">

        {/* ════════════════════════════════
            SECTION 1 — ଅଭିଭାବକମାନଙ୍କୁ ନିବେଦନ
            ════════════════════════════════ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Card Header */}
          <div className="bg-[#8B0000] px-6 py-4 flex items-center gap-3">
            <span className="text-[#facc15] text-xl">📋</span>
            <h2 className="text-white font-bold text-lg md:text-xl">
              ଅଭିଭାବକମାନଙ୍କୁ ନିବେଦନ
            </h2>
          </div>

          <div className="p-6 md:p-8">
            <ol className="space-y-5">

              {/* Rule 1 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୧
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଶିଶୁ ପ୍ରାତଃକାଳରେ ଶୀଘ୍ର ଉଠିବା ନିମନ୍ତେ ଉତ୍ସାହିତ କରନ୍ତୁ।
                </p>
              </li>

              {/* Rule 2 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୨
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ସମୟ ସୂଚୀ ଅନୁସାରେ ପିଲାମାନେ ପୋଷାକ ପିନ୍ଧି ପରିଷ୍କାର ପରିଛନ୍ନ ହୋଇ ବିଦ୍ୟାଳୟକୁ
                  ଆସିବା ଅନିର୍ବାର୍ଯ୍ୟ ଅଟେ। ପୁଅମାନେ କଫ଼ି ପ୍ୟାଣ୍ଟ ଓ ଧଳା ସାର୍ଟ ସହିତ କଫ଼ି ଟାଇ,
                  ନାଲି ବେଲ୍ଟ, ନାଲି ମୋଜା ଓ କଳା ରଙ୍ଗର ଜୋତା ଏବଂ ଝିଅମାନେ କଫ଼ି ରଙ୍ଗର ସ୍କର୍ଟ
                  ଓ ଧଳା କୁର୍ତ୍ତା ସହିତ ନାଲି ବେଲ୍ଟ, କଫ଼ି ଟାଇ, ନାଲି ମୋଜା ଓ କଳା ଜୋତା
                  ପିନ୍ଧି ବିଦ୍ୟାଳୟକୁ ଆସିବା ଦରକାର। ଶୀତ ଦିନେ ପିଲାମାନେ ଲାଲ ରଙ୍ଗର ସ୍ୱେଟର
                  ପରିଧାନ କରି ଆସିବେ। ପ୍ରତ୍ୟେକ ଦିନ ପରିଚୟ ପତ୍ର ଧରି ଆସିବା ଏକାନ୍ତ ବିଧେୟ।
                  ପ୍ରତ୍ୟେକ ଶନିବାର ଦିନ ପୁଅ ଓ ଝିଅମାନଙ୍କ ପ୍ରତ୍ୟେକ ପୋଷାକ ଧଳା ରଙ୍ଗ ହେବା
                  ବିଧେୟ। ଅଷ୍ଟମ ଶ୍ରେଣୀ ଓ ତଦୁର୍ଦ୍ଧ ଛାତ୍ରମାନେ କଫ଼ି ରଙ୍ଗର ଫୁଲ ପ୍ୟାଣ୍ଟ ଓ ଧଳା
                  ସାର୍ଟ, ଛାତ୍ରୀମାନେ କଫ଼ି ରଙ୍ଗର ଚୁଡ଼ିଦାର ଓ ଧଳା ପଞ୍ଜାବୀ ପିନ୍ଧି ଆସିବେ।
                </p>
              </li>

              {/* Rule 3 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୩
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ପିଲାଙ୍କୁ ସାମାନ୍ୟ କାରଣ ପାଇଁ ଛୁଟିରେ ରଖନ୍ତୁ ନାହିଁ। ଛୁଟିରେ ରଖିବା ପୂର୍ବରୁ
                  ବିଦ୍ୟାଳୟକୁ ଆବେଦନ ପତ୍ର ଦିଅନ୍ତୁ। ବିନା ସୂଚନାରେ ଲଗାଣ ୧୫ ଦିନ ଅନୁପସ୍ଥିତ
                  ରହିଲେ ବିଦ୍ୟାଳୟରୁ ପିଲାର ନାମ କଟିଦିଆଯିବ।
                </p>
              </li>

              {/* Rule 4 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୪
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ପ୍ରତ୍ୟେକ ମାସର ମାସିକ ଦରମା ୧ ତାରିଖରୁ ୧୦ ତାରିଖ ମଧ୍ୟରେ ସ୍କୁଲ ଖୋଲିବା
                  ଦିନ ସ୍କୁଲ ସମୟରେ ଜମା କରିବାକୁ ହେବ। ନିର୍ଦ୍ଧାରିତ ତାରିଖ ପରେ ଦେଲେ ଜରିମାନା
                  ସହ ଦେବାକୁ ପଡ଼ିବ।
                </p>
              </li>

              {/* Rule 5 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୫
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଗୃହକୁ ଦିଆଯାଉଥିବା ସ୍କୁଲ ପାଠ ଯଥା ସମୟରେ ଓ ନିୟମିତ ଭାବରେ ଶିଶୁ ଯେପରି
                  କରେ, ଏହୁ ନିମନ୍ତେ ଅଭିଭାବକଙ୍କ ତତ୍ପରତା ଆବଶ୍ୟକ। ଯଦି କୌଣସି ଅଭିଭାବକ ନିଜେ
                  ଏଗୁଡ଼ିକ ଦେଖ ନ ପାରି ଟ୍ୟୁସନ ସାର୍ଚ୍ଛ ସାହାଯ୍ୟ ଇଚ୍ଛା କଲେ, ଅଭିଭାବକ
                  ଟ୍ୟୁସନ ସାର୍ଚ୍ଛଙ୍କୁ ଆଣି ପ୍ରଧାନ ଶିକ୍ଷକଙ୍କ ସହ ସାକ୍ଷାତ କରାଇବା ଅତ୍ୟନ୍ତ
                  ଜରୁରୀ। ନଚେତ୍ ଶିଶୁର ପ୍ରଗତି ବାଧାପ୍ରାପ୍ତ ହେବ।
                </p>
              </li>

              {/* Rule 6 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୬
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ବିଦ୍ୟାଳୟକୁ ପଠାଯାଉଥିବା ସୂଚନା ଓ ପ୍ରଗତି ପତ୍ରରେ ଅଭିଭାବକଙ୍କ ସ୍ୱାକ୍ଷର
                  ଜରୁରୀ ଅଟେ। ଅଭିଭାବକମାନେ ଏଗୁଡ଼ିକ ପ୍ରତି ସଂପୂର୍ଣ୍ଣ ଦୃଷ୍ଟି ଦେବା ଏକାନ୍ତ
                  ବିଧେୟ।
                </p>
              </li>

              {/* Rule 7 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୭
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଯଦି ଆପଣ ଅନୁଭବ କରୁଛନ୍ତି ଯେ ଆପଣଙ୍କ ଶିଶୁ ଠିକ୍ ଭାବରେ ପ୍ରଗତି କରୁ
                  ନାହିଁ, ତେବେ ପ୍ରଧାନ ଶିକ୍ଷକ ବା ଶ୍ରେଣୀ ଶିକ୍ଷକ / ଶିକ୍ଷୟିତ୍ରୀଙ୍କ ସହ
                  ପରାମର୍ଶ କରନ୍ତୁ।
                </p>
              </li>

              {/* Rule 8 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୮
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଏକ ପୂର୍ଣ୍ଣ ଶିକ୍ଷାବର୍ଷରେ ପିଲାର ଉପସ୍ଥିତ ଶତକଡ଼ା ୮୦ ଭାଗ ଆବଶ୍ୟକ। ଏହାର
                  ଅଭାବରେ ପିଲାଙ୍କୁ ବାର୍ଷିକ ପରୀକ୍ଷା ନିମନ୍ତେ ଅନୁମତି ଦିଆଯିବ ନାହିଁ। ଯଥା
                  ସମୟରେ ଉପସ୍ଥିତ ନ ହେଲେ, ଗୃହ କାର୍ଯ୍ୟ ନ ଆଣିଲେ ବା ବିନା ସ୍କୁଲ ଡ୍ରେସରେ
                  ଆଲେ ଶ୍ରେଣୀ ପ୍ରବେଶ ଅନୁମତି ମିଳିବ ନାହିଁ।
                </p>
              </li>

              {/* Rule 9 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୯
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ବର୍ଷକ ମଧ୍ୟରେ ୧ ମ ସମାପ୍ତି ସୂଚକ ମୂଲ୍ୟାୟନ ପୂର୍ବରୁ ଓ ୨ ୟ ସମାପ୍ତି ସୂଚକ
                  ମୂଲ୍ୟାୟନ ପୂର୍ବରୁ ଦୁଇଗୋଟି ଗଠନାମ୍ୟ ମୂଲ୍ୟାୟନ ଦେବାକୁ ବାଧ୍ୟ। ଯଥେଷ୍ଟ
                  କାରଣ ନ ଜଣାଇ ମାସିକ ପରୀକ୍ଷା ଦେବାରୁ ବଞ୍ଚିତ ହେଲେ ପିଲା ଉପଯୁକ୍ତ ସ୍ଥାନ
                  ପାଇବାରୁ ବଞ୍ଚିତ ହେବ।
                </p>
              </li>

              {/* Rule 10 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୧୦
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ରୁଟିନ ଅନୁଯାୟୀ ଖାତା ବହି ସହିତ ବ୍ୟାଗରେ କିଛି ଜଳଖିଆ (ନିରାମିଷ) ଓ ପାଣି
                  ବୋତଲ ଦେବା ବିଧେୟ।
                </p>
              </li>

              {/* Rule 11 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୧୧
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ବିଦ୍ୟାଳୟ ତରଫରୁ ଆହୂତ ବୈଠକରେ ଯୋଗଦାନ କରି ଛାତ୍ରଛାତ୍ରୀମାନଙ୍କ ଅଗ୍ରଗତିରେ
                  ସହାୟକ ହେବାକୁ ଅନୁରୋଧ।
                </p>
              </li>

              {/* Rule 12 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୧୨
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଆପଣଙ୍କ ପିଲା ଅନ୍ୟ ପିଲାର ଦ୍ରବ୍ୟ ନ ନେଇ ଯାଇଥିଲେ ବିଦ୍ୟାଳୟରେ ଜମା ଦେବାକୁ
                  ଅନୁରୋଧ।
                </p>
              </li>

              {/* Rule 13 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୧୩
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ବିଦ୍ୟାଳୟରେ ଅନୁଷ୍ଠିତ ସମସ୍ତ ଦିବସ ଓ ଜୟନ୍ତୀ ଉତ୍ସବରେ ପିଲାଙ୍କୁ ବିଦ୍ୟାଳୟକୁ
                  ପଠାଇବା ଜରୁରୀ।
                </p>
              </li>

            </ol>

            {/* Signature line */}
            <div className="mt-6 text-right text-sm text-gray-500 italic">
              — ଅଭିଭାବକଙ୍କ ସ୍ୱାକ୍ଷର
            </div>

            {/* Footer note */}
            <div className="mt-4 bg-[#fff8f0] border border-[#f3d5b0] rounded-xl px-5 py-4 text-center">
              <p className="text-[#8B0000] font-semibold text-sm italic">
                ❝ ଗର୍ବ ଓ ଅହଂକାର ମଣିଷକୁ ସର୍ବନାଶ କରିଦିଏ। ❞
              </p>
            </div>

          </div>
        </div>
                {/* ════════════════════════════════
            SECTION 2 — ମୂଲ୍ୟାୟନ ସଂକ୍ରାନ୍ତୀୟ ସୂଚନା
            ════════════════════════════════ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Card Header */}
          <div className="bg-[#8B0000] px-6 py-4 flex items-center gap-3">
            <span className="text-[#facc15] text-xl">📊</span>
            <h2 className="text-white font-bold text-lg md:text-xl">
              ମୂଲ୍ୟାୟନ ସଂକ୍ରାନ୍ତୀୟ ସୂଚନା
            </h2>
          </div>

          <div className="p-6 md:p-8">

            {/* Description */}
            <p className="text-gray-700 text-sm leading-relaxed mb-6">
              ବିଦ୍ୟାଳୟରେ ଏକ ଶିକ୍ଷାବର୍ଷରେ ୪ ଟି ଗଠନାମ୍ୟ ମୂଲ୍ୟାୟନ, ପ୍ରଥମ ସମାପ୍ତି ସୂଚକ
              ମୂଲ୍ୟାୟନ ଓ ଦ୍ୱିତୀୟ ସମାପ୍ତି ସୂଚକ ମୂଲ୍ୟାୟନ — ଏହିପରି ସମୁଦାୟ ୬ ଟି ମୂଲ୍ୟାୟନ
              କରାଯାଇଥାଏ। ପ୍ରଥମ ଓ ୨ ୟ ଗଠନାମ୍ୟ ମୂଲ୍ୟାୟନ ସହ ପ୍ରଥମ ସମାପ୍ତି ସୂଚକ ମୂଲ୍ୟାୟନକୁ
              ଏକ କରି ବିଦ୍ୟାର୍ଥୀ ଅର୍ଦ୍ଧ ବାର୍ଷିକ ମାନ ନିର୍ଦ୍ଧାରଣ କରାଯାଇଥାଏ। ଠିକ୍ ସେହିପରି
              ୩ ୟ ଓ ୪ ର୍ଥ ଗଠନାମ୍ୟ ମୂଲ୍ୟାୟନ ସହ ୨ ୟ ସମାପ୍ତି ସୂଚକ ମୂଲ୍ୟାୟନକୁ ଏକ କରି
              ବାର୍ଷିକ ମାନ ନିର୍ଦ୍ଧାରଣ ବିଦ୍ୟାର୍ଥୀ କରାଯାଏ। ଏହି ମୂଲ୍ୟାୟନର ବିଦ୍ୟାର୍ଥୀ
              ରଖ୍‌ଥିବା ପ୍ରତିଶତ ନୟରକୁ ନେଇ ଗ୍ରେଡ଼୍ ପ୍ରଦାନ କରାଯାଏ।
            </p>

            {/* Grade Table */}
            <div className="rounded-xl overflow-hidden border border-gray-200 mb-5">

              {/* Table Header */}
              <div className="grid grid-cols-2 bg-[#8B0000]">
                <div className="px-5 py-3 text-white font-bold text-sm">ପ୍ରତିଶତ ନୟର</div>
                <div className="px-5 py-3 text-white font-bold text-sm">ଗ୍ରେଡ଼୍</div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-2 bg-[#fdf8f2]">
                <div className="px-5 py-3 text-gray-700 text-sm">୯୦% ଓ ତଦୁର୍ଦ୍ଧ</div>
                <div className="px-5 py-3 font-bold text-[#8B0000] text-sm">A⁺ Grade</div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 bg-white border-t border-gray-100">
                <div className="px-5 py-3 text-gray-700 text-sm">
                  ୮୦% ଓ ତଦୁର୍ଦ୍ଧ ଏବଂ ୯୦% ରୁ କମ୍
                </div>
                <div className="px-5 py-3 font-bold text-[#8B0000] text-sm">A Grade</div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-2 bg-[#fdf8f2] border-t border-gray-100">
                <div className="px-5 py-3 text-gray-700 text-sm">
                  ୬୦% ଓ ତଦୁର୍ଦ୍ଧ ଏବଂ ୮୦% ରୁ କମ୍
                </div>
                <div className="px-5 py-3 font-bold text-[#8B0000] text-sm">B⁺ Grade</div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-2 bg-white border-t border-gray-100">
                <div className="px-5 py-3 text-gray-700 text-sm">
                  ୫୦% ଓ ତଦୁର୍ଦ୍ଧ ଏବଂ ୬୦% ରୁ କମ୍
                </div>
                <div className="px-5 py-3 font-bold text-[#8B0000] text-sm">B Grade</div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-2 bg-[#fdf8f2] border-t border-gray-100">
                <div className="px-5 py-3 text-gray-700 text-sm">
                  ୪୦% ଓ ତଦୁର୍ଦ୍ଧ ଏବଂ ୫୦% ରୁ କମ୍
                </div>
                <div className="px-5 py-3 font-bold text-[#8B0000] text-sm">C Grade</div>
              </div>

              {/* Row 6 */}
              <div className="grid grid-cols-2 bg-white border-t border-gray-100">
                <div className="px-5 py-3 text-gray-700 text-sm">
                  ୪୫% ଓ ତଦୁର୍ଦ୍ଧ ଏବଂ ୪୦% ରୁ କମ୍
                </div>
                <div className="px-5 py-3 font-bold text-[#8B0000] text-sm">D Grade</div>
              </div>

            </div>

            {/* Grade Note */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-4 mb-5">
              <p className="text-gray-600 text-xs leading-relaxed">
                <span className="font-bold text-gray-700">ବି.ଦ୍ର: </span>
                ୪୫% କମ୍ ନୟର ରଖ୍‌ଲେ ପରବର୍ତ୍ତୀ ଶ୍ରେଣୀକୁ ଉର୍ତ୍ତୀର୍ଣ୍ଣ ହେବା ପାଇଁ ଅନୁମତି
                ଦିଆଯାଇ ନଥାଏ। ଅଭିଭାବକମାନଙ୍କ ଲିଖିତ ଘୋଷଣାନାମା ଦ୍ୱାରା ସେହି ବିଦ୍ୟାର୍ଥୀକୁ
                ପରବର୍ତ୍ତୀ ଶ୍ରେଣୀକୁ ଉର୍ତ୍ତୀର୍ଣ୍ଣ କରାଯାଏ।
              </p>
            </div>

            {/* Footer Motivational Note */}
            <div className="bg-[#fff8f0] border border-[#f3d5b0] rounded-xl px-5 py-4 text-center">
              <p className="text-[#8B0000] font-semibold text-sm italic">
                ❝ କଥା ଓ କାମରେ ସାମଞ୍ଜସ୍ୟ ଆଣିବାକୁ ଚେଷ୍ଟା କର। ❞
              </p>
            </div>

          </div>
        </div>
                          {/* ════════════════════════════════
            
            SECTION 3 — ମୂଲ୍ୟାୟନ ସମୟ ସାରଣୀ
            ════════════════════════════════ */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Card Header */}
          <div className="bg-[#8B0000] px-6 py-4 flex items-center gap-3">
            <span className="text-[#facc15] text-xl">🗓️</span>
            <h2 className="text-white font-bold text-lg md:text-xl">
              ମୂଲ୍ୟାୟନ ସମୟ ସାରଣୀ
            </h2>
          </div>

          <div className="p-6 md:p-8">

            {/* Schedule Table */}
            <div className="rounded-xl overflow-hidden border border-gray-200 mb-6">

              {/* Table Header */}
              <div className="grid grid-cols-12 bg-[#8B0000]">
                <div className="col-span-1 px-3 py-3 text-white font-bold text-sm text-center">
                  କ୍ର.ନଂ
                </div>
                <div className="col-span-6 px-4 py-3 text-white font-bold text-sm">
                  ମୂଲ୍ୟାୟନର ନାମ
                </div>
                <div className="col-span-5 px-4 py-3 text-white font-bold text-sm">
                  ମୂଲ୍ୟାୟନର ସମୟ
                </div>
              </div>

              {/* Row 1 */}
              <div className="grid grid-cols-12 bg-[#fdf8f2]">
                <div className="col-span-1 px-3 py-3 text-gray-700 text-sm text-center font-semibold">
                  ୧
                </div>
                <div className="col-span-6 px-4 py-3 text-gray-700 text-sm">
                  ୧ ମ ଗଠନାମ୍ୟ ମୂଲ୍ୟାୟନ
                </div>
                <div className="col-span-5 px-4 py-3 text-gray-700 text-sm">
                  ଜୁଲାଇ ମାସର ୧ ମ ସପ୍ତାହ
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-12 bg-white border-t border-gray-100">
                <div className="col-span-1 px-3 py-3 text-gray-700 text-sm text-center font-semibold">
                  ୨
                </div>
                <div className="col-span-6 px-4 py-3 text-gray-700 text-sm">
                  ୨ ୟ ଗଠନାମ୍ୟ ମୂଲ୍ୟାୟନ
                </div>
                <div className="col-span-5 px-4 py-3 text-gray-700 text-sm">
                  ଅଗଷ୍ଟ ମାସର ଶେଷ ସପ୍ତାହ
                </div>
              </div>

              {/* Row 3 */}
              <div className="grid grid-cols-12 bg-[#fdf8f2] border-t border-gray-100">
                <div className="col-span-1 px-3 py-3 text-gray-700 text-sm text-center font-semibold">
                  ୩
                </div>
                <div className="col-span-6 px-4 py-3 text-gray-700 text-sm">
                  ୧ ମ ସମାପ୍ତି ସୂଚକ ମୂଲ୍ୟାୟନ
                </div>
                <div className="col-span-5 px-4 py-3 text-gray-700 text-sm">
                  ଅକ୍ଟୋବର ୨ ୟ କିୟା ୩ ୟ ସପ୍ତାହ
                </div>
              </div>

              {/* Row 4 */}
              <div className="grid grid-cols-12 bg-white border-t border-gray-100">
                <div className="col-span-1 px-3 py-3 text-gray-700 text-sm text-center font-semibold">
                  ୪
                </div>
                <div className="col-span-6 px-4 py-3 text-gray-700 text-sm">
                  ୩ ୟ ଗଠନାମ୍ୟ ମୂଲ୍ୟାୟନ
                </div>
                <div className="col-span-5 px-4 py-3 text-gray-700 text-sm">
                  ଡିସେମ୍ବର ମାସର ୧ ମ ସପ୍ତାହ
                </div>
              </div>

              {/* Row 5 */}
              <div className="grid grid-cols-12 bg-[#fdf8f2] border-t border-gray-100">
                <div className="col-span-1 px-3 py-3 text-gray-700 text-sm text-center font-semibold">
                  ୫
                </div>
                <div className="col-span-6 px-4 py-3 text-gray-700 text-sm">
                  ୪ ର୍ଥ ଗଠନାମ୍ୟ ମୂଲ୍ୟାୟନ
                </div>
                <div className="col-span-5 px-4 py-3 text-gray-700 text-sm">
                  ଜାନୁଆରୀ ମାସର ଶେଷ ସପ୍ତାହ
                </div>
              </div>

              {/* Row 6 */}
              <div className="grid grid-cols-12 bg-white border-t border-gray-100">
                <div className="col-span-1 px-3 py-3 text-gray-700 text-sm text-center font-semibold">
                  ୬
                </div>
                <div className="col-span-6 px-4 py-3 text-gray-700 text-sm">
                  ୨ ୟ ସମାପ୍ତି ସୂଚକ ମୂଲ୍ୟାୟନ
                </div>
                <div className="col-span-5 px-4 py-3 text-gray-700 text-sm">
                  ମାର୍ଚ୍ଚ ମାସର ୧ ମ କିୟା ୨ ୟ ସପ୍ତାହ
                </div>
              </div>

            </div>

            {/* Notes */}
            <div className="space-y-3 mb-6">

              {/* Note 1 */}
              <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4">
                <span className="text-blue-400 text-lg shrink-0 mt-0.5"></span>
                <p className="text-gray-600 text-xs leading-relaxed">
                  <span className="font-bold text-gray-700">ବି.ଦ୍ର — ୧: </span>
                  ନୂତନ ଶିକ୍ଷାନୀତି ଅନୁସାରେ ମାନ ନିର୍ଦ୍ଧାରଣ କରାଯିବା ସଙ୍ଗେ ସଙ୍ଗେ ପ୍ରତ୍ୟେକ
                  ବିଷୟର ନିର୍ଦ୍ଧିଷ୍ଟ ପ୍ରସଙ୍ଗ ସରିଲେ ସେହି ପ୍ରସଙ୍ଗରୁ ବିଷୟ ଗୁରୁମା / ଗୁରୁଜୀ
                  ଶ୍ରେଣୀ କକ୍ଷରେ ମୂଲ୍ୟାୟନ ବିଭିନ୍ନ ସମୟରେ କରିଥାନ୍ତି।
                </p>
              </div>

              {/* Note 2 */}
              <div className="flex gap-3 bg-blue-50 border border-blue-100 rounded-xl px-5 py-4">
                <span className="text-blue-400 text-lg shrink-0 mt-0.5"></span>
                <p className="text-gray-600 text-xs leading-relaxed">
                  <span className="font-bold text-gray-700">ବି.ଦ୍ର — ୨: </span>
                  ଉପରୋକ୍ତ ସାରଣୀରେ ଥିବା ସମୟ ପ୍ରଧାନ ଗୁରୁଜୀ ନିଷ୍ଠ ଶ୍ରମ ଅନୁସାରେ
                  ପରିବର୍ଦ୍ଧନୀୟ ଅଟେ।
                </p>
              </div>

            </div>

            {/* Poem Box */}
            <div className="bg-[#fdf8f2] border border-[#e8d5b0] rounded-xl px-6 py-5 text-center">
              <div className="space-y-1 mb-3">
                <p className="text-gray-700 text-sm leading-relaxed">
                  ତରିବାକୁ ଏହି ସଂସାର ଜଳଧୂ;
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଧର୍ମ ଏକ ଯୋଟ ଗଢ଼ିଛନ୍ତି ବିଧୂ।
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଧର୍ମ ଏକଲା ସୀନା ମହତ ପଣିଆ
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଆଖ ବଡ଼ ପଣ ଅଦ୍ଭୁତ ଦିନ ଆ।
                </p>
              </div>
              <p className="text-[#8B0000] font-bold text-sm">— କବୀବର</p>
            </div>

            {/* Footer Motivational Note */}
            <div className="mt-4 bg-[#fff8f0] border border-[#f3d5b0] rounded-xl px-5 py-4 text-center">
              <p className="text-[#8B0000] font-semibold text-sm italic">
                ❝ ଚିନ୍ତା ଶକ୍ତି ମଣିଷକୁ ଜାଗ୍ରତ ଓ ଗତିଶୀଳ କରାଏ। ❞
              </p>
            </div>

          </div>
        </div>
         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          
        </div>


         <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">

          {/* Card Header */}
          <div className="bg-[#8B0000] px-6 py-4 flex items-center gap-3">
            <span className="text-[#facc15] text-xl">🏫</span>
            <h2 className="text-white font-bold text-lg md:text-xl">
              ବିଦ୍ୟାଳୟ ସଂକ୍ରାନ୍ତ ନିୟମ
            </h2>
          </div>

          <div className="p-6 md:p-8">
            <ol className="space-y-5">

              {/* Rule 1 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୧
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ପ୍ରତ୍ୟେକ ଶ୍ରେଣୀରେ ନିୟମିତ ଭାବରେ ପ୍ରାର୍ଥନା ସଭା ଅନୁଷ୍ଠିତ ହୋଇଥାଏ।
                  ଶ୍ରେଣୀ ଶିକ୍ଷକ / ଶିକ୍ଷୟିତ୍ରୀ ଉପସ୍ଥିତ ନ ଥିଲେ ଅନ୍ୟ ଶ୍ରେଣୀ ଶିକ୍ଷକ ବା
                  ଶିକ୍ଷୟିତ୍ରୀ ପ୍ରାର୍ଥନା ପରିଚାଳନା କରିବେ।
                </p>
              </li>

              {/* Rule 2 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୨
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଶ୍ରେଣୀ ଶିକ୍ଷକ ଛାତ୍ରଛାତ୍ରୀ ମାନଙ୍କ ହାଜିରା ଖାତାରେ ସ୍ୱାକ୍ଷର କରିବା
                  ଆବଶ୍ୟକ। ଯଦି କୌଣସି ଛାତ୍ର / ଛାତ୍ରୀ ପ୍ରଥମ ଘଣ୍ଟାରେ ଉପସ୍ଥିତ ନ ଥାଇ
                  ପରେ ଆସନ୍ତି ତେବେ ଶ୍ରେଣୀ ଶିକ୍ଷକ / ଶିକ୍ଷୟିତ୍ରୀ ତାଙ୍କ ହାଜିରା ଖାତାରେ
                  ବିଳମ୍ବ (Late) ଉଲ୍ଲେଖ କରିବେ।
                </p>
              </li>

              {/* Rule 3 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୩
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ବିଦ୍ୟାଳୟ ସମୟ ଚଳାକାଳୀନ ଛାତ୍ରଛାତ୍ରୀ ମାନଙ୍କୁ ବିଦ୍ୟାଳୟ ପ୍ରାଙ୍ଗଣ
                  ବାହାରକୁ ଯିବାକୁ ଅନୁମତି ଦିଆଯାଏ ନାହିଁ। ଅଭିଭାବକ ଛୁଟି ସମୟ ବ୍ୟତୀତ
                  ଅନ୍ୟ ସମୟରେ ଆସି ପିଲାକୁ ନେଇ ଯିବାକୁ ଅନୁମତି ଦିଆଯାଏ ନାହିଁ।
                </p>
              </li>

              {/* Rule 4 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୪
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଛାତ୍ରଛାତ୍ରୀ ମାନେ ବିଦ୍ୟାଳୟ ସମ୍ପତ୍ତି ଯଥା — ଡେସ୍କ, ବେଞ୍ଚ, ଦେଓ୍ୟାଲ,
                  ଦ୍ୱାର, ଖିଡ଼କୀ ଇତ୍ୟାଦି ନଷ୍ଟ କଲେ ସେହି କ୍ଷତି ଅଭିଭାବକଙ୍କ ଦ୍ୱାରା
                  ପୂରଣ କରାଇ ଦିଆଯିବ।
                </p>
              </li>

              {/* Rule 5 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୫
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଛାତ୍ରଛାତ୍ରୀ ମାନେ ବିଦ୍ୟାଳୟ ପ୍ରାଙ୍ଗଣ ଭିତରେ ପରିଷ୍କାର ପରିଛନ୍ନ ରଖିବେ।
                  ବିଦ୍ୟାଳୟ ପ୍ରାଙ୍ଗଣ ଭିତରେ ଥୁ ଥୁ, ଅଶ୍ଳୀଳ ଭାଷା ବ୍ୟବହାର, ଝଗଡ଼ା ଓ
                  ମାରାମାରି ସମ୍ପୂର୍ଣ୍ଣ ଭାବରେ ନିଷିଦ୍ଧ।
                </p>
              </li>

              {/* Rule 6 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୬
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଛାତ୍ରଛାତ୍ରୀ ମାନେ ବିଦ୍ୟାଳୟ ଆଦର୍ଶ ଓ ମର୍ଯ୍ୟାଦା ରକ୍ଷା କରି ଚଳିବେ।
                  ଗୁରୁଜନ, ଶିକ୍ଷକ / ଶିକ୍ଷୟିତ୍ରୀ ଓ ଅଗ୍ରଜ ଙ୍କ ପ୍ରତି ସଦା ଶ୍ରଦ୍ଧା ଓ
                  ସମ୍ମାନ ଦେଖାଇ ଚଳିବେ।
                </p>
              </li>

              {/* Rule 7 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୭
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ବିଦ୍ୟାଳୟ ଭିତରେ ମୋବାଇଲ ଫୋନ, ଖେଳନା ଓ ଦାମୀ ଦ୍ରବ୍ୟ ଆଣିବା ସଂପୂର୍ଣ୍ଣ
                  ନିଷିଦ୍ଧ। ଯଦି କୌଣସି ଛାତ୍ର / ଛାତ୍ରୀ ଏହି ନିୟମ ଉଲ୍ଲଂଘନ କଲେ ବିଦ୍ୟାଳୟ
                  ଦାୟୀ ଥିବ ନାହିଁ।
                </p>
              </li>

              {/* Rule 8 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୮
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ନୂତନ ଶିକ୍ଷାବର୍ଷ ଆରମ୍ଭ ହେବାର ୧୫ ଦିନ ମଧ୍ୟରେ ଅଭିଭାବକ ପ୍ରଧାନ ଶିକ୍ଷକଙ୍କ
                  ସହ ସାକ୍ଷାତ କରି ଶିଶୁର ପ୍ରଗତି ସଂପର୍କରେ ଅବଗତ ହେବା ଜରୁରୀ।
                </p>
              </li>

              {/* Rule 9 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୯
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ବିଦ୍ୟାଳୟ ତରଫରୁ ଆୟୋଜିତ ସାଂସ୍କୃତିକ କାର୍ଯ୍ୟକ୍ରମ, ଖେଳ ଓ ଅନ୍ୟ
                  ପ୍ରତିଯୋଗିତାରେ ଛାତ୍ରଛାତ୍ରୀ ମାନଙ୍କ ସ୍ୱଇଚ୍ଛାକୃତ ଅଂଶଗ୍ରହଣ ପ୍ରୋତ୍ସାହନ
                  ଦିଆଯାଏ।
                </p>
              </li>

              {/* Rule 10 */}
              <li className="flex gap-4">
                <span className="shrink-0 w-8 h-8 rounded-full bg-[#8B0000] text-white text-xs font-bold flex items-center justify-center mt-0.5">
                  ୧୦
                </span>
                <p className="text-gray-700 text-sm leading-relaxed">
                  ଶ୍ରେଣୀ ଗୃହ ଭିତରେ ଶୃଙ୍ଖଳା ବଜାୟ ରଖିବା ପ୍ରତ୍ୟେକ ଛାତ୍ର / ଛାତ୍ରୀର
                  କର୍ତ୍ତବ୍ୟ। ଶ୍ରେଣୀ ଗୃହରେ ଅନୁମତି ବିନା କଥା ବାର୍ତ୍ତା, ଚିଲ୍ଲାଚିଲ୍ଲି
                  ଓ ଖେଳ ଧୂଳା ସଂପୂର୍ଣ୍ଣ ଭାବରେ ବାରଣ।
                </p>
              </li>

            </ol>

            {/* Final Motivational Quote */}
            <div className="mt-8 bg-[#fff8f0] border border-[#f3d5b0] rounded-xl px-5 py-4 text-center">
              <p className="text-[#8B0000] font-semibold text-sm italic">
                ❝ କଥା ଓ କାମରେ ସାମଞ୍ଜସ୍ୟ ଆଣିବାକୁ ଚେଷ୍ଟା କର। ❞
              </p>
            </div>

          </div>
        </div>

        {/* ── Back to Home Button ── */}
        <div className="text-center pb-6">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-[#8B0000] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#6b0000] transition-colors duration-200"
          >
            ← ମୁଖ୍ୟ ପୃଷ୍ଠାକୁ ଫେରନ୍ତୁ
          </Link>
        </div>
        
        
      </div>
    </div>
  );
}